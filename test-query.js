const { ChatService } = require('./dist/js/services/chat/chat.service');

async function main() {
  try {
    // Obtener la consulta de los argumentos de la línea de comandos
    const query = process.argv[2];
    if (!query) {
      console.error('Por favor proporciona una consulta como argumento');
      process.exit(1);
    }

    console.log('Consulta:', query);
    console.log('Inicializando ChatService...');

    // Crear una instancia del servicio de chat
    const chatService = new ChatService();

    // Esperar a que se inicialice completamente
    console.log('Esperando inicialización...');
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('\n=== PROCESANDO CONSULTA ===\n');

    // Obtener respuesta para la consulta
    const response = await chatService.getAnswer(query);

    console.log('\n=== RESULTADO ===\n');
    console.log('Fuente:', response.source);
    if (response.categoria) {
      console.log('Categoría:', response.categoria);
    }
    if (response.documentos) {
      console.log('Documentos encontrados:', response.documentos);
    }
    console.log('\nRespuesta:');
    console.log(response.text);

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
