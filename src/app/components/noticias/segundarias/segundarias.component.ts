import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoticiasService } from '../../../services/noticias/noticias.service';

@Component({
  selector: 'app-segundarias',
  templateUrl: './segundarias.component.html',
  styleUrl: './segundarias.component.scss'
})
export class SegundariasComponent implements OnInit {
  public noticias: any[] = [];

  constructor(private router: Router, private _noticias: NoticiasService) {}

  ngOnInit() {
    this._noticias.getNoticias('Secundaria').subscribe((noticias: any) => {
      this.noticias = noticias.filter((noticia: any) => noticia.estado === 'Activo');
    });
  }

  navigateToNoticia(id: number) {
    this.router.navigate(['/noticias', id]);
  }
}
