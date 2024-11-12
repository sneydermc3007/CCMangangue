import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.scss'
})
export class MisionVisionComponent {
  public information: AcordeonInterface[] = [
    {
      header: 'Misión',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio de Magangué es una entidad privada y gremial, integradora de los sectores privado y público, construye soluciones hacia la formalidad empresarial, presta servicios a los sectores productivos a través de la información y conocimiento, haciendo crecer a la región por medio de la representación, promoción y defensa de los intereses generales.'
        },
        {
          tipo: 'formatted',
          valor: `Los <strong>valores Institucionales,</strong> los cuales son:`,
        },
        {
          tipo: 'lista',
          valor: [
            'Transparencia: Cuando es sincero, responsable, asume las consecuencias de sus actos.',
            'Eficiencia: Capacidad para realizar o cumplir adecuadamente una función.',
            'Calidad: Capacidad para satisfacer necesidades implícitas o explícitas, cumpliendo requisitos de calidad'
          ]
        }
      ]
    },
    {
      header: 'Visión',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'La Cámara de Comercio de Magangué se proyecta como una agencia de desarrollo regional, generando soluciones a los sectores empresariales que con ella trabajen, en mejorar la productividad y la competitividad.'
        },
        {
          tipo: 'formatted',
          valor: `Los <strong>valores Institucionales,</strong> los cuales son:`,
        },
        {
          tipo: 'lista',
          valor: [
            'Transparencia: Cuando es sincero, responsable, asume las consecuencias de sus actos.',
            'Eficiencia: Capacidad para realizar o cumplir adecuadamente una función.',
            'Calidad: Capacidad para satisfacer necesidades implícitas o explícitas, cumpliendo requisitos de calidad'
          ]
        }
      ]
    }
  ];
}
