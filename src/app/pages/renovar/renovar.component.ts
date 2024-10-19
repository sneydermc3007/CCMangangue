import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-renovar',
  standalone: true,
  imports: [
    CommonModule,
    PanelMenuModule,
    CardModule,
    PanelModule,
    ButtonModule
  ],
  templateUrl: './renovar.component.html',
  styleUrl: './renovar.component.scss'
})
export class RenovarComponent {
  menu: MenuItem[];
  selectedItem: string = '';

  constructor() {
    this.menu = [
    {
      label: 'Renovación Registros Públicos',
      command: () => this.onMenuSelect('Renovación Registros Públicos'),
      elementos: [
        {
          label: 'Renueva aqui tu registro',
          link: '',
          description: '...'
        },
        {
          label: 'Tarifa y Simulador de Pago',
          link: '',
          description: '...'
        },
        {
          label: 'Instructivo para renovar tu matrícula',
          link: '',
          description: '...'
        }
      ]
    },
    {
      label: 'Certificados Electrónicos',
      command: () => this.onMenuSelect('Certificados Electrónicos'),
      elementos: [
        {
          label: 'Obtén aquí tus certificados.',
          link: '',
          description: 'Como Comerciante, Entidad Sin Ánimo de Lucro y Proponente.'
        },
        {
          label: 'Certificados especiales',
          link: '',
          description: '...'
        },
        {
          label: 'Verificación de certificados',
          link: '',
          description: '...'
        }
      ]
    },
    {
      label: 'Creación de Empresa y Matrícula Mercantil',
      command: () => this.onMenuSelect('Creación de Empresa y Matrícula Mercantil'),
      elementos: [
        {
          label: 'Realiza tu matricula como persona natural',
          link: 'https://www.vue.gov.co',
          description: '...'
        }
      ]
    }
    ];
  }

  onMenuSelect(event: any | string) {
    this.selectedItem = event;
  }
}
