import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-planes-mejoramiento',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './planes-mejoramiento.component.html',
  styleUrl: './planes-mejoramiento.component.scss'
})
export class PlanesMejoramientoComponent {
  public planMejoramiento = [
    { label: 'Plan de Mejoramiento - Evaluación SECC vigencia 2023', archivo: 'https://ccmagangue.org.co/media/doc/plandemejoramiento-evaluacionseccvigencia2019.xlsx'},
    { label: 'Plan de Mejoramiento - Evaluación SECC vigencia 2022', archivo: 'https://ccmagangue.org.co/media/doc/plandemejoramiento-evaluacionseccvigencia2018.xlsx'},
    { label: 'Plan de Mejoramiento - Evaluación SECC vigencia 2021', archivo: 'https://ccmagangue.org.co/media/doc/plandemejoramiento-evaluacionseccvigencia2017.xlsx'},
  ];

  public informeEvaluacion = [
    { label: 'Informe de Evaluación de control 2019', archivo: 'https://ccmagangue.org.co/media/doc/informedeevaluaciondecontrolinterno2019.xlsx' },
    { label: 'Informe de Evaluación de control 2018', archivo: 'https://ccmagangue.org.co/media/doc/informedeevaluaciondecontrolinterno2018.xlsx' },
    { label: 'Informe de Evaluación de control 2017', archivo: 'https://ccmagangue.org.co/media/doc/controlyregistrodecontrolinterno2017.xlsx' }
  ]

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
