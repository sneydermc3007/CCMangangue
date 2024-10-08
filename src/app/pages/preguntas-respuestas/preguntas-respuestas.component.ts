import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

import { ViewsModule } from "./views/views.module";

import { RegistrosPublicosComponent } from './views/registros-publicos/registros-publicos.component';
import { AfiliadosComponent } from './views/afiliados/afiliados.component';
import { ProponentesComponent } from './views/proponentes/proponentes.component';
import { FormacionEmpresarialComponent } from './views/formacion-empresarial/formacion-empresarial.component';
import { TarifasComponent } from './views/tarifas/tarifas.component';
import { ProveedoresComponent } from './views/proveedores/proveedores.component';

interface tabs { header: string, component: any }

@Component({
  selector: 'app-preguntas-respuestas',
  standalone: true,
  imports: [ 
    CommonModule,
    TabViewModule, 
    ViewsModule
  ],
  templateUrl: './preguntas-respuestas.component.html',
  styleUrl: './preguntas-respuestas.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PreguntasRespuestasComponent {
  public tabs: tabs[] = [
    { header: 'Registros públicos', component: RegistrosPublicosComponent },
    { header: 'Afiliados', component: AfiliadosComponent },
    { header: 'Proponente', component: ProponentesComponent },
    { header: 'Formación empresarial', component: FormacionEmpresarialComponent },
    { header: 'Tarifas', component: TarifasComponent },
    { header: 'Proveedores', component: ProveedoresComponent }
  ];
}
