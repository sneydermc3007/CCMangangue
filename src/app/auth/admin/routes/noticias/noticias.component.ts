import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { NoticiasService } from '../../../../services/noticias/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss',
  providers: [MessageService]
})
export class NoticiasComponent implements OnInit {
  public tabs: any[] = [
    { header: 'Listar', },
    { header: 'Acciones', },
  ];
  noticias: any[] = [];

  public modalNoticias: boolean = false;
  public news: any = {};
  public cantidadTipos: any = {};

  displayEditModal = false; 
  selectedAccion: any = {};

  estados = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
    { label: 'Pendiente', value: 'Pendiente' }
  ];

  tipos = ['Principal', 'Secundaria', 'Empresarial'];

  statusOptions = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
    { label: 'Pendiente', value: 'pendiente' }
  ];

  constructor(
    private _noticiasServices: NoticiasService,
    private msg: MessageService
  ) { }

  ngOnInit() {
    this._noticiasServices.getNoticias().subscribe((noticias: any[]) => {
      this.noticias = noticias;
      this.cantidadTipos = this.noticias.map(noticia => noticia.tipo)
        .reduce((acc, tipo) => {
          acc[tipo] = acc[tipo] ? acc[tipo] + 1 : 1;
          return acc;
        }, {});
        console.log('cantidadTipos:', this.cantidadTipos);
      
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
    this.modalNoticias = true;
  }

  submitForm() {
    console.log(this.news);

    if (this.news.tipo === 'Principal' && this.cantidadTipos['Principal'] >= 3 && this.news.estado === 'activo')
      return this.msg.add({ severity: 'warn', summary: 'Advertencia', detail: 'Solo se pueden tener 3 noticias principales con estado activo' });
    else if (this.news.tipo === 'Empresarial' && this.cantidadTipos['Empresarial'] >= 3 && this.news.estado === 'activo')
      return this.msg.add({ severity: 'warn', summary: 'Advertencia', detail: 'Solo se pueden tener 3 noticias empresionales con estado activo' });
    else if (this.news.tipo === 'Secundaria' && this.cantidadTipos['Secundaria'] >= 2 && this.news.estado === 'activo')
      return this.msg.add({ severity: 'warn', summary: 'Advertencia', detail: 'Solo se pueden tener 2 noticias secundarias con estado activo' });

    this._noticiasServices.addNoticia(this.news).subscribe((response: any) => {
      this.modalNoticias = false;
      this.news = {};
      console.log('response:', response);
      this.noticias.push(response.body);
    });
  }
}
