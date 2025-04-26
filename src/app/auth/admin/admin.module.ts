import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { adminRoutes } from './admin.routes';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from './../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NoticiasComponent } from './routes/noticias/noticias.component';
import { AdminLeyesTransparenciaComponent } from './routes/admin-leyes-transparencia/admin-leyes-transparencia.component';
import { AdminVideosComponent } from './routes/admin-videos/admin-videos.component';
import { AdminEventosComponent } from './routes/admin-eventos/admin-eventos.component';
import { AdminUsuariosComponent } from './routes/admin-usuarios/admin-usuarios.component';
import { AdminSlidesComponent } from './routes/admin-slides/admin-slides.component';
import { AdminConvocatoriasComponent } from './routes/admin-convocatorias/admin-convocatorias.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    NoticiasComponent,
    AdminLeyesTransparenciaComponent,
    AdminVideosComponent,
    AdminEventosComponent,
    AdminUsuariosComponent,
    AdminSlidesComponent,
    AdminConvocatoriasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule,
    ButtonModule,
    SidebarModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    ToggleButtonModule,
    ToastModule,
    MessagesModule,
    EditorModule,
    CalendarModule,
    ComponentsModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
