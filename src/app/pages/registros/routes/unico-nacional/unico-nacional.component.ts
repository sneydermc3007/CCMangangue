import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-unico-nacional',
  templateUrl: './unico-nacional.component.html',
  styleUrl: './unico-nacional.component.scss'
})
export class UnicoNacionalComponent {
  public information: AcordeonInterface[] = [
    {
      header: 'Objetivo',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Dar publicidad a las entidades operadoras de libranza o descuento directo que cumplan con los requisitos para la inscripción establecidos en la ley, y a las cuales se les haya asignado el código único de reconocimiento a nivel nacional.'
        }
      ]
    },
    {
      header: 'Quiénes deben solicitarlo',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Las personas jurídicas o patrimonios autónomos descritos en el artículo 2 literal c) de la Ley 1527 de 2012, y las cajas de compensación familiar.'
        }
      ]
    },
    {
      header: 'Beneficios de éste registro',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Podrá conocer si la entidad con la que pretende adquirir productos y servicios financieros o bienes y servicios, se encuentra inscrita como entidad operadora de libranza o descuento directo que ha obtenido el código único de reconocimiento, asimismo permite a cualquier persona la consulta en línea y gratuita de la información allí publicada.'
        }
      ]
    },
    {
      header: '¿Cómo acceder al registro?',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong> Para registrarse y para renovar: </strong>'
        },
        {
          tipo: 'lista',
          valor: [
            'Ingresar al portal web del Registro Único Nacional de Operadores de Libranza (RUNEOL).',
            'Haga clic en el botón Registrarse.',
            'Diligenciar el formulario único electrónico de solicitud de anotación electrónica de inscripción, modificación, renovación y cancelación en el RUNEOL.',
            'Adjuntar los documentos según corresponda.'
          ]
        }
      ]
    },
    {
      header: 'Requisitos',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Los documentos soporte que debe acompañar a su solicitud de anotación electrónica en el RUNEOL son los siguientes:'
        },
        {
          tipo: 'lista',
          valor: [
            'Comprobante de pago',
            'Certificado con una vigencia no superior a treinta (30) días calendario en el cual conste la vigencia del contrato con bancos de datos de información financiera, crediticia y de servicios (se refiere al contrato con centrales de riesgos como Datacrédito, Cifin, Procrédito, etc), donde se acredite la obligación de reportar la información a dichas entidades. Certificado de existencia y representación legal o documento equivalente, con una vigencia no superior a treinta (30) días calendario, expedido por la entidad que reconoce su personería jurídica, para las entidades operadoras de libranza que por su naturaleza jurídica o su régimen especial no se inscriben en el Registro Mercantil o en el Registro de Entidades sin Ánimo de Lucro de las Cámaras de Comercio.',
            'Certificado de existencia y representación legal de la Superintendencia Financiera con una vigencia no superior a treinta (30) días calendario, para aquellas entidades que se encuentren sometidas a vigilancia de esta Superintendencia.'
          ]
        },
        {
          tipo: 'parrafo',
          valor: 'Además en el caso de los patrimonios autónomos:'
        },
        {
          tipo: 'lista',
          valor: [
            'Certificación de existencia del patrimonio autónomo expedido por el administrador fiduciario, con una vigencia no superior a treinta (30) días calendario, en el cual se señale que el objeto del contrato permite la realización de operaciones de libranza o descuento directo. Adicionalmente se deberá identificar el contrato de fiducia mercantil, número de contrato, nombre del patrimonio autónomo y el NIT.',
            'Certificado de existencia y representación legal de la Superintendencia Financiera de la sociedad fiduciaria, con una vigencia no superior a treinta (30) días calendario'
          ]
        }
      ]
    },
    {
      header: 'Tarifas',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Para nuevos registros y su renovación: $39.000 (5.24 % del salario mínimo mensual vigente).',
            'Para mutaciones (actualización y cancelación): $10.300 (1.40% del salario mínimo mensual vigente).',
            'Los operadores de libranza o descuento directo obligados a renovar su inscripción deben hacerlo hasta el 31 de Marzo.'
          ]
        }
      ]
    }
  ]
}
