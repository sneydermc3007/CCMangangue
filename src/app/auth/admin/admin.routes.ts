import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';

import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NoticiasComponent } from './routes/noticias/noticias.component';
import { AdminLeyesTransparenciaComponent } from './routes/admin-leyes-transparencia/admin-leyes-transparencia.component';
import { AdminVideosComponent } from './routes/admin-videos/admin-videos.component';
import { AdminEventosComponent } from './routes/admin-eventos/admin-eventos.component';
import { AdminUsuariosComponent } from './routes/admin-usuarios/admin-usuarios.component';

export const adminRoutes: Routes = [
    { path: '', component: AdminPanelComponent, pathMatch: 'full', canActivate: [authGuard] },
    { path: 'noticias', component: NoticiasComponent, canActivate: [authGuard] },
    { path: 'videos', component: AdminVideosComponent, canActivate: [authGuard] },
    { path: 'eventos', component: AdminEventosComponent, canActivate: [authGuard] },
    { path: 'usuarios', component: AdminUsuariosComponent, canActivate: [authGuard] },
    { path: 'leyes-transparencia', component: AdminLeyesTransparenciaComponent, canActivate: [authGuard] }
];