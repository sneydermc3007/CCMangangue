import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
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
export class AsistenteVirtualComponent {
  @Input() sidebarVisible: boolean = false;

  constructor() {}

}
