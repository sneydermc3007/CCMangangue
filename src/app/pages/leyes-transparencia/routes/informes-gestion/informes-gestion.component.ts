import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-informes-gestion',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './informes-gestion.component.html',
  styleUrl: './informes-gestion.component.scss'
})
export class InformesGestionComponent {
  public informes = [
    { label: 'Informe de Gestión 2023', archivo: 'https://ccmagangue.org.co/media/pdf/informe-de-gestion-2023.pdf'},
    { label: 'Informe de Gestión 2022', archivo: 'https://ccmagangue.org.co/media/pdf/informe-de-gestion-2022.pdf'},
    { label: 'Informe de Gestión 2021', archivo: 'https://ccmagangue.org.co/media/pdf/informe-de-gestion-2021.pdf'},
    { label: 'Informe de Gestión 2020', archivo: 'https://ccmagangue.org.co/media/pdf/Informe%20de%20Gestión%202020.pdf'},
    { label: 'Informe de Gestión 2019', archivo: 'https://ccmagangue.org.co/media/pdf/Informe%20de%20Gestión%202019.pdf'},
    { label: 'Informe de Gestión 2018', archivo: 'https://ccmagangue.org.co/media/pdf/InformeGestionoLabores2018.pdf'},
    { label: 'Informe de Gestión 2017', archivo: 'https://ccmagangue.org.co/media/pdf/InformeGestionoLabores2017.pdf'},
    { label: 'Informe de Gestión 2016', archivo: 'https://ccmagangue.org.co/media/pdf/InformeGestionoLabores2016.pdf'},
    { label: 'Informe de Gestión 2015', archivo: 'https://ccmagangue.org.co/media/pdf/InformeGestionoLabores2015.pdf'},
    { label: 'Informe de Gestión 2014', archivo: 'https://ccmagangue.org.co/media/pdf/InformeGestionoLabores2014.pdf'},
  ];

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
