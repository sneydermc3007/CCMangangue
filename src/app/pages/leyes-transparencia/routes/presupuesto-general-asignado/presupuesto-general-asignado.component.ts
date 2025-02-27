import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-presupuesto-general-asignado',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './presupuesto-general-asignado.component.html',
  styleUrl: './presupuesto-general-asignado.component.scss'
})
export class PresupuestoGeneralAsignadoComponent {
  public presupuestos = [
    { label: 'Presupuesto 2023', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/02/presupuesto-inicial-2023.pdf'},
    { label: 'Presupuesto 2022', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2022.pdf'},
    { label: 'Presupuesto 2021', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2021.pdf'},
    { label: 'Presupuesto 2020', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2020.pdf'},
    { label: 'Presupuesto 2019', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2019.pdf'},
    { label: 'Presupuesto 2018', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2018.pdf'},
    { label: 'Presupuesto 2017', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2017.pdf'},
    { label: 'Presupuesto 2016', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2016.pdf'},
    { label: 'Presupuesto 2015', archivo: 'https://ccmagangue.org.co/media/pdf/presupuesto2015.pdf'},
  ];

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
