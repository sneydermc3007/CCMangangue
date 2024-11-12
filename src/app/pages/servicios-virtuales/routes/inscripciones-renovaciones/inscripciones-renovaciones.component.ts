import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-inscripciones-renovaciones',
  templateUrl: './inscripciones-renovaciones.component.html',
  styleUrl: './inscripciones-renovaciones.component.scss'
})
export class InscripcionesRenovacionesComponent {
   public information: AcordeonInterface[] = [
      {
        header: 'Matricula Mercantil',
        contenido: [
          {
            tipo: 'formatted',
            valor: '<strong>Inscriba, renueve y conozca los beneficios y utilidad de la Matrícula Mercantil.</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'Hace pública la calidad de comerciante, en la medida que hace visible al empresario frente a potenciales clientes que consultan los registros y contiene información sobre los datos generales de los comerciantes y de las sociedades.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>Recuerde que:</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'Antes del 31 de marzo de cada año, todos los empresarios matriculados deben renovar su Matrícula y la de sus establecimientos de comercio. Dicho trámite se puede realizar en línea o en cualquiera de las sedes de la CCM.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>¿Cuáles son sus obligaciones como comerciante y qué pasa si no cumple con ellas?</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'De acuerdo con el artículo 19 del Código de Comercio las obligaciones del comerciante son:'
          },
          {
            tipo: 'lista',
            valor: [
              'Matricularse en el Registro Mercantil y realizar su renovación anualmente.',
              'Inscribir en el Registro Mercantil todos los actos, libros y documentos.',
              'Llevar contabilidad regular de sus negocios conforme a las prescripciones legales.',
              'Conservar, con arreglo a la ley, la correspondencia y demás documentos relacionados con sus negocios o actividades.',
              'Abstenerse de ejecutar actos de competencia desleal.'
            ]
          },
          {
            tipo: 'parrafo',
            valor: 'El incumplimiento de las anteriores obligaciones se sanciona con multas económicas impuestas por la Superintendencia de Industria y Comercio (SIC) de hasta 17 Salarios Mínimos Mensuales Legales Vigentes (SMMLV).'
          },
          {
            tipo: 'parrafo',
            valor: 'Renueve su matrícula mercantil Link de Renovacion virtual.'
          }
        ]
      },
      {
        header: 'Registro Único de Proponentes',
        contenido: [
          {
            tipo: 'formatted',
            valor: '<strong>Inscriba, renueve y actualice su inscripción.</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'El Registro Único de Proponentes (RUP) es un registro de creación legal que llevan las cámaras de comercio de todo el país. En este deben inscribirse las personas naturales o jurídicas nacionales o extranjeras domiciliadas o con sucursal en Colombia, que aspiran a celebrar contratos con las entidades estatales para la ejecución de obras, suministro de bienes o prestación de servicios, salvo las excepciones taxativamente señaladas en la ley. En este registro consta la información relacionada a la experiencia, capacidad jurídica, capacidad financiera, capacidad de organización y clasificación del Proponente.'
          },
          {
            tipo: 'parrafo',
            valor: 'Presente su renovación para que su inscripción en este Registro se encuentre activa al momento de presentarse a una licitación. No pierda oportunidades de negocio, recuerde que la información en el Registro Único de Proponente debe estar actualizada y en firme.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>BENEFICIOS DE ESTAR INSCRITOS EN EL RUP</strong>'
          },
          {
            tipo: 'lista',
            valor: [
              'Dar publicidad a los requisitos que habilitan al proponente, como su capacidad jurídica, financiera, de organización y experiencia.',
              'Participar en los procesos de contratación ante las entidades estatales.',
              'Obtener el certificado del Registro Único de Proponentes que constituye plena prueba respecto de la información documental verificada, cuyo registro se encuentra en firme.'
            ]
          },
          {
            tipo: 'formatted',
            valor: '<strong>QUIENES PUEDEN INSCRIBIRSE</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'Tenga en cuenta que según la última normatividad (Decreto 1510 de 2013 y Circular Única de la SIC Titulo VII, Punto 1.2) en el Registro Único de Proponentes podrán inscribirse:'
          },
          {
            tipo: 'formatted',
            valor: '<strong>Personas naturales:</strong>'
          },
          {
            tipo: 'lista',
            valor: [
              'Comerciantes matriculados en el Registro Mercantil.',
              'No matriculadas o con matrículas canceladas en el Registro Mercantil.'
            ]
          },
          {
            tipo: 'formatted',
            valor: '<strong>Personas jurídicas:</strong>'
          },
          {
            tipo: 'lista',
            valor: [
              'Sociedades comerciales.',
              'Sociedades civiles.',
              'Sociedades extranjeras con sucursal en Colombia.',
              'Entidades sin Ánimo de Lucro (ESALES): Inscritas y activas en el Registro de las Entidades sin Ánimo de Lucro.',
              'No inscritas en el sistema de registros de la .'
            ]
          },          
          {
            tipo: 'formatted',
            valor: '<strong>DONDE REALIZAR LOS TRÁMITES DE ESTE REGISTRÓ</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'Virtualmente: A través de este servicio realice sus trámites de inscripción, actualización, renovación y cancelación del Registro Único de Proponentes con total seguridad y validez jurídica, de acuerdo con lo dispuesto en el Decreto 1510 de 2013. Evite errores en el diligenciamiento y agilice los cálculos que requiere el trámite. Las certificaciones se elaboran a partir de la información que usted suministra en los formularios durante el trámite.'
          },
          {
            tipo: 'parrafo',
            valor: 'Al finalizar usted puede radicar su solicitud de forma totalmente virtual sin filas ni congestiones y con total seguridad, para lo cual debe adjuntar los documentos soporte en nuestra plataforma, firmar el formulario. Ingrese link de inscripción de registro único de proponente. En sedes: Presente en cualquiera de nuestras sedes el formulario diligenciado, soportes y certificaciones requeridas.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>Traslado de domicilio:</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'En caso de que la persona jurídica o natural haya realizado el traslado de domicilio del proponente a la ciudad de Magangué, o a cualquier municipio de la jurisdicción de la , debe realizar sus trámites de manera presencial en nuestras sedes.'
          }
        ]
      },
      {
        header: 'Entidades sin Ánimo de Lucro y de Economía Solidaria',
        contenido: [
          {
            tipo: 'parrafo',
            valor: 'En esta sección encontrará toda la información relacionada con las Corporaciones, las Entidades Sin Ánimo de Lucro (Esales) y las Organizaciones no Gubernamentales (ONG).'
          },
          {
            tipo: 'parrafo',
            valor: 'Renueve la inscripción de su ESAL de forma fácil y segura link de renovación. Obtenga beneficios por renovar a tiempo.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>Recuerde que:</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'El Gobierno Nacional expidió el Decreto 019 de 2012, en el cual se obliga a partir del año 2013 a todas las Entidades Sin Ánimo de Lucro inscritas en las cámaras de comercio a realizar la renovación de la inscripción anualmente dentro de los tres primeros meses de cada año de acuerdo con las Tarifas de los Registros Públicos 2015.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>¿Qué entidades deben realizar la renovación de su inscripción?</strong>'
          },
          {
            tipo: 'parrafo',
            valor: 'Deben renovar todas las entidades inscritas en el Registro de Entidades sin Ánimo de Lucro:'
          },
          {
            tipo: 'lista',
            valor: [
              'Asociaciones, corporaciones y fundaciones.',
              'Entidades de la economía solidaria (cooperativas, precooperativas, fondos de empleados, asociaciones mutuales).',
              'Veedurías ciudadanas.',
              'Entidades extranjeras de derecho privado sin ánimo de lucro con domicilio en el exterior.',
            ]
          },
          {
            tipo: 'parrafo',
            valor: 'Antes de realizar la renovación, tenga a la mano:'
          },
          {
            tipo: 'lista',
            valor: [
              'La información financiera de su entidad (activos e información financiera del balance general a corte de diciembre del año inmediatamente anterior).',
              'Código CIIU de la actividad económica que realiza su entidad. Si tiene dos o más, elija el código de la actividad económica que más ingresos le hay generado en el último año.'
            ]
          },
          {
            tipo: 'parrafo',
            valor: 'No olvide que según la Resolución 139, desde el 1 de diciembre de 2012, los interesados deben consultar su código CIIU.'
          },
          {
            tipo: 'formatted',
            valor: '<strong>Realice la renovación por internet:</strong>'
          },
          {
            tipo: 'lista',
            valor: [
              'www.ccmagangue.org.co',
              'Diríjase al link de nuestra web llamado servicios virtuales y siga las indicaciones',
              'Si tiene problemas le invitamos a consultar el instructivo de renovación virtual en nuestra página web: http://www.ccmagangue.org.co/pdf/pdfinstructivos/INSTRUCTIVO_RENOVACION_VIRTUAL_2014.pdf'
            ]
          }
        ]
      }
   ]
}
