import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-nacional-turismo',
  templateUrl: './nacional-turismo.component.html',
  styleUrl: './nacional-turismo.component.scss'
})
export class NacionalTurismoComponent {
  public information: AcordeonInterface[] = [
    {
      header: '¿Cuáles son los prestadores de servicios turísticos obligados a inscribirse en el Registro Nacional de Turismo – RNT?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Artículo 12 de la ley 1101 de 2006:'
        },
        {
          tipo: 'lista',
          valor: [
            'Los Hoteles, Centros Vacacionales, Campamentos, Viviendas Turísticas y otros tipos de Hospedaje no Permanente, excluidos los Establecimientos que Prestan el Servicio de Alojamiento por Horas.',
            'Las Agencias de Viajes y Turismo, Agencias Mayoristas y las Agencias Operadoras.',
            'Las Oficinas de Representaciones Turísticas.',
            'Los Guías de Turismo.',
            'Los Operadores Profesionales de Congresos, Ferias y Convenciones.',
            'Los Arrendadores de Vehículos para Turismo Nacional e Internacional.',
            'Los Usuarios Operadores, Desarrolladores e Industriales en Zonas Francas Turísticas.',
            'Las Empresas Promotoras y Comercializadoras de Proyectos de Tiempo Compartido y Multipropiedad.',
            'Los Establecimientos de Gastronomía y Bares, cuyos ingresos Operacionales netos sean superiores a los 500 salarios mínimos legales mensuales vigentes y que además se encuentren localizados y/o contemplados en los lugares que para el efecto determine el Ministerio de Comercio, Industria y Turismo.',
            'Las Empresas Captadoras de Ahorro para Viajes y de Servicios Turísticos Prepagados.',
            'Los Concesionarios de Servicios Turísticos en Parque.',
            'Los demás que el Ministerio de Comercio, Industria y Turismo determine.',
            'Las Empresas de Transporte Terrestre Automotor Especializado, las Empresas Operadoras de Chivas y de otros Vehículos Automotores que presten Servicio de Transporte Turístico.',
            'Los parques temáticos.'
          ]
        }
      ]
    },
    {
      header: '¿Cuáles son los requisitos para la inscripción en el Registro Nacional de Turismo – RNT?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Que se encuentren inscritos de manera previa ante la Cámara de Comercio',
            'Que la actividad comercial y/o el objeto social informado a la Cámara de Comercio comprenda las actividades y/o funciones que el prestador de servicios turísticos pretende inscribir en el Registro Nacional de Turismo – RNT.',
            'Que no se encuentre ya inscrito en el Registro Nacional de Turismo -RNT- un prestador (establecimiento de comercio) con el mismo nombre del que se va registrar.',
            'Los prestadores de servicios turísticos del país, deberán implementar la Norma Técnica Sectorial de sostenibilidad que les corresponda.'
          ]
        }
      ]
    },
    {
      header: '¿Cómo se realiza una inscripción al Registro Nacional de Turismo – RNT?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para efectos de la inscripción en el Registro Nacional de Turismo -RNT-, los prestadores de servicios turísticos deberán diligenciar de manera electrónica el formulario de solicitud de inscripción, diligenciado en su totalidad y teniendo en cuenta que por cada clase de prestador se debe diligenciar un formulario.'
        },
        {
          tipo: 'parrafo',
          valor: 'La información consignada al formulario electrónico debe corresponder a la registrada ante la Cámara de Comercio, en el certificado de existencia y representación legal de la persona jurídica y/o en el certificado de matrícula para los establecimientos de comercio, sucursales o agencias, la cual deberá estar vigente al momento de su presentación.'
        },
        {
          tipo: 'parrafo',
          valor: 'Las cajas de compensación familiar acreditarán la respectiva representación legal, mediante certificación expedida por la Superintendencia del Subsidio Familiar o la entidad que haga sus veces.'
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio para al momento de verificar la inscripción del Registro Nacional de Turismo, verificará que los prestadores de servicios turísticos cumplan con los requisitos de carácter general y con aquellas formalidades específicas que la ley prevea en cada caso.'
        },
        {
          tipo: 'parrafo',
          valor: 'PARAGRÁFO: Con el fin de controlar la homonimia, las Cámaras de Comercio se sujetarán a lo dispuesto en el artículo 35 del Código de Comercio. En todo caso, las Cámaras de Comercio se abstendrán de registrar la solicitud de inscripción de un prestador de servicios turísticos con el mismo nombre de otro que haya sido inscrito previamente en el Registro Nacional de Turismo – RNT.'
        }
      ]
    },
    {
      header: '¿Cómo se realiza una modificación al Registro Nacional de Turismo – RNT?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Las cajas de compensación familiar acreditarán la respectiva representación legal, mediante certificación expedida por la Superintendencia del Subsidio Familiar o la entidad que haga sus veces.'
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio para al momento de verificar la inscripción del Registro Nacional de Turismo, verificará que los prestadores de servicios turísticos cumplan con los requisitos de carácter general y con aquellas formalidades específicas que la ley prevea en cada caso.'
        },
        {
          tipo: 'parrafo',
          valor: 'PARAGRÁFO: Con el fin de controlar la homonimia, las Cámaras de Comercio se sujetarán a lo dispuesto en el artículo 35 del Código de Comercio. En todo caso, las Cámaras de Comercio se abstendrán de registrar la solicitud de inscripción de un prestador de servicios turísticos con el mismo nombre de otro que haya sido inscrito previamente en el Registro Nacional de Turismo – RNT.'
        }
      ]
    },
    {
      header: '¿Cuándo se renueva o actualiza el Registro Nacional Turismo -RNT?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'El Registro Nacional de Turismo -RNT- tendrá una vigencia anual y deberá actualizarse o renovarse dentro de los tres primeros meses de cada año, de conformidad con lo dispuesto en el artículo 166 del Decreto 019 del 10 de enero de 2012, sin importar cual hubiere sido la fecha de la inscripción inicial por parte del prestador de servicios turísticos, salvo que la inscripción se realice dentro del plazo aquí previsto, caso en el cual bastará la inscripción.'
        },
        {
          tipo: 'parrafo',
          valor: 'Los prestadores de servicios turísticos deberán diligenciar de manera previa el correspondiente formulario electrónico de actualización y adjuntar posteriormente el recibo donde se acredite el pago del impuesto de registro de que trata el artículo 226 de la Ley 223 de 1995, y la declaración de primera parte (Norma técnica sectorial) conforme a la resolución 3860 de 2015.'
        },
        {
          tipo: 'parrafo',
          valor: 'La solicitud de actualización o renovación se realizará virtualmente y deberá quedar radicada a más tardar el treinta y uno (31) de marzo de cada año.'
        }
      ]
    },
    {
      header: '¿Cuáles son los requisitos para la actualización o renovación?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Como requisito de la actualización anual del Registro Nacional de Turismo – RNT, los prestadores de servicios turísticos, deberán acreditar ante la Cámara de Comercio lo siguiente:'
        },
        {
          tipo: 'lista',
          valor: [
            'Diligenciar el formulario electrónico en su totalidad',
            'Acreditar el pago del impuesto de registro (una boleta fiscal sin cuantía de conformidad a la tarifa establecida por la Gobernación)',
            'Acreditar la implementación de la Declaración de Primera Parte (implementación de la norma técnica sectorial)'
          ]
        }
      ]
    },
    {
      header: '¿Qué pasa si no renuevo hasta el 31 de marzo de cada año?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La omisión de esta obligación será sancionada por la Superintendencia de Industria y Comercio, de conformidad con lo establecido en el artículo 3º del Decreto número 4176 de 2011, en concordancia con el artículo 12 del Decreto número 4886 de 2011.'
        },
        {
          tipo: 'parrafo',
          valor: 'De igual forma, cuando el prestador de servicios turísticos no actualice el Registro Nacional de Turismo – RNT dentro del período establecido, éste se suspenderá automáticamente hasta tanto cumpla con dicha obligación. Durante el tiempo de suspensión del Registro, el prestador de servicios turísticos no podrá ejercer la actividad.'
        }
      ]
    },
    {
      header: '¿Qué debo realizar para reactivar el Registro Nacional de Turismo – RNT- cuando se encuentra suspendido?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'El proceso de REACTIVACIÓN se realiza ingresando con el usuario y contraseña por la opción “Ingresar Prestador”. Seleccione la opción MIS ESTABLECIMIENTOS / MIS ESTABLECIMIENTOS REGISTRADOS y seleccione REACTIVAR RNT.'
        },
        {
          tipo: 'parrafo',
          valor: 'El sistema le solicitará adjuntar la imagen de la cancelación a favor del Fondo Nacional del Turismo de un (1) salario mínimo mensual legal vigente en el momento del pago. Luego de enviar esta información, el sistema generará un número de radicado. Después de solicitar la reactivación, la Cámara de Comercio estudiará la solicitud y una vez aprobada, el registro quedará en estado pendiente de actualización para que el prestador realice la actualización anual.'
        }
      ]
    },
    {
      header: '¿Si deseo suspender o cancelar el Registro Nacional de Turismo – RNT- que debo hacer?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Si es una suspensión: El prestador de servicios turísticos deberá informar a la Cámara de Comercio, la suspensión de actividades turísticas en forma previa, caso en el cual ésta suspenderá la inscripción correspondiente en el registro por el tiempo que dure la inactividad para lo cual deberá efectuar el pago del impuesto de registro; no obstante, el prestador deberá informar a la respectiva Cámara de Comercio la fecha cierta en que reanudará su actividad.'
        },
        {
          tipo: 'parrafo',
          valor: 'Si es una cancelación: Debe diligenciar una carta en la cual manifiesta que desea cancelar el Registro Nacional de Turismo – RNT- y proceder a realizar el pago del impuesto de registro.'
        },
        {
          tipo: 'parrafo',
          valor: 'Una vez efectuado dicho paso, se ingresa al sistema la carta de solicitud de cancelación y el impuesto de registro y posterior a ello requiere la cancelación. Después de solicitar la cancelación, la Cámara de Comercio estudiará la solicitud y una vez aprobada quedara en estado cancelado.'
        }
      ]
    },
    {
      header: '¿Cuándo procede la cancelación del Registro Nacional de Turismo – RNT?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio procederá a la cancelación del registro por las siguientes razones:'
        }, 
        {
          tipo: 'lista',
          valor: [
            'Por solicitud del Prestador de Servicios Turísticos, cuando cancele la matrícula mercantil del establecimiento de comercio.',
            'Por solicitud del Prestador de Servicios Turísticos, evento en el cual deberá actualizar de manera previa en el Registro Mercantil la actividad comercial y/o el objeto social, a efectos de que ya no conste la actividad comercial correspondiente al tipo de prestador inscrito ante el registro.',
            'Por orden del Ministerio de Comercio Industria y Turismo, de conformidad con lo dispuesto en el artículo 47 Ley 1429 de 2010. En este caso, la Cancelación de la inscripción en el Registro Nacional de Turismo implicará la prohibición de ejercer la actividad turística durante cinco (5) años a partir de la sanción.',
            'Por ministerio de la ley.'
          ]
        }
      ]
    },
    {
      header: '¿Cuál es el plazo para decidir sobre los trámites?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio de Magangué procederá a efectuar el registro y expedir el certificado correspondiente o a devolver la solicitud, dentro de los 30 días siguientes a la recepción electrónica de la solicitud de inscripción, actualización, suspensión o cancelación en el Registro Nacional de Turismo – RNT.'
        }
      ]
    },
    {
      header: '¿Por qué podrían devolver mi trámite?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Los prestadores de servicios turísticos del país, deberán implementar la Norma Técnica Sectorial de sostenibilidad que les corresponde (la certificación será voluntaria) y para el caso de los prestadores de servicios turísticos que desarrollan actividades de Turismo de Aventura, será necesaria tanto la implementación como la certificación, esta última a través de un organismo de evaluación de la conformidad autorizado por el ONAC (Organismo Nacional de Acreditación de Colombia).'
        },
        {
          tipo: 'parrafo',
          valor: 'De acuerdo con lo definido en la resolución 3860 de 2015, los GUÍAS DE TURISMO que desarrollen alguna de las actividades de turismo de aventura deberán certificarse, sin embargo, a la fecha las empresas certificadoras no han adelantado el proceso para hacerlo, razón por la cual a este tipo de prestador no se le solicitará el certificado para la inscripción o actualización del Registro Nacional de Turismo – RNT.'
        }
      ]
    },
    {
      header: '¿Cuáles son los requisitos para las Normas Técnicas?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio podrá devolver la solicitud de registro en los siguientes casos:'
        },
        {
          tipo: 'lista',
          valor: [
            'Cuando por ley no estuviere obligado a inscribirse en este Registro.',
            'Cuando hubiere errores u omisiones en el diligenciamiento del formulario.',
            'Cuando la información consignada en el formulario estuviere incompleta.',
            'Cuando no se adjunten los documentos señalados en la ley y demás normas especiales o éstos no cumplan con las condiciones exigidas. (Por ejemplo: cuando no se anexa el documento de acreditación de implementación de la declaración de primera parte -auto evaluación de las normas técnicas sectoriales-)'
          ]
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio, deberá informar al prestador de servicios turísticos los motivos por los cuales se abstiene, al correo electrónico registrado por aquel en la plataforma que administra el RNT. Una vez completada la información y presentada la documentación de acuerdo con lo señalado en el documento donde se le solicitó que subsanara las inconsistencias encontradas y cumplidos los requisitos de ley, la Cámara de Comercio procederá a otorgar el registro.'
        },
        {
          tipo: 'parrafo',
          valor: 'A partir del año 2017, la actualización o inscripción del Registro Nacional de Turismo – RNT estará condicionada a la implementación o certificación de las Normas Técnicas Sectoriales definidas en la resolución 3860 del año 2015 “Por la cual se reglamenta el cumplimiento de las Normas Técnicas Sectoriales expedidas por las Unidades Sectoriales de Normalización para las actividades del denominado Turismo de Aventura y la Sostenibilidad Turística” con la cual se reglamenta el Artículo 5 de la Ley 1558 de 2012 y que deroga las Resoluciones 0405 de 2014 y 0148 de 2015.'
        }
      ]
    },
    {
      header: '¿Cómo es el procedimiento de aplicación para las Normas Técnicas Sectoriales?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para el caso de los establecimientos que deben demostrar la implementación de la Norma Técnica Sectorial de sostenibilidad, el documento a presentar o “declaración de primera parte” estará firmado por el representante legal del establecimiento y debido a que la única manera de generarlo es a través de la plataforma de certificación en calidad turística www.certificacioncalidadturistica.co todos tendrán el mismo aspecto sin importar la ubicación o tipo de establecimiento.'
        },
        {
          tipo: 'parrafo',
          valor: 'Figura1. Formato de Declaración De Primera parte. El documento será cargado al momento de realizar la inscripción o renovación del RNT.'
        },
        {
          tipo: 'parrafo',
          valor: 'Para el caso de los prestadores de servicios turísticos que operan actividades del denominado “Turismo de Aventura”, el certificado de calidad turística otorgado por uno de los organismos de certificación autorizados por el ONAC, será el documento que deberá ser presentado. Las empresas acreditadas por ONAC para auditar y entregar el certificado de calidad turística son: Icontec, Bureau Veritas, ACERT, SGS y COTECNA, sin embargo, a la fecha ACERT es el único organismo de certificación con alcance acreditado para otorgar el certificado de calidad en las Normas Técnicas Sectoriales Turismo de Aventura para las agencias de viajes. Este documento varía dependiendo de la empresa que lo otorga; sin embargo, en todos los casos este certificado incluye la Marca De Calidad Turística Colombiana.'
        }
      ]
    },
    {
      header: '¡Recuerde!',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Para consultar tramites respecto del Registro Nacional de Turismo- RNT deberá ingresar a la página web http://rnt.confecamaras.co/ en donde deberá elegir la ciudad donde se encuentra el registro mercantil del establecimiento de comercio y darle a la opción a tramitar.'
        },
        {
          tipo: 'parrafo',
          valor: 'De igual forma, para mayor información puede acercarse a nuestras a oficinas ubicadas en la Dirección: Cr 4 # 12 – 12 Piso Uno y Dos Barrio: Centro o puede comunicarse al 6875362 o al correo electrónico institucional juridica@ccmagangue.org.co en donde será atendido'
        }
      ]
    }
  ]
}
