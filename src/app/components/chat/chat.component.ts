import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() isChatOpen = false;
  newMessage = '';
  messages = [{ sender: 'bot', text: 'Hello! How can I help you?' }];

  constructor() {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.newMessage });
      this.newMessage = '';
      setTimeout(() => {
        this.messages.push({ sender: 'bot', text: 'Esto es una respuesta automática' });
      }, 1500);
    }
  }

  closeChat() {
    this.isChatOpen = false;
  }
}
