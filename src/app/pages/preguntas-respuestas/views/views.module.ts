import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';

import { RegistrosPublicosComponent } from './registros-publicos/registros-publicos.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { ProponentesComponent } from './proponentes/proponentes.component';
import { FormacionEmpresarialComponent } from './formacion-empresarial/formacion-empresarial.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';



@NgModule({
  declarations: [
    RegistrosPublicosComponent,
    AfiliadosComponent,
    ProponentesComponent,
    FormacionEmpresarialComponent,
    TarifasComponent,
    ProveedoresComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ]
})
export class ViewsModule { }
