const fs = require('fs-extra');
const path = require('path');
const { pipeline } = require('@xenova/transformers');

// Configuración
const modelName = 'Xenova/all-MiniLM-L6-v2';
const embeddingsPath = './public/embeddings_enhanced.json';
const topK = 3; // Número de resultados a mostrar

// Preguntas de prueba
const testQuestions = [
  // Preguntas exactas
  '¿QUÉ DEBO HACER PARA REGISTRAR NUEVOS LIBROS?',
  '¿CUÁLES SON LAS OBLIGACIONES DE LOS COMERCIANTES?',

  // Variantes
  '¿Qué ventajas tiene ser miembro de la Cámara de Comercio?',
  '¿A qué hora abren?',

  // Preguntas parciales
  'Horario de atención',
  'Beneficios miembro',

  // Palabras clave
  'Afiliación',
  'Renovación',

  // Preguntas complejas
  '¿Cuáles son los requisitos para registrar una empresa y cuánto cuesta?',
  '¿Cómo puedo renovar mi matrícula mercantil y qué documentos necesito?',

  // Preguntas con errores tipográficos
  '¿Cuál es el horario de atencion?',
  '¿Como puedo convertirme en miembro de la Camara de Comercio?',

  // Preguntas cortas
  '¿Horario?',
  '¿Libros?',

  // Preguntas largas
  'Estoy interesado en conocer detalladamente cuál es el procedimiento completo que debo seguir para poder registrarme como miembro oficial de la Cámara de Comercio de Magangué'
];

// Función para calcular la similitud del coseno entre dos vectores
function cosineSimilarity(vecA, vecB) {
  try {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  } catch (error) {
    console.error('Error al calcular similitud:', error.message);
    return 0;
  }
}

// Función principal
async function main() {
  console.log(`Cargando modelo: ${modelName}`);

  // Cargar el modelo de embeddings
  const embeddingPipeline = await pipeline('feature-extraction', modelName);

  console.log('Modelo cargado exitosamente');

  // Cargar los embeddings existentes
  console.log(`Cargando embeddings desde ${embeddingsPath}`);
  const embeddingsData = await fs.readJson(embeddingsPath);

  console.log(`Información de los embeddings:`);
  console.log(`- Modelo: ${embeddingsData.model || 'No especificado'}`);
  console.log(`- Fecha de generación: ${embeddingsData.fecha_generacion || 'No especificada'}`);
  console.log(`- Total de items: ${embeddingsData.total_items || 'No especificado'}`);

  // Verificar la estructura del archivo de embeddings
  if (!embeddingsData.embeddings || !Array.isArray(embeddingsData.embeddings)) {
    console.error('Formato de archivo de embeddings no reconocido');
    return;
  }

  const items = embeddingsData.embeddings;
  console.log(`- Embeddings cargados: ${items.length}`);

  // Procesar cada pregunta de prueba
  console.log('\n=== INICIANDO PRUEBAS DE BÚSQUEDA SEMÁNTICA ===\n');

  for (const question of testQuestions) {
    console.log(`\nPregunta: "${question}"`);

    try {
      // Generar embedding para la pregunta
      const output = await embeddingPipeline(question, { pooling: 'mean', normalize: true });
      const questionEmbedding = Array.from(output.data);

      // Calcular similitud con todos los items
      const similarities = items.map(item => {
        try {
          // Calcular similitud con la pregunta principal
          let mainQuestionSimilarity = 0;
          if (item.embedding && Array.isArray(item.embedding)) {
            mainQuestionSimilarity = cosineSimilarity(questionEmbedding, item.embedding);
          }

          // Calcular similitud con las variantes si existen
          let variantSimilarity = 0;
          if (item.variantes_embeddings && Array.isArray(item.variantes_embeddings) && item.variantes_embeddings.length > 0) {
            const variantSimilarities = item.variantes_embeddings.map(
              variantEmb => Array.isArray(variantEmb) ? cosineSimilarity(questionEmbedding, variantEmb) : 0
            );
            variantSimilarity = Math.max(...variantSimilarities);
          }

          // Calcular similitud con las palabras clave si existen
          let keywordSimilarity = 0;
          if (item.keywords_embeddings && Array.isArray(item.keywords_embeddings) && item.keywords_embeddings.length > 0) {
            const keywordSimilarities = item.keywords_embeddings.map(
              keywordEmb => Array.isArray(keywordEmb) ? cosineSimilarity(questionEmbedding, keywordEmb) : 0
            );
            keywordSimilarity = Math.max(...keywordSimilarities);
          }

          // Tomar la mayor similitud entre pregunta principal, variantes y palabras clave
          const maxSimilarity = Math.max(mainQuestionSimilarity, variantSimilarity, keywordSimilarity);

          let source = 'desconocido';
          if (mainQuestionSimilarity >= variantSimilarity && mainQuestionSimilarity >= keywordSimilarity) {
            source = 'pregunta_principal';
          } else if (variantSimilarity >= keywordSimilarity) {
            source = 'variante';
          } else {
            source = 'palabra_clave';
          }

          return {
            question: item.pregunta,
            answer: item.respuesta,
            similarity: maxSimilarity,
            source
          };
        } catch (error) {
          console.error(`Error procesando item ${item.id || 'desconocido'}:`, error.message);
          return {
            question: item.pregunta || 'Pregunta no disponible',
            answer: 'Error al procesar',
            similarity: 0,
            source: 'error'
          };
        }
      });

      // Ordenar por similitud (de mayor a menor)
      const sortedResults = similarities.sort((a, b) => b.similarity - a.similarity);

      // Mostrar los top K resultados
      console.log(`Top ${topK} resultados:`);
      for (let i = 0; i < Math.min(topK, sortedResults.length); i++) {
        const result = sortedResults[i];
        console.log(`${i + 1}. Pregunta: "${result.question}"`);
        console.log(`   Similitud: ${result.similarity.toFixed(4)} (${result.source})`);

        // Mostrar solo los primeros 100 caracteres de la respuesta si existe
        if (result.answer) {
          const shortAnswer = result.answer.length > 100
            ? result.answer.substring(0, 100) + '...'
            : result.answer;
          console.log(`   Respuesta: "${shortAnswer}"`);
        } else {
          console.log(`   Respuesta: No disponible`);
        }

        console.log('');
      }
    } catch (error) {
      console.error(`Error procesando pregunta "${question}":`, error.message);
    }

    console.log('-'.repeat(80));
  }
}

// Ejecutar la función principal
main().catch(error => {
  console.error('Error:', error);
});
