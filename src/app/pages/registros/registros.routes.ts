import { Routes } from '@angular/router';

import { MercantilComponent } from './routes/mercantil/mercantil.component';
import { EntidadesAnimoLucroComponent } from './routes/entidades-animo-lucro/entidades-animo-lucro.component';
import { UnicoProponentesComponent } from './routes/unico-proponentes/unico-proponentes.component';
import { NacionalTurismoComponent } from './routes/nacional-turismo/nacional-turismo.component';
import { UnicoNacionalComponent } from './routes/unico-nacional/unico-nacional.component';
import { PublicoVeeduriasCiudadanasComponent } from './routes/publico-veedurias-ciudadanas/publico-veedurias-ciudadanas.component';

export const registrosRoutes: Routes = [
    { path: 'mercantil', component: MercantilComponent },
    { path: 'entidades-animo-lucro', component: EntidadesAnimoLucroComponent },
    { path: 'unico-proponentes', component: UnicoProponentesComponent },
    { path: 'nacional-turismo', component: NacionalTurismoComponent },
    { path: 'unico-nacional-entidades', component: UnicoNacionalComponent },
    { path: 'publico-veedurias-ciudadanas', component: PublicoVeeduriasCiudadanasComponent }
]