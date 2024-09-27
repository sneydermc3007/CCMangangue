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

  constructor() {}

  ocultarSideBar() {
    this.onSidebarHide.emit(false);
  }

  ngOnDestroy() {
    console.log('Asistente Virtual is destroyed');
  }
}
