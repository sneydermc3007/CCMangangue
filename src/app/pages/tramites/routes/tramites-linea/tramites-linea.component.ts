import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tramites-linea',
  standalone: true,
  imports: [ 
    CommonModule, 
    PanelModule, 
    ButtonModule,
    RouterLink
  ],
  templateUrl: './tramites-linea.component.html',
  styleUrl: './tramites-linea.component.scss'
})
export class TramitesLineaComponent {
  cards = [
    {
      title: 'Consultas - Registros Públicos',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868',
      link: '/tramites/servicios',
      id: 'consultas-registros-publicos'
    },
    {
      title: 'Consultas - Registros Nacionales',
      image: 'https://www.shutterstock.com/image-photo/digital-system-transferring-documents-ftpfile-260nw-2294165995.jpg',
      link: '/tramites/servicios',
      id: 'consultas-registros-nacionales'
    },
    {
      title: 'Operaciones - Registros Publicos',
      image: 'https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041867.jpg',
      link: '/tramites/servicios',
      id: 'operaciones-registros-publicos'
    },
    {
      title: 'Operaciones - Usuarios Publicos',
      image: 'https://trcgroup.com.mx/wp-content/uploads/2024/09/Devoluciones-Operaciones-Virtuales.jpg',
      link: '/tramites/servicios',
      id: 'operaciones-usuarios-publicos'
    },
    {
      title: 'Registro Nacional de Turismo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61orpW7vei2ATTLES27jVIj8ZyQK0Infbxg&s',
      link: '/tramites/servicios',
      id: 'registro-nacional-turismo'
    },
    {
      title: 'RUNEOL',
      image: 'https://runeol.rues.org.co/Diseno/images/foto-law.jpg',
      link: '/tramites/servicios',
      id: 'runeol'
    },
    {
      title: 'Creación de Empresas',
      image: 'https://www.liderempresarial.com/wp-content/uploads/2023/02/Programas-Empresas.jpg',
      link: '/tramites/servicios',
      id: 'creacion-empresas'
    }
  ];

  getRoute(id: string): string {
    return `/tramites/servicios/${id}`;
  }
}
