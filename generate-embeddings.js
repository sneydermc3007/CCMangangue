const fs = require('fs-extra');
const path = require('path');
const { pipeline } = require('@xenova/transformers');

// Configuración
const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2'; // Modelo público disponible
const QA_FILE_PATH = './public/qa_enhanced_fixed.json';
const EMBEDDINGS_OUTPUT_PATH = './public/embeddings_enhanced.json';

async function main() {
  console.log(`Cargando modelo: ${MODEL_NAME}`);

  // Inicializar el pipeline de embeddings
  const embedder = await pipeline('feature-extraction', MODEL_NAME);
  console.log('Modelo cargado exitosamente');

  // Leer datos Q&A con codificación UTF-8 explícita
  const qaRawData = await fs.readFile(QA_FILE_PATH, 'utf8');
  const qaData = JSON.parse(qaRawData);
  console.log(`Cargados ${qaData['Q&A'].length} pares de Q&A`);

  // Procesar cada par Q&A
  const embeddingsData = [];

  for (let i = 0; i < qaData['Q&A'].length; i++) {
    const item = qaData['Q&A'][i];
    // Crear un texto enriquecido que incluya toda la información relevante
    const fullText = `Pregunta: ${item.pregunta}\nRespuesta: ${item.respuesta}\nCategoría: ${item.categoria || 'General'}\nPalabras clave: ${(item.keywords || []).join(', ')}`;

    console.log(`Procesando item ${i+1}/${qaData['Q&A'].length}: ${item.pregunta.substring(0, 50)}...`);

    try {
      // Generar embedding para el texto principal
      const output = await embedder(fullText, { pooling: 'mean', normalize: true });
      const embedding = Array.from(output.data);

      // Generar embeddings para las variantes si existen
      const variantEmbeddings = [];
      if (item.variantes && item.variantes.length > 0) {
        for (let j = 0; j < item.variantes.length; j++) {
          // También enriquecer las variantes con la respuesta y palabras clave
          const variantText = `Pregunta: ${item.variantes[j]}\nRespuesta: ${item.respuesta}\nCategoría: ${item.categoria || 'General'}\nPalabras clave: ${(item.keywords || []).join(', ')}`;
          const variantOutput = await embedder(variantText, { pooling: 'mean', normalize: true });
          variantEmbeddings.push({
            texto: item.variantes[j],
            embedding: Array.from(variantOutput.data)
          });
        }
      }

      // Generar embeddings adicionales para cada palabra clave importante
      const keywordEmbeddings = [];
      if (item.keywords && item.keywords.length > 0) {
        for (let k = 0; k < item.keywords.length; k++) {
          const keyword = item.keywords[k];
          // Crear un contexto mínimo para cada palabra clave
          const keywordText = `Palabra clave: ${keyword} - Relacionado con: ${item.pregunta}`;
          const keywordOutput = await embedder(keywordText, { pooling: 'mean', normalize: true });
          keywordEmbeddings.push({
            texto: keyword,
            embedding: Array.from(keywordOutput.data)
          });
        }
      }

      // Almacenar el item con todos sus embeddings
      embeddingsData.push({
        id: item.id,
        pregunta: item.pregunta,
        respuesta: item.respuesta,
        categoria: item.categoria,
        keywords: item.keywords,
        relevancia: item.relevancia,
        metadata: item.metadata,
        texto_completo: fullText,
        embedding: embedding,
        variantes: item.variantes,
        variantes_embeddings: variantEmbeddings,
        keywords_embeddings: keywordEmbeddings
      });

      console.log(`Embedding generado exitosamente para el item ${i+1}`);
    } catch (error) {
      console.error(`Error generando embedding para el item ${i+1}:`, error);
    }
  }

  // Guardar embeddings en archivo con codificación UTF-8 explícita
  const jsonData = JSON.stringify({
    model: MODEL_NAME,
    fecha_generacion: new Date().toISOString(),
    total_items: embeddingsData.length,
    embeddings: embeddingsData
  }, null, 2);

  await fs.writeFile(EMBEDDINGS_OUTPUT_PATH, jsonData, 'utf8');

  console.log(`Guardados exitosamente ${embeddingsData.length} embeddings en ${EMBEDDINGS_OUTPUT_PATH}`);
}

main().catch(console.error);
