import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { ChatService } from '../../services/chat/chat.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

// Componentes de destino para las pruebas de enrutamiento
@Component({ template: '<div>Página de Registro Mercantil</div>' })
class RegistroMercantilComponent {}

@Component({ template: '<div>Página de Servicios</div>' })
class ServiciosComponent {}

@Component({ template: '<div>Página de Tarifas</div>' })
class TarifasComponent {}

// Mock del servicio ChatService con respuestas que contienen enlaces
class MockChatService {
  getAnswer(question: string) {
    // Respuesta con enlaces internos
    if (question.toLowerCase().includes('registro mercantil')) {
      return Promise.resolve({
        text: 'Para realizar el registro mercantil, debes completar el formulario y presentar los documentos requeridos.',
        source: 'exact_match',
        categoria: 'Registro Mercantil',
        links: {
          formulario_registro: '/registros/mercantil',
          requisitos: '/tramites/servicios',
          tarifas: '/tarifas'
        }
      });
    }
    // Respuesta con enlaces externos
    else if (question.toLowerCase().includes('más información')) {
      return Promise.resolve({
        text: 'Puedes encontrar más información en los siguientes enlaces:',
        source: 'exact_match',
        categoria: 'Información General',
        links: {
          confecamaras: 'https://www.confecamaras.org.co',
          sic: 'https://www.sic.gov.co',
          rues: 'https://www.rues.org.co'
        }
      });
    }
    // Respuesta sin enlaces
    else {
      return Promise.resolve({
        text: 'Respuesta generada por el asistente virtual.',
        source: 'rag_chain'
      });
    }
  }
}

describe('ChatComponent - Routing Tests', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let chatService: ChatService;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChatComponent,
        FormsModule,
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'registros/mercantil', component: RegistroMercantilComponent },
          { path: 'tramites/servicios', component: ServiciosComponent },
          { path: 'tarifas', component: TarifasComponent }
        ])
      ],
      declarations: [
        RegistroMercantilComponent,
        ServiciosComponent,
        TarifasComponent
      ],
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

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    chatService = TestBed.inject(ChatService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render links with correct URLs for internal navigation', async () => {
    // Arrange
    component.newMessage = '¿Cómo hago un registro mercantil?';

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Assert
    const botMessageWithLinks = fixture.debugElement.queryAll(By.css('.bot-message'))[1]; // El segundo mensaje del bot (después del inicial)
    const links = botMessageWithLinks.queryAll(By.css('a'));

    // Verificar que hay enlaces en el mensaje
    expect(links.length).toBe(3);

    // Verificar las URLs de los enlaces
    expect(links[0].attributes['href']).toBe('/registros/mercantil');
    expect(links[1].attributes['href']).toBe('/tramites/servicios');
    expect(links[2].attributes['href']).toBe('/tarifas');
  });

  it('should render links with correct URLs for external navigation', async () => {
    // Arrange
    component.newMessage = '¿Dónde puedo encontrar más información?';

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Assert
    const botMessageWithLinks = fixture.debugElement.queryAll(By.css('.bot-message'))[1];
    const links = botMessageWithLinks.queryAll(By.css('a'));

    // Verificar que hay enlaces en el mensaje
    expect(links.length).toBe(3);

    // Verificar las URLs de los enlaces externos
    expect(links[0].attributes['href']).toBe('https://www.confecamaras.org.co');
    expect(links[1].attributes['href']).toBe('https://www.sic.gov.co');
    expect(links[2].attributes['href']).toBe('https://www.rues.org.co');

    // Verificar que los enlaces externos se abren en una nueva pestaña
    expect(links[0].attributes['target']).toBe('_blank');
    expect(links[1].attributes['target']).toBe('_blank');
    expect(links[2].attributes['target']).toBe('_blank');
  });

  it('should navigate to correct route when internal link is clicked', fakeAsync(() => {
    // Arrange
    component.newMessage = '¿Cómo hago un registro mercantil?';

    // Act
    component.sendMessage().then(() => {
      fixture.detectChanges();

      // Obtener el primer enlace y simular clic
      const botMessageWithLinks = fixture.debugElement.queryAll(By.css('.bot-message'))[1];
      const firstLink = botMessageWithLinks.queryAll(By.css('a'))[0].nativeElement;

      // Simular clic en el enlace
      firstLink.click();
      tick();

      // Assert - Verificar que se navegó a la ruta correcta
      expect(location.path()).toBe('/registros/mercantil');
    });
  }));

  it('should format link text correctly from key names', async () => {
    // Arrange
    component.newMessage = '¿Cómo hago un registro mercantil?';

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Assert
    const botMessageWithLinks = fixture.debugElement.queryAll(By.css('.bot-message'))[1];
    const links = botMessageWithLinks.queryAll(By.css('a'));

    // Verificar que los textos de los enlaces están formateados correctamente
    expect(links[0].nativeElement.textContent).toBe('Formulario Registro');
    expect(links[1].nativeElement.textContent).toBe('Requisitos');
    expect(links[2].nativeElement.textContent).toBe('Tarifas');
  });

  it('should not add links section when response has no links', async () => {
    // Arrange
    component.newMessage = '¿Qué es la Cámara de Comercio?';

    // Act
    await component.sendMessage();
    fixture.detectChanges();

    // Assert
    const lastBotMessage = fixture.debugElement.queryAll(By.css('.bot-message')).pop();
    const links = lastBotMessage?.queryAll(By.css('a')) || [];
    const strongElements = lastBotMessage?.queryAll(By.css('strong')) || [];

    // Verificar que no hay enlaces ni sección de "Enlaces de interés"
    expect(links.length).toBe(0);
    expect(strongElements.length).toBe(0);
  });
});
