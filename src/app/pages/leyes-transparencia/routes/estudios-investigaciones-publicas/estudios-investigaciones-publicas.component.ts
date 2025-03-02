import { Component } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-estudios-investigaciones-publicas',
  standalone: true,
  imports: [
    TabViewModule,
    TableModule,
    SharedModule
  ],
  templateUrl: './estudios-investigaciones-publicas.component.html',
  styleUrl: './estudios-investigaciones-publicas.component.scss'
})
export class EstudiosInvestigacionesPublicasComponent {
  public tabs: any[] = [
    {
      header: 'ESTUDIOS ECONÓMICOS DE LAS ZONAS',
      estudios: [
        {
          namestudio: 'Estudio Economico de la Jurisdicción de la Cámara de Comercio de Magangué 2023.',
          year: 2023,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/estudio_economico_2023.pdf'
        },
        {
          namestudio: 'Estudio Economico de la Jurisdicción de la Cámara de Comercio de Magangué 2022.',
          year: 2022,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/ESTUDIO-ECONOMICO-DE-LA-JURISDICCION-DE-LA-CAMARA-DE-COMERCIO-DE-MAGANGUE-ANO-2022-pdf.pdf'
        },
        {
          namestudio: 'Estudio Economico del Municipio de Magangué Bolivar, como sede principal de la jurisdicción de la Camara de Comercio de Magangué.',
          year: 2021,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/09/ESTUDIO-ECONOMICO.pdf'
        },
        {
          namestudio: 'Informe Potencial de Comerciantes 2021',
          year: 2021,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/02/POTENCIAL-DE-COMERCIANTES-CCM-2021-1.pdf'
        },
        {
          namestudio: 'Impacto económico en el sector comercial del Municipio de Magangué-Bolívar por Consecuencia Del Covid-19.',
          year: 2020,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/Informe-de-impacto-economico-por-consecuencia-de-la-pandemia.pdf'
        },
        {
          namestudio: 'Estudio Económico Cámara de Comercio de Magangué',
          year: 2019,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/ESTUDIO-ECONÓMICO-2020.pdf'
        },
        {
          namestudio: 'Influencia de La Cultura Ciudadana en el Comportamiento de los Ingresos de las Cámaras de Comercio En Colombia',
          year: 2018,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2020/03/ESTUDIOS-ECONÓMICOS-CCM-2018.pdf'
        },
        {
          namestudio: 'Estudio Económico sobre el contexto Laboral de Magangué a diciembre de 2017',
          year: 2017,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2018/02/ESTUDIO-ECONOMICO.pdf'
        },
        {
          namestudio: 'Concepto de Situación Económica de la Jurisdicción de la Cámara de Comercio de Magangué vigencia 2016',
          year: 2016,
          link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2020/03/ESTUDIOS-ECONÓMICOS-CCM-2016.pdf'
        },
        {
          namestudio: 'Estudio Comparativo de los Planes de Desarrollo de la Región Caribe',
          year: 2015,
          link: 'https://ccmagangue.org.co/media/pdf/estudios/EstudioComparativodelosPlanesdeDesarrollodelaRegionCaribe2015.pdf'
        },
        {
          namestudio: 'Regalías y Pobreza en el Caribe Colombiano',
          year: 2014,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/RegaliasyPobrezaenelCaribeColombiano2014.pdf'
        },
        {
          namestudio: 'Caracterización Socioeconómica Producción de la Mojana',
          year: 2013,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/RegaliasyPobrezaenelCaribeColombiano2014.pdf'
        },
        {
          namestudio: 'Diseño Interconexión Yatí – Bodega',
          year: 2013,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/DisenoInterconexionYati-Bodega2013.pdf'
        },
        {
          namestudio: 'Investigación Flujo Fluvial de Pasajeros Magangué',
          year: 2012,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/InvestigacionFlujoFluvialdePasajerosMagangue2012.pdf'
        },
        {
          namestudio: 'II Informe Situación Laboral Magangué',
          year: 2010,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/IIInformeSituacionLaboralMagangue2010.pdf'
        },
        {
          namestudio: 'Diagnóstico Ambiental Alternativas Interconexión Magangué – Yati – Bodega – Cicuco',
          year: 2010,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/DiagnosticoAmbientalAlternativasInterconexionMagangue-Yati-Bodega-Cicuco2010.pdf'
        },
        {
          namestudio: 'Diagnóstico Ambiental Alternativas Majagual – Magangué',
          year: 2010,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/DiagnosticoAmbientalAlternativasMajagual-Magangue2010.pdf'
        },
        {
          namestudio: 'Economía y Conflicto del Cono Sur de Bolívar',
          year: 2009,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/EconomiayConflictodelConoSurdeBolivar2009.pdf'
        },
        {
          namestudio: 'I Informe Situación Laboral Magangué',
          year: 2008,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/IInformeSituacionLaboralMagangue2008.pdf'
        },
        {
          namestudio: 'Estructura y Desarrollo Empresarial Magangué',
          year: 2007,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/EstructurayDesarrolloEmpresarialMagangue2007.pdf'
        },
        {
          namestudio: 'La Mojama Riqueza Natural y Potencial Económico',
          year: 2004,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/IInformeSituacionLaboralMagangue2008.pdf'
        },
        {
          namestudio: 'Documento de Trabajo Magangué',
          year: 2002,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/DocumentodeTrabajoMagangue2002.pdf'
        },
        {
          namestudio: 'Investigación Magangué',
          year: 1997,
          link: 'http://ccmagangue.org.co/media/pdf/estudios/InvestigacionMagangue1997.pdf'
        }
      ]
    },
    {
      header: 'OTROS ESTUDIOS DE SITUACIÓN ECONÓMICA',
      estudios: [
        {
          namestudio: "Concepto Situación Económica",
          year: 2015,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2015.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2014,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2014.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2013,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2013.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2012,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2012.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2011,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2011.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2010,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2010.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2009,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2009.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2008,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2008.pdf"
        },
        {
          namestudio: "Concepto Situación Económica",
          year: 2007,
          link: "http://ccmagangue.org.co/media/pdf/conceptodesituacioneconomica/ConceptoSituacionEconomica2007.pdf"
        }
      ]
    }
  ]

  public abrirPDF(url: string) {
    window.open(url, '_blank');
  }
}
