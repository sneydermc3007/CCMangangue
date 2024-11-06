import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-normatividad',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './normatividad.component.html',
  styleUrl: './normatividad.component.scss'
})
export class NormatividadComponent {
  public normatividades = [
    { label: 'Normativas Generales & Reglementarias', link: 'leyes-transparencia/normas-generales' },
    { label: 'Normatividad de Registro Mercantil', categoria: 'registro-mercantil' },
    { label: 'Normatividad de Registro Entidades Sin Ánimo de Lucro', categoria: 'registro-entidades-sin-animo-lucro' },
    { label: 'Normatividad de Registro Único de Proponentes', categoria: 'registro-unico-proponentes' },
    { label: 'Normatividad de Registro Nacional de Turismo', categoria: 'registro-nacional-turismo' },
    { label: 'Normatividad de Registro Único Nacional de Entidades Operadoras de Libranza – Runeol', categoria: 'registro-unico-nacional-entidades-operadoras-libranza' },
    { label: 'Normatividad de Registro de Garantías Mobiliarias', categoria: 'registro-garantias-mobiliarias' },
    { label: 'Normatividad de Centro de Conciliación', categoria: 'centro-conciliacion' }
  ]

  constructor(private router: Router) { }

  redireccionar(url: any) {
    if(url.categoria !== undefined) 
      this.router.navigate([`normativa/normatividades/${url.categoria}`]);
    else if (url.link.includes('http'))
      window.open(url.link, '_blank');
    else
      this.router.navigate([url.link]);
  }
}
