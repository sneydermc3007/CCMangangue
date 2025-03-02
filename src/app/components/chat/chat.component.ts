import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  source?: 'exact_match' | 'rag_chain' | 'error' | 'keyword_match' | 'variant_match' | 'partial_match';
  timestamp: Date;
  links?: {[key: string]: string};
  htmlContent?: SafeHtml;
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

  constructor(private chatService: ChatService, private sanitizer: DomSanitizer) {
    // Avatar del bot (azul)
    this.botAvatar = 'data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#3498db"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="20" font-family="Arial">J</text>
      </svg>
    `);

    // Avatar del usuario (gris)
    this.userAvatar = 'data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#95a5a6"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="20" font-family="Arial">U</text>
      </svg>
    `);
  }

  async sendMessage() {
    if (this.newMessage.trim()) {
      // Agregar mensaje del usuario
      this.messages.push({
        sender: 'user',
        text: this.newMessage,
        timestamp: new Date()
      });

      const userMessage = this.newMessage;
      this.newMessage = '';
      this.isLoading = true;

      try {
        const response = await this.chatService.getAnswer(userMessage);

        // Crear mensaje del bot
        const botMessage: ChatMessage = {
          sender: 'bot',
          text: response.text,
          source: response.source,
          timestamp: new Date()
        };

        // Agregar enlaces si existen
        if (response.links) {
          botMessage.links = response.links;

          // Convertir el texto con enlaces en HTML seguro
          let htmlContent = response.text;

          // Agregar sección de enlaces si hay links disponibles
          if (Object.keys(response.links).length > 0) {
            htmlContent += '<br><br><strong>Enlaces de interés:</strong><ul>';

            for (const [key, url] of Object.entries(response.links)) {
              // Formatear la clave para mostrarla más amigable
              const formattedKey = key
                .replace(/_/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              htmlContent += `<li><a href="${url}" target="_blank">${formattedKey}</a></li>`;
            }

            htmlContent += '</ul>';
          }

          botMessage.htmlContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
        }

        // Agregar respuesta del bot
        this.messages.push(botMessage);
      } catch (error) {
        console.error('Error al obtener respuesta:', error);
        this.messages.push({
          sender: 'bot',
          text: 'Lo siento, ocurrió un error al procesar tu pregunta. Por favor, intenta de nuevo.',
          source: 'error',
          timestamp: new Date()
        });
      } finally {
        this.isLoading = false;
      }
    }
  }

  closeChat() {
    this.onChatHide.emit(false);
  }

  // Método para manejar la tecla Enter
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  ngOnDestroy() {
    console.log('Chat component destroyed');
  }
}
