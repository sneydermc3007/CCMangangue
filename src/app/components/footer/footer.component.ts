import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public paginasInternas = [
    { label: 'Términos y condiciones', url: '#' },
    { label: 'Preguntas frecuentes', url: '/fqa' },
    { label: 'Aviso de privacidad', url: '/leyes/datos-personales' },
    { label: 'Protección de datos personales', url: '/leyes/datos-personales' },
    { label: 'PQRS Atención al cliente', url: '/pqrs' },
    { label: 'Ley de transparencia', url: '/leyes' },
    { label: 'Escríbanos', url: 'http://ccmagangue.docxflow.com/public/sucursal' },
    { label: 'Mapa del sitio', url: '#' },
  ];

  public redesSociales = [
    { icon: 'fa-brands fa-facebook fa-2xl', url: '#' },
    { icon: 'fa-brands fa-x-twitter fa-2xl', url: '#' },
    { icon: 'fa-brands fa-instagram fa-2xl', url: '#' },
    { icon: 'fa-brands fa-youtube fa-2xl', url: '#' },
  ];
}
