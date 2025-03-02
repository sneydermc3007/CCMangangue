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
const query = process.argv[2] || "¿Qué servicios ofrece la Cámara de Comercio?";

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

  console.log(`\nInformación del archivo de embeddings:`);
  console.log(`- Modelo: ${embeddingsJson.model}`);
  console.log(`- Fecha de generación: ${embeddingsJson.fecha_generacion}`);
  console.log(`- Total de items: ${embeddingsJson.total_items}`);

  embeddingsData = embeddingsJson.embeddings || [];
  console.log(`\nCargados ${embeddingsData.length} embeddings desde ${embeddingsPath}`);

} catch (error) {
  console.error('Error al cargar los embeddings:', error);
  process.exit(1);
}

// FASE 1: BÚSQUEDA EXACTA Y PARCIAL
console.log('\n=== FASE 1: BÚSQUEDA EXACTA Y PARCIAL ===');

// 1.1 Buscar coincidencia exacta en preguntas
console.log('\n1.1 Buscando coincidencia exacta en preguntas...');
const exactMatch = embeddingsData.find(
  item => item.pregunta && item.pregunta.toLowerCase().trim() === normalizedQuery
);

if (exactMatch) {
  console.log('✅ Encontrada coincidencia exacta:');
  console.log('- Pregunta:', exactMatch.pregunta);
  console.log('- Respuesta:', exactMatch.respuesta);
  console.log('- Categoría:', exactMatch.categoria || 'N/A');
  process.exit(0);
}

// 1.2 Buscar coincidencia en variantes
console.log('\n1.2 Buscando coincidencia exacta en variantes...');
const variantMatch = embeddingsData.find(
  item => item.variantes && item.variantes.some(
    variant => variant.toLowerCase().trim() === normalizedQuery
  )
);

if (variantMatch) {
  console.log('✅ Coincidencia exacta en variante encontrada:');
  console.log('- Pregunta original:', variantMatch.pregunta);
  console.log('- Variante coincidente:', variantMatch.variantes.find(v => v.toLowerCase().trim() === normalizedQuery));
  console.log('- Respuesta:', variantMatch.respuesta);
  console.log('- Categoría:', variantMatch.categoria || 'N/A');
  process.exit(0);
}

// 1.3 Buscar coincidencia parcial en preguntas
console.log('\n1.3 Buscando coincidencia parcial en preguntas...');
const partialMatches = embeddingsData.filter(
  item => item.pregunta && (
    item.pregunta.toLowerCase().includes(normalizedQuery) ||
    normalizedQuery.includes(item.pregunta.toLowerCase())
  )
);

if (partialMatches.length > 0) {
  console.log(`✅ ${partialMatches.length} coincidencia(s) parcial(es) encontrada(s):`);

  // Ordenar por relevancia y longitud de pregunta (preferir preguntas más cortas)
  const bestPartialMatch = partialMatches.sort((a, b) => {
    // Primero por relevancia (descendente)
    const relevanceDiff = (b.relevancia || 0) - (a.relevancia || 0);
    if (relevanceDiff !== 0) return relevanceDiff;

    // Luego por longitud de pregunta (ascendente)
    return a.pregunta.length - b.pregunta.length;
  })[0];

  console.log('\n[Mejor coincidencia parcial]');
  console.log('- Pregunta:', bestPartialMatch.pregunta);
  console.log('- Respuesta:', bestPartialMatch.respuesta);
  console.log('- Categoría:', bestPartialMatch.categoria || 'N/A');
  console.log('- Relevancia:', bestPartialMatch.relevancia || 'N/A');
  process.exit(0);
}

// 1.4 Buscar coincidencia en palabras clave
console.log('\n1.4 Buscando coincidencia en palabras clave...');
const keywordMatches = embeddingsData.filter(
  item => item.keywords && item.keywords.some(
    keyword => keyword.toLowerCase().includes(normalizedQuery) ||
    normalizedQuery.includes(keyword.toLowerCase())
  )
);

if (keywordMatches.length > 0) {
  console.log(`✅ ${keywordMatches.length} coincidencia(s) por keywords encontrada(s):`);

  // Ordenar por relevancia y especificidad de la coincidencia
  const bestKeywordMatch = keywordMatches.sort((a, b) => {
    // Primero por relevancia (descendente)
    const relevanceDiff = (b.relevancia || 0) - (a.relevancia || 0);
    if (relevanceDiff !== 0) return relevanceDiff;

    // Luego por especificidad de la palabra clave (la más específica = la más larga)
    const aKeywords = a.keywords || [];
    const bKeywords = b.keywords || [];

    const aKeyword = aKeywords.find(k =>
      k.toLowerCase().includes(normalizedQuery) ||
      normalizedQuery.includes(k.toLowerCase())
    ) || '';

    const bKeyword = bKeywords.find(k =>
      k.toLowerCase().includes(normalizedQuery) ||
      normalizedQuery.includes(k.toLowerCase())
    ) || '';

    return bKeyword.length - aKeyword.length;
  })[0];

  const matchedKeyword = bestKeywordMatch.keywords ?
    bestKeywordMatch.keywords.find(k =>
      k.toLowerCase().includes(normalizedQuery) ||
      normalizedQuery.includes(k.toLowerCase())
    ) : '';

  console.log(`\n[Mejor coincidencia por keyword: "${matchedKeyword}"]`);
  console.log('- Pregunta:', bestKeywordMatch.pregunta);
  console.log('- Respuesta:', bestKeywordMatch.respuesta);
  console.log('- Categoría:', bestKeywordMatch.categoria || 'N/A');
  console.log('- Relevancia:', bestKeywordMatch.relevancia || 'N/A');
  process.exit(0);
}

// FASE 2: BÚSQUEDA SEMÁNTICA
console.log('\n=== FASE 2: BÚSQUEDA SEMÁNTICA ===');
console.log('Realizando búsqueda semántica (simulada con el primer embedding)...');

// Como no podemos generar embeddings en este script simple,
// usaremos una simulación basada en similitud de texto
const textSimilarityScores = embeddingsData.map(item => {
  // Calcular una puntuación basada en la cantidad de palabras compartidas
  const queryWords = normalizedQuery.split(/\s+/);
  const preguntaWords = item.pregunta.toLowerCase().split(/\s+/);

  let sharedWords = 0;
  for (const word of queryWords) {
    if (word.length > 3 && preguntaWords.includes(word)) {
      sharedWords++;
    }
  }

  const similarity = sharedWords / Math.max(queryWords.length, preguntaWords.length);

  return {
    item,
    similarity,
    sharedWords
  };
});

// Ordenar por similitud y mostrar los mejores resultados
const sortedResults = textSimilarityScores
  .sort((a, b) => b.similarity - a.similarity)
  .slice(0, 3); // Mostrar los 3 mejores resultados

console.log(`\nTop ${sortedResults.length} resultados por similitud de texto:`);
sortedResults.forEach((result, index) => {
  console.log(`\n[Resultado ${index + 1}] - Similitud: ${result.similarity.toFixed(4)} (${result.sharedWords} palabras compartidas)`);
  console.log('- Pregunta:', result.item.pregunta);
  console.log('- Respuesta:', result.item.respuesta);
  console.log('- Categoría:', result.item.categoria || 'N/A');
  console.log('- Relevancia:', result.item.relevancia || 'N/A');
  if (result.item.keywords) {
    console.log('- Keywords:', result.item.keywords.join(', '));
  }
});
