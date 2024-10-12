import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'convocatorias', loadComponent: () => import('./pages/convocatorias/convocatorias.component').then(m => m.ConvocatoriasComponent) },
  { path: 'leyes', 
    children: [
      { path: '', loadComponent: () => import('./pages/leyes-transparencia/leyes-transparencia.component').then(m => m.LeyesTransparenciaComponent) },
      { path: 'datos-personales', loadComponent: () => import('./pages/leyes-transparencia/routes/datos-personales/datos-personales.component').then(m => m.DatosPersonalesComponent) },
    ]
  },
  { path: 'tramites', loadComponent: () => import('./pages/tramites/tramites.component').then(m => m.TramitesComponent) },
  { path: 'fqa',  loadComponent: () => import('./pages/preguntas-respuestas/preguntas-respuestas.component').then(m => m.PreguntasRespuestasComponent) },
  { path: 'pqrs', loadComponent: () => import('./pages/pqrs/pqrs.component').then(m => m.PqrsComponent) },
  { path: 'camara', loadChildren: () => import('./pages/camara/camara.module').then(m => m.CamaraModule) },
  { path: '**', redirectTo: '' }
];
