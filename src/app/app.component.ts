import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { Router, NavigationEnd ,RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { AsistenteVirtualComponent } from "./components/asistente-virtual/asistente-virtual.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CamaraComercio';
  showHeaderFooter: boolean = true;

  chatComponentRef: ComponentRef<ChatComponent> | null = null;
  @ViewChild('chatContainer', { read: ViewContainerRef, static: false }) chatContainer!: ViewContainerRef;

  assistantVirtualComponentRef: ComponentRef<AsistenteVirtualComponent> | null = null;
  @ViewChild('assistantVirtualContainer', { read: ViewContainerRef, static: false }) assistantVirtualContainer!: ViewContainerRef;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter = !event.url.includes('/login');
      }
    });
  }

  callBot() {
    console.log('Chat is called');
    this.chatComponentRef = this.chatContainer.createComponent(ChatComponent);
    this.chatComponentRef.instance.isChatOpen = true;
    this.chatComponentRef.instance.onChatHide.subscribe((visible) => {
      if (!visible) {
        this.chatComponentRef?.destroy();
      }
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

  wpp() {
    window.open(
      `https://api.whatsapp.com/send?phone=573147734540&text=Buen día, Bienvenid@ al WhatsApp de la Cámara de Comercio de Mangangué, ¿En qué puedo ayudarte?`,
      '_blank'
    );
  }
}
