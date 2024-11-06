import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';

import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { SafePipe } from "./pipes/safe.pipe";

import { AcordeonComponent } from './acordeon/acordeon.component';
import { TitleComponent } from './title/title.component';
import { CardsDocumentosComponent } from './cards-documentos/cards-documentos.component';
import { NormatividadesComponent } from './normatividades/normatividades.component';

@NgModule({
  declarations: [
    ShortenTextPipe,
    SafePipe,
    AcordeonComponent,
    TitleComponent,
    CardsDocumentosComponent,
    NormatividadesComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    ShortenTextPipe,
    SafePipe,
    AcordeonComponent,
    TitleComponent,
    CardsDocumentosComponent,
    NormatividadesComponent
  ]
})
export class SharedModule { }
