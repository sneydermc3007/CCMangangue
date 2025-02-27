import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

interface Menu { title: string; opciones: MenuOption[]; }
interface MenuOption { label: string; route: string; subOpciones?: MenuOption[]; }

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    SidebarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public sideBarVisible: boolean = false;

  public menuList: Array<Menu> = [
    {
      title: 'Nosotros',
      opciones: [
        { label: 'Historia', route: '/camara/historia' },
        { label: 'Mision y Vision', route: '/camara/mision-vision' },
        { label: 'Junta Directiva', route: '/camara/junta-directiva' },
        { label: 'Colaboradores', route: '/camara/colaboradores' },
        { label: 'Mapa de procesos', route: '/camara/mapa-procesos' },
        { label: 'Organigrama', route: '/camara/organigrama' },
        { label: 'Mapa de la jurisdiccion', route: '/camara/mapa-jurisdiccion' },
        { label: 'Ubicacion', route: '/camara/ubicacion' },
        { label: 'Politicas', route: '/camara/politicas', subOpciones: [
          { label: 'Politica de atención al cliente', route: '/politicas/atencion-cliente' },
          { label: 'Politica de seguridad de la información', route: '/politicas/seguridad-informacion' },
          { label: 'Politica de seguridad de linformación ', route: '/politicas/ley-transparencia-acceso-informacion' },
          { label: 'Politica de gestión documental', route: '/politicas/gestion-documental' },
          { label: 'Politica de administración de riesgos', route: '/politicas/administracion-riesgos' },
          { label: 'Politica de seguridad y salud en el trabajo', route: '/politicas/seguridad-salud-trabajo' },
          { label: 'Politica del sistema integrado de gestión (SIG)', route: '/politicas/sig' },
        ]}
      ]
    },
    {
      title: 'Servicios al Cliente',
      opciones: [
        { label: 'Puntos de Atencion', route: '/camara/sedes' },
        { label: 'PQRSF', route: 'http://ccmagangue.docxflow.com/public/sucursal' },
        { label: 'Servicios virtuales', route: '/servicios-cliente/servicios-virtuales', subOpciones: [
          { label: 'Cree su empresa', route: '/servicios-virtuales/empresa' },
          { label: 'Expedición y verificación de certificados', route: '/servicios-virtuales/expedicion-verificacion-certificados' },
          { label: 'Incripciones y renovaciones', route: '/servicios-virtuales/inscripciones-renovaciones' },
          { label: 'Instructivos para trámites virtuales', route: '/servicios-virtuales/instructivos-tramites-virtuales' },
          { label: 'Trámites en línea', route: '/tramites' }
        ]},
        { label: 'Servicios registrales', route: '#', subOpciones: [
          { label: 'Registro mercantil', route: '/registros/mercantil' },
          { label: 'Registro entidades sin ánimo de lucro', route: '/registros/entidades-animo-lucro' },
          { label: 'Registro único de proponentes', route: '/registros/unico-proponentes' },
          { label: 'Registro nacional de turismo', route: '/registros/nacional-turismo' },
          { label: 'Registro único empresarial', route: '/registros/unico-empresarial' },
          { label: 'Registro de entidades extranjeras de derecho sin ánimo de lucro', route: 'registros/entidades-extrangeras-derecho-animo-lucro' },
          { label: 'Registro de las entidades de economiá solidaria', route: '/registros/entidades-economia-solidaria' },
          { label: 'Registro de actividad de juego y azar', route: '/registros/actividad-juego-azar' },
          { label: 'Registro público de veedurías ciudadanas', route: '/registros/publico-veedurias-ciudadanas' },
          { label: 'Registro de libros', route: '/registros/libros' },
          { label: 'Registro único nacional de entidades operadoras de libranza - runeol', route: '/registros/unico-nacional-entidades' },
          { label: 'Depósitos de los estados financieros', route: '/registros/depositos-estados-financieros' },
          { label: 'Consulta de expedientes', route: '/registros/consulta-expedientes' }
        ]},
        { label: 'Desarrollo empresarial', route: '#', subOpciones: [
          { label: 'Capacitaciones', route: '/desarrollo-empresarial/capacitaciones' },
          { label: 'Diplomados', route: '/desarrollo-empresarial/diplomados' },
          { label: 'Convocatorias', route: '/convocatorias' }
        ]},
      ]
    }
  ];

  constructor( private router: Router) {}

  public goHome() {
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    this.sideBarVisible = !this.sideBarVisible;
  }

  closeSidebar() {
    this.sideBarVisible = false;
  }
}
