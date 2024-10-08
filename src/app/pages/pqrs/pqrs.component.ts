import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [RouterModule, TabViewModule],
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.scss'
})
export class PqrsComponent {

  goToExternalPage() {
    window.open('http://ccmagangue.docxflow.com/public/sucursal', '_blank');
  }  
}
