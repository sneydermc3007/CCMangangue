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
  private static vectorStore: MemoryVectorStore | null = null;
  private static initializationPromise: Promise<void>;
  private ragChain: any;
  private qaData: QAItem[] = [];

  constructor() {
    if (!ChatService.initializationPromise) {
      ChatService.initializationPromise = this.initializeVectorStore();
    }
  }

  private async initializeVectorStore() {
    try {
      // 1. Cargar documentos desde el JSON local
      const response = await fetch('/qa.json');
      const data = await response.json();
      this.qaData = data['Q&A'] || [];

      // Modificar cómo creamos los documentos para mejorar el contexto
      const docs = this.qaData.map((item: QAItem) => new Document({
        pageContent: `
          Pregunta: ${item.pregunta}
          Respuesta: ${item.respuesta}
          ---
        `,
        metadata: { 
          type: 'qa',
          question: item.pregunta,
          answer: item.respuesta
        }
      }));

      // 2. Ajustar los parámetros del text splitter para mantener Q&A juntos
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000, // Aumentamos el tamaño del chunk
        chunkOverlap: 200, // Aumentamos el overlap para mejor contexto
        separators: ["\n---\n", "\n\n", "\n", " ", ""] // Definimos separadores específicos
      });
      const splits = await textSplitter.splitDocuments(docs);

      // 3. Crear el vector store con HuggingFace embeddings
      const embeddings = new HuggingFaceInferenceEmbeddings({
        apiKey: environment.HUGGINGFACE_API_KEY,
        model: "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
      });

      ChatService.vectorStore = await MemoryVectorStore.fromDocuments(splits, embeddings);

      // 4. Modificar el prompt para mejorar la recuperación de información
      const prompt = ChatPromptTemplate.fromTemplate(`
        Eres Juancho, un asistente virtual conciso de la Cámara de Comercio de Magangué.

        Instrucciones:
        1. Responde de forma directa y breve
        2. Usa solo la información del contexto
        3. No agregues saludos ni despedidas
        4. Si no tienes la información, responde "No tengo información sobre eso"

        Contexto:
        {context}

        Pregunta:
        {question}

        Respuesta breve:
      `);

      // 5. Configurar el retriever sin el filtro de score
      const retriever = ChatService.vectorStore.asRetriever({
        k: 3,
        searchType: "similarity"
      });

      const llm = new ChatOpenAI({
        modelName: "meta-llama/llama-3.2-3b-instruct:free",
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
      // Validar si es una operación matemática
      if (/[\d+\-*\/=]+/.test(question)) {
        return {
          text: 'No puedo realizar operaciones matemáticas. Por favor, pregunta sobre los servicios de la Cámara de Comercio.',
          source: 'validation'
        };
      }

      await ChatService.initializationPromise;
      if (!ChatService.vectorStore) {
        throw new Error('Vector store no inicializado');
      }

      // Buscar coincidencia exacta en el Q&A
      const exactMatch = this.qaData.find(
        item => item.pregunta.toLowerCase() === question.toLowerCase()
      );

      if (exactMatch) {
        return {
          text: exactMatch.respuesta,
          source: 'exact_match'
        };
      }

      // Usar el retriever con validación de relevancia
      const retriever = ChatService.vectorStore.asRetriever({ 
        k: 3,
        searchType: "similarity"
      });
      
      const relevantDocs = await retriever.invoke(question);

      // Solo validar si hay documentos
      if (!relevantDocs || relevantDocs.length === 0) {
        return {
          text: 'Lo siento, no tengo información específica sobre esa consulta. ¿Podrías reformular tu pregunta o preguntar sobre otro tema?',
          source: 'no_context'
        };
      }

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
