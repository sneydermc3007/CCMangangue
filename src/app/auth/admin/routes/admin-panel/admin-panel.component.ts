import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { VideosService } from '../../../../services/videos/videos.service';
import { NoticiasService } from '../../../../services/noticias/noticias.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  public sidebarVisible: boolean = false;
  public selectedOption: string = '';
  
  public modalNoticias: boolean = false;
  public news: any = {};

  public modalVideos: boolean = false;
  public video: any = {};

  cards = [
    { title: 'Slides', description: 'Agregar slides.' },
    { title: 'Noticias', description: 'Agregar noticias.' },
    { title: 'Videos', description: 'Agregar videos.' },
    { title: 'Eventos', description: 'Agregar eventos.' }
  ]

  statusOptions = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
    { label: 'Pendiente', value: 'pendiente' }
  ];

  constructor(
    private router: Router,
    private _videosService: VideosService,
    private _noticiasService: NoticiasService
  ) {}

  selectOption(option: string) {
    this.selectedOption = option;

    this.router.navigate([`login/admin/${option.toLowerCase()}`]);    
    this.sidebarVisible = false; 
  }

  openModal(card: any) {
    if (card.title === 'Noticias')
      this.modalNoticias = true;
    else if(card.title === 'Videos')
      this.modalVideos = true;
    else 
      throw new Error('Modal not implemented.');
  }

  onFileSelect(event: any) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.news.image = file;
    }
  }

  submitForm(tipo: string) {
    if (tipo === 'noticias') {
      this._noticiasService.addNoticia(this.news).subscribe((response: any) => {
        this.modalNoticias = false;
        this.news = {};
      });
    } 
    else if (tipo === 'videos') {
      this._videosService.addVideo(this.video).subscribe((response: any) => {
        this.modalVideos = false;
        this.video = {};
      });
    }
  }
}
