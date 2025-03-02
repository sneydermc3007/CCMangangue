const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para todas las rutas
app.use(cors());
app.use(express.json());

// Ruta para la extracción de características
app.post('/api/feature-extraction', async (req, res) => {
  try {
    const { model, inputs } = req.body;
    const apiKey = req.headers['x-api-key']; // Obtener el token de la cabecera

    console.log('Solicitud de embeddings recibida para modelo:', model);
    console.log('Texto de entrada (primeros 50 caracteres):', typeof inputs === 'string' ? inputs.substring(0, 50) + '...' : 'Array de textos');

    if (!apiKey) {
      return res.status(401).json({ error: 'Se requiere un token de API' });
    }

    // Configuración específica para modelos Jina
    const isJinaModel = model.includes('jinaai/jina-embeddings');
    const endpoint = isJinaModel
      ? `https://api-inference.huggingface.co/models/${model}`
      : `https://api-inference.huggingface.co/pipeline/feature-extraction/${model}`;

    console.log('Usando endpoint:', endpoint);

    // Hacer la solicitud a la API de Hugging Face
    const response = await axios.post(
      endpoint,
      { inputs },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 segundos de timeout
      }
    );

    console.log('Respuesta recibida de Hugging Face');

    // Verificar el formato de la respuesta
    const data = response.data;
    if (Array.isArray(data)) {
      console.log('Respuesta en formato de array, longitud:', data.length);
    } else if (typeof data === 'object') {
      console.log('Respuesta en formato de objeto');
    }

    // Devolver la respuesta
    res.json(response.data);
  } catch (error) {
    console.error('Error al llamar a la API de Hugging Face:', error.message);

    // Verificar si es un error de timeout
    if (error.code === 'ECONNABORTED') {
      return res.status(504).json({
        error: 'Timeout al procesar la solicitud',
        details: 'La solicitud tomó demasiado tiempo en completarse'
      });
    }

    // Devolver información detallada del error para depuración
    res.status(error.response?.status || 500).json({
      error: 'Error al procesar la solicitud',
      details: error.response ? {
        status: error.response.status,
        data: error.response.data
      } : error.message
    });
  }
});

// Ruta para OpenRouter (LLM)
app.post('/api/openrouter', async (req, res) => {
  try {
    const { messages, model } = req.body;
    const apiKey = req.headers['x-api-key']; // Obtener el token de la cabecera

    console.log('Headers recibidos:', req.headers);
    console.log('API Key recibida:', apiKey);

    if (!apiKey) {
      return res.status(401).json({ error: 'Se requiere un token de API para OpenRouter' });
    }

    // Verificar que la API key tenga el formato correcto
    if (!apiKey.startsWith('sk-or-')) {
      console.warn('Advertencia: La API key no tiene el formato esperado para OpenRouter (sk-or-...)');
    }

    console.log('Enviando solicitud a OpenRouter:', { model, messagesCount: messages.length });

    // Configurar los headers correctamente según la documentación de OpenRouter
    const headers = {
      'Authorization': `Bearer ${apiKey}`, // Formato correcto: Bearer + espacio + API key
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:4200',
      'X-Title': 'Cámara de Comercio de Magangué'
    };

    console.log('Headers enviados a OpenRouter:', headers);

    // Verificar la validez de la API key antes de hacer la solicitud
    try {
      const keyCheckResponse = await axios.get(
        'https://openrouter.ai/api/v1/auth/key',
        { headers: { 'Authorization': `Bearer ${apiKey}` } }
      );
      console.log('Verificación de API key exitosa:', keyCheckResponse.data);
    } catch (keyError) {
      console.error('Error al verificar la API key:', keyError.message);
      if (keyError.response) {
        console.error('Detalles del error de verificación:', {
          status: keyError.response.status,
          data: keyError.response.data
        });
      }
    }

    // Hacer la solicitud a la API de OpenRouter
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: model || "meta-llama/llama-3.1-8b-instruct:free",
        messages
      },
      { headers }
    );

    console.log('Respuesta recibida de OpenRouter:', {
      status: response.status,
      statusText: response.statusText,
      hasChoices: !!response.data.choices
    });

    // Devolver la respuesta
    res.json(response.data);
  } catch (error) {
    console.error('Error al llamar a OpenRouter:', error.message);

    // Información más detallada sobre el error
    if (error.response) {
      console.error('Detalles del error de respuesta:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      console.error('Error de solicitud (no se recibió respuesta):', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }

    // Devolver información detallada del error para depuración
    res.status(error.response?.status || 500).json({
      error: 'Error al procesar la solicitud a OpenRouter',
      details: error.response ? {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      } : error.message
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor proxy funcionando correctamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor proxy ejecutándose en http://localhost:${PORT}`);
});
