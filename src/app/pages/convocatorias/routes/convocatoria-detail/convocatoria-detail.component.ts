import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ConvocatoriasService } from '../../../../services/convocatorias/convocatorias.service';
import { ConvocatoriaInterface } from '../../../../interfaces/convocatoria.interface';

@Component({
  selector: 'app-convocatoria-detail',
  standalone: true,
  imports: [],
  templateUrl: './convocatoria-detail.component.html',
  styleUrl: './convocatoria-detail.component.scss'
})
export class ConvocatoriaDetailComponent implements OnInit {
  public convocatoria: ConvocatoriaInterface = {} as ConvocatoriaInterface; 

  constructor(
    private _convocatorias: ConvocatoriasService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const paginaId = this.route.snapshot.paramMap.get('id');
    console.log(paginaId);

    if (paginaId) {
      this._convocatorias.getById(Number(paginaId)).subscribe(async (pagina: any) => {
        try {
          this.convocatoria = {
            ...pagina,
            contenido: this.sanitizer.bypassSecurityTrustHtml(await this.cleanHtml(pagina.contenido))
          }
        } catch (error) {
          console.error('Error:', error);
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
