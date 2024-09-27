import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConvocatoriasComponent } from "./pages/convocatorias/convocatorias.component";
import { LeyesTransparenciaComponent } from "./pages/leyes-transparencia/leyes-transparencia.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: 'leyes', component: LeyesTransparenciaComponent },
  { path: '**', redirectTo: '' }
];
