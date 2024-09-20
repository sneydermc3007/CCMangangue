import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principales',
  templateUrl: './principales.component.html',
  styleUrl: './principales.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class PrincipalesComponent implements OnInit {
  public noticias: any[] = [];

  ngOnInit() {
    this.noticias = [
      {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
        image: 'https://dus6dayednven.cloudfront.net/app/uploads/2020/12/JEAN-PAUL-DE-LA-HARPE.jpg'
      },
      {
        title: 'Another News Title',
        description: 'This is the description for another news. It can be longer than the first one...',
        image: 'https://www.blogdelfotografo.com/wp-content/uploads/2022/01/silueta-atardecer-foto-perfil.webp'
      },
      {
        title: 'Yet Another News Title',
        description: 'More text goes here for this third news item...',
        image: 'https://w0.peakpx.com/wallpaper/752/821/HD-wallpaper-verde-blanco-claro-hojas-niebla.jpg'
      }
    ];
  }
}
