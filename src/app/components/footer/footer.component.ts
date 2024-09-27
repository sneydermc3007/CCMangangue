import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public paginasInternas = [
    { label: 'Escríbanos', url: '#' },
    { label: 'Ley de transparencia', url: '#' },
    { label: 'Llámenos', url: '#' },
    { label: 'PQRS Atención al cliente', url: '#' },
    { label: 'Preguntas frecuentes', url: '#' },
    { label: 'Reportes judiciales', url: '#' },
    { label: 'Aviso de privacidad', url: '#' },
    { label: 'Protección de datos personales', url: '#' },
    { label: 'Términos y condiciones', url: '#' },
    { label: 'Mapa del sitio', url: '#' },
    { label: 'Declaración de Conformidad de', url: '#' },
  ];

  public redesSociales = [
    { icon: 'fa-brands fa-facebook fa-2xl', url: '#' },
    { icon: 'fa-brands fa-x-twitter fa-2xl', url: '#' },
    { icon: 'fa-brands fa-instagram fa-2xl', url: '#' },
    { icon: 'fa-brands fa-youtube fa-2xl', url: '#' },
  ];
}
