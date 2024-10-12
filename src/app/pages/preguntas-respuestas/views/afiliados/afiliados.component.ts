import { Component } from '@angular/core';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrl: './afiliados.component.scss'
})
export class AfiliadosComponent {
  public information = [
    { 
      header: "¿QUIÉNES SON AFILIADOS A LA CÁMARA DE COMERCIO?", 
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Son aquellos comerciantes que, además de cumplir con la obligación anterior, voluntariamente solicitan su afiliación a la Cámara de Comercio, para disfrutar de algunos servicios especiales mediante el pago de una cuota adicional. Igualmente obtienen el derecho a elegir y ser elegidos como miembros de la Junta Directiva.'
        }        
      ]
    },
  ];
}
