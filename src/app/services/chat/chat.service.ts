import { Injectable } from '@angular/core';
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { pull } from "langchain/hub";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private vectorStore: MemoryVectorStore | null = null;
  private initializationPromise: Promise<void>;
  private ragChain: any;

  constructor() {
    this.initializationPromise = this.initializeVectorStore();
  }

  private async initializeVectorStore() {
    try {
      // 1. Cargar documentos desde el JSON local
      const response = await fetch('/qa.json');
      const data = await response.json();
      const items = Array.isArray(data) ? data : Array.isArray(data.items) ? data.items : [];

      const docs = items.map((item: any) => new Document({
        pageContent: `Pregunta: ${item.pregunta}\nRespuesta: ${item.respuesta}`,
        metadata: {}
      }));

      // 2. Dividir el texto en chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50
      });
      const splits = await textSplitter.splitDocuments(docs);

      // 3. Crear el vector store con OpenAI embeddings
      this.vectorStore = await MemoryVectorStore.fromDocuments(
        splits,
        new OpenAIEmbeddings({
          openAIApiKey: environment.OPENAI_API
        })
      );

      // 4. Configurar el RAG chain
      const retriever = this.vectorStore.asRetriever();
      const prompt = ChatPromptTemplate.fromTemplate(
        `
        Responde siempre en español.

        Contexto:
        {context}

        Pregunta:
        {question}

        Respuesta en español:
      `
      )

      const llm = new ChatOpenAI({
        openAIApiKey: environment.OPENAI_API,
        modelName: "gpt-3.5-turbo",
        temperature: 0.7
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

      // Recuperar documentos relevantes
      const retriever = this.vectorStore.asRetriever();
      const relevantDocs = await retriever.invoke(question);

      // Generar respuesta usando el RAG chain
      const response = await this.ragChain.invoke({
        question,
        context: relevantDocs
      });

      return {
        text: response || 'Lo siento, no pude generar una respuesta.'
      };

    } catch (error) {
      console.error('Error al obtener respuesta:', error);
      return {
        text: 'Lo siento, ocurrió un error al procesar tu pregunta. Por favor, intenta de nuevo.'
      };
    }
  }
}
