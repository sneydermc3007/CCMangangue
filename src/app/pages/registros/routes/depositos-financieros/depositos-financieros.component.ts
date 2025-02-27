import { Component } from '@angular/core';

@Component({
  selector: 'app-depositos-financieros',
  templateUrl: './depositos-financieros.component.html',
  styleUrl: './depositos-financieros.component.scss'
})
export class DepositosFinancierosComponent {
  public estadosFinancieros: Array<string> = [
    'Balance general',
    'Estado de resultados',
    'Estado de cambios en el patrimonio',
    'Estado de cambios en la situación financiera',
    'Estado de flujos de efectivo',
  ]

  public sanciones: Array<string> = [
    'Los terceros puede hacer valer cualquier balance como medio como medio de prueba y señala la responsabilidad patrimonial en la que incurren los administradores y el revisor fiscal por los perjuicios que su actuar omisivo cause a la sociedad, asociados o terceros en general (Art. 24 y 42 Ley 222 ibídem',
    'La no preparación y difusión de los estados financieros puede dar lugar a que la entidad que ejerce inspección, vigilancia y control imponga multas hasta de 200 salarios mínimos legales mensuales, por violación de la ley o los estatutos (num., 3, Art. 86 Ley 222/95)',
    'Serán también responsables los administradores, por ser encargados de su preparación y elaboración (artículo 19 Decreto 2649 antes citado) y al revisor fiscal, por negligencia u omisión en el desempeño de sus funciones, por cuanto a él corresponde autorizar con su firma cualquier balance y acompañarlo con el dictamen correspondiente (num. 7, Art. 207 Código de Comercio)”'
  ];

  public estadosBasicos: Array<string> = [
    'Estado de Situación Financiera (Balance General)',
    'Estado de Resultados',
    'Estado de Cambios en el Patrimonio',
    'Estado de Flujo de Efectivo',
  ]
}
