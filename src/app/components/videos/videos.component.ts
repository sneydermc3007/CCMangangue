import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {SharedModule} from "../../shared/shared.module";
import { ToastModule } from 'primeng/toast';

interface Video {
  title: string;
  url: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    DialogModule,
    ButtonModule,
    SharedModule,
    ToastModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  @Input() callingComponent: string | undefined;
  @Input() videos: Video[] = [];

  selectedVideo: Video | null = null;
  isModalOpen = false;

  showVideo(video: Video) {
    this.selectedVideo = video;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedVideo = null;
  }

}
