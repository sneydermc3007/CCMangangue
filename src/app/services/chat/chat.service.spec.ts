import { TestBed } from '@angular/core/testing';
import { ChatService } from './chat.service';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    // Mock de fetch global
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve({
          'Q&A': [
            {
              pregunta: '¿Cuáles son los horarios de atención?',
              respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
            },
            {
              pregunta: '¿Dónde están ubicados?',
              respuesta: 'Estamos ubicados en la Calle Principal #123, Magangué, Bolívar.'
            },
            {
              pregunta: '¿Qué documentos necesito para registrar mi empresa?',
              respuesta: 'Para registrar su empresa necesita: 1) Formulario RUES, 2) Documento de identidad, 3) RUT, 4) Pago de derechos de registro.'
            }
          ]
        })
      } as any)
    );

    TestBed.configureTestingModule({
      providers: [ChatService]
    });

    service = TestBed.inject(ChatService);

    // Sobrescribir el método de inicialización para evitar llamadas reales
    spyOn<any>(service, 'initializeVectorStore').and.returnValue(Promise.resolve());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return exact match when question exists in QA data', async () => {
    // Arrange - Configurar el servicio con datos de prueba
    (service as any).qaData = [
      {
        pregunta: '¿Cuáles son los horarios de atención?',
        respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
      }
    ];

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    // Act
    const result = await service.getAnswer('¿Cuáles son los horarios de atención?');

    // Assert
    expect(result.text).toBe('Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.');
    expect(result.source).toBe('exact_match');
  });

  it('should use RAG chain when no exact match is found', async () => {
    // Arrange
    (service as any).qaData = [
      {
        pregunta: '¿Cuáles son los horarios de atención?',
        respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
      }
    ];

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([{ pageContent: 'Contenido relevante' }]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    (service as any).ragChain = jasmine.createSpyObj('ragChain', ['invoke']);
    (service as any).ragChain.invoke.and.returnValue(Promise.resolve('Respuesta generada por RAG'));

    // Act
    const result = await service.getAnswer('¿Dónde están ubicados?');

    // Assert
    expect(result.text).toBe('Respuesta generada por RAG');
    expect(result.source).toBe('rag_chain');
  });

  it('should handle errors gracefully', async () => {
    // Arrange
    (service as any).vectorStore = null; // Forzar un error

    // Act
    const result = await service.getAnswer('¿Pregunta de prueba?');

    // Assert
    expect(result.text).toContain('Lo siento, ocurrió un error');
    expect(result.source).toBe('error');
  });

  // Nuevas pruebas creativas

  it('should be case insensitive when matching questions', async () => {
    // Arrange
    (service as any).qaData = [
      {
        pregunta: '¿Cuáles son los horarios de atención?',
        respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
      }
    ];

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    // Act - Pregunta con diferente capitalización
    const result = await service.getAnswer('¿cuáles SON los HORARIOS de atención?');

    // Assert
    expect(result.text).toBe('Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.');
    expect(result.source).toBe('exact_match');
  });

  it('should handle questions with typos or similar wording', async () => {
    // Arrange
    (service as any).qaData = [
      {
        pregunta: '¿Cuáles son los horarios de atención?',
        respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
      }
    ];

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([
      {
        pageContent: 'Pregunta: ¿Cuáles son los horarios de atención?\nRespuesta: Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.',
        metadata: { type: 'qa' }
      }
    ]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    (service as any).ragChain = jasmine.createSpyObj('ragChain', ['invoke']);
    (service as any).ragChain.invoke.and.returnValue(Promise.resolve('Nuestros horarios de atención son de lunes a viernes, 8:00 AM a 5:00 PM.'));

    // Act - Pregunta con error tipográfico
    const result = await service.getAnswer('¿Cuales son los horaios de atencion?');

    // Assert
    expect(result.source).toBe('rag_chain');
    expect(result.text).toContain('horarios');
  });

  it('should handle empty or very short questions', async () => {
    // Act
    const result1 = await service.getAnswer('');
    const result2 = await service.getAnswer('?');
    const result3 = await service.getAnswer('Hola');

    // Assert
    expect(result1.source).toBe('error');
    expect(result2.source).toBe('error');
    expect(result3.source).toBe('rag_chain');
  });

  it('should handle questions in different languages', async () => {
    // Arrange
    (service as any).qaData = [
      {
        pregunta: '¿Cuáles son los horarios de atención?',
        respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
      }
    ];

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([{ pageContent: 'Contenido relevante' }]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    (service as any).ragChain = jasmine.createSpyObj('ragChain', ['invoke']);
    (service as any).ragChain.invoke.and.returnValue(Promise.resolve('Our office hours are Monday to Friday from 8:00 AM to 5:00 PM.'));

    // Act - Pregunta en inglés
    const result = await service.getAnswer('What are your office hours?');

    // Assert
    expect(result.source).toBe('rag_chain');
    expect(result.text).toContain('office hours');
  });

  it('should handle multiple questions in the same query', async () => {
    // Arrange
    (service as any).qaData = [
      {
        pregunta: '¿Cuáles son los horarios de atención?',
        respuesta: 'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM.'
      },
      {
        pregunta: '¿Dónde están ubicados?',
        respuesta: 'Estamos ubicados en la Calle Principal #123, Magangué, Bolívar.'
      }
    ];

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([
      { pageContent: 'Información sobre horarios y ubicación' }
    ]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    (service as any).ragChain = jasmine.createSpyObj('ragChain', ['invoke']);
    (service as any).ragChain.invoke.and.returnValue(Promise.resolve(
      'Nuestros horarios son de lunes a viernes de 8:00 AM a 5:00 PM. Estamos ubicados en la Calle Principal #123, Magangué, Bolívar.'
    ));

    // Act
    const result = await service.getAnswer('¿Cuáles son los horarios y dónde están ubicados?');

    // Assert
    expect(result.source).toBe('rag_chain');
    expect(result.text).toContain('horarios');
    expect(result.text).toContain('ubicados');
  });

  it('should handle very long questions', async () => {
    // Arrange
    const longQuestion = 'Necesito saber ' + 'información '.repeat(100) + ' sobre los horarios';

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([{ pageContent: 'Contenido relevante' }]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    (service as any).ragChain = jasmine.createSpyObj('ragChain', ['invoke']);
    (service as any).ragChain.invoke.and.returnValue(Promise.resolve('Respuesta a pregunta larga'));

    // Act
    const result = await service.getAnswer(longQuestion);

    // Assert
    expect(result.source).toBe('rag_chain');
    expect(result.text).toBe('Respuesta a pregunta larga');
  });

  it('should handle special characters and emojis in questions', async () => {
    // Arrange
    const questionWithSpecialChars = '¿Horarios? 🕒 #atención @cámara';

    const mockRetriever = jasmine.createSpyObj('retriever', ['invoke']);
    mockRetriever.invoke.and.returnValue(Promise.resolve([{ pageContent: 'Contenido relevante' }]));

    (service as any).vectorStore = jasmine.createSpyObj('vectorStore', ['asRetriever']);
    (service as any).vectorStore.asRetriever.and.returnValue(mockRetriever);

    (service as any).ragChain = jasmine.createSpyObj('ragChain', ['invoke']);
    (service as any).ragChain.invoke.and.returnValue(Promise.resolve('Respuesta a pregunta con caracteres especiales'));

    // Act
    const result = await service.getAnswer(questionWithSpecialChars);

    // Assert
    expect(result.source).toBe('rag_chain');
    expect(result.text).toBe('Respuesta a pregunta con caracteres especiales');
  });
});
