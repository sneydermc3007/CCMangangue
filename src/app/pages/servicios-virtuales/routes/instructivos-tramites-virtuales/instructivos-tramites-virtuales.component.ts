import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-instructivos-tramites-virtuales',
  templateUrl: './instructivos-tramites-virtuales.component.html',
  styleUrl: './instructivos-tramites-virtuales.component.scss'
})
export class InstructivosTramitesVirtualesComponent {
  constructor(private router: Router) {}

  public imagenes: any[] = [
    {
      imagen: 'https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/renovacionvirtual.png?w=1060&ssl=1',
      link: ""
    },
    {
      imagen: 'https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/matriculapersonanatural.png?w=1060&ssl=1',
      link: ""
    },
    {
      imagen: "https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/radicacionactasydocumentos.png?w=1060&ssl=1",
      link: ""
    },
    {
      imagen: "https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/rup.png?w=1060&ssl=1",
      link: "https://ccmagangue.org.co/media/pdf/instructivos/CCMDRE-4%20INSTRUCTIVO%20PARA%20EL%20MANEJO%20DEL%20REGISTRO%20ÚNICO%20DE%20PROPONENTES%20(RUP)%20DE%20PERSONA%20NATURAL%20Y%20JURÍDICA.pdf"
    },
    {
      imagen: "https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/certificadosvirtuales.png?w=1060&ssl=1",
      link: "/servicios-virtuales/expedicion-verificacion-certificados"
    },
    {
      imagen: "https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/mutaciones.png?w=1060&ssl=1",
      link: ""
    },
    {
      imagen: "https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/constituciónvirtualdesociedades.png?w=1060&ssl=1",
      link: ""
    },
    {
      imagen: "https://i0.wp.com/ccmagangue.org.co/media/imagenes/instructivos/registrolibroselectronicos.png?w=1060&ssl=1",
      link: ""
    }
  ];

  redireccionar(link: string): void {
    if (link.includes('http'))
      window.open(link, '_blank');
    else 
      this.router.navigate([link]);
  }
}
