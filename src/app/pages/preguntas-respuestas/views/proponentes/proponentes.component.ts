import { Component } from '@angular/core';

@Component({
  selector: 'app-proponentes',
  templateUrl: './proponentes.component.html',
  styleUrl: './proponentes.component.scss'
})
export class ProponentesComponent {
  public information = [
    { header: "¿QUÉ ES EL REGISTRO ÚNICO DE PROPONENTES?", contenido: "" },
    { header: "¿CUÁLES SON LAS FECHAS QUE ESTABLECE LA LEY PARA REALIZAR LA INSCRIPCIÓN EN EL NUEVO RUP?", contenido: ""  },
    { header: "¿CUÁL ES EL PAPEL DE LAS CÁMARAS DE COMERCIO EN TORNO AL NUEVO RUP?", contenido: "" },
    { header: "¿QUÉ PASOS DEBE LLEVAR A CABO EL PROPONENTE PARA REALIZAR SU INSCRIPCIÓN?", contenido: "" }
  ];
}
