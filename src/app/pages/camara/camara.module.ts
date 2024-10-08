import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { camaraRoutes } from './camara.routes';

import { SedesComponent } from './sedes/sedes.component';

@NgModule({
  declarations: [
    SedesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(camaraRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CamaraModule { }
