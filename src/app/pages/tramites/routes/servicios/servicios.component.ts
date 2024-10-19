import { Component } from '@angular/core';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    PanelMenuModule,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  menu: MenuItem[];
  selectedItem: string = '';

  constructor() {
    this.menu = [
      {
        label: 'Consultas - Registros Públicos',
        command: () => this.onMenuSelect('Consultas - Registros Públicos'),
        elementos: [
          { label: 'Consultas de expedientes', link: '', description: '...' },
          { label: 'Consulta liquidación renovación', link: '', description: '...' },
          { label: 'Solicitudes de registro', link: '', description: '...' },
          { label: 'Notificaciones registros públicos', link: '', description: '...' },
          { label: 'Relación de renovados', link: '', description: '...' },
          { label: 'Relación de matriculados', link: '', description: '...' },
          { label: 'Ruta de documentos', link: '', description: '...' },
          { label: 'Consulta reportes E.E.', link: '', description: '...' },
          { label: 'Consulta cínculos identificación', link: '', description: '...' },
          { label: 'Consultas desistimientos decretados', link: '', description: '...' },
          { label: 'Formularios y formatos en blanco', link: '', description: '...' },
          { label: 'Solicitar clave afiliado', link: '', description: '...' },
          { label: 'Solicitar clave de prepago', link: '', description: '...' },
          { label: 'Consulta georeferenciada', link: '', description: '...' },
          { label: 'Calcular digito de verificación', link: '', description: '...' },
          { label: 'Historia de transacciones', link: '', description: '...' }
        ]
      },
      {
        label: 'Consultas - Registros Nacionales',
        command: () => this.onMenuSelect('Consultas - Registros Nacionales'),
        elementos: [
          { label: 'Consulta homonimia nacional', link: '', description: '...' },
          { label: 'Rues cont. multas, sanciones', link: '', description: '...' }
        ]
      },
      {
        label: 'Operaciones - Registros Publicos',
        command: () => this.onMenuSelect('Operaciones - Registros Publicos'),
        elementos: [
          { label: 'Verificación de identidad', link: '', description: '...' },
          { label: 'Renovar matrícula mercatíl', link: '', description: '...' },
          { label: 'Matricular', link: '', description: '...' },
          { label: 'Certificados', link: '', description: '...' },
          { label: 'Radicar documentos', link: '', description: '...' },
          { label: 'Actos y documentos sin costo', link: '', description: '...' },
          { label: 'Registro libros electrónicos', link: '', description: '...' },
          { label: 'Actualización de datos (Mutación)', link: '', description: '...' },
          { label: 'Solicitud de cancelación reg. mercantíl', link: '', description: '...' },
          { label: 'Inscripción de proponente', link: '', description: '...' },
          { label: 'Actualización  de proponente', link: '', description: '...' },
          { label: 'Renovación de proponente', link: '', description: '...' },
          { label: 'Cancelación de proponente', link: '', description: '...' },
          { label: 'Cambio domicilio proponente', link: '', description: '...' },
          { label: 'Prepagar servicios', link: '', description: '...' },
          { label: 'Comprar de servicios empresariales', link: '', description: '...' }
        ]
      },
      {
        label: 'Operaciones - Usuarios Publicos',
        command: () => this.onMenuSelect('Operaciones - Usuarios Publicos'),
        elementos: [
          { label: 'Actualización circular 19', link: '', description: '...' }
        ]
      },
      {
        label: 'Registro Nacional de Turismo',
        command: () => this.onMenuSelect('Registro Nacional de Turismo'),
        elementos: [
          { label: 'Registro nacional de turismo', link: '', description: '...' },
          { label: 'Pagos parafiscales fontur', link: '', description: '...' },
          { label: 'Certificación de calidad turistíca', link: '', description: '...' }
        ]
      },
      {
        label: 'RUNEOL',
        command: () => this.onMenuSelect('RUNEOL'),
        elementos: [
          { label: 'Inscripción Runeol', link: '', description: '...' },
          { label: 'Cancelación Runeol', link: '', description: '...' }
        ]
      },
      {
        label: 'Creación de Empresas',
        command: () => this.onMenuSelect('Creación de Empresas'),
        elementos: [
          { label: 'Creación de empresas', link: '', description: '...' }
        ]
      }
    ];
  }

  onMenuSelect(event: any | string) {
    this.selectedItem = event;
  }
}
