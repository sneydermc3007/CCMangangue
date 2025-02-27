import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { CalendariosService } from '../../../../services/calendarios/calendarios.service';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrl: './admin-eventos.component.scss'
})
export class AdminEventosComponent implements OnInit {
  public calendario: any[] = [];
  eventoForm: FormGroup = new FormGroup({});
  display: boolean = false;
  eventoSeleccionado: any;

  constructor(
    private fb: FormBuilder,
    private _calendarioServices: CalendariosService
  ) { }

  ngOnInit(): void {
    this.loadEvents();

    this.eventoForm = this.fb.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      hora_inicio: ['', Validators.required],
      hora_fin: ['', Validators.required],
      descripcion: ['']
    });
  }

  onSubmit() {
    if (this.eventoForm.valid) {
      const nuevoEvento = this.eventoForm.value;
  
      nuevoEvento.hora_inicio = this.formatHora(nuevoEvento.hora_inicio);
      nuevoEvento.hora_fin = this.formatHora(nuevoEvento.hora_fin);
  
      this._calendarioServices.createEvento(nuevoEvento).subscribe(() => {
        this.eventoForm.reset();
        this.loadEvents();
      });
    }
  }

  private formatHora(hora: string): string {
    return hora.length === 5 ? `${hora}:00` : hora;
  }

  loadEvents() {
    this._calendarioServices.getEventos().subscribe((eventos: any[]) => {
      this.calendario = eventos;
    });
  }

  showEditModal(evento: any) {
    this.eventoSeleccionado = evento;
    this.eventoForm.setValue({
      titulo: evento.titulo,
      fecha: evento.fecha,
      hora_inicio: evento.hora_inicio,
      hora_fin: evento.hora_fin,
      descripcion: evento.descripcion,
    });
    this.display = true;
  }

  onSubmitUpdate() {
    if (this.eventoForm.valid) {
      const evento = this.eventoForm.value;
      evento.id = this.eventoSeleccionado.id;
  
      evento.hora_inicio = this.formatHora(evento.hora_inicio);
      evento.hora_fin = this.formatHora(evento.hora_fin);
      evento.estado = 'Activo';
  
      this._calendarioServices.updateEvento(evento).subscribe(() => {
        this.loadEvents(); // Recargar eventos después de la actualización
        this.display = false; // Cerrar el modal
      });
    }
  }  

  eliminarEvento(id: number): void {
    this._calendarioServices.deleteEvento(id).subscribe(() => {
      this.loadEvents();
    });
  }
}
