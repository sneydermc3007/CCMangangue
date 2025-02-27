import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { politicasRoutes } from './politicas.routes';

import { AtencionClienteComponent } from './routes/atencion-cliente/atencion-cliente.component';
import { SeguridadInformationComponent } from './routes/seguridad-information/seguridad-information.component';
import { SeguridadLinformationComponent } from './routes/seguridad-linformation/seguridad-linformation.component';
import { GestionDocumentalComponent } from './routes/gestion-documental/gestion-documental.component';
import { AdministracionRiesgosComponent } from './routes/administracion-riesgos/administracion-riesgos.component';
import { SeguridadSaludTrabajoComponent } from './routes/seguridad-salud-trabajo/seguridad-salud-trabajo.component';
import { SigComponent } from './routes/sig/sig.component';

@NgModule({
  declarations: [
    AtencionClienteComponent,
    SeguridadInformationComponent,
    SeguridadLinformationComponent,
    GestionDocumentalComponent,
    AdministracionRiesgosComponent,
    SeguridadSaludTrabajoComponent,
    SigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(politicasRoutes),
    SharedModule
  ]
})
export class PoliticasModule { }
