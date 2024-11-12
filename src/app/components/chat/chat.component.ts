import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';

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

  newMessage = '';
  messages = [{ sender: 'bot', text: 'Hola! Soy Juancho, el bot. ¿Cómo puedo ayudarte hoy?' }];

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.newMessage });
      const userMessage = this.newMessage;
      this.newMessage = '';

      // Llamada al servicio para obtener la respuesta
      this.chatService.getAnswer(userMessage)
        .then((response: any) => {
          this.messages.push({ sender: 'bot', text: response.text });
        })
        .catch((error: any) => {
          console.error('Error al obtener respuesta:', error);
          this.messages.push({ sender: 'bot', text: 'Lo siento, no pude obtener una respuesta.' });
        });
    }
  }

  closeChat() {
    this.onChatHide.emit(false);
  }

  ngOnDestroy() {
    console.log('Chat is destroyed');
  }
}
