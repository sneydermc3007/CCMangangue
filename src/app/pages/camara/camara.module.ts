import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { camaraRoutes } from './camara.routes';

import { OrganizationChartModule } from 'primeng/organizationchart';
import { DividerModule } from 'primeng/divider';

import { SharedModule } from '../../shared/shared.module';

import { SedesComponent } from './sedes/sedes.component';
import { HistoriaComponent } from './historia/historia.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { JuntaDirectivaComponent } from './junta-directiva/junta-directiva.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { MapaProcesosComponent } from './mapa-procesos/mapa-procesos.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { MapaJurisdiccionComponent } from './mapa-jurisdiccion/mapa-jurisdiccion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    SedesComponent,
    HistoriaComponent,
    MisionVisionComponent,
    JuntaDirectivaComponent,
    ColaboradoresComponent,
    MapaProcesosComponent,
    OrganigramaComponent,
    MapaJurisdiccionComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(camaraRoutes),
    SharedModule,
    OrganizationChartModule,
    DividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CamaraModule { }
