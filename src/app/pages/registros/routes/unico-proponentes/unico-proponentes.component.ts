import { Component } from '@angular/core';

import { AccordionInterface } from '../../../../interfaces/acordion.interface';

@Component({
  selector: 'app-unico-proponentes',
  templateUrl: './unico-proponentes.component.html',
  styleUrl: './unico-proponentes.component.scss'
})
export class UnicoProponentesComponent {
  public information: AccordionInterface[] = [
    {
      header: '¿Cuál es la legislación Aplicable?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'El Registro Único de Proponentes está regulado por la Ley 1150 de 2007 y reglamentado por el Decreto 1510 de 2013, en relación con la verificación de las condiciones de los proponentes y la acreditación de las condiciones para registrarse ante las Cámaras de Comercio.'
        }
      ]
    },
    {
      header: '¿Qué trámites se adelantan ante el Registro Único de Proponentes?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'El registro Único de Proponentes cuenta con cinco trámites a saber: (i) Inscripción, (ii)Renovación, (iii) Actualización, (iv) Actualización por traslado de domicilio, y (v)Cancelación. El trámite de inscripción lo llevan a cabo aquellas personas que no figuran inscritas en el Registro Único de Proponentes o aquellas que estando inscritas no adelantaron el trámite de renovación dentro del término establecido en el artículo 8 del Decreto 1510 de 2013. La renovación es un trámite que debe ser adelantado a más tardar el quinto día hábil de abril de cada año, por aquellas personas que figuran con su registro de proponentes vigente y que se han inscrito antes del primero de enero del año en curso, con la finalidad de prorrogar la vigencia de su registro por un año más y modificar la información que ha perdido vigencia por el transcurso del tiempo o porque ya no es la información correspondiente.'
        },
        {
          tipo: 'parrafo',
          valor: 'La actualización es aquel trámite que llevan a cabo aquellos que tienen registro de proponentes vigente y desean modificar en cualquier tiempo su experiencia o su capacidad jurídica. La actualización por cambio de domicilio la lleva a cabo el proponente que ha cambiado su domicilio principal y producto de ésta situación debe trasladar su registro de proponentes a la Cámara de Comercio con jurisdicción en tal domicilio.'
        },
        {
          tipo: 'parrafo',
          valor: 'La cancelación la adelanta el proponente que no desea continuar inscrito en el registro. Quien desee volver a figurar en él deberá inscribirse nuevamente.'
        }
      ]
    },
    {
      header: '¿Quienes se inscriben en el Registro Único de Proponentes?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Todas las personas naturales o jurídicas nacionales, o extranjeras domiciliadas o con sucursal en Colombia, que aspiren a celebrar contratos con las entidades estatales, deberán estar inscritas en el Registro Único de Proponentes.'
        }
      ]
    },
    {
      header: '¿Dónde debo inscribirme?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Las personas naturales y jurídicas deberán inscribirse en el registro de la Cámara de Comercio que tenga jurisdicción en el domicilio principal de quien se inscribe.'
        },
        {
          tipo: 'parrafo',
          valor: 'Ahora bien, cuando la persona natural cuenta con más de un domicilio, deberá inscribirse ante la cámara de comercio con jurisdicción en el municipio en el cual tenga el asiento principal de sus negocios. Es importante aclarar q si la persona natural se encuentra inscrita como comerciante en el registro mercantil de alguna cámara de comercio, se presume que el asiento principal se sus negocios esta en el municipio donde tiene jurisdicción la cámara de comercio en la cual esta matriculado y no en otro distinto.'
        },
        {
          tipo: 'parrafo',
          valor: 'Las personas jurídicas extranjeras con sucursal en Colombia se inscribirán ante la cámara de comercio donde se encuentre inscrita la sucursal de esa sociedad extranjera.'
        }
      ]
    },
    {
      header: '¿Qué se debe presentar ante la Cámara de Comercio?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para llevar a cabo el trámite de inscripción, renovación o actualización se debe presentar el Formulario Único de Registro aprobado por la Superintendencia de Industria y Comercio, debidamente diligenciado, con los documentos de soporte exigidos por las normas que lo reglamentan.'
        },
        {
          tipo: 'parrafo',
          valor: 'Diligencie el formulario para su inscripción, renovación o actualización en el registro único de proponentes, ingresando a la página web www.ccmagangue.org.co y en servicios virtuales seleccione Registro de Proponentes. Una vez se tiene impreso el formulario original y los documentos o certificaciones que soporten la información acreditada para el registro, presentarlos en cualquier ventanilla de las Sedes de la CCM.'
        },
        {
          tipo: 'parrafo',
          valor: 'Igualmente el formulario puede ser diligenciado manualmente pero es importante tener en cuenta que éste debe ser leído en su integridad, no diligencie espacios sin leer qué se solicita y en qué términos, en él se explica de manera clara y precisa qué partes se deben diligenciar si se es persona jurídica inscrita en la cámara de comercio o no, con cuantos decimales máximo se deben señalar las cifras, si las cifras se expresan en pesos o salarios mínimos y otras situaciones similares. Es necesario precisar que el diligenciamiento virtual hace el trámite más ágil, efectivo y minimiza el margen de error en cualquiera de los procesos de registro.'
        }
      ]
    },
    {
      header: '¿Cuál es el término legal para resolver la solicitud de inscripción, renovación o actualización?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio cuentan con un término legal de quince (15) días hábiles para resolver la solicitud presentada por el proponente. Ahora bien, el pago de los derechos a favor de la y la consecuente recepción de los documentos, no implica la inscripción en el Registro Único de Proponentes, lo anterior, toda vez que la solicitud está sujeta a la verificación documental por parte de esta Cámara de Comercio.'
        },
        {
          tipo: 'parrafo',
          valor: 'Es importante precisar que el reingreso de los documentos una vez realizadas las correcciones, previa devolución de los mismos, no implican un trato preferencial y con ello la revisión prioritaria del documento, lo cual quiere decir que debe someterse nuevamente al término legal de 15 días hábiles, de no ser así esto conlleva a generar poca transparencia en el proceso para con los proponentes, altera el orden de las radicaciones y vulnera los derechos de los proponentes que por primera vez presentan sus documentos posiblemente sin inconsistencias y que están en turno de ser revisados.'
        }
      ]
    },
    {
      header: '¿Cuál es la función de la Cámara de Comercio frente a los proponentes?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Primeramente le corresponde a las Cámaras de Comercio llevar el registro Único de Proponentes, con ello cualquier persona tiene derecho a consultar de manera gratuita los documentos que reposen en éste, a obtener copia de la información contenida en el registro y a solicitar que se expidan las certificaciones sobre la información que en él reposa, previo el pago de los derechos establecidos a favor de las cámaras de comercio para estos efectos.'
        },
        {
          tipo: 'parrafo',
          valor: 'Frente a la inscripción del registro único de proponentes le corresponde a la cotejar entre la información consignada en el formulario y la documentación aportada para soportarla, con el fin de determinar su congruencia respecto de los requisitos habilitantes y la clasificación que se certifican en los términos que establece la Ley 1150 de 2007.'
        },
        {
          tipo: 'parrafo',
          valor: 'La cámara de comercio se abstendrá de realizar la inscripción, renovación, actualización, actualización por cambio de domicilio y cancelación de los proponentes, cuando la información presentada no sea suficiente, sea inconsistente o no contenga la totalidad de los elementos señalados en el ordenamiento jurídico para su existencia y validez.'
        },
        {
          tipo: 'parrafo',
          valor: 'La información del formulario que se verifica por parte de esta cámara, deberá constar en los documentos que se señalan en el Decreto 1510 de 2013, y su inclusión en el formulario es absoluta responsabilidad del interesado. Las cámaras de comercio no harán correcciones ni ajustes a la información contenida en el formulario, aunque de los documentos aportados se desprenda que existió error del interesado al incluirla.'
        }
      ]
    },
    {
      header: '¿Qué son los requisitos habilitantes y la clasificación?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Entiéndase por requisitos habilitantes las condiciones de Capacidad Jurídica, Experiencia, Capacidad de Organización y Capacidad Financiera que se les exigen a los proponentes en un proceso de selección, conforme a las condiciones del contrato a suscribir y a su valor y que son establecidos por cada uno de los proponentes al momento de inscribirse, actualizar o renovar tal registro.'
        },
        {
          tipo: 'parrafo',
          valor: 'A su vez la clasificación es la ubicación que el mismo proponente hace, dentro de los códigos del Clasificador de Bienes y Servicios, entendiendo por este clasificador el sistema de codificación de las Naciones Unidas para estandarizar productos y servicios, conocido por la sigla UNSPSC.'
        }
      ]
    },
    {
      header: '¿Cuándo debó renovar mi inscripción en el Registro Único de Proponentes?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Quien figure inscrito antes del primero de enero del año en curso en el Registro Único de Proponentes, deberá renovar su inscripción a más tardar el quinto día hábil de abril de este año. Para el efecto se utilizará el formulario correspondiente, al cual deberán anexarse los mismos documentos exigidos para la inscripción, salvo aquellos que se hubiesen aportado anteriormente y que no pierdan su vigencia.'
        },
        {
          tipo: 'parrafo',
          valor: 'Si el interesado no solicita la renovación del registro único de proponentes dentro del término establecido, cesarán los efectos a su registro y el trámite que deberá adelantar es el de inscripción.'
        }
      ]
    },
    {
      header: '¿Cuándo queda en firme el registro de la inscripción, renovación o actualización en el Registro Único de Proponentes?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Una vez presentados ante la Cámara de Comercio de Magangue los formularios y los documentos de soporte y después de verificar que la información es suficiente, consistente y contiene la totalidad de los elementos exigidos en la normatividad vigente, la Cámara procederá a adelantar el registro y publicará en el Registro Único Empresarial y Social (RUES) la noticia donde se le da publicidad al registro.'
        },
        {
          tipo: 'parrafo',
          valor: 'Una vez publicada la noticia de la inscripción, actualización o renovación, cualquier persona podrá presentar recurso de reposición contra el registro adelantado por la Cámara, dentro de los diez días hábiles siguientes a la publicación, para que se modifique, aclare o revoque, y solo hasta tanto haya vencido este término la anotación hecha quedará en firme, siempre que no se haya presentado recurso alguno.'
        }
      ]
    },
    {
      header: '¿Frente al cambio de normatividad, que trámite deben adelantar quienes tienen su registro bajo el Decreto 1464 de 2010 o el Decreto 734 de 2012, y desean regirse bajo lo establecido en el Decreto 1510 de 2013?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Con la entrada en vigencia del Decreto 1510 de 2013, y teniendo en cuenta que la adelanto los ajustes tecnológicos para operar bajo la nueva normatividad desde el 3 de febrero de 2014, quienes deseen tener su registro bajo los parámetros de la nueva normatividad deberán adelantar los siguientes trámites según corresponda: Inscripción: Quien no figure en el registro de proponentes o quien teniendo su registro vigente no renueve antes del quinto día hábil de abril de 2014.'
        },
        {
          tipo: 'parrafo',
          valor: 'Renovación: Si cuenta con su registro de proponentes vigente y su inscripción la llevó a cabo antes del primero de enero del año 2014, debe renovar a más tardar el quinto día hábil de abril de 2014.'
        },
        {
          tipo: 'parrafo',
          valor: 'Actualización: Quien se haya inscrito entre el primero y el 31 de enero de 2014, bajo los parámetros del Decreto 734 de 2012, deberá actualizar su registro para adecuarlo a la nueva reglamentación.'
        }
      ]
    },
    {
      header: 'Guía práctica para la inscripción en el RUP',
      contenido: [
        {
          tipo: 'link',
          valor: 'GUÍA PARA LA CODIFICACIÓN DE BIENES Y SERVICIOS'
        },
        {
          tipo: 'parrafo',
          valor: 'MODELOS DE CERTIFICACIONES – PROPONENTES'
        },
        {
          tipo: 'link',
          valor: 'Certificación cumplimiento obligaciones parafiscales artículo 50 de la ley 789 de 2002.'
        },
        {
          tipo: 'link',
          valor: 'Anexo personas jurídicas principales cuentas detalladas.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 1: Personas jurídicas para acreditar el tamaño de empresa.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 2: Personas naturales para acreditar el tamaño de empresa.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 3: Personas jurídicas no inscritas en cámara para acreditar vigencia de estatutos.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 4: personas jurídicas no inscritas en cámara para acreditar la duración de la entidad.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 5: Personas naturales no matriculadas con varios domicilios para acreditar el domicilio principal.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 6: Personas jurídicas y naturales para acreditar experiencia por terceros contratantes.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 7: Experiencia por terceros contratantes cuando el proponente hizo parte de consorcio unión temporal o sociedad.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 8: Personas jurídicas para acreditar los códigos no certificados por los terceros contratantes.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 9: Personas naturales para acreditar los códigos no certificados por los terceros contratantes.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 10: Personas jurídicas para acreditar experiencia mediante copia del contrato.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 11: Personas naturales para acreditar experiencia mediante copia del contrato.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 12: Personas naturales no obligadas a llevar contabilidad.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 13: Personas jurídicas y naturales para acreditar equivalencias de la información financiera.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 14: Para acreditar los miembros que hacen parte del grupo empresarial o la situación de control.'
        },
        {
          tipo: 'link',
          valor: 'MODELO 15: Personas jurídicas para acreditar que el proponente no hace parte de grupo empresarial o situación de control.'
        }
      ]
    }
  ];
}
