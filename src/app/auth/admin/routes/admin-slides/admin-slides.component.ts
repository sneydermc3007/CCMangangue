import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ConfirmationService, MessageService } from 'primeng/api';

import { SlidesService } from '../../../../services/slides/slides.service';

import { SlideInterface } from '../../../../interfaces/slides.interface';

@Component({
  selector: 'app-admin-slides',
  templateUrl: './admin-slides.component.html',
  styleUrls: ['./admin-slides.component.scss'],
  providers: [ConfirmationService, MessageService],
  animations: [
    trigger('expandAnimation', [
      state('void', style({ opacity: 0, transform: 'scaleY(0)' })),
      state('*', style({ opacity: 1, transform: 'scaleY(1)' })),
      transition('void <=> *', animate('0.4s ease-out')),
    ]),
  ],
})
export class AdminSlidesComponent implements OnInit {
  slides: SlideInterface[] = [];
  slideForm!: FormGroup;
  editModalVisible = false;
  isEditMode = false;

  internalPages: SlideInterface[] = [];
  selectedPage: any;
  editPageModalVisible = false;
  pageForm!: FormGroup;

  tipoLinkOptions = [{ label: 'Interno', value: 'interno' }, { label: 'Externo', value: 'externo' }];
  estadoOptions = [{ label: 'Activo', value: 'activo' }, { label: 'Inactivo', value: 'inactivo' }];

  constructor(
    private fb: FormBuilder,
    private _slides: SlidesService,
    private confirmationService: ConfirmationService,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    this.loadSlides();
    this.initForm();
    this.initPageForm();
  }

  loadSlides() {
    this._slides.getSlides().subscribe({
      next: (data) =>  {
        this.slides = data;
        this.internalPages = data.filter((slide: any) => slide.tipo_link === 'interno');
      },
      error: (err) => console.error(err),
    });
  }

  initForm() {
    this.slideForm = this.fb.group({
      id: [null],
      link: [''],
      tipo_link: ['interno', Validators.required],
      posicion: [0, Validators.required],
      estado: ['activo', Validators.required],
      portada_url: ['', Validators.required],
    });
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar este slide?',
      accept: () => this.deleteSlide(id),
    });
  }

  deleteSlide(id: number) {
    this._slides.deleteSlide(id).subscribe({
      next: () => {
        this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Slide eliminado' });
        this.loadSlides();
      },
      error: (err) => console.error(err),
    });
  }

  openEditModal(slide: any) {
    this.isEditMode = true;
    this.slideForm.patchValue(slide);
    this.editModalVisible = true;
  }

  onSubmit() {
    if (this.slideForm.valid) {
      const slide = this.slideForm.value;
  
      if (this.isEditMode) {
        this._slides.updateSlide(slide.id, slide).subscribe({
          next: () => {
            this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Slide actualizado' });
            this.loadSlides();
            this.onHideModal();
          },
          error: (err) => console.error(err),
        });
      } else {
        this._slides.createSlide(slide).subscribe({
          next: () => {
            this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Slide creado' });
            this.loadSlides();
            this.onHideModal();
          },
          error: (err) => console.error(err),
        });
      }
    }
  }

  onHideModal() {
    this.editModalVisible = false;
    this.isEditMode = false;
    this.slideForm.reset();
  }

  initPageForm() {
    this.pageForm = this.fb.group({
      pagina_id: [null],
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      imagen_principal: ['', Validators.required],
      imagen_segundaria: ['']
    });
  }

  openEditPageModal(slide: any) {
    this.pageForm.patchValue(slide.pagina);
    this.editPageModalVisible = true;
  }

  onSubmitPage() {
    if (this.pageForm.valid) {
        const updatedPage = this.pageForm.value;
        this._slides.updatePage(updatedPage.pagina_id, updatedPage).subscribe({
            next: () => {
                this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Página actualizada' });
                this.editPageModalVisible = false;
                this.loadSlides();
            },
            error: (err) => console.error(err),
        });
    }
  }
}
