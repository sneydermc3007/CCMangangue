import { Routes } from '@angular/router';

import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NoticiasComponent } from './routes/noticias/noticias.component';
import { AdminLeyesTransparenciaComponent } from './routes/admin-leyes-transparencia/admin-leyes-transparencia.component';

export const adminRoutes: Routes = [
    { path: '', component: AdminPanelComponent, pathMatch: 'full' },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'leyes-transparencia', component: AdminLeyesTransparenciaComponent }
];