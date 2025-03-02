import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ChatService } from './chat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Mock para el archivo JSON de preguntas y respuestas
const mockQAData = {
  'Q&A': [
    {
      id: '1',
      pregunta: '¿Cómo puedo convertirme en miembro de la Cámara de Comercio de Magangué?',
      respuesta: 'Puedes registrarte como miembro completando el formulario de inscripción en nuestro sitio web o visitando nuestras oficinas.',
      categoria: 'Membresía',
      keywords: ['registro', 'miembro', 'inscripción', 'nuevo miembro', 'afiliación'],
      relevancia: 5,
      metadata: {
        tipo_servicio: 'Registro',
        requiere_documentos: true,
        canal: ['web', 'presencial']
      },
      links: {
        formulario_inscripcion: '/registros/mercantil',
        requisitos: '/registros/unico-proponentes',
        tarifas: '/tarifas'
      },
      variantes: [
        '¿Cuál es el proceso para hacerme miembro de la Cámara de Comercio?',
        '¿Dónde puedo inscribirme como miembro de la Cámara de Comercio de Magangué?',
        '¿Qué pasos debo seguir para afiliarme a la Cámara de Comercio?',
        'Quiero ser parte de la Cámara de Comercio, ¿cómo lo hago?',
        '¿Cómo afiliarse a la Cámara de Comercio de Magangué?'
      ]
    },
    {
      id: '2',
      pregunta: '¿Cuáles son los beneficios de ser miembro?',
      respuesta: 'Los beneficios incluyen acceso a eventos exclusivos, oportunidades de networking, recursos empresariales y representación ante entidades gubernamentales.',
      categoria: 'Membresía',
      keywords: ['beneficios', 'ventajas', 'servicios', 'miembro', 'privilegios'],
      relevancia: 5,
      metadata: {
        tipo_servicio: 'Información',
        requiere_documentos: false,
        canal: ['web', 'presencial', 'telefónico']
      },
      links: {
        beneficios_detallados: '/camara/informacion',
        eventos: '/calendario'
      },
      variantes: [
        '¿Qué ventajas tiene ser miembro de la Cámara de Comercio?',
        '¿Por qué debería afiliarme a la Cámara de Comercio?',
        '¿Qué gano al ser miembro de la Cámara de Comercio?',
        'Ventajas de afiliarse a la Cámara de Comercio'
      ]
    },
    {
      id: '3',
      pregunta: '¿Cuál es el horario de atención?',
      respuesta: 'Nuestro horario de atención es de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM.',
      categoria: 'Información General',
      keywords: ['horario', 'atención', 'oficina', 'servicio'],
      relevancia: 4,
      metadata: {
        tipo_servicio: 'Información',
        requiere_documentos: false,
        canal: ['web', 'presencial', 'telefónico']
      },
      links: {},
      variantes: [
        '¿A qué hora abren?',
        '¿A qué hora cierran?',
        '¿Cuándo puedo ir a la Cámara de Comercio?',
        'Horarios de atención'
      ]
    }
  ]
};

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatService]
    });
    service = TestBed.inject(ChatService);

    // Mock de fetch global
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockQAData),
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers(),
        redirected: false,
        type: 'basic',
        url: '/qa_enhanced_fixed.json',
        clone: () => ({} as Response),
        body: null,
        bodyUsed: false,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
        blob: () => Promise.resolve(new Blob()),
        formData: () => Promise.resolve(new FormData()),
        text: () => Promise.resolve('')
      } as Response)
    );

    // Espiar y mockear el método initializeVectorStore para evitar su ejecución real
    spyOn<any>(service, 'initializeVectorStore').and.returnValue(Promise.resolve());

    // Establecer manualmente los datos de QA
    (service as any).qaData = mockQAData['Q&A'];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAnswer', () => {
    it('should find exact match for question', async () => {
      // Arrange
      const question = '¿Cuál es el horario de atención?';

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.text).toBe('Nuestro horario de atención es de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM.');
      expect(result.source).toBe('exact_match');
      expect(result.categoria).toBe('Información General');
    });

    it('should find match in question variants', async () => {
      // Arrange
      const question = '¿Qué ventajas tiene ser miembro de la Cámara de Comercio?';

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.text).toBe('Los beneficios incluyen acceso a eventos exclusivos, oportunidades de networking, recursos empresariales y representación ante entidades gubernamentales.');
      expect(result.source).toBe('variant_match');
      expect(result.categoria).toBe('Membresía');
    });

    it('should find partial match in questions', async () => {
      // Arrange
      const question = 'horario atención';

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.text).toBe('Nuestro horario de atención es de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM.');
      expect(result.source).toBe('partial_match');
    });

    it('should find match in keywords', async () => {
      // Arrange
      const question = 'ventajas privilegios';

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.text).toBe('Los beneficios incluyen acceso a eventos exclusivos, oportunidades de networking, recursos empresariales y representación ante entidades gubernamentales.');
      expect(result.source).toBe('keyword_match');
    });

    it('should include links in response when available', async () => {
      // Arrange
      const question = '¿Cómo puedo convertirme en miembro de la Cámara de Comercio de Magangué?';

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.links).toBeDefined();
      expect(Object.keys(result.links).length).toBe(3);
      expect(result.links.formulario_inscripcion).toBe('/registros/mercantil');
      expect(result.links.requisitos).toBe('/registros/unico-proponentes');
      expect(result.links.tarifas).toBe('/tarifas');
    });

    it('should not include links property when no links are available', async () => {
      // Arrange
      const question = '¿Cuál es el horario de atención?';

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.links).toBeUndefined();
    });

    it('should use RAG chain for unknown questions', async () => {
      // Arrange
      const question = '¿Qué es una pregunta completamente desconocida?';

      // Mock del vectorStore y ragChain
      (service as any).vectorStore = {
        asRetriever: () => ({
          invoke: () => Promise.resolve([])
        })
      };

      (service as any).ragChain = {
        invoke: () => Promise.resolve('Respuesta generada por el modelo de IA')
      };

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.source).toBe('rag_chain');
      expect(result.text).toBe('Respuesta generada por el modelo de IA');
    });

    it('should return fallback response when no relevant documents found', async () => {
      // Arrange
      const question = '¿Qué es una pregunta completamente desconocida?';

      // Mock del vectorStore sin documentos relevantes
      (service as any).vectorStore = {
        asRetriever: () => ({
          invoke: () => Promise.resolve([])
        })
      };

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.source).toBe('fallback');
      expect(result.text).toContain('Lo siento, no tengo información específica');
    });

    it('should handle errors gracefully', async () => {
      // Arrange
      const question = '¿Pregunta que genera error?';

      // Forzar un error
      (service as any).vectorStore = null;

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.source).toBe('error');
      expect(result.text).toContain('Lo siento, ocurrió un error');
    });

    it('should handle authentication errors specifically', async () => {
      // Arrange
      const question = '¿Pregunta que genera error de autenticación?';

      // Forzar un error de autenticación
      (service as any).vectorStore = {
        asRetriever: () => {
          throw new Error('401 Unauthorized: Authentication failed');
        }
      };

      // Act
      const result = await service.getAnswer(question);

      // Assert
      expect(result.source).toBe('error');
      expect(result.errorType).toBe('authentication');
      expect(result.text).toContain('Error de autenticación');
    });
  });

  // Pruebas para verificar el comportamiento con diferentes tipos de preguntas
  describe('Question handling', () => {
    it('should handle questions about registration correctly', async () => {
      // Arrange & Act
      const result = await service.getAnswer('¿Cómo me registro en la Cámara de Comercio?');

      // Assert
      expect(result.text).toContain('formulario de inscripción');
      expect(result.categoria).toBe('Membresía');
    });

    it('should handle questions about benefits correctly', async () => {
      // Arrange & Act
      const result = await service.getAnswer('¿Qué beneficios obtengo?');

      // Assert
      expect(result.text).toContain('eventos exclusivos');
      expect(result.categoria).toBe('Membresía');
    });

    it('should handle questions about schedule correctly', async () => {
      // Arrange & Act
      const result = await service.getAnswer('¿A qué hora abren?');

      // Assert
      expect(result.text).toContain('8:00 AM a 12:00 PM');
      expect(result.categoria).toBe('Información General');
    });
  });
});
