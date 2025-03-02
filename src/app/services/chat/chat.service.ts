import { Injectable } from '@angular/core';
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { environment } from '../../environments/environment';

interface QAItem {
  pregunta: string;
  respuesta: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private vectorStore: MemoryVectorStore | null = null;
  private initializationPromise: Promise<void>;
  private ragChain: any;
  private qaData: QAItem[] = [];

  constructor() {
    this.initializationPromise = this.initializeVectorStore();
  }

  private async initializeVectorStore() {
    try {
      // 1. Cargar documentos desde el JSON local
      const response = await fetch('/qa.json');
      const data = await response.json();
      this.qaData = data['Q&A'] || [];

      const docs = this.qaData.map((item: QAItem) => new Document({
        pageContent: `Pregunta: ${item.pregunta}\nRespuesta: ${item.respuesta}`,
        metadata: { type: 'qa' }
      }));

      // 2. Dividir el texto en chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50
      });
      const splits = await textSplitter.splitDocuments(docs);

      // 3. Crear el vector store con HuggingFace embeddings
      const embeddings = new HuggingFaceInferenceEmbeddings({
        apiKey: environment.HUGGINGFACE_API_KEY,
        model: "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
      });

      this.vectorStore = await MemoryVectorStore.fromDocuments(splits, embeddings);

      // 4. Configurar el RAG chain con OpenRouter
      const retriever = this.vectorStore.asRetriever({
        k: 3, // Recuperar los 3 documentos más relevantes
      });

      const prompt = ChatPromptTemplate.fromTemplate(`
        Eres un asistente virtual amigable y profesional de la Cámara de Comercio de Magangué.
        Tu nombre es Juancho y tu objetivo es ayudar a los usuarios con sus consultas.

        Instrucciones:
        1. Responde siempre en español de manera clara y concisa
        2. Si la pregunta está en el contexto, usa esa información
        3. Si la pregunta no está en el contexto, indica amablemente que no tienes esa información
        4. Mantén un tono profesional pero cercano

        Contexto relevante:
        {context}

        Pregunta del usuario:
        {question}

        Respuesta en español:
      `);

      const llm = new ChatOpenAI({
        modelName: "meta-llama/llama-3.1-8b-instruct:free",
        openAIApiKey: environment.OPENROUTER_API_KEY,
        configuration: {
          baseURL: "https://openrouter.ai/api/v1"
        }
      });

      this.ragChain = await createStuffDocumentsChain({
        llm,
        prompt,
        outputParser: new StringOutputParser(),
      });

      console.log('Vector store y RAG chain inicializados correctamente');
    } catch (error) {
      console.error('Error al inicializar el vector store:', error);
      throw error;
    }
  }

  async getAnswer(question: string): Promise<any> {
    try {
      await this.initializationPromise;

      if (!this.vectorStore) {
        throw new Error('Vector store no inicializado');
      }

      // Buscar coincidencia exacta en el QA
      const exactMatch = this.qaData.find(
        item => item.pregunta.toLowerCase() === question.toLowerCase()
      );

      if (exactMatch) {
        return {
          text: exactMatch.respuesta,
          source: 'exact_match'
        };
      }

      // Si no hay coincidencia exacta, usar el RAG chain
      const retriever = this.vectorStore.asRetriever();
      const relevantDocs = await retriever.invoke(question);

      const response = await this.ragChain.invoke({
        question,
        context: relevantDocs
      });

      return {
        text: response || 'Lo siento, no pude generar una respuesta.',
        source: 'rag_chain'
      };

    } catch (error) {
      console.error('Error al obtener respuesta:', error);
      return {
        text: 'Lo siento, ocurrió un error al procesar tu pregunta. Por favor, intenta de nuevo.',
        source: 'error'
      };
    }
  }
}
