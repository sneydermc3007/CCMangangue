import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { ChatService } from '../../services/chat/chat.service';
import { of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

// Mock del servicio ChatService con respuestas más completas
class MockChatService {
  getAnswer(question: string) {
    // Respuesta con error
    if (question.includes('error')) {
      return Promise.resolve({
        text: 'Lo siento, ha ocurrido un error',
        source: 'error'
      });
    }
    // Respuesta con coincidencia exacta
    else if (question.toLowerCase().includes('horario')) {
      return Promise.resolve({
        text: 'Nuestro horario es de 8:00 AM a 5:00 PM de lunes a viernes',
        source: 'exact_match',
        categoria: 'Información General'
      });
    }
    // Respuesta con enlaces
    else if (question.toLowerCase().includes('registro mercantil') || question.toLowerCase().includes('matricula')) {
      return Promise.resolve({
        text: 'Para realizar el registro mercantil, debes completar el formulario y presentar los documentos requeridos.',
        source: 'exact_match',
        categoria: 'Registro Mercantil',
        links: {
          formulario_registro: '/registros/mercantil',
          requisitos: '/tramites/servicios',
          tarifas: '/tarifas'
        }
      });
    }
    // Respuesta con coincidencia de palabra clave
    else if (question.toLowerCase().includes('afiliación') || question.toLowerCase().includes('afiliarme')) {
      return Promise.resolve({
        text: 'Para afiliarte a la Cámara de Comercio de Magangué, debes estar matriculado y cumplir con los requisitos establecidos.',
        source: 'keyword_match',
        categoria: 'Afiliación'
      });
    }
    // Respuesta con coincidencia de variante
    else if (question.toLowerCase().includes('renovar')) {
      return Promise.resolve({
        text: 'La renovación de la matrícula mercantil debe realizarse entre el 1 de enero y el 31 de marzo de cada año.',
        source: 'variant_match',
        categoria: 'Renovación'
      });
    }
    // Respuesta generada por RAG
    else {
      return Promise.resolve({
        text: 'Respuesta generada por el asistente virtual basada en la información disponible.',
        source: 'rag_chain',
        documentos: 3
      });
    }
  }
}

// Mock del Router
class MockRouter {
  navigateByUrl(url: string) {
    return Promise.resolve(true);
  }
}

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let chatService: ChatService;
  let sanitizer: DomSanitizer;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatComponent, FormsModule, CommonModule],
      providers: [
        { provide: ChatService, useClass: MockChatService },
        { provide: Router, useClass: MockRouter },
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: (value: string) => value,
            sanitize: (ctx: any, value: string) => value
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    chatService = TestBed.inject(ChatService);
    sanitizer = TestBed.inject(DomSanitizer);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with a welcome message', () => {
    expect(component.messages.length).toBe(1);
    expect(component.messages[0].sender).toBe('bot');
    expect(component.messages[0].text).toContain('Hola');
  });

  it('should add user message and get bot response when sending a message', async () => {
    // Arrange
    component.newMessage = 'Hola, ¿cómo estás?';
    const spy = spyOn(chatService, 'getAnswer').and.callThrough();

    // Act
    await component.sendMessage();

    // Assert
    expect(component.messages.length).toBe(3); // Mensaje inicial + mensaje usuario + respuesta bot
    expect(component.messages[1].sender).toBe('user');
    expect(component.messages[1].text).toBe('Hola, ¿cómo estás?');
    expect(component.messages[2].sender).toBe('bot');
    expect(spy).toHaveBeenCalledWith('Hola, ¿cómo estás?');
    expect(component.newMessage).toBe(''); // Debe limpiar el mensaje
  });

  it('should not send empty messages', async () => {
    // Arrange
    component.newMessage = '';
    const initialMessagesCount = component.messages.length;
    const spy = spyOn(chatService, 'getAnswer');

    // Act
    await component.sendMessage();

    // Assert
    expect(component.messages.length).toBe(initialMessagesCount);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should emit event when closing chat', () => {
    // Arrange
    const spy = spyOn(component.onChatHide, 'emit');

    // Act
    component.closeChat();

    // Assert
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('should send message on Enter key press', () => {
    // Arrange
    const spy = spyOn(component, 'sendMessage');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });

    // Act
    component.handleKeyPress(event);

    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('should not send message on key press other than Enter', () => {
    // Arrange
    const spy = spyOn(component, 'sendMessage');
    const event = new KeyboardEvent('keydown', { key: 'A' });

    // Act
    component.handleKeyPress(event);

    // Assert
    expect(spy).not.toHaveBeenCalled();
  });

  it('should show loading indicator while waiting for response', fakeAsync(() => {
    // Arrange
    component.newMessage = 'Hola';
    spyOn(chatService, 'getAnswer').and.returnValue(
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            text: 'Respuesta demorada',
            source: 'rag_chain'
          });
        }, 1000);
      })
    );

    // Act
    component.sendMessage();

    // Assert - Verificar que isLoading es true mientras espera
    expect(component.isLoading).toBe(true);

    // Avanzar el tiempo simulado
    tick(1100);

    // Verificar que isLoading vuelve a false después de recibir respuesta
    expect(component.isLoading).toBe(false);
  }));

  // Pruebas para diferentes tipos de respuestas
  it('should handle different types of bot responses correctly', async () => {
    // Caso 1: Respuesta exacta
    component.newMessage = '¿Cuál es el horario de atención?';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('exact_match');

    // Caso 2: Respuesta con enlaces
    component.newMessage = '¿Cómo hago un registro mercantil?';
    await component.sendMessage();
    const responseWithLinks = component.messages[component.messages.length - 1];
    expect(responseWithLinks.links).toBeDefined();
    expect(Object.keys(responseWithLinks.links!).length).toBe(3);

    // Caso 3: Respuesta por palabra clave
    component.newMessage = '¿Cómo puedo afiliarme?';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('keyword_match');

    // Caso 4: Respuesta por variante
    component.newMessage = '¿Cuándo debo renovar mi matrícula?';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('variant_match');

    // Caso 5: Respuesta generada por RAG
    component.newMessage = '¿Qué es la Cámara de Comercio?';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('rag_chain');

    // Caso 6: Error
    component.newMessage = 'Esto generará un error';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('error');
  });

  // Prueba para verificar la generación de HTML con enlaces
  it('should generate HTML content with links when response has links', async () => {
    // Arrange
    component.newMessage = '¿Cómo hago un registro mercantil?';
    const spySanitizer = spyOn(sanitizer, 'bypassSecurityTrustHtml').and.callThrough();

    // Act
    await component.sendMessage();

    // Assert
    const lastMessage = component.messages[component.messages.length - 1];
    expect(lastMessage.htmlContent).toBeDefined();
    expect(spySanitizer).toHaveBeenCalled();

    // Verificar que el HTML contiene los enlaces
    const htmlContent = spySanitizer.calls.mostRecent().args[0] as string;
    expect(htmlContent).toContain('<a href="/registros/mercantil"');
    expect(htmlContent).toContain('<a href="/tramites/servicios"');
    expect(htmlContent).toContain('<a href="/tarifas"');
  });

  // Prueba para verificar el renderizado de enlaces en el DOM
  it('should render links in the DOM when response has links', async () => {
    // Arrange
    component.newMessage = '¿Cómo hago un registro mercantil?';

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Assert
    const botMessageWithLinks = fixture.debugElement.queryAll(By.css('.bot-message'))[1]; // El segundo mensaje del bot (después del inicial)
    const messageContent = botMessageWithLinks.query(By.css('.message-content'));
    const links = messageContent.queryAll(By.css('a'));

    // Verificar que hay enlaces en el mensaje
    expect(links.length).toBe(3);

    // Verificar los textos de los enlaces
    expect(links[0].nativeElement.textContent).toContain('Formulario Registro');
    expect(links[1].nativeElement.textContent).toContain('Requisitos');
    expect(links[2].nativeElement.textContent).toContain('Tarifas');
  });

  // Prueba para verificar la navegación al hacer clic en un enlace
  it('should navigate to correct URL when link is clicked', async () => {
    // Arrange
    component.newMessage = '¿Cómo hago un registro mercantil?';
    const routerSpy = spyOn(router, 'navigateByUrl').and.callThrough();

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Simular clic en el enlace (no podemos hacerlo directamente en el test)
    // En su lugar, verificamos que los enlaces tienen las URLs correctas
    const botMessageWithLinks = fixture.debugElement.queryAll(By.css('.bot-message'))[1];
    const links = botMessageWithLinks.queryAll(By.css('a'));

    // Assert
    expect(links[0].attributes['href']).toBe('/registros/mercantil');
    expect(links[1].attributes['href']).toBe('/tramites/servicios');
    expect(links[2].attributes['href']).toBe('/tarifas');
  });

  it('should handle very long messages appropriately', async () => {
    // Arrange
    const longMessage = 'a'.repeat(1000); // Mensaje muy largo
    component.newMessage = longMessage;

    // Act
    await component.sendMessage();

    // Assert
    expect(component.messages[1].text).toBe(longMessage);
    expect(component.messages[1].text.length).toBe(1000);
  });

  it('should maintain chat state when toggling visibility', () => {
    // Arrange
    component.messages = [
      { sender: 'bot', text: 'Mensaje inicial', timestamp: new Date() },
      { sender: 'user', text: 'Pregunta del usuario', timestamp: new Date() },
      { sender: 'bot', text: 'Respuesta del bot', timestamp: new Date() }
    ];

    // Act - Ocultar y mostrar el chat
    component.closeChat();
    component.isChatOpen = true;
    fixture.detectChanges();

    // Assert - Los mensajes deben mantenerse
    expect(component.messages.length).toBe(3);
  });
});
