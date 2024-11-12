import { Component } from '@angular/core';

import { SharedModule } from "../../../../shared/shared.module";

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-sistemas-informacion',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sistemas-informacion.component.html',
  styleUrl: './sistemas-informacion.component.scss'
})
export class SistemasInformacionComponent {
  public data: AcordeonInterface[] = [
    {
      header: 'Portal Nacional del RUES',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'A través de éste portal, podrá consultar información general sobre los inscritos en los diferentes registros que llevan las Cámaras de Comercio del país, así como realizar consultas y efectuar el registro de garantías mobiliarias, obtener certificados electrónicos con un usuario registrado y realizar el reporte las Entidades del Estado de los contratos, multas y sanciones.'
        },
        {
          tipo: 'button',
          valor: { label: 'Ingresar', enlace: 'https://www.rues.org.co/' }
        }
      ]
    },
    {
      header: 'Portal Nacional del Registro Nacional de Turismo',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Donde puede realizar los tramites de: actualización anual del registro, certificado del registro nacional de turismo, solicitud de suspesión temporal o cancelación, reactivación del registro nacional de turismo.'
        },
        {
          tipo: 'button',
          valor: { label: 'Ingresar', enlace: 'https://rnt.confecamaras.co' }
        }
      ]
    },
    {
      header: 'Portal de Renovación en línea: SISTEMA INTEGRADO DE REGISTROS PÚBLICOS S.I.I.',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Aquí podrá realizar la renovación de la matricula mercantil y realizar su pago en líneas, también podrá iniciar el trámite renovación del Registro Único de Proponentes, realizar consultas y estados del trámite del registro mercantil.'
        },
        {
          tipo: 'button',
          valor: { label: 'Ingresar', enlace: 'https://sii.confecamaras.co' }
        }
      ]
    },
    {
      header: 'Portal Nacional del Registro Único Nacional de Entidades operadoras de Libranza',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'RUNEOL, es un registro virtual operado por las Cámaras de comercio, el cual tiene como objeto dar publicidad a las entidades operadoras de libranza y descuento directo que trata el articulo 2 literal c) de la Ley 1527 de 2012.'
        },
        {
          tipo: 'button',
          valor: { label: 'Ingresar', enlace: 'http://runeol.rues.org.co/' }
        }
      ]
    },
    {
      header: 'Registro de Garantías Mobiliarias',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Este servicio permite incrementar el acceso al crédito al incluir un mayor conjunto de bienes muebles para amparar las obligaciones. Su objetivo es impulsar la formalización y el fortalecimiento empresarial en Colombia, al brindar mejores opciones de financiamiento que respalden los proyectos de crecimiento, expansión, innovación y desarrollo de las Mipymes.'
        },
        {
          tipo: 'button',
          valor: { label: 'Ingresar', enlace: 'https://www.garantiasmobiliarias.com.co/' }
        }
      ]
    }
  ]
}
