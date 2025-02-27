import { Routes } from '@angular/router';

import { AtencionClienteComponent } from './routes/atencion-cliente/atencion-cliente.component';
import { SeguridadInformationComponent } from './routes/seguridad-information/seguridad-information.component';
import { SeguridadLinformationComponent } from './routes/seguridad-linformation/seguridad-linformation.component';
import { GestionDocumentalComponent } from './routes/gestion-documental/gestion-documental.component';
import { AdministracionRiesgosComponent } from './routes/administracion-riesgos/administracion-riesgos.component';
import { SeguridadSaludTrabajoComponent } from './routes/seguridad-salud-trabajo/seguridad-salud-trabajo.component';
import { SigComponent } from './routes/sig/sig.component';

export const politicasRoutes: Routes = [
    { path: 'atencion-cliente', component: AtencionClienteComponent },
    { path: 'seguridad-informacion', component: SeguridadInformationComponent },
    { path: 'ley-transparencia-acceso-informacion', component: SeguridadLinformationComponent },
    { path: 'gestion-documental', component: GestionDocumentalComponent },
    { path: 'administracion-riesgos', component: AdministracionRiesgosComponent },
    { path: 'seguridad-salud-trabajo', component: SeguridadSaludTrabajoComponent },
    { path: 'sig', component: SigComponent },
]