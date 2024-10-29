import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { desarrolloEmpresarialRoutes } from './desarrollo-empresarial.routes';

import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from '../../shared/shared.module';

import { CapacitacionesComponent } from './routes/capacitaciones/capacitaciones.component';
import { DiplomadosComponent } from './routes/diplomados/diplomados.component';

@NgModule({
  declarations: [
    CapacitacionesComponent,
    DiplomadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(desarrolloEmpresarialRoutes),
    SharedModule,
    FormsModule,
    ToolbarModule,
    InputTextModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DesarrolloEmpresarialModule { }
