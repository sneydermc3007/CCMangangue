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
      fecha: 'ENE 01',
      imagen: 'https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg',
      titulo: '4 Claves Extorsiva',
      descripcion: 'Camcomercio y GAULA capacitan a comerciantes contra la extorsión.'
    },
    {
      fecha: 'ENE 01',
      imagen: 'https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg',
      titulo: 'Plan de Turismo de Magangué',
      descripcion: 'Elaboración Público - Privada del Plan de Turismo de Magangué.'
    },
    {
      fecha: 'ENE 01',
      imagen: 'https://marketing4ecommerce.co/wp-content/uploads/2023/10/ias-generadoras-de-imagenes.jpg',
      titulo: 'Transformación Digital',
      descripcion: 'Convocatoria Nacional para la Transformación de Unidades Empresariales en Centros de Transformación Digital.'
    },

    {
      fecha: 'OCT 28',
      imagen: 'https://www.techfunnel.com/wp-content/uploads/2018/06/what-Is-customer-identity-and-access-management.jpg',
      titulo: 'Proveedores Internos',
      descripcion: 'Convocatoria nuevos provedores internos en el municipio de magangué.'
    },
    {
      fecha: 'NOV 22',
      imagen: 'https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/461608928_949722660485966_8789186703187262422_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hgmNKB1kOBUQ7kNvgGg0DAw&_nc_ht=scontent.feoh1-1.fna&oh=00_AYCJ7T8ZKzJDXrXb9RpHI0QHmfy2-E79Vip7ArzgKQReGw&oe=66FD2E4E',
      titulo: 'Zambrano inaugura su primera fábrica de tableros de triplex',
      descripcion: 'Una de las grandes apuestas del gobierno del Bolívar Mejor es generar confianza en el territorio y garantías para que las grandes empresas puedan llegar al departamento y así ayudar al desarrollo y mejorar la economía del territorio.'
    },
    {
      fecha: 'MAR 12',
      imagen: 'https://www.rcnradio.com/_next/image?url=https%3A%2F%2Ffiles.rcnradio.com%2Fpublic%2Fstyles%2F16_9%2Fpublic%2F2023-07%2Fdinero_en_colombia_1.jpg%3FVersionId%3DPzgTrM9SqZ_Xvmte7BiJIvMsJHEiwz0R%26itok%3DNDeJqDqk&w=3840&q=75',
      titulo: 'Gran jornada financiera para los comerciantes',
      descripcion: 'La jornada Financiera se llevará a cabo el próximo 12 de marzo en el auditorio de la Cámara de Comercio de Magangué, con el fin de brindar a los comerciantes de la región información sobre los diferentes servicios financieros que ofrecen las entidades bancarias y financieras.'
    }
  ];

  public filteredConvocatorias() {
    return this.convocatorias.filter(convocatoria => {
      return convocatoria.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        convocatoria.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
