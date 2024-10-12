import { Component } from '@angular/core';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrl: './tarifas.component.scss',
})
export class TarifasComponent {
  public information = [
    {
      header: 'TARIFAS DE LOS TRÁMITES',
      contenido: [
        {
          tipo: 'link',
          valor: 'Ver Tarifas',
        },
      ],
    },
  ];
}
