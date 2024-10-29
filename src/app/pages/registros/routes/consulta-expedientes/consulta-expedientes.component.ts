import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-expedientes',
  templateUrl: './consulta-expedientes.component.html',
  styleUrl: './consulta-expedientes.component.scss'
})
export class ConsultaExpedientesComponent {
  
  redirectToExpediente(page: number) {
    console.log(`Redirecting to expediente ${page}`);

    if (page === 1)
      window.open('https://ccmagangue.org.co/v2/wp-content/uploads/2024/09/Instructivo-consulta-expedientes-CCM-PW-1.pdf', '_blank');
    else if (page === 2)
      window.open('http://142.44.165.77:8083/migracion/buscador/buscadorLibre', '_blank');
    else
      window.open('http://ccmagangue.docxflow.com/public/sucursal', '_blank');
  }
}
