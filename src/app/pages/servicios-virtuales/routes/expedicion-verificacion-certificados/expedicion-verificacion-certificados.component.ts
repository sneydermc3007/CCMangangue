import { Component } from '@angular/core';

@Component({
  selector: 'app-expedicion-verificacion-certificados',
  templateUrl: './expedicion-verificacion-certificados.component.html',
  styleUrl: './expedicion-verificacion-certificados.component.scss'
})
export class ExpedicionVerificacionCertificadosComponent {

  public imagenes: any[] = [
    {
      imagen: 'https://i0.wp.com/ccmagangue.org.co/media/imagenes/expedicion.png?w=1060&ssl=1',
      link: 'https://sii.confecamaras.co/vista/plantilla/certificados.php?empresa=19'
    },
    {
      imagen: 'https://i0.wp.com/ccmagangue.org.co/media/imagenes/verificacion.png?w=1060&ssl=1',
      link: 'https://siimagangue.confecamaras.co/cv.php'
    }
  ];

  redireccionar(link: string): void {
    window.open(link, '_blank');
  }
}
