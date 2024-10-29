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
  { 
    path: 'tramites', 
    children: [
      { path: '', loadComponent: () => import('./pages/tramites/tramites.component').then(m => m.TramitesComponent) },
      { path: 'servicios', loadComponent: () => import('./pages/tramites/routes/servicios/servicios.component').then(m => m.ServiciosComponent) },
    ]
  },
  { path: 'renovar', loadComponent: () => import('./pages/renovar/renovar.component').then(m => m.RenovarComponent) },
  { path: 'fqa',  loadComponent: () => import('./pages/preguntas-respuestas/preguntas-respuestas.component').then(m => m.PreguntasRespuestasComponent) },
  { path: 'pqrs', loadComponent: () => import('./pages/pqrs/pqrs.component').then(m => m.PqrsComponent) },
  { path: 'formulario-pqrs', loadComponent: () => import('./pages/formulario-pqrs/formulario-pqrs.component').then(m => m.FormularioPqrsComponent) },


  { path: 'camara', loadChildren: () => import('./pages/camara/camara.module').then(m => m.CamaraModule) },
  { path: 'registros', loadChildren: () => import('./pages/registros/registros.module').then(m => m.RegistrosModule) },
  { path: 'politicas', loadChildren: () => import('./pages/politicas/politicas.module').then(m => m.PoliticasModule) },
  { path: 'servicios-virtuales', loadChildren: () => import('./pages/servicios-virtuales/servicios-virtuales.module').then(m => m.ServiciosVirtualesModule) },
  { path: 'desarrollo-empresarial', loadChildren: () => import('./pages/desarrollo-empresarial/desarrollo-empresarial.module').then(m => m.DesarrolloEmpresarialModule) },
  { path: '**', redirectTo: '' }
];
