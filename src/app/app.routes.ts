import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NormatividadesComponent } from './shared/normatividades/normatividades.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'chat-test', loadChildren: () => import('./components/chat/chat-auto-test.module').then(m => m.ChatAutoTestModule) },
  { path: 'renovar', loadComponent: () => import('./pages/renovar/renovar.component').then(m => m.RenovarComponent) },
  { path: 'fqa',  loadComponent: () => import('./pages/preguntas-respuestas/preguntas-respuestas.component').then(m => m.PreguntasRespuestasComponent) },
  { path: 'pqrs', loadComponent: () => import('./pages/pqrs/pqrs.component').then(m => m.PqrsComponent) },
  { path: 'formulario-pqrs', loadComponent: () => import('./pages/formulario-pqrs/formulario-pqrs.component').then(m => m.FormularioPqrsComponent) },
  { path: 'actas-documentos', loadComponent: () => import('./pages/actas-documentos/actas-documentos.component').then(m => m.ActasDocumentosComponent) },
  { path: 'calendario', loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent) },
  { path: 'tarifas', loadComponent: () => import('./pages/tarifas/tarifas.component').then(m => m.TarifasComponent) },
  { path: 'glosario', loadComponent: () => import('./pages/glosario/glosario.component').then(m => m.GlosarioComponent) },
  { path: 'slide/:id', loadComponent: () => import('./components/slide/slide.component').then(m => m.SlideComponent) },

  { path: 'convocatorias', loadComponent: () => import('./pages/convocatorias/convocatorias.component').then(m => m.ConvocatoriasComponent) },
  { path: 'convocatorias/:id', loadComponent: () => import('./pages/convocatorias/routes/convocatoria-detail/convocatoria-detail.component').then(m => m.ConvocatoriaDetailComponent) },

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
      { path: 'informacion-presupuestal-anual', loadComponent: () => import('./pages/leyes-transparencia/routes/presupuesto-general-asignado/presupuesto-general-asignado.component').then(m => m.PresupuestoGeneralAsignadoComponent) },
      { path: 'estados-financieros-dictamenes-revisoria-fiscal', loadComponent: () => import('./pages/leyes-transparencia/routes/estados-financieros-dictamenes-revisoria-fiscal/estados-financieros-dictamenes-revisoria-fiscal.component').then(m => m.EstadosFinancierosDictamenesRevisoriaFiscalComponent) },
      { path: 'ejecuccion-presupuestas-historica', loadComponent: () => import('./pages/leyes-transparencia/routes/ejecuccion-presupuestas-historica/ejecuccion-presupuestas-historica.component').then(m => m.EjecuccionPresupuestasHistoricaComponent) },
      { path: 'informes-gestion', loadComponent: () => import('./pages/leyes-transparencia/routes/informes-gestion/informes-gestion.component').then(m => m.InformesGestionComponent) },
      { path: 'planes-mejoramiento', loadComponent: () => import('./pages/leyes-transparencia/routes/planes-mejoramiento/planes-mejoramiento.component').then(m => m.PlanesMejoramientoComponent) },
      { path: 'informe-peticiones-quejas-reclamos', loadComponent: () => import('./pages/leyes-transparencia/routes/informe-peticiones-quejas-reclamos/informe-peticiones-quejas-reclamos.component').then(m => m.InformePeticionesQuejasReclamosComponent) },
      { path: 'costumbre-mercantil', loadComponent: () => import('./pages/leyes-transparencia/routes/costumbre-mercantil/costumbre-mercantil.component').then(m => m.CostumbreMercantilComponent) },
      { path: 'directorio-agremiaciones-asociaciones-otros', loadComponent: () => import('./pages/leyes-transparencia/routes/directorio-agremiaciones-asociaciones-otros/directorio-agremiaciones-asociaciones-otros.component').then(m => m.DirectorioAgremiacionesAsociacionesOtrosComponent) },
      { path: 'sistemas-informacion', loadComponent: () => import('./pages/leyes-transparencia/routes/sistemas-informacion/sistemas-informacion.component').then(m => m.SistemasInformacionComponent) },
      { path: 'transparencia-pasiva', loadComponent: () => import('./pages/leyes-transparencia/routes/transparencia-pasiva/transparencia-pasiva.component').then(m => m.TransparenciaPasivaComponent) },
      { path: 'accesibilidad-medios-electronicos-poblocacion', loadComponent: () => import('./pages/leyes-transparencia/routes/accesibilidad-medios-electronicos-poblocacion/accesibilidad-medios-electronicos-poblocacion.component').then(m => m.AccesibilidadMediosElectronicosPoblocacionComponent) },
      { path: 'indice-cumplimiento-lt', loadComponent: () => import('./pages/leyes-transparencia/routes/indice-cumplimiento-lt/indice-cumplimiento-lt.component').then(m => m.IndiceCumplimientoLtComponent) },
    ]
  },
  {
    path: 'tramites',
    children: [
      { path: '', loadComponent: () => import('./pages/tramites/tramites.component').then(m => m.TramitesComponent) },
      { path: 'servicios', loadComponent: () => import('./pages/tramites/routes/servicios/servicios.component').then(m => m.ServiciosComponent) },
      { path: 'servicios/:titulo', loadComponent: () => import('./pages/tramites/routes/servicios/servicios.component').then(m => m.ServiciosComponent) },
      { path: 'linea', loadComponent: () => import('./pages/tramites/routes/tramites-linea/tramites-linea.component').then(m => m.TramitesLineaComponent) },
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
  {
    path: 'login',
    children: [
      { path: '', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
      { path: 'admin', loadChildren: () => import('./auth/admin/admin.module').then(m => m.AdminModule) }
    ]
  },


  { path: 'camara', loadChildren: () => import('./pages/camara/camara.module').then(m => m.CamaraModule) },
  { path: 'registros', loadChildren: () => import('./pages/registros/registros.module').then(m => m.RegistrosModule) },
  { path: 'politicas', loadChildren: () => import('./pages/politicas/politicas.module').then(m => m.PoliticasModule) },
  { path: 'servicios-virtuales', loadChildren: () => import('./pages/servicios-virtuales/servicios-virtuales.module').then(m => m.ServiciosVirtualesModule) },
  { path: 'desarrollo-empresarial', loadChildren: () => import('./pages/desarrollo-empresarial/desarrollo-empresarial.module').then(m => m.DesarrolloEmpresarialModule) },
  { path: 'noticias/:id', loadChildren: () => import('./components/noticias/noticias.module').then(m => m.NoticiasModule) },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
