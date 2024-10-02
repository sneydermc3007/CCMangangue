import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';

import { Video } from "../../interfaces/video.interface";

import { VideosComponent } from "../../components/videos/videos.component";

@Component({
  selector: 'app-leyes-transparencia',
  standalone: true,
  imports: [
    AccordionModule,
    VideosComponent
  ],
  templateUrl: './leyes-transparencia.component.html',
  styleUrl: './leyes-transparencia.component.scss'
})
export class LeyesTransparenciaComponent {
    public videos: Video[] = [{
      title: 'Ley de transparencia y acceso a la información pública | Cámara de Comercio de Magangué' ,
      url: 'https://www.youtube.com/embed/1tee4hVJIC8'
    }];
    public decretos = [
      {
        titulo: 'Decreto 1074 de 2015',
        descripcion: 'Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.'
      },
      {
        titulo: 'Decreto 1081 de 2015',
        descripcion: 'Por medio del cual se expide el Decreto Reglamentario Único del Sector Presidencia de la República.'
      },
      {
        titulo: 'Resolución 3564 de 2015',
        descripcion: 'Por el cual se reglamentan aspectos relacionados con la Ley de Transparencia y Acceso a la Información Pública.'
      }
    ];
}
