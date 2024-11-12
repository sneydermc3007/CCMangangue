import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-costumbre-mercantil',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    SharedModule
  ],
  templateUrl: './costumbre-mercantil.component.html',
  styleUrl: './costumbre-mercantil.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class CostumbreMercantilComponent {
  public data = [
    {
      header: '¿Qué es la Costumbre Mercantil?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: '“El vocablo costumbre implica una regla de conducta configurada durante un lapso más o menos largo en que los hechos constitutivos de la misma fueron adquiriendo notoriedad, hasta ser demostrativos de aceptación general.”1 Es un conjunto de usos o prácticas que realizan los comerciantes de manera uniforme, reiterada y pública y que ha ocupado un destacado lugar en la evolución del derecho mercantil y en el desarrollo del mundo de los negocios. Es fuente del derecho y creadora de normas jurídicas, y ostenta la misma autoridad que la ley mercantil siempre que no la contraríe manifiesta o tácitamente y que los hechos constitutivos de la misma sean públicos, uniformes y reiterados en el lugar donde hayan de cumplirse las prestaciones o surgido las relaciones que deban regularse por ella.'
        },
        {
          tipo: 'parrafo',
          valor: 'Dentro de sus funciones misionales las cámaras de comercio investigan y certifican costumbres mercantiles, que tienen toda la validez legal y que le permiten a los empresarios, comerciantes e interesados por ejemplo hacer respetar sus contratos, resolver una controversia o un litigio, entre otros; además de brindar seguridad en el sistema jurídico empresarial ¿Pero qué son las costumbres mercantiles?'
        },
        {
          tipo: 'parrafo',
          valor: 'La costumbre es una norma que hace parte del sistema jurídico; y la costumbre mercantil es una práctica o prácticas que realizan los comerciantes y que cumplen con los requisitos exigidos por el Código de Comercio para adquirir esta denominación. Desde la Constitución se establece la costumbre como una fuente auxiliar del Derecho, que auxilia al ciudadano o al operador jurídico (abogados, jueces, funcionarios) cuando no encuentra una norma concreta. La costumbre le puede ayudar a entender, interpretar y regular una situación jurídica en particular.'
        }
      ]
    }, 
    {
      header: 'Certificación de la Costumbre Mercantil',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong>Generales</strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'El Artículo 86, numeral 5, del Código de Comercio, asignó a las cámaras de comercio la función de recopilar y posteriormente certificar las diferentes costumbres o usos reiterados existentes entre los comerciantes de su jurisdicción y que se han convertido para estos en obligatorios.'
        },
        {
          tipo: 'parrafo',
          valor: 'Dichas costumbres, por definición legal, deben ser de público conocimiento, reiterados, uniformes y vigentes al momento y en el lugar de su certificación. Es por ello que previamente a su certificación la Cámara de Comercio deberá verificar el cumplimiento de estos requisitos, para determinar la existencia de cada costumbre de manera específica.'
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio se encargará de recopilar y certificar la costumbre mercantil, ya sea de oficio, o a solicitud de cualquier persona natural o jurídica, pública o privada.'
        }
      ]
    },
    {
      header: 'Procedimiento',
      contenido: [
        {
          tipo: 'lista',
          valor: ['Solicitud']
        },
        {
          tipo: 'parrafo',
          valor: 'Para solicitar la certificación de determinada costumbre mercantil, deberá adelantar ante la Cámara de Comercio la petición respectiva indicando claramente cuál es la práctica comercial que desea le sea certificada como costumbre, identificando cuáles son sus actores y el sector de comercio en que se desarrolla esa práctica. Para el efecto, puede ser diligenciado uno de los formatos de solicitud que están disponibles en cualquiera de nuestras sedes'
        },
        {
          tipo: 'lista',
          valor: ['Estudio jurídico']
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio adelantará un estudio para determinar la viabilidad jurídica de dicha costumbre.'
        },
        {
          tipo: 'lista',
          valor: ['Metodología']
        },
        {
          tipo: 'parrafo',
          valor: 'En caso de considerarla viable, se determinará cuál es la metodología adecuada para llevar a cabo el estudio estadístico de la misma.'
        },
        {
          tipo: 'lista',
          valor: ['Estudio estadístico']
        },
        {
          tipo: 'parrafo',
          valor: 'Teniendo en cuenta la metodología definida y cuáles son las necesidades de información, se tomará una muestra representativa dentro del sector de comerciantes involucrados y se diseñará un cuestionario que será diligenciado por cada uno de los integrantes de dicha muestra.'
        },
        {
          tipo: 'lista',
          valor: ['Conclusiones']
        },
        {
          tipo: 'parrafo',
          valor: 'A partir de la tabulación de los resultados de la indagación se establecerá la existencia o no de la costumbre mercantil.'
        },
        {
          tipo: 'lista',
          valor: ['Certificación']
        },
        {
          tipo: 'parrafo',
          valor: 'De haberse establecido la existencia de la costumbre mercantil, esta será certificada por la Cámara de Comercio.'
        },
        {
          tipo: 'parrafo',
          valor: 'La ley no obliga a las cámaras de comercio, ni las faculta, para certificar sobre los estudios de cuyos resultados no se desprenda la existencia de una costumbre mercantil.'
        }
      ]
    }
  ]

  public documentos = [
    { nombre: 'Costumbre Mercantil año 2023', url: 'https://ccmagangue.org.co/media/pdf/COSTUMBREMERCANTIL2023.pdf' },
    { nombre: 'Costumbre Mercantil año 2022', url: 'https://ccmagangue.org.co/media/pdf/COSTUMBREMERCANTIL2022.pdf' },
    { nombre: 'Costumbre Mercantil año 2021', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2021.pdf' },
    { nombre: 'Costumbre Mercantil año 2020', url: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/costumbremercantil2020.pdf' },
    { nombre: 'Costumbre Mercantil año 2019', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2019.pdf' },
    { nombre: 'Costumbre Mercantil año 2018', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2018.pdf' },
    { nombre: 'Costumbre Mercantil año 2017', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2017.pdf' },
    { nombre: 'Costumbre Mercantil año 2016', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2016.pdf' },
    { nombre: 'Costumbre Mercantil año 2015', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2015.pdf' },
    { nombre: 'Costumbre Mercantil año 2014', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2014.pdf' },
    { nombre: 'Costumbre Mercantil año 2013', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2013.pdf' },
    { nombre: 'Costumbre Mercantil año 2012', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2008.pdf' },
    { nombre: 'Costumbre Mercantil año 2011', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2011.pdf' },
    { nombre: 'Costumbre Mercantil año 2010', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2010.pdf' },
    { nombre: 'Costumbre Mercantil año 2009', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2009.pdf' },
    { nombre: 'Costumbre Mercantil año 2008', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2008.pdf' },
    { nombre: 'Costumbre Mercantil año 2007', url: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2007.pdf' },
  ];

  descargar(url: string) {
    window.open(url, '_blank');
  }
}
