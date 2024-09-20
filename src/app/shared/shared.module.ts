import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import {SafePipe} from "./pipes/safe.pipe";

@NgModule({
  declarations: [
    ShortenTextPipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenTextPipe,
    SafePipe
  ]
})
export class SharedModule { }
