import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-segundarias',
  templateUrl: './segundarias.component.html',
  styleUrl: './segundarias.component.scss'
})
export class SegundariasComponent implements OnInit {
  public noticias: any[] = [];

  ngOnInit() {
    this.noticias = [
      {
        title: 'SEMINARIO DE ACTUALIZACIÓN TRIBUTARIA Y CONTABLE',
        description: '¡Es la oportunidad de actualizarnos!',
        image: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2024/03/Blue-And-White-Modern-Business-Webinar-Instagram-Post-2.png?w=1080&ssl=1'
      },
      {
        title: 'PROMOTORES DE REGISTRO 2024.',
        description: 'La Cámara de Comercio de Magangué presenta a los promotores de Registros autorizados que ayudarán con tu Renovación 2024.#Renuevatuhuellaempresarial',
        image: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2024/01/Agregar-un-subtitulo-3.png?w=1080&ssl=1'
      }
    ];
  }
}
