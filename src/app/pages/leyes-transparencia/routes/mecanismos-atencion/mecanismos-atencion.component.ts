import { Component } from '@angular/core';

import { CardModule } from "primeng/card";

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-mecanismos-atencion',
  standalone: true,
  imports: [
    CardModule,
    SharedModule
  ],
  templateUrl: './mecanismos-atencion.component.html',
  styleUrl: './mecanismos-atencion.component.scss'
})
export class MecanismosAtencionComponent {

}
