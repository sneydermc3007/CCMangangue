import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ButtonModule } from 'primeng/button';

import { registrosRoutes } from './registros.routes';

import { MercantilComponent } from './routes/mercantil/mercantil.component';
import { EntidadesAnimoLucroComponent } from './routes/entidades-animo-lucro/entidades-animo-lucro.component';
import { UnicoProponentesComponent } from './routes/unico-proponentes/unico-proponentes.component';
import { NacionalTurismoComponent } from './routes/nacional-turismo/nacional-turismo.component';
import { UnicoNacionalComponent } from './routes/unico-nacional/unico-nacional.component';
import { PublicoVeeduriasCiudadanasComponent } from './routes/publico-veedurias-ciudadanas/publico-veedurias-ciudadanas.component';
import { UnicoEmpresarialComponent } from './routes/unico-empresarial/unico-empresarial.component';
import { EntidadesEconomiaSolidariaComponent } from './routes/entidades-economia-solidaria/entidades-economia-solidaria.component';
import { ActividadJuegoAzarComponent } from './routes/actividad-juego-azar/actividad-juego-azar.component';
import { LibrosComponent } from './routes/libros/libros.component';
import { DepositosFinancierosComponent } from './routes/depositos-financieros/depositos-financieros.component';
import { ConsultaExpedientesComponent } from './routes/consulta-expedientes/consulta-expedientes.component';

@NgModule({
  declarations: [
    MercantilComponent,
    EntidadesAnimoLucroComponent,
    UnicoProponentesComponent,
    NacionalTurismoComponent,
    UnicoNacionalComponent,
    PublicoVeeduriasCiudadanasComponent,
    UnicoEmpresarialComponent,
    EntidadesEconomiaSolidariaComponent,
    ActividadJuegoAzarComponent,
    LibrosComponent,
    DepositosFinancierosComponent,
    ConsultaExpedientesComponent,
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
