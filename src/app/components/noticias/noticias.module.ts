import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from 'primeng/carousel';

import { PrincipalesComponent } from './principales/principales.component';
import { SegundariasComponent } from './segundarias/segundarias.component';

@NgModule({
  declarations: [
    PrincipalesComponent,
    SegundariasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    PrincipalesComponent,
    SegundariasComponent
  ]
})
export class NoticiasModule { }
