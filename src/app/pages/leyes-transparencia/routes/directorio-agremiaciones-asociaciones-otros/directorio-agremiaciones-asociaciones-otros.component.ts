import { Component } from '@angular/core';

import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-directorio-agremiaciones-asociaciones-otros',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './directorio-agremiaciones-asociaciones-otros.component.html',
  styleUrl: './directorio-agremiaciones-asociaciones-otros.component.scss'
})
export class DirectorioAgremiacionesAsociacionesOtrosComponent {
  public archivos = [
    { label: 'Asociación Iberoamericana de Cámaras de Comercio (AICO)', archivo: 'https://aico.org/' },
    { label: 'Cámara de Comercio Internacional - ICC', archivo: 'http://www.iccspain.org/' },
    { label: 'CertiCamara', archivo: 'https://web.certicamara.com/' },
    { label: 'FENALCO', archivo: 'http://www.fenalco.com.co/' },
    { label: 'CONFECAMARAS', archivo: 'http://confecamaras.org.co/' },
    { label: 'COLOMBIACOMPRA', archivo: 'https://www.colombiacompra.gov.co/' },
  ]
}
