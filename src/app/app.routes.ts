import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NormatividadesComponent } from './shared/normatividades/normatividades.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'convocatorias', loadComponent: () => import('./pages/convocatorias/convocatorias.component').then(m => m.ConvocatoriasComponent) },
  { path: 'renovar', loadComponent: () => import('./pages/renovar/renovar.component').then(m => m.RenovarComponent) },
  { path: 'fqa',  loadComponent: () => import('./pages/preguntas-respuestas/preguntas-respuestas.component').then(m => m.PreguntasRespuestasComponent) },
  { path: 'pqrs', loadComponent: () => import('./pages/pqrs/pqrs.component').then(m => m.PqrsComponent) },
  { path: 'formulario-pqrs', loadComponent: () => import('./pages/formulario-pqrs/formulario-pqrs.component').then(m => m.FormularioPqrsComponent) },
  { path: 'actas-documentos', loadComponent: () => import('./pages/actas-documentos/actas-documentos.component').then(m => m.ActasDocumentosComponent) },
  { path: 'calendario', loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent) },

  { 
    path: 'leyes-transparencia', 
    children: [
      { path: '', loadComponent: () => import('./pages/leyes-transparencia/leyes-transparencia.component').then(m => m.LeyesTransparenciaComponent) },
      { path: 'datos-personales', loadComponent: () => import('./pages/leyes-transparencia/routes/datos-personales/datos-personales.component').then(m => m.DatosPersonalesComponent) },
      { path: 'mecanismos-atencion', loadComponent: () => import('./pages/leyes-transparencia/routes/mecanismos-atencion/mecanismos-atencion.component').then(m => m.MecanismosAtencionComponent) },
      { path: 'directorio-colaboradores-contratistas', loadComponent: () => import('./pages/leyes-transparencia/routes/directorio-colaboradores-contratistas/directorio-colaboradores-contratistas.component').then(m => m.DirectorioColaboradoresContratistasComponent) },
      { path: 'directorio-agremiaciones-asociaciones', loadComponent: () => import('./pages/leyes-transparencia/routes/directorio-agremiaciones-asociaciones/directorio-agremiaciones-asociaciones.component').then(m => m.DirectorioAgremiacionesAsociacionesComponent) },
      { path: 'sipref', loadComponent: () => import('./pages/leyes-transparencia/routes/sipref/sipref.component').then(m => m.SiprefComponent) },
      { path: 'estudios-investigaciones-publicas', loadComponent: () => import('./pages/leyes-transparencia/routes/estudios-investigaciones-publicas/estudios-investigaciones-publicas.component').then(m => m.EstudiosInvestigacionesPublicasComponent) },
      { path: 'normas-generales', loadComponent: () => import('./pages/leyes-transparencia/routes/normas-generales/normas-generales.component').then(m => m.NormasGeneralesComponent) },
    ]
  },
  { 
    path: 'tramites', 
    children: [
      { path: '', loadComponent: () => import('./pages/tramites/tramites.component').then(m => m.TramitesComponent) },
      { path: 'servicios', loadComponent: () => import('./pages/tramites/routes/servicios/servicios.component').then(m => m.ServiciosComponent) },
    ]
  },
  { 
    path: 'normativa', 
    children: [
      { path: '', loadComponent: () => import('./pages/normativa/normativa.component').then(m => m.NormativaComponent) },
      { path: 'normatividad', loadComponent: () => import('./pages/normativa/routes/normatividad/normatividad.component').then(m => m.NormatividadComponent) },
      { path: 'circulares', loadComponent: () => import('./pages/normativa/routes/circulares/circulares.component').then(m => m.CircularesComponent) },
      { path: 'normatividades/:categoria', component: NormatividadesComponent },
      { path: 'leyes', loadComponent: () => import('./pages/normativa/routes/leyes/leyes.component').then(m => m.LeyesComponent) },
    ]
  },

  { path: 'camara', loadChildren: () => import('./pages/camara/camara.module').then(m => m.CamaraModule) },
  { path: 'registros', loadChildren: () => import('./pages/registros/registros.module').then(m => m.RegistrosModule) },
  { path: 'politicas', loadChildren: () => import('./pages/politicas/politicas.module').then(m => m.PoliticasModule) },
  { path: 'servicios-virtuales', loadChildren: () => import('./pages/servicios-virtuales/servicios-virtuales.module').then(m => m.ServiciosVirtualesModule) },
  { path: 'desarrollo-empresarial', loadChildren: () => import('./pages/desarrollo-empresarial/desarrollo-empresarial.module').then(m => m.DesarrolloEmpresarialModule) },
  { path: 'login', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
  { path: '**', redirectTo: '' }
];
