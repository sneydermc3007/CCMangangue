import { Component } from '@angular/core';

import { DividerModule } from 'primeng/divider';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-formulario-pqrs',
  standalone: true,
  imports: [
    DividerModule,
    SharedModule
  ],
  templateUrl: './formulario-pqrs.component.html',
  styleUrl: './formulario-pqrs.component.scss'
})
export class FormularioPqrsComponent {

}
