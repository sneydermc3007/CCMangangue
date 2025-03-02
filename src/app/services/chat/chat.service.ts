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
import { HfInference } from '@huggingface/inference';
import { Embeddings } from "@langchain/core/embeddings";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { BaseMessage, AIMessage, HumanMessage } from "@langchain/core/messages";
import { LocalEmbeddings } from './local-embeddings';

interface QAItem {
  id?: string;
  pregunta: string;
  respuesta: string;
  categoria?: string;
  keywords?: string[];
  relevancia?: number;
  metadata?: any;
  variantes?: string[];
}

// Clase personalizada para usar nuestro servidor proxy
class CustomHuggingFaceEmbeddings extends Embeddings {
  private apiKey: string;
  private model: string;
  private proxyUrl: string;

  constructor(apiKey: string, model: string) {
    super({});
    this.apiKey = apiKey;
    this.model = model;
    this.proxyUrl = 'http://localhost:3000/api/feature-extraction';
    console.log('Inicializando embeddings con modelo:', this.model);
  }

  async embedDocuments(documents: string[]): Promise<number[][]> {
    try {
      console.log(`Generando embeddings para ${documents.length} documentos con modelo ${this.model}`);
      const embeddings = await Promise.all(
        documents.map(doc => this.embedQuery(doc))
      );
      return embeddings;
    } catch (error) {
      console.error("Error en embedDocuments:", error);
      // Fallback: devolver vectores aleatorios como último recurso
      console.warn("Usando fallback para embeddings: vectores aleatorios");
      return documents.map(() => this.generateRandomEmbedding(384)); // Dimensión típica para embeddings
    }
  }

  async embedQuery(text: string): Promise<number[]> {
    try {
      console.log(`Generando embedding para consulta: "${text.substring(0, 50)}..."`);

      // Usar nuestro servidor proxy en lugar de la API directamente
      const response = await fetch(this.proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey
        },
        body: JSON.stringify({
          model: this.model,
          inputs: text
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del servidor proxy:', errorData);
        throw new Error(`Error del servidor proxy: ${response.status}`);
      }

      const data = await response.json();
      console.log('Respuesta de embedding recibida correctamente');

      // Verificar y convertir la respuesta al tipo esperado
      if (Array.isArray(data)) {
        return data as number[];
      } else if (typeof data === 'number') {
        return [data];
      } else if (typeof data === 'object' && data !== null) {
        console.warn("Respuesta en formato inesperado, intentando convertir:", data);
        return Object.values(data).flat() as number[];
      } else {
        console.error("Respuesta inesperada:", data);
        throw new Error("La respuesta no se puede convertir a un array de números");
      }
    } catch (error) {
      console.error("Error en embedQuery:", error);
      // Fallback: devolver un vector aleatorio como último recurso
      console.warn("Usando fallback para embedding: vector aleatorio");
      return this.generateRandomEmbedding(384); // Dimensión típica para embeddings
    }
  }

  // Método para generar un vector aleatorio como fallback
  private generateRandomEmbedding(dimensions: number): number[] {
    const embedding = [];
    for (let i = 0; i < dimensions; i++) {
      embedding.push(Math.random() * 2 - 1); // Valores entre -1 y 1
    }
    // Normalizar el vector
    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    return embedding.map(val => val / magnitude);
  }
}

// Clase personalizada para simular respuestas cuando OpenRouter no está disponible
class CustomOpenRouterChatModel extends BaseChatModel {
  private apiKey: string;
  private model: string;
  private proxyUrl: string;
  private useLocalFallback: boolean = true; // Usar fallback local por defecto

  constructor(apiKey: string, model: string) {
    super({});
    this.apiKey = apiKey;
    this.model = model;
    this.proxyUrl = 'http://localhost:3000/api/openrouter';
    console.log('CustomOpenRouterChatModel inicializado con API Key:', this.apiKey);

    // Verificar que la API key tenga el formato correcto
    if (!this.apiKey || !this.apiKey.startsWith('sk-or-')) {
      console.warn('⚠️ Advertencia: La API key de OpenRouter no tiene el formato esperado (sk-or-...)');
      console.warn('API Key actual:', this.apiKey);
    }
  }

  _llmType(): string {
    return "custom_openrouter";
  }

