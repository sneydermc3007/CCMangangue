import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from "@angular/common";
import { DomSanitizer } from '@angular/platform-browser';

import { SlidesService } from '../../services/slides/slides.service';
import { PaginaInterface } from '../../interfaces/slides.interface';
@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  public pagina: PaginaInterface = {
    id: 0,
    titulo: '',
    contenido: null,
    imagen_principal: null,
    imagen_segundaria: null,
    tipo: ''
  };

  constructor(
    private _slides: SlidesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const paginaId = this.route.snapshot.paramMap.get('id');
    if (paginaId) {
      this._slides.getSlideById(Number(paginaId)).subscribe(async (pagina: any) => {
        try {
          this.pagina = {
            ...pagina.pagina,
            contenido: this.sanitizer.bypassSecurityTrustHtml(await this.cleanHtml(pagina.pagina.contenido))
          };
        } catch (error) {
          console.error('Error:', error);
          this.pagina = pagina;
        }
      });
    }
  }

  private async cleanHtml(html: string | null): Promise<string> {
    if (!html) 
      return '';

    html = html.replace(/<p[^>]*><\/p>/g, '');
    html = html.replace(/\sstyle="color:\s*rgb\(0,\s*0,\s*0\);"/g, '');
    html = html.replace(/\sstyle="background-color:\s*rgb\(255,\s*255,\s*255\);"/g, '');
    html = html.trim();

    return html;
  }
}