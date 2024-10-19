import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

import { ButtonModule } from 'primeng/button';

interface Menu { name: string; opciones: MenuOption[]; }
interface MenuOption { label: string; path: string; }

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
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  public menuList: Array<Menu> = [
    {
      name: 'Nosotros',
      opciones: [
        { label: 'Historia', path: '/camara/historia' },
        { label: 'Mision y Vision', path: '/camara/mision-vision' },
        { label: 'Junta Directiva', path: '/camara/junta-directiva' },
        { label: 'Colaboradores', path: '/camara/colaboradores' },
        { label: 'Mapa de procesos', path: '/camara/mapa-procesos' },
        { label: 'Organigrama', path: '/camara/organigrama' },
        { label: 'Mapa de la jurisdiccion', path: '/camara/mapa-jurisdiccion' },
        { label: 'Ubicacion', path: '/camara/ubicacion' },
        { label: 'Politicas', path: '/camara/politicas' }, // Falta hacer los submenus y rutas.
      ]
    },
    {
      name: 'Servicios al Cliente',
      opciones: [
        { label: 'Puntos de Atencion', path: '/servicios-cliente/puntos-atencion' },
        { label: 'PQRSF', path: '/servicios-cliente/pqrsf' },
        { label: 'Servicios virtuales', path: '/servicios-cliente/servicios-virtuales' },
        { label: 'Servicios registrales', path: '/servicios-cliente/servicios-registrales' },
        { label: 'Desarrollo empresarial', path: '/servicios-cliente/desarrollo-empresarial' },
      ]
    },
    {
      name: 'Registros públicos',
      opciones: [
        { label: 'Beneficios', path: '/registros-publicos/beneficios' },
        { label: 'Registro Mercantil', path: '/registros-publicos/registro-mercantil' },
        { label: 'Registro Único de Proponentes', path: '/registros-publicos/registro-unico-proponentes' },
        { label: 'Entidades Jurídicas sin Ánimo de Lucro', path: '/registros-publicos/entidades-juridicas-sin-animo-de-lucro' },
        { label: 'Registro de Entidades de Economía Solidaria', path: '/registros-publicos/registro-economia-solidaria' },
        { label: 'Registros de apoderados de ONGs extranjeras', path: '/registros-publicos/registros-apoderados-ongs' },
        { label: 'Registro de Vendedores de Juegos de Suerte y Azar', path: '/registros-publicos/registro-juegos-azar' },
        { label: 'Registro único nacional de entidades operadoras de libranza', path: '/registros-publicos/registro-operadores-libranza' },
        { label: 'Registro de Veedurías', path: '/registros-publicos/registro-veedurias' },
        { label: 'Registro Nacional de Turismo', path: '/registros-publicos/registro-nacional-turismo' },
        { label: 'SIPREF', path: '/registros-publicos/sipref' },
        { label: 'Recursos administrativos', path: '/registros-publicos/recursos-administrativos' },
        { label: 'Biblioteca Videotutoriales', path: '/registros-publicos/biblioteca-videotutoriales' },
        { label: 'Tiempos de respuesta', path: '/registros-publicos/tiempos-respuesta' },
      ]
    }
  ];

  public goHome() {
    this.router.navigate(['/']);
  }
}
