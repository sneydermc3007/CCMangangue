import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { LeyesTransparenciaService } from './../../../../services/leyes-transparencia/leyes-transparencia.service';

import { DecretoInterface } from '../../../../interfaces/decretos.interface';
import { forkJoin } from 'rxjs';
import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-admin-leyes-transparencia',
  templateUrl: './admin-leyes-transparencia.component.html',
  styleUrl: './admin-leyes-transparencia.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class AdminLeyesTransparenciaComponent implements OnInit {
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
    { header: 'Listar Acordeones' },
    { header: 'Crear Acordeon' },
    { header: 'Acciones Acordeon' },
  ];

  public decretos: DecretoInterface[] = [];
  public acordeones: any[] = [];
  public sections: any[] = [];

  public estadoOptions = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
    { label: 'Pendiente', value: 'pendiente' },
  ];

  public isModalVisible: boolean = false;
  public modalTitle: string = '';

  public paginaOptions = [ "Interna", "Externa", "PDF", "No aplica" ];

  public decretoForm: FormGroup;

  editItem: AcordeonInterface | null = null;


  constructor(
    private fb: FormBuilder, private cdRef: ChangeDetectorRef,
    private _leyesTransparencia: LeyesTransparenciaService,
    private msg: MessageService
  ) {

    this.decretoForm = this.fb.group({
      id: [null],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit() {
    forkJoin({ decretos: this._leyesTransparencia.getDecretos(), leyes: this._leyesTransparencia.getLeyes()})
      .subscribe(({ decretos, leyes }) => {
        this.decretos = decretos;
        this.acordeones = leyes;
      }
    );
  }

  openAddModal() {
    this.modalTitle = 'Agregar Decreto';
    this.isModalVisible = true;
    this.decretoForm.reset();
  }

  openEditModal(decreto: any) {
    this.modalTitle = 'Editar Decreto';
    this.isModalVisible = true;
    this.decretoForm.patchValue(decreto);
  }

  deleteDecreto(idDecreto: number) {
    this._leyesTransparencia.eliminarDecreto(idDecreto).subscribe(() => {
      this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Decreto eliminado' });
      this.decretos = this.decretos.filter((decreto: any) => decreto.id !== idDecreto);
    });
  }

  saveDecreto() {
    if (this.decretoForm.valid) {
      const decreto = this.decretoForm.value;
      if (decreto.id)  { // Editar decreto existente
        if(this.decretos.length >= 3 && decreto.estado === 'activo')
          return this.msg.add({ severity: 'error', summary: 'Error', detail: 'No se puede tener mas 3 decretos en estado activo' });

        this._leyesTransparencia.editarDecreto(decreto.id, decreto).subscribe((editedDecreto: any) => {
          this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Decreto editado' });
          const index = this.decretos.findIndex((d: any) => d.id === editedDecreto.id);
          this.decretos[index] = editedDecreto;
          this.closeModal();
        });
      }
      else  { // Crear un nuevo decreto
        if(this.decretos.length >= 3 && decreto.estado === 'activo')
          return this.msg.add({ severity: 'error', summary: 'Error', detail: 'No se puede tener mas 3 decretos en estado activo' });

        this._leyesTransparencia.crearDecreto(decreto).subscribe((newDecreto: any) => {
          this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Decreto creado' });
          this.decretos.push(newDecreto);
          this.closeModal();
        });
      } 
    }
  }

  closeModal() {
    this.isModalVisible = false;
    this.decretoForm.reset();
  }

  // =============== Logica para agregar un nuevo elemento al acordeon. ===============
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
    // Validación de campos obligatorios.
    const isValid = this.sections.every((section: any) => 
      section.header &&
      section.content.every((content: any) => {
        if (content.type === 'lista')
          return Array.isArray(content.valor) && content.valor.every((item: any) => item.label && item.pagina);
        if (content.type === 'parrafo')
          return typeof content.valor === 'string' && content.valor.trim() !== '';
        if (content.type === 'link')
          return typeof content.enlace === 'string' && content.enlace.trim() !== '';

        return true;
      })
    );

    if (!isValid)
      return this.msg.add({ severity: 'error', summary: 'Error', detail: 'Algunos campos obligatorios están incompletos.' });
  
    const propertiesToRemove: Record<string, string[]> = {
      lista: ['enlace', 'archivo'],
      parrafo: ['enlace', 'archivo'],
      link: ['archivo'],
    };
  
    this.sections.forEach((section: any) => {
      section.content.forEach((content: any) => {
        const keysToRemove = propertiesToRemove[content.type] || [];
        keysToRemove.forEach((key) => delete content[key]);
      });
    });
    console.log('Saved LT data:', this.sections);

    let leyes: any = {};

    this.sections.forEach((section: any) => {
      leyes.header = section.header;
      leyes.contenido = section.content.map((content: any) => {
        if (content.type === 'parrafo') {
          return {
            tipo: content.type,
            valor: content.valor,
            pagina: content.pagina || null
          };
        } 
        else if (content.type === 'link') {
          return {
            tipo: content.type,
            valor: content.valor,
            enlace: content.enlace
          };
        } 
        else if (content.type === 'lista') {
          return {
            tipo: content.type,
            valor: content.valor.map((item: any) => {
              return {
                label: item.label,
                pagina: item.pagina,
                paginaInterna: item?.paginaInterna || null,
                paginaExterna: item?.paginaExterna || null,
                paginaPDF: item?.paginaPDF || null,
                subitems: item.subitems.map((subitem: any) => {
                  return {
                    label: subitem.label,
                    pagina: subitem.pagina,
                    paginaInterna: subitem?.paginaInterna || null,
                    paginaExterna: subitem?.paginaExterna || null,
                    paginaPDF: subitem?.paginaPDF || null
                  };
                })
              };
            })
          };
        }
        return null;
      }).filter((content: null) => content !== null);
    });

    // console.log('Leyes:', leyes);

    leyes.contenido.forEach((content: any) => {
      if (content.tipo === 'lista') {
        content.valor.forEach((item: any) => {
          if (item.paginaExterna === null)
            delete item.paginaExterna;
          if (item.paginaInterna === null)
            delete item.paginaInterna;
          if (item.subitems.length === 0)
            delete item.subitems;
        });
      }
      if (content.tipo === 'parrafo') {
        if (content.pagina === null)
          delete content.pagina;
      }
    });

    this._leyesTransparencia.crearLey(leyes).subscribe(
      (response: any) => {
        this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Ley agregada' });
        this.sections = [];
      }
    )
  }

  deletePage(id: number) {
    this._leyesTransparencia.eliminarLey(id).subscribe(() => {
      this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Ley eliminada' });
      this.acordeones = this.acordeones.filter((acordeon: any) => acordeon.id !== id);
    });
  }
}
