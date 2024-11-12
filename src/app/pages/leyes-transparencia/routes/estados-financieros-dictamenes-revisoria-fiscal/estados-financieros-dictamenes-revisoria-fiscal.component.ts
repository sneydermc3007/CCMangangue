import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-estados-financieros-dictamenes-revisoria-fiscal',
  standalone: true,
  imports: [
    CommonModule,
    TimelineModule,
    SharedModule,
    DialogModule
  ],
  templateUrl: './estados-financieros-dictamenes-revisoria-fiscal.component.html',
  styleUrl: './estados-financieros-dictamenes-revisoria-fiscal.component.scss'
})
export class EstadosFinancierosDictamenesRevisoriaFiscalComponent {
  public estadosFinancierosYear = [
    { 
      year: '2022', documentos: [
        { label: 'Estados Financieros Diciembre 2022', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2022.pdf' },
        { label: 'Nota a los Estados Financieros 2022', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2022.pdf' },
        { label: 'Informe de Revisoría Fiscal 2022', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2022.pdf' }
      ]
    },
    {
      year: '2021', documentos: [
        { label: 'Estados Financieros Diciembre 2021', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2021.pdf' },
        { label: 'Nota a los Estados Financieros 2021', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2021.pdf' },
        { label: 'Informe de Revisoría Fiscal 2021', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2021.pdf' }
      ]
    },
    {
      year: '2020', documentos: [
        { label: 'Estados Financieros Diciembre 2020', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2020.pdf' },
        { label: 'Nota a los Estados Financieros 2020', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2020.pdf' },
        { label: 'Informe de Revisoría Fiscal 2020', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2020.pdf' }
      ]
    },
    {
      year: '2019', documentos: [
        { label: 'Estados Financieros Diciembre 2019', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2019.pdf' },
        { label: 'Nota a los Estados Financieros 2019', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2019.pdf' },
        { label: 'Informe de Revisoría Fiscal 2019', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2019.pdf' }
      ]
    },
    {
      year: '2018', documentos: [
        { label: 'Estados Financieros Diciembre 2018', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2018.pdf' },
        { label: 'Nota a los Estados Financieros 2018', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2018.pdf' },
        { label: 'Informe de Revisoría Fiscal 2018', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2018.pdf' }
      ]
    },
    {
      year: '2017', documentos: [
        { label: 'Estados Financieros Diciembre 2017', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2017.pdf' },
        { label: 'Nota a los Estados Financieros 2017', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2017.pdf' },
        { label: 'Informe de Revisoría Fiscal 2017', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2017.pdf' }
      ]
    },
    {
      year: '2016', documentos: [
        { label: 'Estados Financieros Diciembre 2016', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2016.pdf' },
        { label: 'Nota a los Estados Financieros 2016', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2016.pdf' },
        { label: 'Informe de Revisoría Fiscal 2016', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2016.pdf' }
      ]
    },
    {
      year: '2015', documentos: [
        { label: 'Estados Financieros Diciembre 2015', archivo: 'https://ccmagangue.org.co/media/pdf/estadosfinancieros2015.pdf' },
        { label: 'Nota a los Estados Financieros 2015', arcivo: 'https://ccmagangue.org.co/media/pdf/notasestadosfinancieros2015.pdf' },
        { label: 'Informe de Revisoría Fiscal 2015', archivo: 'https://ccmagangue.org.co/media/pdf/informederevisoriafiscal2015.pdf' }
      ]
    }
  ];

  displayModal = false;
  selectedYear: string | null = null;
  selectedDocuments: Array<{ label: string; archivo: string }> = [];

  showDocuments(yearData: any) {
    this.selectedYear = yearData.year;
    this.selectedDocuments = yearData.documentos;
    this.displayModal = true;

    console.log('Selected year:', this.selectedYear);
    console.log('Selected documents:', this.selectedDocuments);
  }
}
