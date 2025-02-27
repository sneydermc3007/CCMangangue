import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from 'primeng/carousel';

import { PrincipalesComponent } from './principales/principales.component';
import { SegundariasComponent } from './segundarias/segundarias.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: DetailComponent },
]

@NgModule({
  declarations: [
    PrincipalesComponent,
    SegundariasComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CarouselModule
  ],
  exports: [
    PrincipalesComponent,
    SegundariasComponent
  ]
})
export class NoticiasModule { }
