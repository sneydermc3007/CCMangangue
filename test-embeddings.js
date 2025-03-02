const fs = require('fs');
const path = require('path');

// Función de similitud coseno
function cosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB || vecA.length !== vecB.length) {
    console.error('Los vectores no son válidos o no tienen la misma dimensión');
    return 0;
  }

  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    magnitudeA += vecA[i] * vecA[i];
    magnitudeB += vecB[i] * vecB[i];
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  return dotProduct / (magnitudeA * magnitudeB);
}

// Obtener la consulta de los argumentos
const query = process.argv[2];
if (!query) {
  console.error('Por favor proporciona una consulta como argumento');
  process.exit(1);
}

// Normalizar consulta
const normalizedQuery = query.toLowerCase().trim();

console.log('Consulta:', query);
console.log('Consulta normalizada:', normalizedQuery);

// Cargar embeddings
const embeddingsPath = path.join(__dirname, 'public', 'embeddings_enhanced.json');
let embeddingsData = [];

try {
  const embeddingsContent = fs.readFileSync(embeddingsPath, 'utf8');
  const embeddingsJson = JSON.parse(embeddingsContent);

  // Analizamos la estructura para entender cómo están organizados los datos
  console.log('Estructura del archivo de embeddings:');
  for (const key of Object.keys(embeddingsJson)) {
    console.log(`- ${key}: ${typeof embeddingsJson[key]}`);
    if (Array.isArray(embeddingsJson[key])) {
      console.log(`  Longitud: ${embeddingsJson[key].length}`);
      if (embeddingsJson[key].length > 0) {
        console.log('  Ejemplo del primer elemento:');
        const firstItem = embeddingsJson[key][0];
        for (const itemKey of Object.keys(firstItem)) {
          if (itemKey === 'embedding' || itemKey === 'variants_embeddings' || itemKey === 'keywords_embeddings') {
            if (Array.isArray(firstItem[itemKey])) {
              console.log(`    - ${itemKey}: Array[${firstItem[itemKey].length}]`);
            } else {
              console.log(`    - ${itemKey}: ${typeof firstItem[itemKey]}`);
            }
          } else {
            const value = firstItem[itemKey];
            const displayValue = typeof value === 'object'
              ? JSON.stringify(value).substring(0, 50) + '...'
              : value;
            console.log(`    - ${itemKey}: ${displayValue}`);
          }
        }
      }
    }
  }

  // Asumiendo que los embeddings están en la clave "items" o "embeddings"
  embeddingsData = embeddingsJson.items || embeddingsJson.embeddings || [];

  console.log(`\nCargados ${embeddingsData.length} embeddings desde ${embeddingsPath}`);

  // Mostrar el primer embedding para entender su estructura
  if (embeddingsData.length > 0) {
    console.log('\nDetalles del primer embedding:');
    const firstEmb = embeddingsData[0];
    console.log('- id:', firstEmb.id);
    console.log('- pregunta:', firstEmb.pregunta);
    console.log('- Dimensión del embedding:', firstEmb.embedding ? firstEmb.embedding.length : 'N/A');

    if (firstEmb.variantes) {
      console.log('- Variantes:', firstEmb.variantes.length);
    }

    if (firstEmb.keywords) {
      console.log('- Keywords:', firstEmb.keywords.join(', '));
    }
  }

} catch (error) {
  console.error('Error al cargar los embeddings:', error);
  process.exit(1);
}

// Buscar en el texto original (coincidencia exacta o parcial)
console.log('\n=== BÚSQUEDA POR TEXTO ===');

// Buscar coincidencia exacta en preguntas
const exactMatch = embeddingsData.find(
  item => item.pregunta && item.pregunta.toLowerCase().trim() === normalizedQuery
);

if (exactMatch) {
  console.log('✅ Coincidencia exacta encontrada:');
  console.log('- Pregunta:', exactMatch.pregunta);
  console.log('- Respuesta:', exactMatch.respuesta);
  console.log('- Categoría:', exactMatch.categoria || 'N/A');
}

// Buscar coincidencia en variantes
const variantMatch = embeddingsData.find(
  item => item.variantes && item.variantes.some(
    variant => variant.toLowerCase().trim() === normalizedQuery
  )
);

if (variantMatch) {
  console.log('\n✅ Coincidencia exacta en variante encontrada:');
  console.log('- Pregunta original:', variantMatch.pregunta);
  console.log('- Variante coincidente:', variantMatch.variantes.find(v => v.toLowerCase().trim() === normalizedQuery));
  console.log('- Respuesta:', variantMatch.respuesta);
  console.log('- Categoría:', variantMatch.categoria || 'N/A');
}

