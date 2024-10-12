import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tramites',
  standalone: true,
  imports: [ CommonModule ,PanelModule, ButtonModule ],
  templateUrl: './tramites.component.html',
  styleUrl: './tramites.component.scss'
})
export class TramitesComponent {
  cards = [
    {
      title: 'Consultas - Registros Públicos',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'Consultas - Registros Nacionales',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'Operaciones - Registros Publicos',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'Operaciones - Usuarios Publicos',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'Registro Nacional de Turismo',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'RUNEO',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'RUNEOL',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'Creación de Empresas',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    },
    {
      title: 'Sociedades BIC',
      image: 'https://s3.pagegear.co/3/content_block/6/items/14_1920x1080.png?1383868'
    }
  ];
}
