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
  get sections() {
    return this.ltSectionsForm.get('sections') as FormArray;
  }

  getContentArray(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get('content') as FormArray;
  }

  getValorArray(contentIndex: number): FormArray {
    const content = this.sections.at(contentIndex);
    const valor = content?.get('valor');
    
    if (!valor) {
      console.log('Inicializando FormArray vacío');
      return this.fb.array([]);  // Si no existe 'valor', devuelve un FormArray vacío
    }
  
    return valor as FormArray;
  }

  getSubitemsArray(
    itemIndex: number,
    contentIndex: number,
    listItemIndex: number
  ): FormArray | null {
    const section = this.sections.at(itemIndex);
    if (!section) return null;

    const contentArray = section.get('content') as FormArray;
    if (!contentArray) return null;

    const content = contentArray.at(contentIndex);
    if (!content) return null;

    const valorArray = content.get('valor') as FormArray;
    if (!valorArray) return null;

    const listItem = valorArray.at(listItemIndex);
    if (!listItem) return null;

    return listItem.get('subitems') as FormArray;
  }

  addSection() {
    const sectionForm = this.fb.group({
      header: '',
      content: this.fb.array([]),
    });
    this.sections.push(sectionForm);  // Agrega la sección al array de secciones
  }
  

  addContent(sectionIndex: number, type: string) {
    const contentForm = this.fb.group({
      type: type,
      valor: type === 'lista' ? this.fb.array([]) : '',
      enlace: '',
      archivo: '',
    });

    (this.sections.at(sectionIndex).get('content') as FormArray).push(contentForm);
  }

  addListItem(sectionIndex: number, contentIndex: number) {
    const listItem = this.fb.group({
      label: '',
      pagina: '',
      archivo: '',
      enlace: '',
      subitems: this.fb.array([]),
    });
  
    const contentForm = (this.sections.at(sectionIndex).get('content') as FormArray).at(contentIndex);
    const valorArray = contentForm.get('valor') as FormArray;  // Aquí accedemos al FormArray 'valor'
  
    valorArray.push(listItem);  // Agregamos el nuevo 'listItem' al 'valorArray'
    console.log('Item de lista agregado:', listItem);
  }
  

  addSubitem(
    sectionIndex: number,
    contentIndex: number,
    listItemIndex: number
  ) {
    const subitem = this.fb.group({
      label: '',
      pagina: '',
      archivo: '',
      enlace: '',
    });

    const section = this.sections.controls[sectionIndex];
    const contentArray = section?.get('content') as FormArray;
    const content = contentArray?.controls[contentIndex];
    const valorArray = content?.get('valor') as FormArray;
    const listItem = valorArray?.controls[listItemIndex];
    const subitemsArray = listItem?.get('subitems') as FormArray;

    if (subitemsArray) {
      subitemsArray.push(subitem);
    } else {
      console.error(
        "No se pudo añadir el subitem: 'subitemsArray' es nulo o indefinido."
      );
    }
  }

  saveData() {
    const data = this.ltSectionsForm.value;
    console.log('Saved LT data:', data);
  }
}