// Buscar coincidencia parcial en preguntas
const partialMatches = embeddingsData.filter(
  item => item.pregunta && (
    item.pregunta.toLowerCase().includes(normalizedQuery) ||
    normalizedQuery.includes(item.pregunta.toLowerCase())
  )
);

if (partialMatches.length > 0) {
  console.log(`\n✅ ${partialMatches.length} coincidencia(s) parcial(es) encontrada(s):`);
  partialMatches.forEach((match, index) => {
    console.log(`\n[Match ${index + 1}]`);
    console.log('- Pregunta:', match.pregunta);
    console.log('- Respuesta:', match.respuesta);
    console.log('- Categoría:', match.categoria || 'N/A');
  });
}

// Buscar en keywords
console.log('\n=== BÚSQUEDA POR KEYWORDS ===');
const keywordMatches = embeddingsData.filter(
  item => item.keywords && item.keywords.some(
    keyword => keyword.toLowerCase().includes(normalizedQuery) ||
    normalizedQuery.includes(keyword.toLowerCase())
  )
);

if (keywordMatches.length > 0) {
  console.log(`✅ ${keywordMatches.length} coincidencia(s) por keywords encontrada(s):`);
  keywordMatches.forEach((match, index) => {
    const matchedKeyword = match.keywords.find(k =>
      k.toLowerCase().includes(normalizedQuery) ||
      normalizedQuery.includes(k.toLowerCase())
    );

    console.log(`\n[Match ${index + 1}] - Keyword: "${matchedKeyword}"`);
    console.log('- Pregunta:', match.pregunta);
    console.log('- Respuesta:', match.respuesta);
    console.log('- Categoría:', match.categoria || 'N/A');
  });
}

// Simulación de búsqueda semántica
// Como no tenemos forma de generar embeddings para la consulta actual,
// usaremos el primer embedding como referencia para simular
console.log('\n=== SIMULACIÓN DE BÚSQUEDA POR SIMILITUD SEMÁNTICA ===');
console.log('Nota: Esto es solo una simulación usando el primer embedding como referencia');

if (embeddingsData.length === 0 || !embeddingsData[0].embedding) {
  console.log('No hay embeddings disponibles para simulación de búsqueda semántica');
  process.exit(0);
}

// Usamos el primer embedding como si fuera el de nuestra consulta
// (esto es solo para simular - en una implementación real generaríamos el embedding de la consulta)
const queryEmbedding = embeddingsData[0].embedding;

// Calcular similitud con todos los embeddings
const similarityScores = embeddingsData.map(item => {
  // Similitud con el embedding principal
  const mainSimilarity = cosineSimilarity(queryEmbedding, item.embedding);

  // Similitud con variantes si existen
  let maxVariantSimilarity = 0;
  if (item.variantes_embeddings && Array.isArray(item.variantes_embeddings)) {
    const variantSimilarities = item.variantes_embeddings.map(variantEmb =>
      cosineSimilarity(queryEmbedding, variantEmb)
    );
    maxVariantSimilarity = variantSimilarities.length > 0 ? Math.max(...variantSimilarities) : 0;
  }

  // Similitud con keywords si existen
  let maxKeywordSimilarity = 0;
  if (item.keywords_embeddings && Array.isArray(item.keywords_embeddings)) {
    const keywordSimilarities = item.keywords_embeddings.map(keywordEmb =>
      cosineSimilarity(queryEmbedding, keywordEmb)
    );
    maxKeywordSimilarity = keywordSimilarities.length > 0 ? Math.max(...keywordSimilarities) : 0;
  }

  // Máxima similitud entre todas las comparaciones
  const maxSimilarity = Math.max(mainSimilarity, maxVariantSimilarity, maxKeywordSimilarity);

  return {
    item,
    similarity: maxSimilarity,
    mainSimilarity,
    maxVariantSimilarity,
    maxKeywordSimilarity
  };
});

// Ordenar por similitud y mostrar los mejores resultados
const sortedResults = similarityScores
  .sort((a, b) => b.similarity - a.similarity)
  .slice(0, 3); // Mostrar los 3 mejores resultados

console.log(`Top ${sortedResults.length} resultados por similitud:`);
sortedResults.forEach((result, index) => {
  console.log(`\n[Resultado ${index + 1}] - Similitud: ${result.similarity.toFixed(4)}`);
  console.log('- Pregunta:', result.item.pregunta);
  console.log('- Respuesta:', result.item.respuesta);
  console.log('- Similitud principal:', result.mainSimilarity.toFixed(4));
  console.log('- Similitud máxima de variantes:', result.maxVariantSimilarity.toFixed(4));
  console.log('- Similitud máxima de keywords:', result.maxKeywordSimilarity.toFixed(4));
  console.log('- Categoría:', result.item.categoria || 'N/A');
  if (result.item.keywords) {
    console.log('- Keywords:', result.item.keywords.join(', '));
  }
});
