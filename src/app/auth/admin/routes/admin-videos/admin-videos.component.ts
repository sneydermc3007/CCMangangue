import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { VideoInterface } from '../../../../interfaces/video.interface';
import { VideosService } from '../../../../services/videos/videos.service';

@Component({
  selector: 'app-admin-videos',
  templateUrl: './admin-videos.component.html',
  styleUrl: './admin-videos.component.scss',
  providers: [MessageService]
})
export class AdminVideosComponent implements OnInit {

  videos: VideoInterface[] = [];
  nuevoVideo: VideoInterface = { titulo: '', url: '', estado: 'Activo' };
  modalEditar: boolean = false;
  videoSeleccionado: VideoInterface = { titulo: '', url: '', estado: '' };

  estadoOptions = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
  ];

  constructor(
    private _videosService: VideosService,
    private sanitizer: DomSanitizer,
    private msg: MessageService
  ) {}

  sanitizeUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit(): void {
    this._videosService.getVideos().subscribe((videos: VideoInterface[]) => this.videos = videos );
  }

  onSubmit() {
    const activos = this.videos.filter(video => video.estado === 'Activo').length;
  
    if (activos >= 3) {
      this.nuevoVideo.estado = 'Inactivo';
      this.msg.add({ severity: 'warn', summary: 'Advertencia', detail: 'Solo se pueden tener 3 videos activos' });
    }
  
    if (this.nuevoVideo.titulo && this.nuevoVideo.url) {
      this._videosService.addVideo(this.nuevoVideo).subscribe((video: VideoInterface) => {
        this.videos.push(video);
      });
  
      this.nuevoVideo = { titulo: '', url: '', estado: 'Activo' };
    }
  }
  

  abrirModalEditar(video: VideoInterface) {
    this.videoSeleccionado = { ...video };
    this.modalEditar = true;
  }

  actualizarVideo() {
    console.log('Video actualizado:', this.videoSeleccionado);
    this.modalEditar = false;

    this._videosService.editVideo(this.videoSeleccionado).subscribe((video: VideoInterface) => {
      this.videos = this.videos.map((v: VideoInterface) => {
        if (v.id === video.id) return video;
        return v;
      });
    });
  }

  deleteVideo(video: VideoInterface) {
    this._videosService.editVideo({ ...video, estado: 'Inactivo' }).subscribe((video: VideoInterface) => {
      this.videos = this.videos.map((v: VideoInterface) => {
        if (v.id === video.id) return video;
        return v;
      });
    });
  }
}