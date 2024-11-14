import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-leyes-transparencia',
  templateUrl: './admin-leyes-transparencia.component.html',
  styleUrl: './admin-leyes-transparencia.component.scss',
})
export class AdminLeyesTransparenciaComponent {
  public tabs: any[] = [
    {
      header: 'Decretos',
      columnas: [
        { header: 'ID', field: 'id' },
        { header: 'Título', field: 'titulo' },
        { header: 'Descripción', field: 'descripcion' },
        { header: 'Estado', field: 'estado' },
      ],
    },
    { header: 'Información' },
  ];

  public decretos: any[] = [];
  sections: any[] = [];

  ltSectionsForm: FormGroup;
  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.ltSectionsForm = this.fb.group({
      sections: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.decretos = [
      {
        id: 1,
        titulo: 'Decreto 1074 de 2015',
        estado: 'Activo',
        descripcion:
          'Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.',
      },
      {
        id: 2,
        titulo: 'Decreto 1081 de 2015',
        estado: 'Pendiente',
        descripcion:
          'Por medio del cual se expide el Decreto Reglamentario Único del Sector Presidencia de la República.',
      },
      {
        id: 3,
        titulo: 'Resolución 3564 de 2015',
        estado: 'Inactivo',
        descripcion:
          'Por el cual se reglamentan aspectos relacionados con la Ley de Transparencia y Acceso a la Información Pública.',
      },
    ];
  }

  openAddModal() {
    throw new Error('Method not implemented.');
  }

  openEditModal(decreto: any) {
    throw new Error('Method not implemented.');
  }

  deleteDecreto(decreto: any) {
    throw new Error('Method not implemented.');
  }

  // Logica para agregar un nuevo elemento al acordeon.
  addSection() {
    this.sections.push({
      header: '',
      content: []
    });
  }

  addContent(sectionIndex: number, type: string) {
    const newContent: any = {
      type: type,
      valor: type === 'lista' ? [] : '',
      enlace: '',
      archivo: ''
    };

    this.sections[sectionIndex].content.push(newContent);
  }

  addListItem(sectionIndex: number, contentIndex: number) {
    const listItem: any = {
      label: '',
      pagina: '',
      subitems: []
    };

    const content = this.sections[sectionIndex].content[contentIndex];
    if (content && content.type === 'lista') {
      (content.valor as any[]).push(listItem);
    }
  }

  addSubitem(sectionIndex: number, contentIndex: number, listItemIndex: number) {
    const subitem: any = {
      label: '',
      pagina: ''
    };

    const content = this.sections[sectionIndex].content[contentIndex];
    if (content && content.type === 'lista') {
      const listItem = (content.valor as any[])[listItemIndex];
      listItem.subitems.push(subitem);
    }
  }

  saveData() {
    console.log('Saved LT data:', this.sections);
  }
}
