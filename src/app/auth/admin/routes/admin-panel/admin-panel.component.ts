import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  cards = [
    { title: 'Slides', description: 'Agregar slides.' },
    { title: 'Noticias', description: 'Agregar noticias.' },
    { title: 'Videos', description: 'Agregar videos.' },
    { title: 'Eventos', description: 'Agregar eventos.' }
  ]

  constructor(private router: Router) {}


  selectOption(option: string) {
    this.selectedOption = option;

    this.router.navigate([`login/admin/${option.toLowerCase()}`]);    
    this.sidebarVisible = false; 
  }

  openModal(card: any) {
    if (card.title === 'Noticias')
      this.modalNoticias = true;
    else 
      throw new Error('Modal not implemented.');
  }

  onFileSelect(event: any) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      console.log(file);
      this.news.image = file;
    }
  }

  submitForm() {
    throw new Error('Method not implemented.');
  }
}
