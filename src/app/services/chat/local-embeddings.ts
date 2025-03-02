import { Embeddings } from "@langchain/core/embeddings";

export interface EmbeddingVariant {
  texto: string;
  embedding: number[];
}

export interface EmbeddingItem {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: string;
  keywords: string[];
  relevancia: number;
  metadata: any;
  texto_completo: string;
  embedding: number[];
  variantes: string[];
  variantes_embeddings: EmbeddingVariant[];
  keywords_embeddings?: EmbeddingVariant[];
}

export interface EmbeddingsData {
  model: string;
  fecha_generacion: string;
  total_items: number;
  embeddings: EmbeddingItem[];
}

export class LocalEmbeddings extends Embeddings {
  private embeddingsData: EmbeddingsData | null = null;
  private embeddingsMap: Map<string, number[]> = new Map();
  private variantEmbeddingsMap: Map<string, {embedding: number[], item: EmbeddingItem}> = new Map();
  private keywordEmbeddingsMap: Map<string, {embedding: number[], item: EmbeddingItem}> = new Map();
  private initialized: boolean = false;
  private initPromise: Promise<void>;
  private dimensions: number = 384; // Dimensión típica para embeddings

  constructor() {
    super({});
    this.initPromise = this.initialize();
  }

  private async initialize(): Promise<void> {
    try {
      const response = await fetch('/embeddings_enhanced.json');
      this.embeddingsData = await response.json();

      // Crear mapas para búsquedas rápidas
      if (this.embeddingsData && this.embeddingsData.embeddings) {
        this.embeddingsData.embeddings.forEach(item => {
          // Mapa principal de preguntas
          this.embeddingsMap.set(item.texto_completo, item.embedding);
          this.embeddingsMap.set(item.pregunta, item.embedding);

          // Mapa de variantes
          if (item.variantes_embeddings && item.variantes_embeddings.length > 0) {
            item.variantes_embeddings.forEach(variant => {
              this.variantEmbeddingsMap.set(variant.texto, {
                embedding: variant.embedding,
                item: item
              });
            });
          }

          // Mapa de palabras clave (nuevo)
          if (item.keywords_embeddings && item.keywords_embeddings.length > 0) {
            item.keywords_embeddings.forEach(keyword => {
              this.keywordEmbeddingsMap.set(keyword.texto, {
                embedding: keyword.embedding,
                item: item
              });
            });
          }
        });

        // Obtener la dimensión de los embeddings del primer item
        if (this.embeddingsData.embeddings.length > 0) {
          this.dimensions = this.embeddingsData.embeddings[0].embedding.length;
        }
      }

      console.log(`Cargados ${this.embeddingsMap.size} embeddings principales, ${this.variantEmbeddingsMap.size} variantes y ${this.keywordEmbeddingsMap.size} palabras clave`);
      console.log(`Dimensión de embeddings: ${this.dimensions}`);
      this.initialized = true;
    } catch (error) {
      console.error('Error al cargar datos de embeddings:', error);
      throw error;
    }
  }

  async embedDocuments(documents: string[]): Promise<number[][]> {
    await this.initPromise;

    return documents.map(doc => this.findClosestEmbedding(doc));
  }

  async embedQuery(text: string): Promise<number[]> {
    await this.initPromise;

    return this.findClosestEmbedding(text);
  }

  // Función para calcular la similitud del coseno entre dos vectores
  private cosineSimilarity(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) {
      console.error('Los vectores deben tener la misma dimensión');
      return -1;
    }

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }

    if (normA === 0 || normB === 0) {
      return 0;
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  private findClosestEmbedding(text: string): number[] {
    // Normalizar el texto de entrada
    const normalizedText = text.toLowerCase().trim();
    console.log(`Buscando embedding para: "${normalizedText}"`);

    // 1. Verificar coincidencia exacta en la pregunta principal
    if (this.embeddingsMap.has(text)) {
      console.log(`Encontrado embedding exacto para: "${text}"`);
      return this.embeddingsMap.get(text)!;
    }

    // 2. Verificar coincidencia exacta en variantes
    if (this.variantEmbeddingsMap.has(text)) {
      console.log(`Encontrado embedding de variante para: "${text}"`);
      return this.variantEmbeddingsMap.get(text)!.embedding;
    }

    // 3. Verificar coincidencia exacta en palabras clave
    if (this.keywordEmbeddingsMap.has(normalizedText)) {
      console.log(`Encontrado embedding de palabra clave para: "${normalizedText}"`);
      return this.keywordEmbeddingsMap.get(normalizedText)!.embedding;
    }

    // 4. Buscar coincidencia parcial en preguntas, variantes y palabras clave
    const embeddings = this.embeddingsData?.embeddings || [];
    let bestMatch = {
      score: -1,
      embedding: [] as number[]
    };

    for (const item of embeddings) {
      // 4.1. Coincidencia parcial en la pregunta
      const normalizedPregunta = item.pregunta.toLowerCase().trim();
      if (normalizedPregunta.includes(normalizedText) || normalizedText.includes(normalizedPregunta)) {
        console.log(`Encontrada coincidencia parcial en pregunta: "${item.pregunta}"`);
        return item.embedding;
      }

      // 4.2. Coincidencia en keywords
      if (item.keywords && item.keywords.some(keyword => {
        const normalizedKeyword = keyword.toLowerCase().trim();
        return normalizedKeyword.includes(normalizedText) || normalizedText.includes(normalizedKeyword);
      })) {
        console.log(`Encontrada coincidencia en keyword para: "${item.pregunta}"`);
        // Buscar la palabra clave específica que coincide
        const matchedKeyword = item.keywords.find(keyword => {
          const normalizedKeyword = keyword.toLowerCase().trim();
          return normalizedKeyword.includes(normalizedText) || normalizedText.includes(normalizedKeyword);
        });

        if (matchedKeyword && item.keywords_embeddings) {
          // Intentar encontrar el embedding específico para esta palabra clave
          const keywordEmbedding = item.keywords_embeddings.find(k => k.texto === matchedKeyword);
          if (keywordEmbedding) {
            console.log(`Usando embedding específico para keyword: "${matchedKeyword}"`);
            return keywordEmbedding.embedding;
          }
        }

        return item.embedding;
      }

      // 4.3. Coincidencia en variantes
      if (item.variantes && item.variantes.some(variant => {
        const normalizedVariant = variant.toLowerCase().trim();
        return normalizedVariant.includes(normalizedText) || normalizedText.includes(normalizedVariant);
      })) {
        // Encontrar la variante específica que coincide
        const matchedVariant = item.variantes.find(variant => {
          const normalizedVariant = variant.toLowerCase().trim();
          return normalizedVariant.includes(normalizedText) || normalizedText.includes(normalizedVariant);
        });

        if (matchedVariant && item.variantes_embeddings) {
          const variantEmbedding = item.variantes_embeddings.find(v => v.texto === matchedVariant);
          if (variantEmbedding) {
            console.log(`Encontrado embedding específico para variante: "${matchedVariant}"`);
            return variantEmbedding.embedding;
          }
        }

        console.log(`Usando embedding principal para variante: "${item.pregunta}"`);
        return item.embedding;
      }
    }

    // 5. Si no se encontró coincidencia exacta o parcial, generar un embedding aleatorio
    console.warn(`No se encontró embedding para: "${text}". Usando embedding aleatorio.`);
    return this.generateRandomEmbedding(this.dimensions);
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
