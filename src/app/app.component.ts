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
    if (this.chatComponentRef) {
      this.chatComponentRef.destroy();
      this.chatComponentRef = null;
    } else {
      this.chatComponentRef = this.chatContainer.createComponent(ChatComponent);
      this.chatComponentRef.instance.isChatOpen = true;
    }
  }

  callAssistenteVirtual() {
    console.log('Asistente Virtual is called');

    if (this.assistantVirtualComponentRef) {
      this.assistantVirtualComponentRef.destroy();
      this.assistantVirtualComponentRef = null;
    } else {
      this.assistantVirtualComponentRef = this.assistantVirtualContainer.createComponent(AsistenteVirtualComponent);
      this.assistantVirtualComponentRef.instance.sidebarVisible = true;
    }
  }
}
