import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-directorio-colaboradores-contratistas',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './directorio-colaboradores-contratistas.component.html',
  styleUrl: './directorio-colaboradores-contratistas.component.scss'
})
export class DirectorioColaboradoresContratistasComponent {
  public descargarEXCEL(): void {
    window.open('excel/DIRECTORIO-PERSONAL-2023.xlsx');
  }
}
