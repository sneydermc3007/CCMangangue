import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tramites',
  standalone: true,
  imports: [ 
    CommonModule, 
    PanelModule, 
    ButtonModule,
    RouterLink
  ],
  templateUrl: './tramites.component.html',
  styleUrl: './tramites.component.scss'
})
export class TramitesComponent {
  cards = [
    {
      title: 'Consultas - Registros Públicos',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868',
      link: '/tramites/servicios'
    },
    {
      title: 'Consultas - Registros Nacionales',
      image: 'https://www.shutterstock.com/image-photo/digital-system-transferring-documents-ftpfile-260nw-2294165995.jpg',
      link: '/tramites/servicios'
    },
    {
      title: 'Operaciones - Registros Publicos',
      image: 'https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041867.jpg',
      link: '/tramites/servicios'
    },
    {
      title: 'Operaciones - Usuarios Publicos',
      image: 'https://trcgroup.com.mx/wp-content/uploads/2024/09/Devoluciones-Operaciones-Virtuales.jpg',
      link: '/tramites/servicios'
    },
    {
      title: 'Registro Nacional de Turismo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61orpW7vei2ATTLES27jVIj8ZyQK0Infbxg&s',
      link: '/tramites/servicios'
    },
    {
      title: 'RUNEOL',
      image: 'https://runeol.rues.org.co/Diseno/images/foto-law.jpg',
      link: '/tramites/servicios'
    },
    {
      title: 'Creación de Empresas',
      image: 'https://www.liderempresarial.com/wp-content/uploads/2023/02/Programas-Empresas.jpg',
      link: '/tramites/servicios'
    }
  ];
}
