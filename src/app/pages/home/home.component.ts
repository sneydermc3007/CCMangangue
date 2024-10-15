import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';

import { SharedModule } from "../../shared/shared.module";
import { NoticiasModule } from "../../components/noticias/noticias.module";

import { ActividadEmpresarialComponent } from "../../components/actividad-empresarial/actividad-empresarial.component";
import { VideosComponent } from "../../components/videos/videos.component";

import { VideoInterface } from "../../interfaces/video.interface";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GalleriaModule,
    CarouselModule,
    SharedModule,
    NoticiasModule,
    ActividadEmpresarialComponent,
    VideosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' },
  animations: [
    trigger('tabContent', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate(300)),
      transition('* => void', animate(300))
    ])
  ]
})
export class HomeComponent {
  public images: any[] = [
    {
      itemImageSrc: 'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/08/14/6117bbc046c0a.jpeg',
      thumbnailImageSrc: 'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/08/14/6117bbc046c0a.jpeg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'https://www.bolivar.gov.co/web/wp-content/uploads/2024/05/IMG-20240502-WA00091-1200x675.jpg',
      thumbnailImageSrc: 'https://www.bolivar.gov.co/web/wp-content/uploads/2024/05/IMG-20240502-WA00091-1200x675.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      itemImageSrc: 'https://aventurecolombia.com/wp-content/uploads/2020/08/mompox-bolivar-colombia-©-Tristan-Quevilly-1.jpg',
      thumbnailImageSrc: 'https://aventurecolombia.com/wp-content/uploads/2020/08/mompox-bolivar-colombia-©-Tristan-Quevilly-1.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'https://maganguehoy.co/wp-content/uploads/2024/09/1e2df7cd-3a81-4f82-aa09-984e11ba6c11.jpeg',
      thumbnailImageSrc: 'https://maganguehoy.co/wp-content/uploads/2024/09/1e2df7cd-3a81-4f82-aa09-984e11ba6c11.jpeg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    }
  ];
  public videos: VideoInterface[] = [
    { title: 'Video 1', url: 'https://www.youtube.com/embed/oJEEPG5EBXM' },
    { title: 'Video 2', url: 'https://www.youtube.com/embed/GGUniEAJ7gA' },
    { title: 'Video 3', url: 'https://www.youtube.com/embed/h80gHRFGhVQ' },
    { title: 'Video 4', url: 'https://www.youtube.com/embed/LhoRE0fVB74' },
  ];
  public sitiosInteres: any[] = [
    {
      img: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2017/10/certificacioncalidadturistica.jpg?w=1060',
      url: 'https://ccmagangue.org.co/v2/'
    },
    {
      img: 'https://d1ubo22jqmjd7v.cloudfront.net/images/82205767e296e81508c339a8e093fda0-rues-logo.svg',
      url: 'https://ruesfront.rues.org.co'
    },
    {
      img: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2017/10/confecamaras.jpg?w=1060',
      url: 'https://confecamaras.org.co'
    },
    {
      img: 'https://www.boyaca.gov.co/wp-content/uploads/2016/02/images_Noticias2016_Febrero4_Superfinanciera123445689.jpg',
      url: 'https://www.superfinanciera.gov.co'
    },
    {
      img: 'https://guaviareestereo.com/wp-content/uploads/2021/11/contraloria.jpg',
      url: 'https://www.contraloria.gov.co/'
    },
    {
      img: 'https://www.registraduria.gov.co/IMG/jpg/procuraduria.jpg',
      url: 'https://www.procuraduria.gov.co/Pages/Inicio.aspx'
    },
    {
      img: 'https://certificado.supersolidaria.gov.co:8443/DownloadReportPDF/images/superlogo.jpg',
      url: 'http://www.supersolidaria.gov.co'
    },
    {
      img: 'https://unired.edu.co/images/instituciones/LOGOS/Logo_SIC.png',
      url: 'https://sedeelectronica.sic.gov.co'
    },
    {
      img: 'https://ccmagangue.org.co/v2/wp-content/uploads/2017/10/sii.jpg',
      url: 'https://sii2.confecamaras.co/vista/plantilla/index.php?cod_camara=19'
    }
  ];
  public responsiveOptions: any[] = [
    { breakpoint: '1024px',  numVisible: 5 },
    { breakpoint: '768px',  numVisible: 3 },
    { breakpoint: '560px',  numVisible: 1 }
];
  public cardViews: any[] = [
    { title: 'Registros públicos', icon: '', url: '' },
    { title: 'Quiero crear mi empresa', icon: '', url: '' },
    { title: 'Formaciones y convocatorias', icon: '', url: '' },
    { title: 'Centro de Arbitraje y Conciliación', icon: '', url: '' },
    { title: 'Investigaciones económica', icon: '', url: '' },
  ];
}
