import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registros-list',
  templateUrl: './registros-list.component.html',
  styleUrl: './registros-list.component.scss'
})
export class RegistrosListComponent {
  @Input() title: string = '';
  @Input() items: { label: string, archivo: string }[] = [];

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
