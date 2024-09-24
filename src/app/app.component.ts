import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CamaraComercio';

  chatComponentRef: ComponentRef<ChatComponent> | null = null;
  @ViewChild('chatContainer', { read: ViewContainerRef, static: true }) chatContainer!: ViewContainerRef;

  constructor() {}

  callBot() {
    console.log('Bot is called');

    if (this.chatComponentRef) {
      this.chatComponentRef.destroy();
      this.chatComponentRef = null;
    } else {
      this.chatComponentRef = this.chatContainer.createComponent(ChatComponent);
      this.chatComponentRef.instance.isChatOpen = true;
    }
  }
}
