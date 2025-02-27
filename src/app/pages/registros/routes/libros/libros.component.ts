import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent {
  public libros: Array<string> = [
    'Libro de actas de Asamblea y Junta de Socios.',
    'Libro de accionistas para Sociedades anónimas, comanditas y por acciones o libro de registro de socios para sociedades de responsabilidad LTDA y asimiladas.'
  ];

  public fundamentos: Array<string> = [
    'Código de Comercio, articulo 19, 28, 48 y siguientes.',
    'Decreto Reglamentario 2649/93 articulo 126.',
    'Ley 43 de 1990.',
    'Decreto 2649 de 1993.',
    'Decreto 2150 de 1995, articulo 42.',
    'Circular 10 de 2001 de la Superintendencia de industria y Comercio.'
  ];
}
