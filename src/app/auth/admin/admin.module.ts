import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { adminRoutes } from './admin.routes';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NoticiasComponent } from './routes/noticias/noticias.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    CardModule,
    DialogModule,
    ButtonModule,
    SidebarModule,
    TabViewModule,
    TableModule,
    DropdownModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
