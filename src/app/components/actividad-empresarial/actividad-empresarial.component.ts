import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";

import { NoticiasService } from '../../services/noticias/noticias.service';

import { NoticiaInterface } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-actividad-empresarial',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './actividad-empresarial.component.html',
  styleUrl: './actividad-empresarial.component.scss'
})
export class ActividadEmpresarialComponent implements OnInit {
  public noticias: NoticiaInterface[] = [];

  constructor(
    private router: Router,
    private _noticias: NoticiasService
  ) {}

  ngOnInit() {
    this._noticias.getNoticias('Empresarial').subscribe((noticias: any) => {
      this.noticias = noticias.filter((noticia: any) => noticia.estado === 'Activo');
    });
  }

  navigateToNoticia(id: number) {
    this.router.navigate(['/noticias', id]);
  }
}