  // Método para generar respuestas localmente cuando OpenRouter no está disponible
  private generateLocalResponse(question: string): string {
    // Respuestas predefinidas para preguntas comunes
    const responses: Record<string, string> = {
      "hola": "¡Hola! Soy Juancho, el asistente virtual de la Cámara de Comercio de Magangué. ¿En qué puedo ayudarte hoy?",
      "quien eres": "Soy Juancho, el asistente virtual de la Cámara de Comercio de Magangué. Estoy aquí para responder tus preguntas sobre trámites, servicios y eventos de la Cámara.",
      "que servicios ofrecen": "La Cámara de Comercio de Magangué ofrece diversos servicios como registro mercantil, asesorías empresariales, capacitaciones, y apoyo al emprendimiento. ¿Sobre cuál te gustaría más información?",
      "como renovar matricula": "Para renovar tu matrícula mercantil, puedes hacerlo en línea a través de nuestra página web o presencialmente en nuestras oficinas. Necesitarás tu número de matrícula y estar al día con tus obligaciones anteriores.",
      "horario de atencion": "Nuestro horario de atención es de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM.",
      "ubicacion": "Estamos ubicados en la Calle 8 # 23-87, Magangué, Bolívar.",
      "contacto": "Puedes contactarnos al teléfono (605) 687-7160 o al correo electrónico camaramagangue@camaramagangue.org.co"
    };

    // Buscar coincidencias parciales en las preguntas predefinidas
    const normalizedQuestion = question.toLowerCase().trim();
    for (const key in responses) {
      if (normalizedQuestion.includes(key) || key.includes(normalizedQuestion)) {
        return responses[key];
      }
    }

    // Respuesta genérica si no hay coincidencias
    return "Como asistente virtual de la Cámara de Comercio de Magangué, puedo ayudarte con información sobre nuestros servicios, trámites y eventos. Por favor, pregúntame sobre algo específico para poder asistirte mejor.";
  }

  async _generate(messages: BaseMessage[]): Promise<any> {
    try {
      // Obtener el último mensaje del usuario
      const lastMessage = messages[messages.length - 1];
      const userQuestion = lastMessage.content as string;

      // Si estamos usando el fallback local, generar respuesta localmente
      if (this.useLocalFallback) {
        console.log('Usando fallback local para generar respuesta');
        const content = this.generateLocalResponse(userQuestion);

        return {
          generations: [{
            text: content,
            message: new AIMessage(content)
          }]
        };
      }

      // Si no estamos usando fallback, intentar con OpenRouter
      // Convertir mensajes de LangChain al formato esperado por OpenRouter
      const formattedMessages = messages.map(message => {
        if (message._getType() === 'human') {
          return { role: 'user', content: message.content };
        } else if (message._getType() === 'ai') {
          return { role: 'assistant', content: message.content };
        } else {
          return { role: 'system', content: message.content };
        }
      });

      console.log('Enviando mensajes a OpenRouter a través del proxy:', formattedMessages);
      console.log('Usando API Key para OpenRouter:', this.apiKey);

      // Verificar que tenemos una API key válida
      if (!this.apiKey) {
        throw new Error('No se ha proporcionado una API key para OpenRouter');
      }

      // Usar nuestro servidor proxy para la solicitud a OpenRouter
      const response = await fetch(this.proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey
        },
        body: JSON.stringify({
          model: this.model,
          messages: formattedMessages
        })
      });

      console.log('Respuesta del proxy recibida, status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del servidor proxy para OpenRouter:', errorData);

        // Si hay error, activar el fallback local para futuros mensajes
        this.useLocalFallback = true;
        console.log('Activando fallback local para futuros mensajes');

        // Generar respuesta local para este mensaje
        const content = this.generateLocalResponse(userQuestion);

        return {
          generations: [{
            text: content,
            message: new AIMessage(content)
          }]
        };
      }

      const data = await response.json();
      console.log('Respuesta de OpenRouter:', data);

      // Extraer el contenido de la respuesta
      const content = data.choices?.[0]?.message?.content || '';

