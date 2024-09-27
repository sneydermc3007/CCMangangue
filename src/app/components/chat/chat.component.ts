import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
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
export class ChatComponent implements OnDestroy {
  @Input() isChatOpen = false;
  @Output() onChatHide: EventEmitter<boolean> = new EventEmitter<boolean>();

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
    this.onChatHide.emit(false);
  }

  ngOnDestroy() {
    console.log('Chat is destroyed');
  }
}
