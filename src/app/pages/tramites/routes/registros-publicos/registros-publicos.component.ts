import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-registros-publicos',
  standalone: true,
  imports: [
    CommonModule,
    PanelMenuModule,
    CardModule,
    PanelModule,
    ButtonModule
  ],
  templateUrl: './registros-publicos.component.html',
  styleUrl: './registros-publicos.component.scss'
})
export class RegistrosPublicosComponent {
  items: MenuItem[];
  selectedItem: string = '';

  constructor() {
    this.items = [
      {
        label: 'Certificados Electrónicos',
        command: () => this.onMenuSelect('Certificados Electrónicos')
      },
      {
        label: 'Renovación Registros Públicos',
        command: () => this.onMenuSelect('Renovación Registros Públicos')
      },
      {
        label: 'Creación de Empresa y Matrícula Mercantil',
        command: () => this.onMenuSelect('Creación de Empresa y Matrícula Mercantil')
      },
      {
        label: 'Trámites Registros Públicos',
        command: () => this.onMenuSelect('Trámites Registros Públicos')
      },
    ];
  }

  onMenuSelect(event: any | string) {
    this.selectedItem = event;
  }
}
