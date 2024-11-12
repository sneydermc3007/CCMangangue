import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-camara',
  templateUrl: './informacion-camara.component.html',
  styleUrl: './informacion-camara.component.scss'
})
export class InformacionCamaraComponent {
  public information = [
    {
      header: 'Información sobre decisiones que puede afectar al público',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La Cámara pone a disposición de los clientes, usuarios y ciudadanos el contenido de las siguientes decisiones:'
        },
        {
          tipo: 'lista',
          valor: [
            { label: 'Horarios y sedes de atención', pagina: 'camara/sedes'},
            { label: 'Información Cámara de Comercio-Confecamaras', pagina: 'externa', enlace: 'https://confecamaras.org.co'},
            { label: 'Información Cámara de Comercio-SuperSociedades', pagina: 'aspx', archivo: 'https://www.supersociedades.gov.co/supervision_societaria/Paginas/Supervision-Camaras-de-Comercio.aspx'},
            { label: 'SIPREF', pagina: 'leyes/sipref'},
            { label: 'Elecciones Junta Directiva 2023-2026', pagina: 'camara/elecciones-junta-directiva'},
          ]
        }
      ]
    }
  ]
}
