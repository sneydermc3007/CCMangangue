import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-sipref',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sipref.component.html',
  styleUrl: './sipref.component.scss'
})
export class SiprefComponent {
  public information = [
    {
      header: 'Que es el Sistema Preventivo de Fraudes – SIPREF?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Es un sistema creado por la Superintendencia de Industria y Comercio, por medio de la Circular 005 del 30 de mayo de 2014, modificada por la Circular Única del 23 de noviembre de 2016 de la misma entidad, cuyo objetivo es prevenir y evitar que terceros al ajenos al titular del registro, modifiquen la información que reposa en ellos, con la intención de defraudar a la comunidad.'
        }
      ]
    },
    {
      header: 'Quienes se benefician con este recurso?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Empresarios, personas naturales o jurídicas y demás entidades matriculadas o inscritas en los registros públicos que manejan las cámaras de comercio.'
        }
      ]
    },
    {
      header: 'Cómo se implementa el SIPREF?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio harán una verificación formal de la identidad de las personas que presenten o reingresen peticiones registrales e implementarán un sistema de alertas que permitirá a los titulares de la información registral, adoptar medidas tempranas que eviten o detengan posibles conductas fraudulentas.'
        },
        {
          tipo: 'parrafo',
          valor: 'Con el fin de garantizar la seguridad de la operación registral en tema de nombramientos, la Cámara de Comercio de Cali contacta además al titular del registro para informarle sobre el tramite radicado.'
        },
        {
          tipo: 'parrafo',
          valor: 'Los mecanismos y herramientas del SIPREF no generarán costo alguno para los matriculados o inscritos.'
        }
      ]
    },
    {
      header: 'Que solicitudes están exceptas del SIPREF?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Se exceptúan del SIPREF el Registro Nacional de Turismo, Registro Único Nacional de Entidades Operadoras de Libranza los libros electrónicos, y las solicitudes y órdenes provenientes de las autoridades judiciales o administrativas como por ejemplo: embargos, inscripciones de la demanda, medidas cautelares, entre otras.'
        },
        {
          tipo: 'parrafo',
          valor: 'Para efectuar trámites de renovación de matriculados o inscritos “activos”, no se realizará la validación de la identificación del solicitante al momento de la radicación de los formularios, ni tampoco se requerirá dejar evidencia de la identificación de quien presenta físicamente la solicitud. Lo anterior, sin perjuicio de enviar las respectivas alertas.'
        }
      ]
    },
    {
      header: '¿Qué ventajas ofrece el SIPREF?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Además de incrementar la seguridad y confiabilidad en la operación de los registros públicos, tiene las siguientes ventajas:'
        },
        {
          tipo: 'lista',
          valor: [
            'Verificar la identidad de las personas que realizan trámites físicos o virtuales.',
            'Validar la vigencia de la cédula de ciudadanía de las personas nombradas y de los socios constituyentes o los socios que ingresen nuevos a una sociedad de personas (Limitada, S. en C.S., Empresa Unipersonal).',
            'Prevenir que terceros no autorizados por el titular del registro modifiquen la información que figura en los registros públicos de la Cámara de Comercio de Magangué.',
            'Prevenir fraudes en los registros de los comerciantes o inscritos que no han registrado actos, actualizado datos o no han efectuado su renovación en los últimos tres (3) años.',
            'Utilizar un sistema de alertas que ponga en conocimiento del empresario, la presentación de un trámite y a su vez la inscripción, requerimiento o devolución del mismo.',
            'Permitir a los titulares de la información registral adoptar medidas que detengan conductas fraudulentas.'
          ]
        }
      ]
    },
    {
      header: '¿En qué casos se procede a verificar el documento de identidad en el sistema de información de la Registraduría Nacional del Estado Civil?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Constitución de persona jurídica (Sociedad Limitada, S. en C.S., Empresa Unipersonal)',
            'Inscripción o el ingreso de nuevos socios en sociedades de personas.',
            'Nombramiento o cambio de representantes legales, integrantes de órganos de administración o de revisores fiscales. Para tal fin, debe informarse a la Cámara de Comercio, el número del documento, junto con la fecha de expedición del mismo, sin que se requiera de su presentación física. Para las personas extranjeras nombradas que cuentan con cédula de extranjería, deberá indicar el número y fecha de expedición para verificar en la página de Migración Colombia. Si no tiene cédula de extranjería, deberá adjuntar copia simple del pasaporte.'
          ]
        }
      ]
    },
    {
      header: 'Por qué debo mantener actualizada la información ante la Cámara de Comercio?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para efectos de que la Cámara de Comercio pueda informar al titular del registro acerca de lo que está pasando en ellos, es importante que mantenga actualizados sus datos. También se aconseja que de manera periódica verifique su información, evitando que terceros malintencionados la modifiquen.'
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio enviara una alerta al último correo electrónico, al correo electrónico de notificación y al último número de teléfono celular reportados, cuando se radique una solicitud de renovación, inscripción o modificación de los registros.'
        },
        {
          tipo: 'parrafo',
          valor: 'Cuando se trate de  la modificación del correo electrónico o el número de teléfono celular del inscrito, la “alerta” se enviará a los datos que reposan en el registro respecto a los dos (2) últimos correos electrónicos reportados, a los dos (2) últimos correos de Notificación Judicial reportados y al último número de teléfono celular reportado.'
        }
      ]
    },
    {
      header: 'En caso de detectar una irregularidad en la información, cual es el procedimiento?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'El titular de la información tiene el derecho a oponerse del trámite cuando advierta que el acto o documento que pretende modificar su registro, no es de su procedencia.'
        },
        {
          tipo: 'parrafo',
          valor: 'En este caso, el titular de la información deberá presentar la correspondiente oposición verbal o física ante la Cámara de Comercio y dentro de los dos (2) días hábiles siguientes deberá aportar la denuncia penal correspondiente con el fin de que la Cámara de Comercio pueda abstenerse de realizar el registro.'
        },
        {
          tipo: 'parrafo',
          valor: 'Si el titular de la información no se opone o no allega la denuncia correspondiente, la Cámara de Comercio deberá continuar la actuación.'
        },
        {
          tipo: 'parrafo',
          valor: 'Cuando la persona que aparece firmando la solicitud de inscripción, concurre  a manifestar no haberlo suscrito, la entidad cameral se abstendrá de realizar el registro.'
        }
      ]
    },
    {
      header: 'Qué implicaciones leales existen para quienes alteren la información del registro sin justificación?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Quien altere o modifique la información de los registros públicos de manera injustificada puede verse incurso en la comisión de un delito de conformidad con lo establecido en el Código Penal colombiano y demás normas vigentes.'
        }
      ]
    }, 
    {
      header: 'Procedimiento para solicitudes que modifiquen la información de matrículas e inscripciones inactivas:',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para los matriculados o inscritos que no hayan renovado su matrícula o inscripción, o que no hayan registrado actas o documentos durante los tres (3) últimos años y deseen renovar, inscribir o modificar información de sus registros, ésta deberá solicitarse por las siguientes personas:'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Personas naturales:</strong>'
        },
        {
          tipo: 'lista',
          valor: [
            'La persona natural matriculada.',
            'Si la persona natural ha fallecido, el cónyuge supérstite y/o cualquiera de su(s) heredero(s), quienes deberán acreditar su calidad con copia simple del registro de matrimonio y/o del registro civil de nacimiento y adjuntar copia simple del registro civil de defunción.'
          ]
        },
        {
          tipo: 'formatted',
          valor: '<strong>Sociedades de personas:</strong>'
        },
        {
          tipo: 'lista',
          valor: [
            'El representante legal inscrito',
            'Alguno de los socios inscritos',
            'Alguno de los miembros del órgano colegiado de administración inscritos',
            'Revisores fiscales inscritos'
          ]
        },
        {
          tipo: 'formatted',
          valor: '<strong>Sociedades por acciones y Entidades Sin Ánimo de Lucro:</strong>'
        },
        {
          tipo: 'lista',
          valor: [
            'Representante legal inscrito',
            'Alguno de los miembros de los órganos de administración inscritos',
            'Revisores fiscales inscritos'
          ]
        }
      ]
    }
  ];
}
