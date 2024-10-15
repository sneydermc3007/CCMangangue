import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.scss'
})
export class AcordeonComponent {
  @Input() public information: any[] = [];
}
