import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';

import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { SafePipe } from "./pipes/safe.pipe";

import { AcordeonComponent } from './acordeon/acordeon.component';
import { TitleComponent } from './title/title.component';
import { CardsDocumentosComponent } from './cards-documentos/cards-documentos.component';
import { NormatividadesComponent } from './normatividades/normatividades.component';
import { RegistrosListComponent } from './registros-list/registros-list.component';

@NgModule({
  declarations: [
    ShortenTextPipe,
    SafePipe,
    AcordeonComponent,
    TitleComponent,
    CardsDocumentosComponent,
    NormatividadesComponent,
    RegistrosListComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule,
    DialogModule
  ],
  exports: [
    ShortenTextPipe,
    SafePipe,
    AcordeonComponent,
    TitleComponent,
    CardsDocumentosComponent,
    NormatividadesComponent,
    RegistrosListComponent,
  ]
})
export class SharedModule { }
