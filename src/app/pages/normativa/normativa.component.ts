import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AcordeonInterface } from '../../interfaces/acordeon.interface';

@Component({
  selector: 'app-normativa',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './normativa.component.html',
  styleUrl: './normativa.component.scss'
})
export class NormativaComponent {
  public information: AcordeonInterface[] = [
    {
      header: 'Normativa de la entidad',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Leyes', pagina: '/normativa/leyes' }
        },
        {
          tipo: 'parrafo',
          valor: { label: 'Decretos Único Reglamentario', pagina: 'externa', enlace: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019935' }
        },
        {
          tipo: 'parrafo',
          valor: { label: 'Normativa aplicable', pagina: '/normativa/normatividad' }
        },
        {
          tipo: 'parrafo',
          valor: { label: 'Vinculo al Diario o Geceta Oficial', pagina: 'externa', enlace: 'http://svrpubindc.imprenta.gov.co/diario/' }
        },
        {
          tipo: 'parrafo',
          valor: 'Políticas, lineamientos y manuales:'
        },
        {
          tipo: 'lista',
          valor: [
            { label: 'Estatutos', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/media/pdf/ESTATUTOSCCM.pdf' },
            { label: 'Reglamento de afiliados', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/media/pdf/reglamentodeafiliados.pdf' },
            'Manual de Contratación y Compras de Bienes y/o Servicios Causación y Pagos',
            { label: 'Circulares', pagina: '/normativa/circulares' }
          ]
        },
        {
          tipo: 'formatted',
          valor: '<strong>Agenda Regulatoria:</strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio no están obligadas a publicar información en este ítem conforme se señala en el anexo técnico.'
        }
      ]
    },
    {
      header: 'Búsqueda de normas',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Sistema Único de Información Normativa-SUIN', pagina: 'externa', enlace: 'https://www.suin-juriscol.gov.co/legislacion/normatividad.html' }
        },
        {
          tipo: 'formatted',
          valor: '<strong>Sistema de búsquedas de normas, propio de la entidad:</strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio como entidades privadas son sujetos obligados no tradicionales y por lo tanto no cuentan con normatividad propia ni proyectos normativos.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Proyectos de normas para comentarios:</strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio como entidades privadas son sujetos obligados no tradicionales y por lo tanto no cuentan con normatividad propia ni proyectos normativos.'
        }
      ]
    }
  ]
}
