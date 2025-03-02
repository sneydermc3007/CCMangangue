import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { ChatService } from '../../services/chat/chat.service';
import { of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

// Mock del servicio ChatService
class MockChatService {
  getAnswer(question: string) {
    if (question.includes('error')) {
      return Promise.resolve({
        text: 'Lo siento, ha ocurrido un error',
        source: 'error'
      });
    } else if (question.toLowerCase().includes('horario')) {
      return Promise.resolve({
        text: 'Nuestro horario es de 8:00 AM a 5:00 PM de lunes a viernes',
        source: 'exact_match'
      });
    } else {
      return Promise.resolve({
        text: 'Respuesta generada por el asistente virtual',
        source: 'rag_chain'
      });
    }
  }
}

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let chatService: ChatService;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatComponent, FormsModule, CommonModule],
      providers: [
        { provide: ChatService, useClass: MockChatService },
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

  // Nuevas pruebas creativas

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

  it('should handle different types of bot responses correctly', async () => {
    // Caso 1: Respuesta exacta
    component.newMessage = '¿Cuál es el horario de atención?';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('exact_match');

    // Caso 2: Respuesta generada
    component.newMessage = '¿Qué servicios ofrecen?';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('rag_chain');

    // Caso 3: Error
    component.newMessage = 'Esto generará un error';
    await component.sendMessage();
    expect(component.messages[component.messages.length - 1].source).toBe('error');
  });

  // Corrigiendo la prueba de sanitización de HTML
  it('should process HTML in bot responses', async () => {
    // Arrange - En realidad el componente no usa bypassSecurityTrustHtml para los mensajes
    // Simplemente muestra el texto como está
    const htmlResponse = '<b>Texto en negrita</b>';
    spyOn(chatService, 'getAnswer').and.returnValue(
      Promise.resolve({
        text: htmlResponse,
        source: 'rag_chain'
      })
    );

    // Act
    component.newMessage = 'Mensaje con HTML';
    await component.sendMessage();
    fixture.detectChanges();

    // Assert - Verificar que el mensaje se agregó correctamente
    expect(component.messages[component.messages.length - 1].text).toBe(htmlResponse);
  });

  // Corrigiendo la prueba de renderizado de mensajes
  it('should render messages in the DOM correctly', async () => {
    // Arrange
    component.newMessage = 'Hola bot';

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Assert - Usar las clases correctas según el HTML
    const messageContainers = fixture.debugElement.queryAll(By.css('.message-container'));

    // Verificar que hay al menos el mensaje inicial + el nuevo mensaje del usuario + respuesta del bot
    expect(messageContainers.length).toBeGreaterThanOrEqual(3);

    // Verificar el contenido de los mensajes
    const userMessageContainer = fixture.debugElement.query(By.css('.user-message'));
    const botMessageContainers = fixture.debugElement.queryAll(By.css('.bot-message'));

    // Debe haber al menos un mensaje de usuario y dos de bot (inicial + respuesta)
    expect(userMessageContainer).toBeTruthy();
    expect(botMessageContainers.length).toBeGreaterThanOrEqual(2);

    // Verificar el texto del mensaje del usuario
    const userMessageText = userMessageContainer.query(By.css('.message-text'));
    expect(userMessageText.nativeElement.textContent).toBe('Hola bot');
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
