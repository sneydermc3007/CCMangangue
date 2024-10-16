import { Routes } from '@angular/router';

import { SedesComponent } from './sedes/sedes.component';
import { HistoriaComponent } from './historia/historia.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { JuntaDirectivaComponent } from './junta-directiva/junta-directiva.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { MapaProcesosComponent } from './mapa-procesos/mapa-procesos.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { MapaJurisdiccionComponent } from './mapa-jurisdiccion/mapa-jurisdiccion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

export const camaraRoutes: Routes = [
    { path: 'sedes', component: SedesComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'mision-vision', component: MisionVisionComponent },
    { path: 'junta-directiva', component: JuntaDirectivaComponent },
    { path: 'colaboradores', component: ColaboradoresComponent },
    { path: 'mapa-procesos', component: MapaProcesosComponent },
    { path: 'organigrama', component: OrganigramaComponent },
    { path: 'mapa-jurisdiccion', component: MapaJurisdiccionComponent },
    { path: 'ubicacion', component: UbicacionComponent }
];