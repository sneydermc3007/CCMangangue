import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { registrosRoutes } from './registros.routes';

import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../../shared/shared.module';

import { MercantilComponent } from './routes/mercantil/mercantil.component';
import { EntidadesAnimoLucroComponent } from './routes/entidades-animo-lucro/entidades-animo-lucro.component';
import { UnicoProponentesComponent } from './routes/unico-proponentes/unico-proponentes.component';
import { NacionalTurismoComponent } from './routes/nacional-turismo/nacional-turismo.component';
import { UnicoNacionalComponent } from './routes/unico-nacional/unico-nacional.component';
import { PublicoVeeduriasCiudadanasComponent } from './routes/publico-veedurias-ciudadanas/publico-veedurias-ciudadanas.component';

@NgModule({
  declarations: [
    MercantilComponent,
    EntidadesAnimoLucroComponent,
    UnicoProponentesComponent,
    NacionalTurismoComponent,
    UnicoNacionalComponent,
    PublicoVeeduriasCiudadanasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registrosRoutes),
    SharedModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrosModule { }
