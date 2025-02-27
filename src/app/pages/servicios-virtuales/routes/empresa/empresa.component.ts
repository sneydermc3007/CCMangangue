import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss'
})
export class EmpresaComponent {

  public information: AcordeonInterface[] = [
    {
      header: 'Documentos Necesarios para Registrararse',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Original del documento de identidad.',
            'Formulario del Registro Único Tributario (RUT).',
            'Formularios disponibles en las sedes de la CCM.',
            'Carátula única empresarial y anexos, según corresponda (Persona Natural, Persona Jurídica, Establecimiento de Comercio o Proponente).',
            'Formulario de Registro con otras entidades.'
          ]
        }
      ]
    },
    {
      header: 'Registro Único Tributario',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong>El Registro Único Tributario (RUT) Administrado por la Dirección de Impuestos y Aduanas Nacionales (DIAN), constituye el único mecanismo para identificar, ubicar y clasificar a los siguientes sujetos:</strong>'
        },
        {
          tipo: 'lista',
          valor: [
            'Las personas y entidades que tengan la calidad de contribuyentes, declarantes de impuesto sobre la renta y  no contribuyentes.',
            'Declarantes de ingresos y patrimonio.',
            'Responsables del régimen común y los pertenecientes al régimen simplificado.',
            'Los agentes retenedores, importadores, exportadores y demás sujetos con obligaciones administradas por la DIAN.',
            'Los demás sujetos con obligaciones administradas por la DIAN.'
          ]
        },
        {
          tipo: 'parrafo',
          valor: 'El Número de Identificación Tributaria (NIT) constituye el código de identificación de los inscritos en el RUT. Este número lo asigna la DIAN a las personas naturales o jurídicas nacionales o extranjeras o a los demás sujetos con obligaciones administradas por dicha entidad.'
        },
        {
          tipo: 'parrafo',
          valor: 'Con este formulario y los demás documentos exigidos para la matrícula, la DIAN asigna el NIT y lo incorpora en el Certificado de Existencia y Representación Legal.'
        }
      ]
    },
    {
      header: 'Formulario de Registro Único Empresarial y social',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Diligencie los siguientes formularios. Puede descargarlos u obtenerlos en las sedes de la CCM o por nuestros medios virtuales en el link servicios virtuales.'
        },
        {
          tipo: 'lista',
          valor: [
            'Formulario Registro Único Empresarial y Social (RUES).',
            'Carátula única empresarial y anexos según corresponda (Persona Natural, Persona Jurídica, Establecimiento de comercio o Proponente). Recomendaciones al diligenciar los formularios.',
            'Verifique que el nombre registrado en el formulario del RUT sea idéntico al registrado en el Formulario Registro Único Empresarial y Social (RUES) y al formulario adicional de registro con otras entidades.',
            'Revise que el número de teléfono registrado en el formulario del RUT sea idéntico al registrado en el formulario del RUES y al formulario adicional de registro con otras entidades.'
          ]
        }
      ]
    },
    {
      header: 'Formalización de Registro Mercantil',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Presente todos los documentos en cualquier sede de atención al público de la CCM y pague los derechos de Matrícula correspondientes. Vea las tarifas de los registros públicos 2015. Consulte la información relacionada con el registro de su empresa y acceda a contenidos de interés para su negocio.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>¡Bienvenido a la y a sus Servicios Empresariales!</strong>'
        }
      ]
    },
    {
      header: 'Crea Tu Empresa Aqui: SISTEMA INTEGRADO DE REGISTROS PÚBLICOS S.I.I.',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Aquí podrá crear su empresa, realizar la renovación de la matricula mercantil y realizar su pago en líneas, también podrá iniciar el trámite renovación del Registro Único de Proponentes, realizar consultas y estados del trámite del registro mercantil.'
        },
        {
          tipo: 'parrafo',
          valor: 'Para ingresar, de click en:'
        },
        {
          tipo: 'link',
          valor: 'https://sii.confecamaras.co'
        }
      ]
    },
    {
      header: 'Crea Tu Empresa Aqui: Ventanilla Única Empresarial - VUE',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Cree su empresa de forma virtual, sin filas y con menos trámites. Obtenga guías e instructivos actualizados en temas mercantiles y seguridad social.'
        },
        {
          tipo: 'parrafo',
          valor: 'Para ingresar, de click en:'
        },
        {
          tipo: 'link',
          valor: 'https://www.vue.gov.co/tramites-y-consultas/creacion-empresa-persona-natural-juridica'
        }
      ]
    }
  ]
}
