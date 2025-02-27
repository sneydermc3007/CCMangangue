import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-mercantil',
  templateUrl: './mercantil.component.html',
  styleUrl: './mercantil.component.scss'
})
export class MercantilComponent {
  public information: AcordeonInterface[] = [
    {
      header: 'Consultas previas a la Matricula Mercantil',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Confirme en la Secretaria de Planeación Municipal, que la actividad económica a desarrollar pueda ser ejecutada en la dirección donde se ubicará el domicilio principal y/o en la dirección del establecimiento de comercio (uso de suelos), si es del caso.',
            'Verifique que el nombre del establecimiento de comercio no figure registrado en ninguna Cámara de Comercio del país (Homonimia). La consulta la puede realizar en las terminales de autoconsulta dispuestas en la dirección de internet del Registro Único Empresarial y Social RUES www.rues.org.co. En caso de encontrarse registrado como comerciante en otra Cámara de Comercio del País, es necesario que defina su situación en dicha cámara para proceder a su registro.',
            'Establezca la Clasificación Industrial Internacional Uniforme CIIU correspondiente a la actividad económica que va a desarrollar. La consulta la puede realizar en las oficinas de la Cámara de Comercio o a través del sitio web www.crearempresa.com.co'
          ]
        }
      ]
    },
    {
      header: 'Trámites para la formalización de la Matricula Mercantil',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Diligencie de manera correcta y completa el Formulario del Registro Único Empresarial y Social RUES, este podrá ser adquirido en cualquiera de las sedes de la CCM.',
            'A través de nuestro sitio web ccmagangue.org.co usted podrá diligenciar los formularios de matrícula mercantil de la persona natural y sus establecimientos de comercio. Imprima y firme el formulario diligenciado.',
            'Diligencie el Formulario de Registro Único Tributario de la DIAN a través de la página internet www.dian.gov.co, seleccionando la opción “Inscripción RUT”, y en Tipo de Inscripción elija “Cámara de Comercio”, pulse el botón continuar. Imprima y firme el formulario diligenciado.'
          ]
        }
      ]
    },
    {
      header: 'Documentos a presentar para la Matricula Mercantil',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Copia del documento de identificación con exhibición del original.',
            'Formulario del Registro Único Empresarial y Social RUES para el comerciante y Establecimiento de Comercio, si es el caso, con presentación personal ante el funcionario autorizado de la Cámara de Comercio o reconocimiento de contenido y firma ante notario.',
            'Si es menor de edad, autorización para ejercer el comercio por parte de los padres (art. 62 de C.C., modificado por el decreto 772/75, art. 1 y art. 12 del C.Co.) con presentación personal ante el funcionario autorizado de la Cámara de Comercio o reconocimiento de contenido y firma ante notario. Así mismo deberá adjuntar copia del registro civil de nacimiento del menor. Tenga en cuenta que el menor de edad debe ser mayor de 14 años.',
            'Si ya cuenta con NIT, adjuntar copia del Certificado del RUT.',
            'Si no tiene NIT, para la inscripción en el RUT presentar: Original del Formulario de Registro Único Tributario de la DIAN con la marca de agua “Para Tramite en Cámara”, con presentación personal ante el funcionario autorizado de la Cámara de Comercio o reconocimiento de contenido y firma ante notario. Cuando el trámite del RUT lo realice un tercero a través de poder, el formulario Pre-Rut lo debe firmar el apoderado, se debe adjuntar el poder con reconocimiento del otorgante.',
            'Si la persona natural realiza el trámite de matrícula mercantil por medio de apoderado, se deberá presentar copia del poder general vigente o el original del poder especial debidamente otorgado y fotocopia del documento de identidad del apoderado y del comerciante a matricularse.'
          ]
        }
      ]
    },
    {
      header: 'Al momento de presentar los documentos verifique que:',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Haya diligenciado todas las casillas de los formularios.',
            'Los formularios no presenten tachones o enmendaduras.',
            'Se encuentren debidamente firmados.',
            'El número de teléfono y la dirección que se reporte en el formulario del RUT (Pre-Rut) debe coincidir con los datos del domicilio principal reportados en el formulario del Registro Único Empresarial y Social RUES.'
          ]
        }
      ]
    },
    {
      header: 'Recuerde que:',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'De acuerdo con el artículo 33 del Código de Comercio la matricula mercantil debe renovarse entre los primeros tres meses del año, indiferente a la fecha en la cual se realizó la inscripción de la matricula mercantil.',
            'Debe dar cumplimiento a los requisitos establecidos en la Ley 232 de 1995, Ley 962 de 2005 artículo 27 y el Decreto Reglamentario 1879 de 2008.',
            'Matricular todos los establecimientos de comercio.',
            'Debe dar cumplimiento a los requisitos establecidos en la Ley 232 de 1995, Ley 962 de 2005 artículo 27 y el Decreto Reglamentario 1879 de 2008.'
          ]
        }
      ]
    },
    {
      header: 'Costos de la Matrícula',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para proceder a realizar la matrícula mercantil de la persona natural y su establecimiento de comercio se deberá cancelar los derechos que la inscripción origina (Artículo 45 del C.Co). El costo dependerá de los activos reportados en los Formulario del Registro Único Empresarial y Social RUES (artículo 23 del Decreto 393 de 2002). Estos valores podrán ser liquidados de manera previa en nuestras oficinas de atención al cliente o si gusta puede llamarnos a nuestras líneas de atención al cliente 6875362.'
        }
      ]
    },
    {
      header: 'Modificación de la información',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Cualquier modificación tales como: cambio de nombre, dirección, teléfono, actividad económica etc., debe comunicarse por escrito y personalmente a la Cámara de Comercio, por intermedio del comerciante o apoderado.'
        }
      ]
    },
    {
      header: 'Cancelación de la Matrícula Mercantil',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Cuando la persona natural comerciante ha dejado de ejercer el comercio, debe cancelar su matrícula mercantil, mediante solicitud escrita con reconocimiento de contenido y firma ante notario o presentación persona ante funcionario autorizado de la Cámara de Comercio.'
        },
        {
          tipo: 'parrafo',
          valor: 'Cuando el comerciante fallece, la solicitud de cancelación de matrícula la podrá pedir por escrito quien se encuentre legitimado para hacerlo. Se debe tener en cuenta que para cancelar la matrícula debe haber cancelado los derechos correspondientes a los años no renovados. Si lo desea, puede utilizar los formatos de cancelación y modificación de información, que gratuitamente le suministra la CCM.'
        }
      ]
    },
    {
      header: 'Normatividad Registro Mercantil',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong>Ley 10 de 1991 </strong>Empresas asociativas de trabajo.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 1100 de 1992</strong>Reglamentario de la Ley 10 de 1991.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 550 de 1999 </strong>Por la cual se establece un régimen que promueva y facilite la reactivación empresarial y la reestructuración de los entes territoriales para asegurar la función social de las empresas y lograr el desarrollo armónico de las regiones y se dictan disposiciones para armonizar el régimen legal vigente con las normas de esta ley.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 590 de 2000 </strong>Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresa.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 716 de 2001 </strong>Art. 16. Trámite y Certificación del NIT.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 794 de 2003 (Extractos)</strong>Por la cual se modifica el Código de Procedimiento Civil, se regula el proceso ejecutivo y se dictan otras disposiciones.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Resolución 643 de 2004 </strong>Por la cual se definen las reglas para el envío electrónico de las copias de las escrituras públicas sujetas a registro en las Cámaras de Comercio.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 962 de 2005 </strong>Por la cual se dictan disposiciones sobre racionalización de trámites y procedimientos administrativos de los organismos y entidades del Estado y de los particulares que ejercen funciones públicas o prestan servicios públicos'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 4698 de 2005 </strong>Por el cual se reglamenta el Título IV del Libro Primero del Código de Comercio y se dictan otras disposiciones.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 1014 de 2006 </strong>De fomento a la cultura del emprendimiento (De especial interés el artículo 22).'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 4463 de 2006 </strong>Por el cual se reglamenta el artículo 22 de la Ley 1014 de 2006.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 1116 de 2006 </strong>Por la cual se establece el Régimen de Insolvencia Empresarial en la República de Colombia y se dictan otras disposiciones.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 1150 de 2007 </strong>Por medio de la cual se introducen medidas para la eficiencia y la transparencia en la ley 80 de 1993 y se dictan otras disposiciones generales sobre la contratación con recursos públicos.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 1868 de 2008 </strong>Por el cual se modifica el decreto 393 de 2002. Derechos por inscripción de actos, libros y documentos.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 1878 de 2008 </strong>Por medio del cual se modifica parcialmente el Decreto 2649 de 1993 y se dictan otras disposiciones.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 1879 de 2008 </strong>Por el cual se reglamentan la Ley 232 de 1995, el artículo 27 de la Ley 962 de 2005, los artículos 46, 47 y 48 del Decreto 2150 de 1995.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 1258 de 2008 </strong>Por la cual se crea la Sociedad por Acciones Simplificadas (SAS).'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Ley 1429 de 2010 </strong>Por la cual se expide la Ley de formalización y generación de empleo.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Decreto 545 de 2011 </strong>Por el cual se reglamentan parcialmente los artículos 5, 7, 46 y 50 de la ley 1429 de 2010 Formalización y Generación de Empleo..'
        }
      ]
    }
  ];
}
