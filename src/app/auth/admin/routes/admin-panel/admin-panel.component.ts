import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {

  cards = ['Slides', 'Noticias', 'Videos', 'Eventos', 'Usuarios', 'Leyes de Transparencia']

  constructor(private router: Router) {}

  redireccionar(card: any) {
    if (card !== 'Leyes de Transparencia')
      this.router.navigate([`login/admin/${card.toLowerCase()}`]);
    else
      this.router.navigate([`login/admin/leyes-transparencia`]);
  }
}
