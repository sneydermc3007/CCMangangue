import { Routes } from '@angular/router';

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

export const registrosRoutes: Routes = [
    { path: 'mercantil', component: MercantilComponent },
    { path: 'entidades-animo-lucro', component: EntidadesAnimoLucroComponent },
    { path: 'unico-proponentes', component: UnicoProponentesComponent },
    { path: 'nacional-turismo', component: NacionalTurismoComponent },
    { path: 'unico-nacional-entidades', component: UnicoNacionalComponent },
    { path: 'publico-veedurias-ciudadanas', component: PublicoVeeduriasCiudadanasComponent },
    { path: 'unico-empresarial', component: UnicoEmpresarialComponent },
    { path: 'entidades-economia-solidaria', component: EntidadesEconomiaSolidariaComponent },
    { path: 'actividad-juego-azar', component: ActividadJuegoAzarComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'depositos-estados-financieros', component: DepositosFinancierosComponent },
    { path: 'consulta-expedientes', component: ConsultaExpedientesComponent }
]