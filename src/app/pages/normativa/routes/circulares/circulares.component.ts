import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-circulares',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './circulares.component.html',
  styleUrl: './circulares.component.scss'
})
export class CircularesComponent {
  public information: AcordeonInterface[] = [
    {
      header: 'Circular 003 del 19 de diciembre de 2019',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'A partir del 1° de noviembre de 2020, los comerciantes que se matricularon en el año 2020 y los que hayan renovado oportunamente su matrícula mercantil y la de todos sus establecimientos a nivel nacional podrán acceder a la información del Registro Único Empresarial y Social – RUES de acuerdo con lo establecido en la Circular 003 del 19 de diciembre de 2019 de la Superintendencia de Industria y Comercio Los beneficios que obtendrá son:'
        },
        {
          tipo: 'lista',
          valor: [
            'Acceso a la información que reposa en el Registro Único Empresarial y Social – RUES de todos los comerciantes (personas naturales y jurídicas) inscritos en el Registro Mercantil que tengan su matrícula mercantil y las de sus establecimientos de comercio a nivel nacional renovada.',
            'Descarga de la información, según los criterios de búsqueda establecidos en la Circular 003 de 2019.',
            { label: 'Descargar Circular Circular 03 de 19 diciembre 2019', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/media/pdf/Circular%2003de19dic2019.pdf' }
          ]
        }
      ]
    },
    {
      header: 'Circular Externa 04 del 14 de julio de 2017',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Por la cual se modifica el anexo N° 4.1 “Formulario del Registro Único Empresarial y Social – RUES y sus anexos” del capítulo Primero “Registros públicos a cargo de las Cámaras de Comercio” del título VIII de la Circular Única de la Superintendencia de Industria y Comercio.'
        }
      ]
    },
    {
      header: 'Circular Externa 03 del 24 de marzo de 2017',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Por la cual se modifica el numeral 1.7 “Formulario del Registro Único Empresarial y Social – RUES y sus anexos del capítulo Primero “registros públicos a cargo de las Cámaras de Comercio” del título VIII de la Circular Única de la Superintendencia de Industria y Comercio.'
        }
      ]
    },
    {
      header: 'Circular Externa N 02 del 24 de noviembre de 2016',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Por medio de la cual se reforma integralmente el Titulo VIII de la Circular Única de la Superintendencia de Industria y Comercio actualizado el 24 de abril de 2017 en el cual se imparten instrucciones a las Cámaras de Comercio en los aspectos relacionados con el desarrollo de sus funciones.'
        }
      ]
    },
    {
      header: 'Circular Externa N 02 de 2015 del 03 de noviembre de 2015',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Por medio de la cual se imparten instrucciones a los responsables del tratamiento de datos personales, personas jurídicas, de naturaleza privada inscritas en las Cámaras de Comercio y Sociedades de economía mixta, para efectos de realizar la inscripción de sus bases de datos en el Registro Nacional de bases de datos–RNBD.'
        }
      ]
    }
  ]
}
