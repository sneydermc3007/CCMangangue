import { Routes } from '@angular/router';

import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NoticiasComponent } from './routes/noticias/noticias.component';

export const adminRoutes: Routes = [
    { path: '', component: AdminPanelComponent, pathMatch: 'full' },
    { path: 'noticias', component: NoticiasComponent }
];