import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.scss'
})
export class AcordeonComponent {
  @Input() public information: any[] = [];

  public displayModal: boolean = false;

  constructor(private router: Router) { }

  public vista(item: string | any): void {
    if (item.pagina === 'pdf' || item.pagina === 'aspx') 
      window.open(item.archivo, '_blank');
    else if (item.pagina === 'externa')
      window.open(item.enlace, '_blank');
    else if (item.pagina === 'popup')
      this.displayModal = true;
    else 
      this.router.navigate([item.pagina]);
  }

  close() {
    this.displayModal = false;
  }

  redirect(url: string) {
    window.open(url, '_blank');
  }
}
