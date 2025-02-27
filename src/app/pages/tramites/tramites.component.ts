import { Component } from '@angular/core';
import { getMenuCategory } from '../../helpers/menu.helper';

import { SharedModule } from "../../shared/shared.module";

import { AcordeonInterface } from '../../interfaces/acordeon.interface';

@Component({
  selector: 'app-tramites',
  standalone: true,
  imports: [
    SharedModule
],
  templateUrl: './tramites.component.html',
  styleUrl: './tramites.component.scss'
})
export class TramitesComponent {
  public data: AcordeonInterface[] = [
    {
      header: 'Servicios registrales',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            { label: 'Registro Mercantil', pagina: 'registros/mercantil' },
            { label: 'Registro Único de Proponentes', pagina: 'registros/unico-proponentes' },
            { label: 'Registro Entidades sin Ánimo de Lucro', pagina: 'registros/entidades-animo-lucro' },
            { label: 'Registro de Entidades Extranjeras de Derecho sin Ánimo de Lucro', pagina: 'registros/entidades-extrangeras-derecho-animo-lucro' },
            { label: 'Registro de las Entidades de Economía Solidaria', pagina: 'registros/entidades-economia-solidaria' },
          ]
        },
        {
          tipo: 'formatted',
          valor: '<strong>Guías y formatos</strong>'
        },
        {
          tipo: 'popup',
          valor: { 
            label: 'Documentos de Apoyo', 
            pagina: 'popup',
            menu: [getMenuCategory('Documentos de Apoyo')]
          }
        }
      ]
    },
    {
      header: 'Tarifas de los Registros Públicos',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Tarifas', pagina: '/tarifas' }
        }
      ]
    },
    {
      header: 'Otros Servicios Registrales',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            { label: 'Registro Público de Veedurías Ciudadanas', pagina: 'registros/publico-veedurias-ciudadanas' },
            { label: 'Registro de Libros', pagina: 'registros/libros' },
            { label: 'Registro Único Nacional de Entidades Operadoras de Libranza – RUNEOL', pagina: 'registros/unico-nacional-entidades' },
            { label: 'Registro Actividad de Juego y Azar', pagina: 'registros/actividad-juego-azar' }
          ]
        }
      ]
    },
    {
      header: 'Trámites Virtuales',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Servicios Virtuales', pagina: 'tramites/linea' }
        }
      ]
    },
    {
      header: 'Renovación del Registro',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Renovación del Registro', pagina: 'externa', enlace: 'https://sii.confecamaras.co/vista/plantilla/index.php?cod_camara=19' }
        }
      ]
    },
    {
      header: 'Acceso al RUES',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Registro Único Empresarial', pagina: '/registros/unico-empresarial' }
        }
      ]
    },
    {
      header: 'Expedientes del registro público',
      contenido: [
        {
          tipo: 'parrafo',
          valor: {  label: 'Expediente del registro públicos ', pagina: 'tramites/linea' }
        }
      ]
    },
    {
      header: 'Recursos de Reposición',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            { label: 'Recurso de Reposicion Sociedad Transportes Yiwow S.A.S.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/recurso-de-reposicion.pdf' },
            { label: 'Recursos de Reposicion AMIJUSBOL', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/recurso_reposicion_amijusbol.pdf' },
            { label: 'Recursos de Reposicion AGUAS DE BUENAVISTA SA E.S.P.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/10/recurso.pdf' },
            { label: 'Recursos de Reposicion Wilson Manuel Meza Arriola', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/10/Blanco-y-negro0364.pdf' },
            { label: 'Recursos de Reposicion AGUAS DE BUENAVISTA SA E.S.P.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/10/RESOLUCION-003-POR-MEDIO-DEL-CUAL-SE-RESUELVE-UN-RECURSO-DE-REPOSICION-AGUAS-DE-BUENAVISTA-1.pdf' }
          ]
        }
      ]
    },
    {
      header: 'Recursos de Apelación',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            { label: 'Recursos de Apelacion', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/recurso-de-apelacion.pdf' },
            { label: 'Recursos de Apelacion Wilson Manuel Meza Arriola', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/10/RESOLUCION-004-POR-MEDIO-DEL-CUAL-SE-NIEGA-POR-INPROCEDENTE-UN-RECURSO-WILSON-MEZA.pdf' }
          ]
        }
      ]
    }
  ]
}
