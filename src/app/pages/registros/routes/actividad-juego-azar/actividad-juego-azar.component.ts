import { Component } from '@angular/core';

import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-actividad-juego-azar',
  templateUrl: './actividad-juego-azar.component.html',
  styleUrl: './actividad-juego-azar.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ActividadJuegoAzarComponent {
  actividades = [
    { nombre: 'Actividades de Juegos de Azar', codigoCiiu: '9200' },
    { nombre: 'Casinos', codigoCiiu: '9200' },
    { nombre: 'Agencias de Lotería y Apuestas', codigoCiiu: '9200' },
    { nombre: 'Otras Actividades de Esparcimiento', codigoCiiu: '9329' },
    { nombre: 'Actividades de Juegos de Destreza, Habilidad, Conocimiento y Fuerza', codigoCiiu: '9200' }
  ];

  tramites = [
    'Cancelación de la inscripción en el Registro de Personas Naturales o Jurídicas que ejerzan dichas actividades.',
    'Actos que requieran inscripción según la Ley.',
    'Realice este trámite de manera presencial en cualquiera de nuestras sedes.'
  ];
}
