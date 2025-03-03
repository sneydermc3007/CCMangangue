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
  links?: {[key: string]: string};
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
  private conversationHistory: {role: 'user' | 'assistant', content: string}[] = [];

  constructor() {
    this.initializationPromise = this.initializeVectorStore();
  }

  // Método para inicializar el historial de conversación con el mensaje de bienvenida
  initializeConversationHistory(welcomeMessage: string): void {
    // Limpiar el historial existente
    this.conversationHistory = [];
    
    // Añadir el mensaje de bienvenida como primer mensaje del asistente
    this.conversationHistory.push({
      role: 'assistant',
      content: welcomeMessage
    });
    
    console.log('Historial de conversación inicializado con mensaje de bienvenida');
  }

  private async initializeVectorStore() {
    try {
      // 1. Cargar datos de Q&A
      const response = await fetch('/qa_enhanced_fixed.json');
      const data = await response.json();
      this.qaData = data['Q&A'];
      console.log(`Cargados ${this.qaData.length} pares de Q&A`);

      // Añadir datos adicionales críticos que podrían faltar
      this.addCriticalQAData();
      console.log(`Total de Q&A después de añadir datos críticos: ${this.qaData.length}`);

      // Preparar documentos para el vector store
      const docs = await Promise.all(this.qaData.map(item => {
        return new Document({
          pageContent: `Pregunta: ${item.pregunta}\nRespuesta: ${item.respuesta}`,
          metadata: {
            id: item.id,
            categoria: item.categoria,
            relevancia: item.relevancia,
            links: item.links || {},
            pregunta_original: item.pregunta
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
        5. Presta mucha atención a lo que realmente está preguntando el usuario
        6. Si el usuario indica que no has respondido correctamente a su pregunta, revisa cuidadosamente lo que está preguntando
        7. Distingue claramente entre preguntas sobre "cómo ser parte/afiliarse" y "beneficios de ser parte"
        8. Si el usuario pregunta "cómo ser parte", explica el proceso de afiliación, no solo los beneficios
        9. Cuando el usuario hace una aclaración, prioriza entender lo que realmente quiere saber
        10. Si el usuario pregunta por un proceso, explica los pasos concretos, no solo información general
        11. Evita repetir la misma respuesta si el usuario indica que no es lo que buscaba

        Ejemplos de distinción entre preguntas similares:
        - Si preguntan "¿Cómo puedo ser parte de la Cámara de Comercio?": Explica el PROCESO de afiliación, requisitos y pasos.
        - Si preguntan "¿Cuáles son los beneficios de ser parte?": Enumera las VENTAJAS de ser miembro.

        Historial de la conversación:
        {conversation_history}

        Contexto relevante:
        {context}

        Pregunta actual del usuario:
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

      // Verificar si la pregunta es un saludo simple
      const normalizedQuestion = this.normalizeText(question);
      
      if (this.isGreeting(question)) {
        console.log('Detectado saludo, enviando respuesta de bienvenida');
        const greetingResponse = this.getGreetingResponse();
        
        // Añadir al historial solo si no es el primer mensaje
        if (this.conversationHistory.length > 0) {
          this.conversationHistory.push({role: 'user', content: question});
          this.conversationHistory.push({role: 'assistant', content: greetingResponse});
        }
        
        return {
          text: greetingResponse,
          source: 'greeting',
          categoria: 'General'
        };
      }

      // Añadir la pregunta actual al historial de conversación
      this.conversationHistory.push({role: 'user', content: question});
      
      // Limitar el historial a las últimas 10 interacciones para no sobrecargar el contexto
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = this.conversationHistory.slice(this.conversationHistory.length - 10);
      }

      console.log('-----------------------------------------------');
      console.log('Procesando pregunta:', question);
      console.log('Historial de conversación:', this.conversationHistory);

      // Normalizar la pregunta para comparación (mejorado)
      console.log('Pregunta normalizada:', normalizedQuestion);

      // Verificar si es una aclaración o corrección a una respuesta anterior
      const isClarification = this.checkIfClarification(normalizedQuestion);
      
      // Si es una aclaración, manejarla de forma especial
      if (isClarification && this.conversationHistory.length >= 3) {
        console.log('Detectada aclaración o corrección. Manejando de forma especial...');
        return this.handleClarification(question, normalizedQuestion);
      }

      // FASE 1: BÚSQUEDA EXACTA Y PARCIAL EN PREGUNTAS
      // ==============================================

      // 1.1 Buscar coincidencia exacta en el QA
      console.log('1.1 Buscando coincidencia exacta en preguntas...');
      const exactMatch = this.qaData.find(
        item => this.normalizeText(item.pregunta) === normalizedQuestion
      );

      if (exactMatch && !isClarification) {
        console.log('✅ Encontrada coincidencia exacta en pregunta:', exactMatch.pregunta);
        
        // Añadir la respuesta al historial de conversación
        this.conversationHistory.push({role: 'assistant', content: exactMatch.respuesta});
        
        return {
          text: exactMatch.respuesta,
          source: 'exact_match',
          categoria: exactMatch.categoria || 'General',
          links: exactMatch.links || {}
        };
      }

      // 1.2 Buscar coincidencia en variantes
      console.log('1.2 Buscando coincidencia exacta en variantes...');
      const variantMatch = this.qaData.find(
        item => item.variantes && item.variantes.some(
          variant => this.normalizeText(variant) === normalizedQuestion
        )
      );

      if (variantMatch && variantMatch.variantes && !isClarification) {
        const matchedVariant = variantMatch.variantes.find(v => this.normalizeText(v) === normalizedQuestion);
        console.log('✅ Encontrada coincidencia exacta en variante:', matchedVariant);
        
        // Añadir la respuesta al historial de conversación
        this.conversationHistory.push({role: 'assistant', content: variantMatch.respuesta});
        
        return {
          text: variantMatch.respuesta,
          source: 'variant_match',
          categoria: variantMatch.categoria || 'General',
          links: variantMatch.links || {}
        };
      }

      // 1.3 Buscar coincidencia parcial en preguntas y variantes
      console.log('1.3 Buscando coincidencia parcial en preguntas y variantes...');
      
      // Crear una lista de todas las posibles coincidencias parciales
      interface PartialMatch {
        item: QAItem;
        similarity: number;
        matchType: string;
        matchedText?: string;
      }
      
      const partialMatches: PartialMatch[] = [];
      
      // Buscar en preguntas principales
      this.qaData.forEach(item => {
        // Calcular puntuación de similitud para la pregunta principal
        const questionSimilarity = this.calculateSimilarity(normalizedQuestion, this.normalizeText(item.pregunta));
        
        // Umbral reducido para aumentar las coincidencias
        if (questionSimilarity > 0.4) {
          partialMatches.push({
            item,
            similarity: questionSimilarity,
            matchType: 'pregunta'
          });
        }
        
        // Buscar en variantes
        if (item.variantes) {
          item.variantes.forEach(variant => {
            const variantSimilarity = this.calculateSimilarity(normalizedQuestion, this.normalizeText(variant));
            
            // Umbral reducido para aumentar las coincidencias
            if (variantSimilarity > 0.4) {
              partialMatches.push({
                item,
                similarity: variantSimilarity,
                matchType: 'variante',
                matchedText: variant
              });
            }
          });
        }
        
        // Buscar en palabras clave (mejorado)
        if (item.keywords) {
          // Dividir la pregunta en palabras para buscar coincidencias de palabras clave
          const questionWords = normalizedQuestion.split(/\s+/);
          
          item.keywords.forEach(keyword => {
            const normalizedKeyword = this.normalizeText(keyword);
            
            // Verificar si la palabra clave está contenida en la pregunta
            if (normalizedQuestion.includes(normalizedKeyword)) {
              // Calcular un puntaje basado en la relevancia de la palabra clave
              const keywordSimilarity = normalizedKeyword.length / normalizedQuestion.length;
              
              // Dar mayor peso a palabras clave que son términos completos
              const isFullWord = questionWords.some(word => this.normalizeText(word) === normalizedKeyword);
              const similarityBoost = isFullWord ? 1.2 : 1.0;
              
              partialMatches.push({
                item,
                similarity: keywordSimilarity * similarityBoost * 0.8, // Ajuste para palabras clave
                matchType: 'keyword',
                matchedText: keyword
              });
            }
          });
        }
      });

      // Si encontramos coincidencias parciales
      if (partialMatches.length > 0 && !isClarification) {
        // Ordenar por similitud (descendente) y luego por relevancia
        const bestMatch = partialMatches.sort((a, b) => {
          // Primero por similitud
          const similarityDiff = b.similarity - a.similarity;
          if (Math.abs(similarityDiff) > 0.1) return similarityDiff;
          
          // Si la similitud es muy cercana, usar relevancia
          return (b.item.relevancia || 0) - (a.item.relevancia || 0);
        })[0];
        
        console.log(`✅ Encontrada coincidencia ${bestMatch.matchType} con similitud ${bestMatch.similarity.toFixed(2)}:`, 
                    bestMatch.matchedText || bestMatch.item.pregunta);
        
        // Añadir la respuesta al historial de conversación
        this.conversationHistory.push({role: 'assistant', content: bestMatch.item.respuesta});
        
        return {
          text: bestMatch.item.respuesta,
          source: `${bestMatch.matchType}_match`,
          categoria: bestMatch.item.categoria || 'General',
          links: bestMatch.item.links || {},
          similarity: bestMatch.similarity
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
        
        const fallbackResponse = 'Lo siento, no tengo información específica sobre esa consulta. ¿Puedes reformular tu pregunta o preguntar sobre otro tema relacionado con la Cámara de Comercio?';
        
        // Añadir la respuesta al historial de conversación
        this.conversationHistory.push({role: 'assistant', content: fallbackResponse});
        
        return {
          text: fallbackResponse,
          source: 'fallback'
        };
      }

      // Formatear el historial de conversación para el prompt
      const conversationHistoryText = this.conversationHistory
        .slice(0, -1) // Excluir la pregunta actual que ya se pasa por separado
        .map(msg => `${msg.role === 'user' ? 'Usuario' : 'Asistente'}: ${msg.content}`)
        .join('\n');

      // Enviar la pregunta, el historial y los documentos relevantes al RAG chain
      const response = await this.ragChain.invoke({
        question,
        conversation_history: conversationHistoryText,
        context: relevantDocs
      });

      // Añadir la respuesta al historial de conversación
      this.conversationHistory.push({role: 'assistant', content: response});

      // Extraer enlaces de los documentos relevantes
      const links: Record<string, string> = {};
      relevantDocs.forEach(doc => {
        if (doc.metadata && doc.metadata['links']) {
          // Combinar los enlaces de todos los documentos relevantes
          Object.assign(links, doc.metadata['links']);
        }
      });

      console.log('Respuesta generada por RAG chain');
      return {
        text: response || 'Lo siento, no pude generar una respuesta.',
        source: 'rag_chain',
        documentos: relevantDocs.length,
        links: Object.keys(links).length > 0 ? links : undefined
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

  // Función para manejar aclaraciones o correcciones
  private async handleClarification(question: string, normalizedQuestion: string): Promise<any> {
    // Obtener las últimas interacciones
    const lastUserMessage = this.conversationHistory[this.conversationHistory.length - 3]?.content || '';
    const lastBotResponse = this.conversationHistory[this.conversationHistory.length - 2]?.content || '';
    
    console.log('Última pregunta del usuario:', lastUserMessage);
    console.log('Última respuesta del bot:', lastBotResponse);
    
    // Extraer la intención real de la pregunta original
    const originalNormalizedQuestion = this.normalizeText(lastUserMessage);
    console.log('Pregunta original normalizada:', originalNormalizedQuestion);
    
    // Buscar palabras clave específicas en la aclaración y en la pregunta original
    const isAboutAffiliation = 
      normalizedQuestion.includes('afilia') || 
      normalizedQuestion.includes('ser parte') || 
      normalizedQuestion.includes('unir') || 
      (normalizedQuestion.includes('como') && normalizedQuestion.includes('parte')) ||
      originalNormalizedQuestion.includes('afilia') || 
      originalNormalizedQuestion.includes('ser parte') || 
      originalNormalizedQuestion.includes('unir') || 
      (originalNormalizedQuestion.includes('como') && originalNormalizedQuestion.includes('parte'));
    
    const isAboutBenefits = 
      normalizedQuestion.includes('beneficio') || 
      normalizedQuestion.includes('ventaja') || 
      normalizedQuestion.includes('que gano') ||
      originalNormalizedQuestion.includes('beneficio') || 
      originalNormalizedQuestion.includes('ventaja') || 
      originalNormalizedQuestion.includes('que gano');
    
    // Buscar en el QA datos específicos según el contexto de la aclaración
    let relevantQA: QAItem | undefined;
    
    if (isAboutAffiliation) {
      console.log('La aclaración parece ser sobre el proceso de afiliación');
      // Buscar preguntas específicas sobre cómo afiliarse (no sobre beneficios)
      relevantQA = this.qaData.find(item => {
        const normalizedPregunta = this.normalizeText(item.pregunta);
        return (
          (normalizedPregunta.includes('como') || normalizedPregunta.includes('proceso')) && 
          (normalizedPregunta.includes('parte') || normalizedPregunta.includes('afilia') || normalizedPregunta.includes('miembro')) && 
          !normalizedPregunta.includes('beneficio') &&
          !normalizedPregunta.includes('ventaja')
        );
      });
    } else if (isAboutBenefits) {
      console.log('La aclaración parece ser sobre los beneficios de afiliación');
      // Buscar preguntas específicas sobre beneficios
      relevantQA = this.qaData.find(item => {
        const normalizedPregunta = this.normalizeText(item.pregunta);
        return (
          (normalizedPregunta.includes('beneficio') || normalizedPregunta.includes('ventaja')) && 
          (normalizedPregunta.includes('miembro') || normalizedPregunta.includes('afilia') || normalizedPregunta.includes('parte'))
        );
      });
    }
    
    // Si no encontramos coincidencias específicas, buscar en la pregunta original
    if (!relevantQA) {
      console.log('Buscando coincidencias basadas en la pregunta original...');
      
      // Buscar coincidencias exactas o parciales con la pregunta original
      const exactMatches = this.qaData.filter(item => {
        const normalizedPregunta = this.normalizeText(item.pregunta);
        return normalizedPregunta === originalNormalizedQuestion;
      });
      
      if (exactMatches.length > 0) {
        console.log('Encontrada coincidencia exacta con la pregunta original');
        relevantQA = exactMatches[0];
      } else {
        // Buscar coincidencias parciales
        const partialMatches = this.qaData.map(item => ({
          item,
          similarity: this.calculateSimilarity(originalNormalizedQuestion, this.normalizeText(item.pregunta))
        })).filter(match => match.similarity > 0.4);
        
        if (partialMatches.length > 0) {
          // Ordenar por similitud
          partialMatches.sort((a, b) => b.similarity - a.similarity);
          console.log(`Encontrada coincidencia parcial con similitud ${partialMatches[0].similarity.toFixed(2)}`);
          relevantQA = partialMatches[0].item;
        }
      }
    }
    
    if (relevantQA) {
      console.log('Encontrada respuesta relevante para la aclaración:', relevantQA.pregunta);
      
      // Añadir la respuesta al historial de conversación
      this.conversationHistory.push({role: 'assistant', content: relevantQA.respuesta});
      
      return {
        text: relevantQA.respuesta,
        source: 'clarification_match',
        categoria: relevantQA.categoria || 'General',
        links: relevantQA.links || {}
      };
    }
    
    // Si no encontramos una respuesta específica, usar el RAG chain con contexto adicional
    console.log('No se encontró respuesta específica para la aclaración, usando RAG chain');
    
    // Preparar un contexto especial para la aclaración
    const clarificationContext = `
      El usuario está aclarando o corrigiendo su pregunta anterior. 
      Pregunta original: "${lastUserMessage}"
      Tu respuesta anterior: "${lastBotResponse}"
      Aclaración del usuario: "${question}"
      
      Parece que el usuario no está satisfecho con la respuesta anterior. 
      Intenta entender mejor su intención original y proporciona una respuesta más precisa.
    `;
    
    // Obtener documentos relevantes
    const retriever = this.vectorStore!.asRetriever({
      k: 5, // Aumentar el número de documentos para tener más contexto
      searchType: "similarity",
    });
    
    // Buscar documentos relevantes tanto para la pregunta original como para la aclaración
    const relevantDocs = await retriever.invoke(lastUserMessage + " " + question);
    
    // Formatear el historial de conversación para el prompt
    const conversationHistoryText = this.conversationHistory
      .slice(0, -1)
      .map(msg => `${msg.role === 'user' ? 'Usuario' : 'Asistente'}: ${msg.content}`)
      .join('\n');
    
    // Enviar la aclaración, el historial y los documentos relevantes al RAG chain
    const response = await this.ragChain.invoke({
      question: clarificationContext + "\n\n" + question,
      conversation_history: conversationHistoryText,
      context: relevantDocs
    });
    
    // Añadir la respuesta al historial de conversación
    this.conversationHistory.push({role: 'assistant', content: response});
    
    // Extraer enlaces de los documentos relevantes
    const links: Record<string, string> = {};
    relevantDocs.forEach(doc => {
      if (doc.metadata && doc.metadata['links']) {
        Object.assign(links, doc.metadata['links']);
      }
    });
    
    return {
      text: response || 'Lo siento, no pude entender correctamente tu aclaración. ¿Podrías reformular tu pregunta?',
      source: 'clarification_rag',
      documentos: relevantDocs.length,
      links: Object.keys(links).length > 0 ? links : undefined
    };
  }

  // Función para verificar si la pregunta es una aclaración o corrección
  private checkIfClarification(question: string): boolean {
    // Patrones que indican una aclaración o corrección
    const clarificationPatterns = [
      // Patrones de negación o corrección
      'no entendiste',
      'no has entendido',
      'no respondiste',
      'no has respondido',
      'no es lo que pregunté',
      'no es lo que te pregunté',
      'pregunté',
      'te pregunté',
      'mi pregunta fue',
      'mi pregunta era',
      'responde a mi pregunta',
      'no es correcto',
      'no es correcta',
      'no es eso',
      'no es esa',
      'no es lo que busco',
      'no es lo que buscaba',
      'estoy preguntando',
      'quiero saber cómo',
      'quiero saber el proceso',
      'no quiero los beneficios',
      'no te pregunté por los beneficios',
      'no te pregunté por las ventajas',
      'te estoy preguntando cómo',
      'te estoy preguntando el proceso',
      'no me has dicho cómo',
      'no me has explicado cómo',
      'no me has dicho el proceso',
      'no me has explicado el proceso',
      
      // Patrones adicionales para detectar aclaraciones
      'me refiero a',
      'lo que quiero saber',
      'lo que necesito es',
      'estoy buscando',
      'no me refiero a',
      'no estoy preguntando',
      'no estoy buscando',
      'no me interesa',
      'eso no es',
      'esa no es',
      'no has contestado',
      'no contestaste',
      'no respondiste a',
      'no has respondido a',
      'no entendiste mi pregunta',
      'no comprendiste',
      'no captaste',
      'no es esa la información',
      'no es eso lo que busco',
      'no es lo que necesito',
      'no es lo que quiero',
      'no es lo que pedí',
      'no es lo que solicité',
      'no me estás entendiendo',
      'no me has entendido',
      'no me comprendes',
      'no me estás comprendiendo',
      'no es la respuesta que busco',
      'no es la respuesta correcta',
      'no es la respuesta adecuada',
      'no es lo que te estoy preguntando',
      'no es lo que te estoy pidiendo',
      'no es lo que te estoy solicitando',
      'no es lo que te estoy consultando',
      'no es lo que quería saber',
      'no es lo que necesitaba saber',
      'no es lo que buscaba saber',
      'no es lo que quería preguntar',
      'no es lo que necesitaba preguntar',
      'no es lo que buscaba preguntar',
      'no es lo que quería consultar',
      'no es lo que necesitaba consultar',
      'no es lo que buscaba consultar',
      'no es lo que quería conocer',
      'no es lo que necesitaba conocer',
      'no es lo que buscaba conocer',
      'no es lo que quería averiguar',
      'no es lo que necesitaba averiguar',
      'no es lo que buscaba averiguar',
      'no es lo que quería indagar',
      'no es lo que necesitaba indagar',
      'no es lo que buscaba indagar',
      'no es lo que quería investigar',
      'no es lo que necesitaba investigar',
      'no es lo que buscaba investigar'
    ];
    
    // Verificar si la pregunta contiene alguno de los patrones de aclaración
    const containsPattern = clarificationPatterns.some(pattern => 
      question.toLowerCase().includes(pattern.toLowerCase())
    );
    
    // Verificar si la pregunta es muy corta y parece una aclaración
    const isShortClarification = question.split(/\s+/).length <= 5 && 
      (question.toLowerCase().includes('no') || 
       question.toLowerCase().includes('cómo') || 
       question.toLowerCase().includes('como') || 
       question.toLowerCase().includes('proceso') || 
       question.toLowerCase().includes('quiero') || 
       question.toLowerCase().includes('necesito'));
    
    // Verificar si la pregunta comienza con una negación
    const startsWithNegation = /^no\b|^pero\b/i.test(question);
    
    // Verificar si la pregunta es una repetición de la pregunta anterior
    const isRepetition = this.conversationHistory.length >= 2 && 
      this.calculateSimilarity(
        this.normalizeText(question), 
        this.normalizeText(this.conversationHistory[this.conversationHistory.length - 2]?.content || '')
      ) > 0.7;
    
    return containsPattern || isShortClarification || startsWithNegation || isRepetition;
  }

  // Función para normalizar texto (mejorada)
  private normalizeText(text: string): string {
    if (!text) return '';
    
    return text
      .toLowerCase()
      .trim()
      // Eliminar acentos
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      // Eliminar signos de puntuación
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡!]/g, ' ')
      // Reemplazar múltiples espacios con uno solo
      .replace(/\s+/g, ' ')
      // Eliminar palabras comunes que no aportan significado
      .replace(/\b(el|la|los|las|un|una|unos|unas|y|o|de|del|al|a|ante|con|en|para|por|sin|sobre|tras)\b/g, ' ')
      .trim();
  }

  // Función para verificar si un texto es un saludo
  private isGreeting(text: string): boolean {
    const normalizedText = this.normalizeText(text);
    const greetingPatterns = [
      'hola', 'buenos dias', 'buenas tardes', 'buenas noches', 
      'saludos', 'hey', 'que tal', 'como estas', 'como va', 
      'buen dia', 'buena tarde', 'buena noche'
    ];
    
    // Verificar coincidencia exacta con patrones de saludo
    if (greetingPatterns.includes(normalizedText)) {
      return true;
    }
    
    // Verificar si el texto comienza con algún patrón de saludo
    return greetingPatterns.some(pattern => 
      normalizedText.startsWith(pattern) && normalizedText.split(' ').length <= 4
    );
  }

  // Función para obtener una respuesta de saludo
  private getGreetingResponse(): string {
    const greetings = [
      '¡Hola! Soy Juancho, el asistente virtual de la Cámara de Comercio de Magangué. ¿En qué puedo ayudarte hoy?',
      '¡Saludos! Soy Juancho, asistente virtual de la Cámara de Comercio. ¿Cómo puedo ayudarte?',
      '¡Bienvenido! Soy Juancho, tu asistente virtual. ¿En qué puedo asistirte hoy?',
      '¡Hola! Estoy aquí para ayudarte con información sobre la Cámara de Comercio de Magangué. ¿Qué necesitas saber?'
    ];
    
    // Si ya hay un saludo en el historial, usar ese mismo
    if (this.conversationHistory.length > 0 && this.conversationHistory[0].role === 'assistant') {
      return this.conversationHistory[0].content;
    }
    
    // De lo contrario, elegir uno aleatorio
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Función para calcular similitud entre dos cadenas de texto (mejorada)
  private calculateSimilarity(str1: string, str2: string): number {
    // Normalizar las cadenas
    str1 = str1.trim();
    str2 = str2.trim();
    
    // Si alguna cadena está vacía, no hay similitud
    if (!str1 || !str2) return 0;
    
    // Si son idénticas, similitud máxima
    if (str1 === str2) return 1;
    
    // Si una contiene a la otra completamente
    if (str1.includes(str2)) return Math.pow(str2.length / str1.length, 0.7); // Exponente para ajustar la penalización
    if (str2.includes(str1)) return Math.pow(str1.length / str2.length, 0.7);
    
    // Dividir en palabras para comparar coincidencias de palabras
    const words1 = str1.split(/\s+/).filter(w => w.length > 2); // Ignorar palabras muy cortas
    const words2 = str2.split(/\s+/).filter(w => w.length > 2);
    
    // Contar palabras coincidentes
    let matchingWords = 0;
    for (const word1 of words1) {
      if (words2.some(word2 => word2 === word1 || this.levenshteinDistance(word1, word2) <= 1)) {
        matchingWords++;
      }
    }
    
    // Calcular similitud basada en palabras coincidentes
    const wordSimilarity = words1.length && words2.length ? 
      matchingWords / Math.max(words1.length, words2.length) : 0;
    
    // Calcular la distancia de Levenshtein
    const distance = this.levenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    
    // Convertir distancia a similitud (1 - distancia normalizada)
    const levenshteinSimilarity = 1 - distance / maxLength;
    
    // Combinar ambas métricas con mayor peso a la coincidencia de palabras
    return wordSimilarity * 0.7 + levenshteinSimilarity * 0.3;
  }
  
  // Implementación de la distancia de Levenshtein
  private levenshteinDistance(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;
    
    // Matriz para programación dinámica
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    // Inicializar primera fila y columna
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    // Llenar la matriz
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,      // eliminación
          dp[i][j - 1] + 1,      // inserción
          dp[i - 1][j - 1] + cost // sustitución
        );
      }
    }
    
    return dp[m][n];
  }

  // Añadir datos críticos que podrían faltar en el conjunto de datos original
  private addCriticalQAData() {
    // Información sobre cómo afiliarse a la Cámara de Comercio
    const afiliacionQA: QAItem = {
      id: "afiliacion_proceso",
      pregunta: "¿Cómo puedo ser parte de la Cámara de Comercio?",
      respuesta: "Para afiliarte a la Cámara de Comercio de Magangué, debes seguir estos pasos:\n\n1. Verifica que tu empresa esté legalmente constituida y registrada en el Registro Mercantil.\n2. Acércate a nuestras oficinas ubicadas en [dirección] con tu documento de identidad.\n3. Completa el formulario de solicitud de afiliación disponible en nuestras oficinas o descárgalo de nuestra página web.\n4. Presenta los documentos requeridos: Certificado de existencia y representación legal (no mayor a 30 días), copia del RUT actualizado, y comprobante de pago de la cuota de afiliación.\n5. Una vez aprobada tu solicitud, recibirás tu credencial de afiliado y podrás comenzar a disfrutar de todos los beneficios.\n\nLa cuota de afiliación varía según el tamaño de tu empresa. Para más información sobre tarifas actualizadas, puedes comunicarte con nosotros al teléfono [número] o escribirnos a [correo].",
      categoria: "Afiliación",
      keywords: ["afiliarse", "ser parte", "unirse", "membresía", "afiliación", "proceso", "requisitos", "pasos"],
      relevancia: 5,
      variantes: [
        "¿Cómo me afilio a la Cámara de Comercio?",
        "¿Cuál es el proceso para ser miembro de la Cámara de Comercio?",
        "¿Qué requisitos necesito para afiliarme a la Cámara de Comercio?",
        "¿Cómo puedo unirme a la Cámara de Comercio?",
        "Quiero ser parte de la Cámara de Comercio, ¿qué debo hacer?",
        "Pasos para afiliarse a la Cámara de Comercio"
      ],
      links: {
        "formulario_afiliacion": "https://www.camaramagangue.org.co/afiliacion/formulario",
        "tarifas_afiliacion": "https://www.camaramagangue.org.co/afiliacion/tarifas",
        "beneficios_afiliados": "https://www.camaramagangue.org.co/afiliacion/beneficios"
      }
    };

    // Información sobre los beneficios de ser parte de la Cámara de Comercio
    const beneficiosQA: QAItem = {
      id: "beneficios_afiliacion",
      pregunta: "¿Cuáles son los beneficios de ser parte de la Cámara de Comercio?",
      respuesta: "Como miembro de la Cámara de Comercio de Magangué, disfrutarás de múltiples beneficios específicos:\n\n1) Acceso preferencial a capacitaciones y talleres exclusivos para el desarrollo empresarial\n2) Oportunidades de networking con otros empresarios y potenciales socios comerciales\n3) Asesoría legal y comercial personalizada para tu negocio\n4) Mayor visibilidad para tu empresa a través de nuestros directorios y plataformas\n5) Descuentos especiales en eventos, ferias y servicios de la Cámara\n6) Representación de tus intereses ante entidades gubernamentales\n7) Acceso a información privilegiada sobre tendencias del mercado y oportunidades de negocio\n8) Apoyo en procesos de internacionalización y acceso a nuevos mercados",
      categoria: "Afiliación",
      keywords: ["beneficios", "ventajas", "afiliados", "miembros", "servicios", "descuentos"],
      relevancia: 4,
      variantes: [
        "¿Qué ventajas tiene ser miembro de la Cámara de Comercio?",
        "¿Por qué debería afiliarme a la Cámara de Comercio?",
        "¿Qué gano al ser parte de la Cámara de Comercio?",
        "Ventajas de afiliarse a la Cámara de Comercio",
        "Beneficios para afiliados de la Cámara de Comercio"
      ],
      links: {
        "beneficios_miembros": "https://www.camaramagangue.org.co/beneficios-miembros",
        "eventos_exclusivos": "https://www.camaramagangue.org.co/eventos-exclusivos",
        "recursos_empresariales": "https://www.camaramagangue.org.co/recursos-empresariales",
        "networking": "https://www.camaramagangue.org.co/networking"
      }
    };

    // Mensajes de saludo y agradecimiento sin enlaces
    const saludoQA: QAItem = {
      id: "saludo_inicial",
      pregunta: "hola",
      respuesta: "¡Hola! Soy Juancho, el asistente virtual de la Cámara de Comercio de Magangué. ¿En qué puedo ayudarte hoy?",
      categoria: "General",
      keywords: ["hola", "buenos días", "buenas tardes", "buenas noches", "saludos"],
      relevancia: 3,
      variantes: [
        "buenos días",
        "buenas tardes",
        "buenas noches",
        "saludos",
        "qué tal",
        "cómo estás"
      ]
      // Sin enlaces para mensajes de saludo
    };

    const agradecimientoQA: QAItem = {
      id: "agradecimiento",
      pregunta: "gracias",
      respuesta: "¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas sobre la Cámara de Comercio de Magangué, no dudes en consultarme.",
      categoria: "General",
      keywords: ["gracias", "te agradezco", "muchas gracias", "agradecido", "agradecida"],
      relevancia: 3,
      variantes: [
        "muchas gracias",
        "te lo agradezco",
        "muy amable",
        "excelente servicio",
        "gracias por tu ayuda"
      ]
      // Sin enlaces para mensajes de agradecimiento
    };

    // Verificar si ya existen preguntas similares para evitar duplicados
    const existeAfiliacion = this.qaData.some(item => 
      item.pregunta.toLowerCase().includes("cómo") && 
      item.pregunta.toLowerCase().includes("parte") && 
      item.pregunta.toLowerCase().includes("cámara")
    );

    const existeBeneficios = this.qaData.some(item => 
      item.pregunta.toLowerCase().includes("beneficios") && 
      item.pregunta.toLowerCase().includes("cámara")
    );

    const existeSaludo = this.qaData.some(item => 
      item.pregunta.toLowerCase() === "hola"
    );

    const existeAgradecimiento = this.qaData.some(item => 
      item.pregunta.toLowerCase() === "gracias"
    );

    // Añadir solo si no existen
    if (!existeAfiliacion) {
      this.qaData.push(afiliacionQA);
    }

    if (!existeBeneficios) {
      this.qaData.push(beneficiosQA);
    }

    if (!existeSaludo) {
      this.qaData.push(saludoQA);
    }

    if (!existeAgradecimiento) {
      this.qaData.push(agradecimientoQA);
    }
  }
}
