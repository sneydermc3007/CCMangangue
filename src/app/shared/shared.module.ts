import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';

import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { SafePipe } from "./pipes/safe.pipe";

import { AcordeonComponent } from './acordeon/acordeon.component';

@NgModule({
  declarations: [
    ShortenTextPipe,
    SafePipe,
    AcordeonComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    ShortenTextPipe,
    SafePipe,
    AcordeonComponent
  ]
})
export class SharedModule { }
