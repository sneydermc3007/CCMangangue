export const environment = {
    production: false,
    HUGGINGFACE_API_KEY: process.env['HUGGINGFACE_API_KEY'] || '', // No incluir el token directamente
    OPENROUTER_API_KEY: process.env['OPENROUTER_API_KEY'] || '', // No incluir el token directamente
    apiUrl: 'http://localhost:4200'
  };