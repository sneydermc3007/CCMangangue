import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  source?: 'exact_match' | 'rag_chain' | 'error' | 'keyword_match' | 'variant_match' | 'partial_match' | 'clarification_match' | 'clarification_rag';
  timestamp: Date;
  links?: {[key: string]: string};
  htmlContent?: SafeHtml;
  isTyping?: boolean;
  fullText?: string;
  isClarification?: boolean;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnDestroy {
  @Input() isChatOpen = false;
  @Output() onChatHide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('chatMessagesContainer') chatMessagesContainer!: ElementRef;
  @ViewChild('messageTextarea') messageTextarea!: ElementRef;

  botAvatar: string;
  userAvatar: string;
  newMessage = '';
  isLoading = false;
  messages: ChatMessage[] = [
    {
      sender: 'bot',
      text: '¡Hola! Soy Juancho, el asistente virtual de la Cámara de Comercio de Magangué. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ];

  private typingInterval: any;

  constructor(private chatService: ChatService, private sanitizer: DomSanitizer) {
    this.botAvatar = 'data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#3498db"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="20" font-family="Arial">J</text>
      </svg>
    `);

    this.userAvatar = 'data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#95a5a6"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="20" font-family="Arial">U</text>
      </svg>
    `);
    
    // Inicializar el historial de conversación en el servicio con el mensaje de bienvenida
    this.chatService.initializeConversationHistory('¡Hola! Soy Juancho, el asistente virtual de la Cámara de Comercio de Magangué. ¿En qué puedo ayudarte hoy?');
  }

  // Método para ajustar automáticamente la altura del textarea
  adjustTextareaHeight(event: any): void {
    const textarea = event.target;
    
    // Restablecer la altura para calcular correctamente
    textarea.style.height = 'auto';
    
    // Establecer la nueva altura basada en el contenido
    const newHeight = Math.min(textarea.scrollHeight, 120); // Limitar a 120px máximo
    textarea.style.height = `${newHeight}px`;
    
    // Si el contenido es pequeño, volver a la altura mínima
    if (textarea.value.length === 0) {
      textarea.style.height = '40px';
    }
  }

  async sendMessage() {
    if (this.newMessage.trim()) {
      // Verificar si es una aclaración
      const isClarification = this.checkIfClarification(this.newMessage.trim().toLowerCase());
      
      // Guardar el mensaje del usuario
      const userMessage = this.newMessage.trim();
      
      // Verificar si es un saludo simple
      const isSimpleGreeting = /^(hola|buenos dias|buenas tardes|buenas noches|saludos|hey)$/i.test(userMessage);
      
      // Añadir el mensaje del usuario a la interfaz
      this.messages.push({
        sender: 'user',
        text: userMessage,
        timestamp: new Date(),
        isClarification
      });

      this.scrollToBottom();

      this.newMessage = '';
      
      // Restablecer la altura del textarea después de enviar el mensaje
      this.resetTextareaHeight();
      
      this.isLoading = true;

      try {
        const response = await this.chatService.getAnswer(userMessage);

        // Si la respuesta es idéntica al mensaje de bienvenida y no es el primer mensaje, no mostrarla
        const isWelcomeMessageDuplicate = 
          this.messages.length > 2 && 
          response.text === this.messages[0].text && 
          !isSimpleGreeting;
        
        if (isWelcomeMessageDuplicate) {
          console.log('Evitando duplicar mensaje de bienvenida');
          // Intentar obtener una respuesta diferente
          const newResponse = await this.chatService.getAnswer(userMessage + " (por favor, dame información específica)");
          
          // Usar la nueva respuesta si es diferente, o una respuesta genérica si sigue siendo igual
          if (newResponse.text !== this.messages[0].text) {
            response.text = newResponse.text;
            response.source = newResponse.source;
            response.links = newResponse.links;
          } else {
            response.text = "Lo siento, no he entendido tu consulta. ¿Podrías reformularla o ser más específico?";
            response.source = "fallback";
            response.links = undefined;
          }
        }

        // Verificar si el mensaje debe mostrar enlaces
        const shouldShowLinks = this.shouldShowLinks(response);

        const botMessage: ChatMessage = {
          sender: 'bot',
          text: '',
          fullText: response.text,
          source: response.source,
          timestamp: new Date(),
          isTyping: true,
          isClarification: response.source === 'clarification_match' || response.source === 'clarification_rag'
        };

        // Solo procesar enlaces si existen y son relevantes para este tipo de mensaje
        if (response.links && shouldShowLinks) {
          botMessage.links = response.links;

          let htmlContent = response.text;

          if (Object.keys(response.links).length > 0) {
            htmlContent += '<br><br><strong>Enlaces de interés:</strong><ul>';

            for (const [key, url] of Object.entries(response.links)) {
              const formattedKey = key
                .replace(/_/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              htmlContent += `<li><a href="${url}" target="_blank">${formattedKey}</a></li>`;
            }

            htmlContent += '</ul>';
          }

          botMessage.fullText = htmlContent;
          botMessage.htmlContent = this.sanitizer.bypassSecurityTrustHtml('&nbsp;');
        } else {
          // Si no hay enlaces o no son relevantes, usar texto plano
          botMessage.text = response.text;
          botMessage.fullText = response.text;
        }

        this.messages.push(botMessage);
        
        this.scrollToBottom();

        this.startTypingEffect(this.messages.length - 1);
      } catch (error) {
        console.error('Error al obtener respuesta:', error);
        
        this.messages.push({
          sender: 'bot',
          text: 'Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta de nuevo más tarde.',
          source: 'error',
          timestamp: new Date()
        });
        
        this.scrollToBottom();
      } finally {
        this.isLoading = false;
      }
    }
  }

  startTypingEffect(messageIndex: number) {
    const message = this.messages[messageIndex];
    if (!message || !message.fullText) return;

    const fullText = message.fullText;
    let currentIndex = 0;
    const typingSpeed = 15;

    // Limpiar cualquier intervalo existente
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.typingInterval = null;
    }

    // Función para manejar el contenido HTML de manera segura
    const updateMessageContent = (text: string) => {
      if (message.htmlContent !== undefined) {
        // Para contenido HTML, asegurarse de que nunca esté vacío
        const safeHtml = text.trim() ? text : '&nbsp;';
        message.htmlContent = this.sanitizer.bypassSecurityTrustHtml(safeHtml);
      } else {
        // Para texto plano
        message.text = text;
      }
      
      // Forzar detección de cambios
      setTimeout(() => {
        this.scrollToBottom();
      }, 0);
    };

    // Inicializar con contenido vacío
    updateMessageContent(message.htmlContent !== undefined ? '&nbsp;' : '');

    // Iniciar el efecto de escritura
    this.typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        const currentText = fullText.substring(0, currentIndex);
        updateMessageContent(currentText);
        currentIndex++;
      } else {
        // Finalizar el efecto de escritura
        message.isTyping = false;
        clearInterval(this.typingInterval);
        this.typingInterval = null;
        
        // Asegurarse de que el contenido final esté correctamente establecido
        updateMessageContent(fullText);
      }
    }, typingSpeed);
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.chatMessagesContainer) {
        const element = this.chatMessagesContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }
    }, 0);
  }

  closeChat() {
    this.isChatOpen = false;
    this.onChatHide.emit(false);
  }

  handleKeyPress(event: KeyboardEvent) {
    // Ajustar la altura del textarea cuando se presiona una tecla
    this.adjustTextareaHeight(event);
    
    // Enviar mensaje con Enter (sin Shift)
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  // Función para verificar si un mensaje es una aclaración
  private checkIfClarification(message: string): boolean {
    const clarificationPatterns = [
      'no entendiste',
      'no has entendido',
      'no respondiste',
      'no has respondido',
      'no es lo que pregunté',
      'no es lo que te pregunté',
      'pregunté',
      'te pregunté',
      'mi pregunta fue',
      'mi pregunta era',
      'responde a mi pregunta',
      'no es correcto',
      'no es correcta',
      'no es eso',
      'no es esa',
      'no es lo que busco',
      'no es lo que buscaba',
      'estoy preguntando',
      'quiero saber cómo',
      'quiero saber el proceso'
    ];
    
    return clarificationPatterns.some(pattern => message.includes(pattern));
  }

  // Función para determinar si un mensaje debe mostrar enlaces
  private shouldShowLinks(response: any): boolean {
    // No mostrar enlaces para mensajes de saludo o agradecimiento
    if (!response.links || Object.keys(response.links).length === 0) {
      return false;
    }

    // Verificar si es un mensaje de saludo
    const saludoPatterns = ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos'];
    const isGreeting = saludoPatterns.some(pattern => 
      response.text.toLowerCase().includes(pattern)
    );

    // Verificar si es un mensaje de agradecimiento
    const agradecimientoPatterns = ['de nada', 'gracias', 'agradec'];
    const isThanks = agradecimientoPatterns.some(pattern => 
      response.text.toLowerCase().includes(pattern)
    );

    // Verificar si es un mensaje de error o fallback
    const isErrorOrFallback = response.source === 'error' || response.source === 'fallback';

    // No mostrar enlaces para saludos, agradecimientos o errores
    return !(isGreeting || isThanks || isErrorOrFallback);
  }

  // Método para restablecer la altura del textarea
  resetTextareaHeight(): void {
    if (this.messageTextarea) {
      const textarea = this.messageTextarea.nativeElement;
      textarea.style.height = '40px';
    }
  }
}
