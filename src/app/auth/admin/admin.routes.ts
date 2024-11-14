import { Routes } from '@angular/router';

import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NoticiasComponent } from './routes/noticias/noticias.component';
import { AdminLeyesTransparenciaComponent } from './routes/admin-leyes-transparencia/admin-leyes-transparencia.component';
import { AdminVideosComponent } from './routes/admin-videos/admin-videos.component';
import { AdminEventosComponent } from './routes/admin-eventos/admin-eventos.component';

export const adminRoutes: Routes = [
    { path: '', component: AdminPanelComponent, pathMatch: 'full' },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'videos', component: AdminVideosComponent },
    { path: 'eventos', component: AdminEventosComponent },
    { path: 'leyes-transparencia', component: AdminLeyesTransparenciaComponent }
];