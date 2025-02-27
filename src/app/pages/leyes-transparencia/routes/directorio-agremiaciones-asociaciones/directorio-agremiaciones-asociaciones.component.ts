import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-directorio-agremiaciones-asociaciones',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './directorio-agremiaciones-asociaciones.component.html',
  styleUrl: './directorio-agremiaciones-asociaciones.component.scss'
})
export class DirectorioAgremiacionesAsociacionesComponent {
  public asociaciones = [
    { label: 'Asociación Iberoamericana de Cámaras de Comercio (AICO)', link: 'https://aico.org' },
    { label: 'Cámara de Comercio Internacional - ICC', link: 'https://www.iccspain.org' },
    { label: 'CertiCamara', link: 'https://web.certicamara.com' },
    { label: 'FENALCO', link: 'https://www.fenalco.com.co' },
    { label: 'CONFECAMARAS', link: 'https://confecamaras.org.co' },
    { label: 'COLOMBIACOMPRA', link: 'https://www.colombiacompra.gov.co' }
  ]

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
