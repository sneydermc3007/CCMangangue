import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoticiasService } from '../../../services/noticias/noticias.service';

@Component({
  selector: 'app-principales',
  templateUrl: './principales.component.html',
  styleUrl: './principales.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class PrincipalesComponent implements OnInit {
  public noticias: any[] = [];

  constructor(private router: Router, private _noticias: NoticiasService) {}

  ngOnInit() {
    this._noticias.getNoticias('Principal').subscribe((noticias: any) => {
      this.noticias = noticias.filter((noticia: any) => noticia.estado === 'Activo');
    });
  }

  navigateToNoticia(id: number) {
    this.router.navigate(['/noticias', id]);
  }
}
