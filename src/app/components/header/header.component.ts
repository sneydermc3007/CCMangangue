import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router: Router
  ) {}
  public menuList = [
    {
      name: 'Nosotros', opciones: [
        'Historia',
        'Mision y Vision',
        'Junta Directiva',
        'Colaboradores',
        'Mapa de procesos',
        'Organigrama',
        'Mapa de la jurisdiccion',
        'Ubicacion',
        'Politicas'
      ]
    },
    {
      name: 'Servicios al Cliente', opciones: [
        'Puntos de Atencion',
        'PQRSF',
        'Servicios virtuales',
        'Servicios registrales',
        'Desarrollo empresarial'
      ]
    },
    {
      name: 'Registros públicos', opciones: [
        'Beneficios',
        'Registro Mercantil',
        'Registro Único de Proponentes',
        'Entidades Jurídicas sin Ánimo de Lucro',
        'Registro de Entidades de Economía Solidaria',
        'Registros de apoderados de ONGs extranjeras',
        'Registro de Vendedores de Juegos de Suerte y Azar',
        'Registro único nacional de entidades operadoras de libranza',
        'Registro de Veedurías',
        'Registro Nacional de Turismo',
        'SIPREF',
        'Recursos administrativos',
        'Biblioteca Videotutoriales',
        'Tiempos de respuesta',
      ]
    }
  ];

  public goHome() {
    this.router.navigate(['/']);
  }
}
