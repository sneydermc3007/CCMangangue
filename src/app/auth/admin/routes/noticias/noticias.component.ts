import { Component, OnInit } from '@angular/core';

import { NoticiasService } from '../../../../services/noticias/noticias.service';
import { response } from 'express';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent implements OnInit {
  public tabs: any[] = [
    { header: 'Listar', },
    { header: 'Acciones', },
  ];
  noticias: any[] = [];

  public modalNoticias: boolean = false;
  public news: any = {};

  displayEditModal = false; 
  selectedAccion: any = {};

  estados = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
    { label: 'Pendiente', value: 'Pendiente' }
  ];

  tipos = ['Principal', 'Secundaria'];

  statusOptions = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
    { label: 'Pendiente', value: 'pendiente' }
  ];

  constructor(private _noticiasServices: NoticiasService) { }

  ngOnInit() {
    this._noticiasServices.getNoticias().subscribe((noticias: any[]) => {
      this.noticias = noticias;
    });
  }

  openEditModal(accion: any) {
    this.selectedAccion = { ...accion };
    this.displayEditModal = true;
  }

  saveChanges() {
    const index = this.noticias.findIndex(a => a.id === this.selectedAccion.id);
    if (index !== -1) {
      this.noticias[index] = { ...this.selectedAccion };
      this._noticiasServices.updateNoticia(this.selectedAccion).subscribe(
        (response: any) => {
          console.log('response:', response);
        },
        (error: any) => console.error('Error:', error)
      )
    }
    this.displayEditModal = false;
  }

  deleteAccion(id: number) {
    this._noticiasServices.deleteNoticia(id).subscribe(
      (response: any) => {
        if (response.status === 204) {
          this.noticias = this.noticias.filter(a => a.id !== id);
        }
      },
      (error: any) => console.error('Error:', error)
    );
  }

  openAddModal() {
    console.log('openAddModal');
    this.modalNoticias = true;
  }

  submitForm() {
    console.log(this.news);
    this._noticiasServices.addNoticia(this.news).subscribe((response: any) => {
      this.modalNoticias = false;
      this.news = {};
      this.noticias.push(response);
    });
  }
}
