import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { registrosRoutes } from './routes/registros.routes';

import { SharedModule } from '../../shared/shared.module';

import { MercantilComponent } from './mercantil/mercantil.component';

@NgModule({
  declarations: [
    MercantilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registrosRoutes),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrosModule { }
