import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';
import { getMenu } from '../../helpers/menu.helper';

@Component({
  selector: 'app-actas-documentos',
  standalone: true,
  imports: [
    SharedModule,
    DialogModule
  ],
  templateUrl: './actas-documentos.component.html',
  styleUrl: './actas-documentos.component.scss'
})
export class ActasDocumentosComponent {
  menu: MenuItem[];
  selectedItem: string = '';
  displayModal: boolean = false;
  documents = [
    { title: 'Asociaciones' },
    { title: 'Corporaciones' },
    { title: 'Fundaciones' },
    { title: 'SAS' },
    { title: 'LTDA' },
    { title: 'Sociedad Anónima' },
    { title: 'Poderes' },
    { title: 'Establecimiento de Comercio' },
    { title: 'Otros' },
    { title: 'Documentos de Apoyo' },
  ];

  constructor() {
    this.menu = getMenu();
  }


  openModal(documentTitle: string): void {
    this.selectedItem = documentTitle;
    this.displayModal = true;
    console.log(documentTitle);
    console.log(this.menu)
  }

  closeModal(): void {
    this.displayModal = false;
  }
}
