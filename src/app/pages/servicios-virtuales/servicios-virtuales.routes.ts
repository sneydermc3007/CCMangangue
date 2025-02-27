import { Routes } from '@angular/router';

import { ExpedicionVerificacionCertificadosComponent } from './routes/expedicion-verificacion-certificados/expedicion-verificacion-certificados.component';
import { InscripcionesRenovacionesComponent } from './routes/inscripciones-renovaciones/inscripciones-renovaciones.component';
import { InstructivosTramitesVirtualesComponent } from './routes/instructivos-tramites-virtuales/instructivos-tramites-virtuales.component';
import { EmpresaComponent } from './routes/empresa/empresa.component';

export const serviciosVirtualesRoutes: Routes = [
    { path: 'expedicion-verificacion-certificados', component: ExpedicionVerificacionCertificadosComponent },
    { path: 'inscripciones-renovaciones', component: InscripcionesRenovacionesComponent },
    { path: 'instructivos-tramites-virtuales', component: InstructivosTramitesVirtualesComponent },
    { path: 'empresa', component: EmpresaComponent },
]