# CamaraComercio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Sistema RAG (Retrieval-Augmented Generation)

El proyecto incluye un sistema RAG avanzado para responder preguntas sobre la Cámara de Comercio de Magangué. Este sistema combina búsqueda de información y generación de respuestas utilizando embeddings y modelos de lenguaje.

### Características principales

- **Búsqueda por fases**: El sistema implementa un enfoque por fases que prioriza coincidencias exactas, variantes, coincidencias parciales y palabras clave antes de recurrir a la búsqueda semántica.
- **Embeddings mejorados**: Utiliza el modelo `Xenova/all-MiniLM-L6-v2` para generar embeddings de alta calidad para preguntas, variantes y palabras clave.
- **Base de conocimiento extensa**: Incluye 82 pares de preguntas y respuestas sobre diversos temas relacionados con la Cámara de Comercio.
- **Manejo de errores robusto**: Implementa fallbacks para garantizar que siempre se proporcione una respuesta útil.

### Archivos principales

- `generate-embeddings.js`: Script para generar embeddings a partir del archivo de preguntas y respuestas.
- `src/app/services/chat/chat.service.ts`: Servicio principal que implementa la lógica de búsqueda y respuesta.
- `src/app/services/chat/local-embeddings.ts`: Clase para manejar embeddings locales y búsqueda semántica.
- `public/qa_enhanced_fixed.json`: Base de conocimiento con preguntas, respuestas, variantes y palabras clave.
- `public/embeddings_enhanced.json`: Embeddings generados para la base de conocimiento.

### Cómo funciona

1. **Fase 1: Búsqueda exacta y parcial**
   - Busca coincidencias exactas en preguntas principales
   - Busca coincidencias exactas en variantes de preguntas
   - Busca coincidencias parciales en preguntas
   - Busca coincidencias en palabras clave

2. **Fase 2: Búsqueda semántica con embeddings**
   - Utiliza el vector store para recuperar documentos similares
   - Aplica un umbral de similitud para filtrar resultados irrelevantes
   - Envía los documentos relevantes al RAG chain para generar una respuesta

### Scripts de utilidad

- `test-rag.js`: Script para probar el sistema RAG con consultas específicas.
- `fix-encoding.js`: Script para corregir problemas de codificación en archivos JSON.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
