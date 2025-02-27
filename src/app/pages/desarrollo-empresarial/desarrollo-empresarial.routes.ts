import { Routes } from '@angular/router';

import { CapacitacionesComponent } from './routes/capacitaciones/capacitaciones.component';
import { DiplomadosComponent } from './routes/diplomados/diplomados.component';

export const desarrolloEmpresarialRoutes: Routes = [
    { path: 'capacitaciones', component: CapacitacionesComponent },
    { path: 'diplomados', component: DiplomadosComponent },
];