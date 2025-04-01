import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-convocatorias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    InputTextModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './convocatorias.component.html',
  styleUrl: './convocatorias.component.scss'
})
export class ConvocatoriasComponent {
  public searchTerm: string = '';
  public convocatorias: any[] = [
    {
      fecha: 'MAR 08',
      imagen: 'https://storageccomercio.blob.core.windows.net/fotos/mujer.png',
      titulo: 'La Cámara de Comercio de Magangué conmemoró el Día de la Mujer con el conversatorio “Diseñadas Para Vencer”',
      descripcion: 'La Cámara de Comercio de Magangué homenajeó a mujeres emprendedoras en un conversatorio sobre inclusión, equidad y empoderamiento.'
    },
    {
      fecha: 'ENE 01',
      imagen: 'https://storageccomercio.blob.core.windows.net/fotos/fortalecimiento.jpg',
      titulo: 'Jornada de Fortalecimiento Empresarial en Cicuco, Bolívar',
      descripcion: 'En Cicuco, la Cámara de Comercio de Magangué ofreció asesorías, impulso al turismo y promoción de la formalización empresarial.'
    },
    {
      fecha: 'FEB 11',
      imagen: 'https://storageccomercio.blob.core.windows.net/fotos/marketing-digital.png',
      titulo: 'Éxito en el Taller Virtual de Marketing Digital y Redes Sociales',
      descripcion: 'El 11 de febrero, comerciantes y emprendedores participaron en un taller virtual sobre marketing digital para fortalecer sus negocios en redes sociales.'
    },
    {
      fecha: 'MAR 13',
      imagen: 'https://storageccomercio.blob.core.windows.net/fotos/cuaresma.jpg',
      titulo: '¡Celebra la tradición en la Cuaresma de Sabores!',
      descripcion: 'Vive la Cuaresma de Sabores en Magangué, un evento donde gastronomía, cultura y emprendimiento se unen en una experiencia única.'
    }
  ];

  public filteredConvocatorias() {
    return this.convocatorias.filter(convocatoria => {
      return convocatoria.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        convocatoria.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
