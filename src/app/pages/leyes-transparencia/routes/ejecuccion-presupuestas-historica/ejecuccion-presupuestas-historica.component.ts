import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-ejecuccion-presupuestas-historica',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ejecuccion-presupuestas-historica.component.html',
  styleUrl: './ejecuccion-presupuestas-historica.component.scss'
})
export class EjecuccionPresupuestasHistoricaComponent {
  public ejeccionPresupuestal = [
    { label: 'Ejecucción Presupuestal Histórica 2022', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/02/Ejecucion-Presupuestal-2022.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2021', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2021.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2020', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2020.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2019', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2019.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2018', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2018.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2017', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2017.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2016', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2016.pdf'},
    { label: 'Ejecucción Presupuestal Histórica 2015', archivo: 'https://ccmagangue.org.co/media/pdf/ejecucionpresupuestalhistorica2015.pdf'},
  ];

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
