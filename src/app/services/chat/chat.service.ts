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
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: string;
  keywords: string[];
  relevancia: number;
  metadata: {
    tipo_servicio: string;
    requiere_documentos: boolean;
    canal: string[];
  };
  variantes: string[];
  links?: {
    [key: string]: string;
  };
}

interface ChatResponse {
  text: string;
  source: 'exact_match' | 'rag_chain' | 'error';
  links?: {
    [key: string]: string;
  };
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
      const response = await fetch('/qa_enhanced.json');
      const data = await response.json();
      this.qaData = data['Q&A'] || [];

      const docs = this.qaData.map((item: QAItem) => new Document({
        pageContent: `
          Pregunta: ${item.pregunta}
          Respuesta: ${item.respuesta}
          Categoría: ${item.categoria}
          Keywords: ${item.keywords.join(', ')}
          Variantes: ${item.variantes.join(', ')}
        `,
        metadata: {
          type: 'qa',
          id: item.id,
          relevancia: item.relevancia,
          links: item.links || {}
        }
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
        model: "sentence-transformers/all-MiniLM-L6-v2"
      });

      this.vectorStore = await MemoryVectorStore.fromDocuments(splits, embeddings);

      // 4. Configurar el RAG chain con OpenRouter
      const retriever = this.vectorStore.asRetriever({
        k: 3, // Recuperar los 3 documentos más relevantes
      });

      const prompt = ChatPromptTemplate.fromTemplate(`
        Eres Juancho, un asistente virtual de la Cámara de Comercio de Magangué.

        Instrucciones importantes:
        1. Responde usando SOLAMENTE la información del siguiente contexto (extraída de [#file:qa.json]).
        2. Usa búsqueda semántica de términos relacionados (por ejemplo, "mentorías" y "programas de mentoría").
        3. Si encuentras información relacionada, devuélvela textualmente o resumida SIN agregar información extra.
        4. Si hay links disponibles en el contexto, inclúyelos al final de tu respuesta con el formato:
           "Para más información, puedes visitar: [nombre_del_link](url_del_link)"
        5. Si NO encuentras absolutamente nada relacionado, responde EXACTAMENTE:
           "Lo siento, pero no tengo información sobre este tema relacionado con nuestro contexto."
        6. No inventes ni expandas información que no esté en el contexto.
        7. Mantén un tono profesional y directo.

        Contexto para tu respuesta:
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

  async getAnswer(question: string): Promise<ChatResponse> {
    try {
      await this.initializationPromise;

      if (!this.vectorStore) {
        throw new Error('Vector store no inicializado');
      }

      // Buscar coincidencia exacta en preguntas y variantes
      const exactMatch = this.qaData.find(
        item => 
          item.pregunta.toLowerCase() === question.toLowerCase() ||
          item.variantes.some(v => v.toLowerCase() === question.toLowerCase())
      );

      if (exactMatch) {
        return {
          text: exactMatch.respuesta,
          source: 'exact_match',
          links: exactMatch.links
        };
      }

      // Búsqueda semántica usando RAG
      const retriever = this.vectorStore.asRetriever();
      const relevantDocs = await retriever.invoke(question);
      
      const response = await this.ragChain.invoke({
        question,
        context: relevantDocs
      });

      // Obtener links del documento más relevante
      const mostRelevantDoc = relevantDocs[0];
      const links = mostRelevantDoc?.metadata?.['links'];

      let finalResponse = response;
      if (links) {
        finalResponse += '\n\nPara más información, puedes visitar:';
        Object.entries(links).forEach(([name, url]) => {
          finalResponse += `\n- ${name}: ${url}`;
        });
      }

      return {
        text: finalResponse || 'Lo siento, no pude generar una respuesta.',
        source: 'rag_chain',
        links: links
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
