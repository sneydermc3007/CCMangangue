import { Component } from '@angular/core';

@Component({
  selector: 'app-entidades-economia-solidaria',
  templateUrl: './entidades-economia-solidaria.component.html',
  styleUrl: './entidades-economia-solidaria.component.scss'
})
export class EntidadesEconomiaSolidariaComponent {
  public cardsDecretosLeyes: Array<string> = [
    'Ley 79 de 1988.',
    'Ley 454 de 1998.',
    'Decreto 2150 de 1995 artículo 40.',
    'Decreto 427 de 1996.',
    'Decreto 1481 de 1989.',
    'Decreto 1480 de 1989.',
    'Decreto 019 de 2012.',
    'Circular 008 de 2012 de la SIC'
  ];

  public fondosEmpleados: Array<string> = [
    'Que se integren básicamente con trabajadores asalariados',
    'Que la asociación y el retiro sean voluntarios',
    'Que garanticen la igualdad de los derechos de participación y decisión de los asociados sin consideración a sus aportes',
    'Que presten servicios en beneficio de sus asociados',
    'Que establezcan la irrepartibilidad de las reservas sociales y, en caso de liquidación, la del remanente patrimonial',
    'Que destinen sus excedentes a la prestación de servicios de carácter social y el crecimiento de sus reservas y fondos',
    'Que su patrimonio sea variable e ilimitado',
    'Que se constituyan con duración indefinida',
    'Que fomenten la solidaridad y los lazos de compañerismo entre asociados'
  ]
}
