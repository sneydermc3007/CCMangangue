import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';

import { SharedModule } from "../../shared/shared.module";
import { NoticiasModule } from "../../components/noticias/noticias.module";
import { ActividadEmpresarialComponent } from "../../components/actividad-empresarial/actividad-empresarial.component";
import { VideosComponent } from "../../components/videos/videos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GalleriaModule,
    AccordionModule,
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
  public images: any[] = [];
  public sitiosInteres: any[] = [
    {
      img: 'https://volavi.co/wp-content/uploads/2016/04/images_Certificado_Calidad_turistica_colombia.jpg',
      url: 'https://ccmagangue.org.co/v2/'
    },
    {
      img: 'https://d1ubo22jqmjd7v.cloudfront.net/images/82205767e296e81508c339a8e093fda0-rues-logo.svg',
      url: 'https://ruesfront.rues.org.co'
    },
    {
      img: 'https://change-lab.co/wp-content/uploads/slider10/logo-confecamaras-vert_-_copia.png',
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
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Logo_Procuraduria_Colombia.png',
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

  ngOnInit() {
    this.images.push(
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_640.png',
        thumbnailImageSrc: 'https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_640.png',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg',
        thumbnailImageSrc: 'https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'https://img.freepik.com/foto-gratis/hoja-naturaleza-fondos-patron-ilustracion-planta-telon-fondo-diseno-abstracto-naturaleza-verde-vibrante-papel-tapiz-ilustracion-generativa-ai_188544-12680.jpg?w=2000&t=st=1726803634~exp=1726804234~hmac=1e988638a8e9a21bab3c531ded29021734ed0435a5d217f1047f4f340bdbfca0',
        thumbnailImageSrc: 'https://img.freepik.com/foto-gratis/hoja-naturaleza-fondos-patron-ilustracion-planta-telon-fondo-diseno-abstracto-naturaleza-verde-vibrante-papel-tapiz-ilustracion-generativa-ai_188544-12680.jpg?w=2000&t=st=1726803634~exp=1726804234~hmac=1e988638a8e9a21bab3c531ded29021734ed0435a5d217f1047f4f340bdbfca0',
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'https://i.blogs.es/aad9ce/fondo-de-pantalla-dinamico/1366_2000.jpg',
        thumbnailImageSrc: 'https://i.blogs.es/aad9ce/fondo-de-pantalla-dinamico/1366_2000.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
      }
    )
  }
}
