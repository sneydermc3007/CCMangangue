import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-segundarias',
  templateUrl: './segundarias.component.html',
  styleUrl: './segundarias.component.scss'
})
export class SegundariasComponent implements OnInit {
  public noticias: any[] = [];

  ngOnInit() {
    this.noticias = [
      {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://www.istockphoto.com/resources/images/PhotoFTLP/P1-regional-iStock-1985150440.jpg'
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://i.blogs.es/15dbbe/pasos-lograr-fotos-principiante-salten-nivel-superior-01/1366_2000.webp'
      }
    ];
  }
}
