import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { serviciosVirtualesRoutes } from './servicios-virtuales.routes';

import { ExpedicionVerificacionCertificadosComponent } from './routes/expedicion-verificacion-certificados/expedicion-verificacion-certificados.component';
import { InscripcionesRenovacionesComponent } from './routes/inscripciones-renovaciones/inscripciones-renovaciones.component';
import { InstructivosTramitesVirtualesComponent } from './routes/instructivos-tramites-virtuales/instructivos-tramites-virtuales.component';
import { EmpresaComponent } from './routes/empresa/empresa.component';

@NgModule({
  declarations: [
    ExpedicionVerificacionCertificadosComponent,
    InscripcionesRenovacionesComponent,
    InstructivosTramitesVirtualesComponent,
    EmpresaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviciosVirtualesRoutes),
    SharedModule
  ]
})
export class ServiciosVirtualesModule { }