      return {
        generations: [{
          text: content,
          message: new AIMessage(content)
        }]
      };
    } catch (error) {
      console.error("Error en _generate:", error);

      // En caso de error, activar el fallback local
      this.useLocalFallback = true;
      console.log('Error detectado, activando fallback local');

      // Obtener el último mensaje del usuario para generar respuesta local
      const lastMessage = messages[messages.length - 1];
      const userQuestion = lastMessage.content as string;
      const content = this.generateLocalResponse(userQuestion);

      return {
        generations: [{
          text: content,
          message: new AIMessage(content)
        }]
      };
    }
  }
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
      // 1. Cargar datos de Q&A
      const response = await fetch('/qa_enhanced_fixed.json');
      const data = await response.json();
      this.qaData = data['Q&A'];
      console.log(`Cargados ${this.qaData.length} pares de Q&A`);

      // Preparar documentos para el vector store
      const docs = await Promise.all(this.qaData.map(item => {
        return new Document({
          pageContent: `Pregunta: ${item.pregunta}\nRespuesta: ${item.respuesta}`,
          metadata: {
            id: item.id,
            categoria: item.categoria,
            relevancia: item.relevancia
          }
        });
      }));

      // 2. Dividir el texto en chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50
      });
      const splits = await textSplitter.splitDocuments(docs);

      // 3. Crear el vector store con nuestra implementación de embeddings locales
      const embeddings = new LocalEmbeddings();

      this.vectorStore = await MemoryVectorStore.fromDocuments(splits, embeddings);

      // 4. Configurar el RAG chain con nuestro modelo personalizado de OpenRouter
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

      // Usar nuestro modelo personalizado en lugar de ChatOpenAI directamente
      const llm = new CustomOpenRouterChatModel(
        environment.OPENROUTER_API_KEY, // Usar la clave API del entorno
        "meta-llama/llama-3.1-8b-instruct:free"
      );

      console.log('Inicializando LLM con API key de OpenRouter:', environment.OPENROUTER_API_KEY);


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

      console.log('-----------------------------------------------');
      console.log('Procesando pregunta:', question);

      // Normalizar la pregunta para comparación
      const normalizedQuestion = question.toLowerCase().trim();
      console.log('Pregunta normalizada:', normalizedQuestion);

      // FASE 1: BÚSQUEDA EXACTA Y PARCIAL EN PREGUNTAS
      // ==============================================

      // 1.1 Buscar coincidencia exacta en el QA
      console.log('1.1 Buscando coincidencia exacta en preguntas...');
      const exactMatch = this.qaData.find(
        item => item.pregunta.toLowerCase().trim() === normalizedQuestion
      );

      if (exactMatch) {
        console.log('✅ Encontrada coincidencia exacta en pregunta:', exactMatch.pregunta);
        return {
          text: exactMatch.respuesta,
          source: 'exact_match',
          categoria: exactMatch.categoria || 'General'
        };
      }

      // 1.2 Buscar coincidencia en variantes
      console.log('1.2 Buscando coincidencia exacta en variantes...');
      const variantMatch = this.qaData.find(
        item => item.variantes && item.variantes.some(
          variant => variant.toLowerCase().trim() === normalizedQuestion
        )
      );

      if (variantMatch && variantMatch.variantes) {
        const matchedVariant = variantMatch.variantes.find(v => v.toLowerCase().trim() === normalizedQuestion);
        console.log('✅ Encontrada coincidencia exacta en variante:', matchedVariant);
        return {
          text: variantMatch.respuesta,
          source: 'variant_match',
          categoria: variantMatch.categoria || 'General'
        };
      }

      // 1.3 Buscar coincidencia parcial en preguntas
      console.log('1.3 Buscando coincidencia parcial en preguntas...');
      const partialMatches = this.qaData.filter(
        item => item.pregunta.toLowerCase().includes(normalizedQuestion) ||
               normalizedQuestion.includes(item.pregunta.toLowerCase())
      );

      if (partialMatches.length > 0) {
        // Ordenar por relevancia y longitud de pregunta (preferir preguntas más cortas)
        const bestPartialMatch = partialMatches.sort((a, b) => {
          // Primero por relevancia (descendente)
          const relevanceDiff = (b.relevancia || 0) - (a.relevancia || 0);
          if (relevanceDiff !== 0) return relevanceDiff;

          // Luego por longitud de pregunta (ascendente)
          return a.pregunta.length - b.pregunta.length;
        })[0];

        console.log('✅ Encontrada coincidencia parcial en pregunta:', bestPartialMatch.pregunta);
        return {
          text: bestPartialMatch.respuesta,
          source: 'partial_match',
          categoria: bestPartialMatch.categoria || 'General'
        };
      }

      // 1.4 Buscar coincidencia en palabras clave
      console.log('1.4 Buscando coincidencia en palabras clave...');
      const keywordMatches = this.qaData.filter(
        item => item.keywords && item.keywords.some(
          keyword => keyword.toLowerCase().includes(normalizedQuestion) ||
                    normalizedQuestion.includes(keyword.toLowerCase())
        )
      );

      if (keywordMatches.length > 0) {
        // Ordenar por relevancia y especificidad de la coincidencia
        const bestKeywordMatch = keywordMatches.sort((a, b) => {
          // Primero por relevancia (descendente)
          const relevanceDiff = (b.relevancia || 0) - (a.relevancia || 0);
          if (relevanceDiff !== 0) return relevanceDiff;

          // Luego por especificidad de la palabra clave (la más específica = la más larga)
          const aKeywords = a.keywords || [];
          const bKeywords = b.keywords || [];

          const aKeyword = aKeywords.find(k =>
            k.toLowerCase().includes(normalizedQuestion) ||
            normalizedQuestion.includes(k.toLowerCase())
          ) || '';

          const bKeyword = bKeywords.find(k =>
            k.toLowerCase().includes(normalizedQuestion) ||
            normalizedQuestion.includes(k.toLowerCase())
          ) || '';

          return bKeyword.length - aKeyword.length;
        })[0];

        const matchedKeyword = bestKeywordMatch.keywords ?
          bestKeywordMatch.keywords.find(k =>
            k.toLowerCase().includes(normalizedQuestion) ||
            normalizedQuestion.includes(k.toLowerCase())
          ) : '';

        console.log(`✅ Encontrada coincidencia en palabra clave: "${matchedKeyword}" para pregunta: "${bestKeywordMatch.pregunta}"`);
        return {
          text: bestKeywordMatch.respuesta,
          source: 'keyword_match',
          categoria: bestKeywordMatch.categoria || 'General'
        };
      }

      // FASE 2: BÚSQUEDA SEMÁNTICA CON EMBEDDINGS
      // ========================================
      console.log('2. Usando RAG chain para búsqueda semántica...');
      const retriever = this.vectorStore.asRetriever({
        k: 3, // Recuperar los 3 documentos más relevantes
        searchType: "similarity", // Búsqueda por similitud
      });

      // Obtener documentos relevantes
      const relevantDocs = await retriever.invoke(question);

      // Mostrar detalles de los documentos recuperados para análisis
      console.log(`Documentos recuperados: ${relevantDocs.length}`);
      relevantDocs.forEach((doc, index) => {
        console.log(`Documento ${index + 1}:`);
        console.log(`- Contenido: ${doc.pageContent.substring(0, 100)}...`);
        console.log(`- Categoría: ${doc.metadata['categoria'] || 'No especificada'}`);
        console.log(`- Relevancia: ${doc.metadata['relevancia'] || 'No especificada'}`);
      });

      // Si no se encontraron documentos relevantes, devolver un mensaje de fallback
      if (relevantDocs.length === 0) {
        console.log('❌ No se encontraron documentos relevantes. Usando respuesta de fallback.');
        return {
          text: 'Lo siento, no tengo información específica sobre esa consulta. ¿Puedes reformular tu pregunta o preguntar sobre otro tema relacionado con la Cámara de Comercio?',
          source: 'fallback'
        };
      }

      // Enviar la pregunta y los documentos relevantes al RAG chain
      const response = await this.ragChain.invoke({
        question,
        context: relevantDocs
      });

      console.log('Respuesta generada por RAG chain');
      return {
        text: response || 'Lo siento, no pude generar una respuesta.',
        source: 'rag_chain',
        documentos: relevantDocs.length
      };

    } catch (error: any) {
      console.error('Error al obtener respuesta:', error);

      // Manejar específicamente errores de autenticación
      if (error.message && (
          error.message.includes('401') ||
          error.message.includes('authentication') ||
          error.message.includes('auth') ||
          error.message.includes('credentials')
        )) {
        return {
          text: 'Error de autenticación con el servicio de IA. Por favor, verifica las credenciales de API.',
          source: 'error',
          errorType: 'authentication'
        };
      }

      return {
        text: 'Lo siento, ocurrió un error al procesar tu pregunta. Por favor, intenta de nuevo.',
        source: 'error'
      };
    }
  }
}
