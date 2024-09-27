import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { AsistenteVirtualComponent } from "./components/asistente-virtual/asistente-virtual.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatComponent, AsistenteVirtualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CamaraComercio';

  chatComponentRef: ComponentRef<ChatComponent> | null = null;
  @ViewChild('chatContainer', { read: ViewContainerRef, static: true }) chatContainer!: ViewContainerRef;

  assistantVirtualComponentRef: ComponentRef<AsistenteVirtualComponent> | null = null;
  @ViewChild('assistantVirtualContainer', { read: ViewContainerRef, static: true }) assistantVirtualContainer!: ViewContainerRef;

  constructor() {}

  callBot() {
    console.log('Chat is called');

    this.chatComponentRef = this.chatContainer.createComponent(ChatComponent);
    this.chatComponentRef.instance.isChatOpen = true;
    this.chatComponentRef.instance.onChatHide.subscribe((visible) => {
      if (!visible)
        this.chatComponentRef?.destroy();
    });
  }

  callAssistenteVirtual() {
    console.log('Asistente Virtual is called');

    this.assistantVirtualComponentRef = this.assistantVirtualContainer.createComponent(AsistenteVirtualComponent);
    this.assistantVirtualComponentRef.instance.sidebarVisible = true;
    this.assistantVirtualComponentRef.instance.onSidebarHide.subscribe((visible) => {
      if (!visible)
        this.assistantVirtualComponentRef?.destroy();
    });
  }
}
