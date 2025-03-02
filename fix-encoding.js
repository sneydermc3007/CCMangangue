const fs = require('fs');
const path = require('path');

// Mapa de caracteres mal codificados a su versión correcta
const replacementMap = {
  'Ã¡': 'á',
  'Ã©': 'é',
  'Ã­': 'í',
  'Ã³': 'ó',
  'Ãº': 'ú',
  'Ã±': 'ñ',
  'Ã\u0081': 'Á',
  'Ã\u0089': 'É',
  'Ã\u008D': 'Í',
  'Ã\u0093': 'Ó',
  'Ã\u009A': 'Ú',
  'Ã\u0091': 'Ñ',
  'Â¿': '¿',
  'Â': '',
  'Ã\u00AD': 'í',
  'Ã\u00B3': 'ó',
  'Ã\u00BA': 'ú'
};

function fixString(text) {
  if (!text) return text;

  let result = text;
  for (const [pattern, replacement] of Object.entries(replacementMap)) {
    result = result.split(pattern).join(replacement);
  }
  return result;
}

function fixObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => fixObject(item));
  } else if (obj !== null && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = fixObject(value);
    }
    return result;
  } else if (typeof obj === 'string') {
    return fixString(obj);
  }
  return obj;
}

try {
  // Leer el archivo original con codificación UTF-8
  const data = fs.readFileSync('./public/qa_enhanced.json', 'utf8');
  console.log('Archivo leído correctamente');

  // Parsear el JSON
  let jsonData;
  try {
    jsonData = JSON.parse(data);
    console.log('JSON parseado correctamente');
  } catch (parseError) {
    console.error('Error al parsear el JSON:', parseError);
    process.exit(1);
  }

  // Corregir todos los textos en el JSON de forma recursiva
  const fixedData = fixObject(jsonData);

  // Crear una copia de seguridad del archivo original
  fs.copyFileSync('./public/qa_enhanced.json', './public/qa_enhanced_backup.json');
  console.log('Copia de seguridad creada como qa_enhanced_backup.json');

  // Guardar el archivo corregido con formato legible
  fs.writeFileSync('./public/qa_enhanced_fixed.json', JSON.stringify(fixedData, null, 2), 'utf8');
  console.log('Archivo corregido guardado como qa_enhanced_fixed.json');

  // Verificar algunas preguntas para comprobar la corrección
  if (fixedData.Q && fixedData.Q.A && fixedData.Q.A.length > 0) {
    console.log('\nEjemplos de preguntas corregidas:');
    for (let i = 0; i < Math.min(3, fixedData.Q.A.length); i++) {
      console.log(`- ${fixedData.Q.A[i].pregunta}`);
    }
  }
} catch (error) {
  console.error('Error al procesar el archivo:', error);
}
