import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';

import { ConvocatoriasService } from '../../../../services/convocatorias/convocatorias.service';

import { ConvocatoriaInterface } from '../../../../interfaces/convocatoria.interface';

@Component({
  selector: 'app-admin-convocatorias',
  templateUrl: './admin-convocatorias.component.html',
  styleUrl: './admin-convocatorias.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class AdminConvocatoriasComponent implements OnInit {
  convocatorias: any[] = [];
  convocatoriaForm!: FormGroup;
  // editModalVisible = false;
  // isEditMode = false;

  estadoOptions = [{ label: 'Activo', value: 'activo' }, { label: 'Inactivo', value: 'inactivo' }];

  constructor(
    private fb: FormBuilder,
    private _convocatorias: ConvocatoriasService,
    private confirmationService: ConfirmationService,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    this.loadConvocatorias();
    this.initForm();
  }

  loadConvocatorias() {
    this._convocatorias.getAll().subscribe({
      next: (data) => {
        this.convocatorias = data;
      },
      error: (err) => console.error(err),
    });
  }

  initForm() {
    this.convocatoriaForm = this.fb.group({
      id: [null],
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      imagen: ['', Validators.required],
      resumen: ['', Validators.required],
      contenido: ['', Validators.required],
      estado: ['activo', Validators.required],
    });
  }

  onSubmit() {
    if (this.convocatoriaForm.valid) {
      const convotoria = this.convocatoriaForm.value;

      console.log('Convocatoria enviada:', convotoria);
      this._convocatorias.create(convotoria).subscribe({
        next: () => {
          this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Convocatoria creada' });
          this.loadConvocatorias();
          this.convocatoriaForm.reset();
        }
      });
    } 
  }

  deleteConvocatoria(id: number) {
    this._convocatorias.delete(id).subscribe({
      next: () => {
        this.msg.add({ severity: 'success', summary: 'Éxito', detail: 'Convocatoria eliminada' });
        this.loadConvocatorias();
      },
      error: (err) => console.error(err),
    });
  }
}
