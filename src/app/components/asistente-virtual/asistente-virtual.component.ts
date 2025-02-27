import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-asistente-virtual',
  standalone: true,
  imports: [FormsModule, CommonModule,  SidebarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './asistente-virtual.component.html',
  styleUrl: './asistente-virtual.component.scss'
})
export class AsistenteVirtualComponent implements OnDestroy {
  @Input() sidebarVisible: boolean = false;
  @Output() onSidebarHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  public opcionesAccesibilidad = [
    { icon: "pi pi-plus", label: "Aumentar Texto", action: () => this.aumentarTexto() },
    { icon: "fa-solid fa-circle-half-stroke", label: "Alto Contraste", action: () => this.altoContraste() },
    { icon: "pi pi-times-circle", label: "Desactivar Animaciones", action: () => this.desactivarAnimaciones() },
    { icon: "pi pi-volume-up", label: "Leer Texto", action: () => this.leerTexto() },
    { icon: "pi pi-eye", label: "Subrayar Texto", action: () => this.subrayarTexto() },
    { icon: "pi pi-eye-slash", label: "Ocultar Texto", action: () => this.ocultarTexto() },
  ];

  public fontSizes = ['14px', '18px', '22px', '26px']
  public currentFontSizeIndex = 0;

  constructor() {}

  aumentarTexto() {
    const root = document.body;
    this.currentFontSizeIndex++;
  
    if (this.currentFontSizeIndex >= this.fontSizes.length)
      this.currentFontSizeIndex = 0;
  
    const newFontSize = this.fontSizes[this.currentFontSizeIndex];
    root.style.fontSize = newFontSize;
  
    root.classList.remove('font-size-14', 'font-size-18', 'font-size-22', 'font-size-26');
    root.classList.add(`font-size-${parseInt(newFontSize)}`);
  
    console.log(`Tamaño de texto actualizado a: ${newFontSize}`);
  }
  
  

  altoContraste() {
    const root =  document.body;
    if (root.classList.contains('alto-contraste'))
      root.classList.remove('alto-contraste');
    else
      root.classList.add('alto-contraste');
  }

  desactivarAnimaciones() {
    const root =  document.body;
    if (root.classList.contains('desactivar-animaciones'))
      root.classList.remove('desactivar-animaciones');
    else
      root.classList.add('desactivar-animaciones');
  }

  leerTexto() {
    const texto = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(utterance);
  }

  subrayarTexto() {
    const root = document.body;
    if (root.classList.contains('subrayar-texto'))
      root.classList.remove('subrayar-texto');
    else
      root.classList.add('subrayar-texto');
  }

  ocultarTexto() {
    const root = document.body;
    if (root.classList.contains('ocultar-texto'))
      root.classList.remove('ocultar-texto');
    else
      root.classList.add('ocultar-texto');
  }
  
  ocultarSideBar() {
    this.onSidebarHide.emit(false);
  }

  ngOnDestroy() {
    console.log('Asistente Virtual is destroyed');
  }
}
