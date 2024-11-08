import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-informe-peticiones-quejas-reclamos',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    SharedModule
  ],
  templateUrl: './informe-peticiones-quejas-reclamos.component.html',
  styleUrl: './informe-peticiones-quejas-reclamos.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class InformePeticionesQuejasReclamosComponent {
  public documentos = [
    { nombre: 'Informe 01 de Enero de 2023 a 31 de Agosto de 2023', url: 'https://ccmagangue.org.co/media/pdf/Pqr%20a%C3%B1o%202022.pdf'},
    { nombre: 'Informe 01 de Enero de 2022 a 09 de Noviembre de 2022', url: 'https://ccmagangue.org.co/media/pdf/Pqr%20a%C3%B1o%202022.pdf'},
    { nombre: 'Informe 01 de Enero de 2021 a 31 de Octubre de 2021', url: 'https://ccmagangue.org.co/media/pdf/Pqr%20a%C3%B1o%202021.pdf'},
    { nombre: 'Informe 01 de Enero de 2020 a 31 de Octubre de 2020', url: 'https://ccmagangue.org.co/media/pdf/InformeOctubreDocXFlowPQRS2020.pdf'},
    { nombre: 'Informe Anual de PQR 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeAnualPQRS2019.pdf'},
    { nombre: 'Informe Anual de PQR 2018', url: 'https://ccmagangue.org.co/media/pdf/InformeAnualPQRS2018.pdf'},
    { nombre: 'Informe Anual de PQR 2017', url: 'https://ccmagangue.org.co/media/pdf/InformeAnualPQRS2017.pdf'},
    { nombre: 'Informe 01 de Octubre de 2019 a 31 de Octubre de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeOctubreDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Septiembre de 2019 a 30 de Septiembre de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeSeptiembreDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Agosto de 2019 a 30 de Agosto de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeAgostoDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Julio de 2019 a 31 de Julio de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeJulioDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Junio de 2019 a 30 de Junio de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeJunioDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Mayo de 2019 a 30 de Mayo de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeMayoDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Abril de 2019 a 30 de Abril de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeAbrilDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Marzo de 2019 a 31 de Marzo de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeMarzoDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Febrero de 2019 a 28 de Febrero de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeFebreroDocXFlowPQRS2019.pdf'},
    { nombre: 'Informe 01 de Enero de 2019 a 31 de Enero de 2019', url: 'https://ccmagangue.org.co/media/pdf/InformeEneroDocXFlowPQRS2019.pdf'}
  ];

  descargar(url: string) {
    window.open(url, '_blank');
  }
}
