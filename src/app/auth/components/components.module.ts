import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReturnAdminComponent } from './return-admin/return-admin.component';

@NgModule({
  declarations: [
    ReturnAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ReturnAdminComponent
  ]
})
export class ComponentsModule { }
