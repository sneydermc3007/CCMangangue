import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoticiasService } from '../../../services/noticias/noticias.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  public noticia: any;

  constructor(private route: ActivatedRoute, private _noticias: NoticiasService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarNoticia(+id);
    }
  }

  cargarNoticia(id: number) {
    this._noticias.getNoticia(id).subscribe((noticia: any) => {
      this.noticia = noticia;
    });
  }
}
