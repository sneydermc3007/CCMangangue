import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from "../../shared/shared.module";
import { ConvocatoriasService } from '../../services/convocatorias/convocatorias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-convocatorias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    InputTextModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './convocatorias.component.html',
  styleUrl: './convocatorias.component.scss'
})
export class ConvocatoriasComponent implements OnInit {
  public searchTerm: string = '';
  public convocatorias: any[] = [];

  constructor( 
    private route: Router,
    private _convocatorias: ConvocatoriasService 
  ) { }

  ngOnInit(): void {
    this.loadConvocatorias();
  }

  loadConvocatorias() {
    this._convocatorias.getAll().subscribe({
      next: (data) => {
        this.convocatorias = data;
      },
      error: (err) => console.error(err),
    });
  }

  goTo(id: number) {
    this.route.navigate(['convocatorias', id]);
  }

  filteredConvocatorias() {
    return this.convocatorias.filter(convocatoria => {
      return convocatoria.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        convocatoria.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
