import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.scss',
})
export class ProveedoresComponent {
  public information = [
    {
      header:
        '¿QUÉ REQUISITOS SE REQUIEREN PARA SER PROVEEDOR DE LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Ser persona natural o jurídica.',
            'Estar matriculado en el Registro Mercantil de las Cámaras de Comercio, cuando su actividad lo requiera.',
            'Haber cumplido con la renovación del Registro Mercantil.',
            'Tener el Rut actualizado con la actividad económica que está ofertando.',
            'No tener inhabilidades e incompatibilidades con la Cámara de Comercio de Magangué.',
          ],
        },
      ],
    },
    {
      header: '¿QUÉ DOCUMENTOS SE REQUIEREN EN CASO DE SER CONTRATADO POR LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: undefined,
    },
    {
      header: '¿TIENE LA CÁMARA DE COMERCIO DE MAGANGUÉ UN MANUAL DE COMPRAS Y DONDE SE PUEDE CONSULTAR?',
      contenido: undefined,
    },
    {
      header: '¿CUÁNTO TIEMPO DEMORA LA CÁMARA DE COMERCIO DE MAGANGUÉ PARA HACER EFECTIVO UN PAGO DE UNA FACTURA DE UN PRODUCTO Y/O SERVICIO?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Quince (15) días calendario, contados a partir de la radicación en la Ventanilla Única de correspondencia de la entidad.',
        },
      ],
    },
    {
      header: '¿DÓNDE SE RADICAN LAS FACTURAS?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'En la ventanilla única de Correspondencia, ubicada en la Cra. 4 No. 12 – 12, Barrio: Centro, Piso: Uno y Dos, en el horario de 08:00 a.m. a 06:00 p.m.',
        },
      ],
    },
    {
      header: '¿QUÉ SUCEDE SI NO SE TIENE CUENTA BANCARIA PARA HACER TRANSFERENCIA POR CONCEPTO DE UN PAGO DE UN PRODUCTO Y/O SERVICIO?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'En casos especiales se girará cheque para ser cobrado únicamente por el primer beneficiario.'
        },
      ]
    },
    {
      header: '¿QUÉ VIGENCIA TIENEN MIS DOCUMENTOS LEGALES RADICADOS COMO PROVEEDOR?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Un (1) año, siempre y cuando en el transcurso de este, no se sufran cambios.'
        },
      ]
    },
    {
      header: '¿CÓMO SE SOLICITA LOS CERTIFICADOS DE RETENCIÓN EN LA FUENTE PRACTICADOS POR LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Al correo ccmcontabilidad@ccmagangue.org.co o a contador@ccmagangue.org.co'
        },
      ]
    },
    {
      header: '¿CÓMO SE SOLICITA CERTIFICADO DEL SERVICIO PRESTADO Y/O PRODUCTO VENDIDO?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Al correo ccmcontabilidad@ccmagangue.org.co o a contador@ccmagangue.org.co'
        },
      ]
    },
    {
      header: '¿A QUÉ CORREO ELECTRÓNICO PUEDO PRESENTAR MI PROPUESTA COMERCIAL A LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Al correo ccmcontabilidad@ccmagangue.org.co o a contador@ccmagangue.org.co'
        },
      ]
    },
    {
      header: '¿DEBO PERTENECER A LA JURISDICCIÓN DE LA CÁMARA DE COMERCIO DE MAGANGUÉ PARA PODER COTIZAR UN PRODUCTO Y/O SERVICIO?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'No. Cualquier comerciante puede presentar, cotizar y participar en el proceso de compras de la Cámara de Comercio de Magangué'
        },
      ]
    },
    {
      header: '¿A QUÉ NÚMEROS TELEFÓNICOS ME PUEDO COMUNICAR AL ÁREA DE COMPRAS Y PROVEEDORES?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'PBX: 2772000 Ext. 1036 o al celular 321-3752480'
        },
      ]
    },
    {
      header: '¿QUÉ PRODUCTOS Y/O SERVICIOS CONTRATA LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La CÁMARA DE COMERCIO DE MAGANGUÉ compra productos y/o contrata servicios de diferentes categorías, que tienen que ver con el giro ordinario de sus operaciones y los que se desglosan de los convenios y contratos suscritos con entidades de orden nacional, públicos, privados y aliados estratégicos, entre ellos (Impresiones, diseño, montajes de stand, papelería y elementos de escritorio, productos de aseo y cafetería, capacitadores, consultores, asesores, refrigerios, servicio de restaurante, herramientas agrícolas, equipos de cómputo y software, remodelación, adecuación, transporte terrestre y aéreo, mobiliario para oficina y mantenimiento de infraestructura entre otros.'
        },
      ]
    },
    {
      header: '¿QUÉ INFORMACIÓN MÍNIMA DEBE CONTENER MI COTIZACIÓN O PROPUESTA?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Descripción detallada del producto y/o servicio indicando las características, cantidades y calidad exigida.',
            'Tiempo de entrega del producto y/o servicio en días hábiles.',
            'Valor del producto y/o servicio (incluido impuestos), adjuntar el Rut.',
            'Forma de Pago (Pago anticipado, contado, contra entrega y/o anticipo el cual no puede ser superior al 50% del valor del producto y/o servicio y se requerirá póliza de garantía).',
            'Garantías que ofrece.'
          ]
        },
      ]
    },
    {
      header: '¿QUÉ ACTIVIDADES NO REQUIEREN ESTAR MATRICULADOS EN LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Los artistas y los talleres para confeccionar sus propias obras. Esto es distinto de quienes comercian con obras de arte, los cuales deben, efectuar su matrícula mercantil.',
            'Los profesionales y sus oficinas o consultorios destinados a realizar su profesión.',
            'Los agricultores y sus depósitos donde almacenan su propia cosecha para distribuirla en el mercado, esto es diferente a montar una compraventa de productos agrícolas, la cual se debe matricular.',
            'Cantantes, artistas musicales solistas.'
          ]
        },
      ]
    },
    {
      header: '¿DÓNDE SE ENCUENTRA INFORMACIÓN DE LAS CONTRATACIONES DE LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
      contenido: undefined
    },
  ];
}
