import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';

import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';

import { SharedModule } from "../../shared/shared.module";
import { NoticiasModule } from "../../components/noticias/noticias.module";

import { ActividadEmpresarialComponent } from "../../components/actividad-empresarial/actividad-empresarial.component";
import { VideosComponent } from "../../components/videos/videos.component";

import { VideoInterface } from "../../interfaces/video.interface";
import { SlideInterface } from "../../interfaces/slides.interface";

import { VideosService } from '../../services/videos/videos.service';
import { SlidesService } from '../../services/slides/slides.service';

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
export class HomeComponent implements OnInit {
  public videos: VideoInterface[] = [];
  public slides: SlideInterface[] = [];

  constructor(
    private router: Router,
    private _videos: VideosService,
    private _slides: SlidesService
  ) {}

  ngOnInit(): void {
    this._videos.getVideos().subscribe((videos: VideoInterface[]) => {
      this.videos = videos.filter((video: VideoInterface) => video.estado === 'Activo');
    });

    this._slides.getSlides().subscribe((slides: any[]) => {
      slides.sort((a, b) => a.posicion - b.posicion).filter((slide: any) => slide.estado === 'activo');
      this.slides = slides;
    });
  }

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
      img: 'https://www.supersolidaria.gov.co/sites/default/files/noticias/super_1.png',
      url: 'http://www.supersolidaria.gov.co'
    },
    {
      img: 'https://www.greatplacetowork.com.co/images/CompaniesCertification/Fotos/Supersociedades/2023/cddf7a37-7905-486f-a70b-3863e5e4e444.png',
      url: 'https://www.supersociedades.gov.co'
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
    { title: 'Crea tu Empresa Aquí', url: 'servicios-virtuales/empresa' },
    { title: 'Modelo de Actas y Documentos', url: 'actas-documentos' },
    { title: 'Conoce Nuestros Registros', url: 'tramites/servicios' },
    { title: 'Crea tu Empresa en Linea', url: 'https://www.vue.gov.co/' },
    { title: 'Consulta de expedientes', url: 'registros/consulta-expedientes' },
    { title: 'Radica Aquí PQRSF', url: 'http://ccmagangue.docxflow.com/public/sucursal' },
  ];

  public goTo(url: string): void {
    console.log(url);
    if (url.includes('http'))
      window.open(url, '_blank');
    else
      this.router.navigate([url]);
  }
}
