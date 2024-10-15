import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';

import { SharedModule } from "../../shared/shared.module";

import { VideoInterface } from "../../interfaces/video.interface";

import { VideosComponent } from "../../components/videos/videos.component";

@Component({
  selector: 'app-leyes-transparencia',
  standalone: true,
  imports: [AccordionModule, VideosComponent, SharedModule],
  templateUrl: './leyes-transparencia.component.html',
  styleUrl: './leyes-transparencia.component.scss',
})
export class LeyesTransparenciaComponent {
  public videos: VideoInterface[] = [
    {
      title:
        'Ley de transparencia y acceso a la información pública | Cámara de Comercio de Magangué',
      url: 'https://www.youtube.com/embed/1tee4hVJIC8',
    },
  ];
  public decretos = [
    {
      titulo: 'Decreto 1074 de 2015',
      descripcion:
        'Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.',
    },
    {
      titulo: 'Decreto 1081 de 2015',
      descripcion:
        'Por medio del cual se expide el Decreto Reglamentario Único del Sector Presidencia de la República.',
    },
    {
      titulo: 'Resolución 3564 de 2015',
      descripcion:
        'Por el cual se reglamentan aspectos relacionados con la Ley de Transparencia y Acceso a la Información Pública.',
    },
  ];
  public information = [
    {
      header: 'Información de la Entidad',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Misión y Visión',
            'Funciones y Deberes',
            'Estructura Orgánica-Organigrama',
            'Mapa de Procesos',
            'Directorio institucional',
            'Directorio Colaboradores y Contratistas',
            'Directorio de Entidades',
            'Directorio de agremiaciones o asociaciones en las que participe',
            'Servicio al público, normas, formularios y protocolos de atención',
            'Procedimientos que se siguen para tomar decisiones en las diferentes áreas',
            'Mecanismo de presentación directa de solicitudes, quejas y reclamos',
            'Calendario de actividades y eventos',
            'Información sobre decisiones que puede afectar al público',
            'Entes y autoridades que lo vigilan',
            'Publicación de hojas de vida',
            'Estudios, investigaciones y otras publicaciones',
          ],
        },
      ],
    },
    {
      header: 'Normatividad',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Normativa',
        },
      ],
    },
    {
      header: 'Contratación',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Plan Anual de Adquisiciones.',
            'Publicación de la información contractual.',
            'Publicación de la ejecución de los contratos.',
            'Manual de contratación, adquisición y/o compras',
            'Formatos o modelos de contratos o pliegos tipo.',
          ],
        },
      ],
    },
    {
      header: 'Planeación, presupuesto e informes',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Presupuesto general de ingresos, gastos e inversión.',
            'Estados Financieros.',
            'Plan de Acción.',
            'Proyectos de inversión.',
            'Informes de empalme.',
            'Información pública y/o relevante.',
            'Informes de gestión, evaluación y auditoría.',
            'Informes de la Oficina de Control Interno.',
            'Informes sobre Defensa Pública y Prevención del Daño Antijurídico.',
            'Informes trimestrales sobre acceso a información, quejas y reclamos.',
            'Costumbre Mercantil.',
            'Estudio Economico de la Jurisdicción de la Cámara de Comercio de Magangué.',
          ],
        },
      ],
    },
    {
      header: 'Trámites',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Trámites',
        },
      ],
    },
    {
      header: 'Participa',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Contenido del Menú Participa:',
        },
      ],
    },
    {
      header: 'Datos Abiertos',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Instrumentos de gestión de la información.',
            'Sección de Datos Abiertos.',
          ],
        },
      ],
    },
    {
      header: 'Información Específica Para Grupos de Interés.',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Otros del grupos de Interés',
            'Información para niñas, niños y adolescentes',
            'Información para Mujeres',
          ],
        },
      ],
    },
    {
      header:
        'Obligaciones de reporte de información específica por parte de la entidad',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Normatividad Especial.',
        },
      ],
    },
    {
      header: 'Información tributaria en entidades territoriales locales',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Procesos de recaudo de rentas locales.',
            'Tarifas de liquidación del Impuesto de Industria y Comercio (ICA).',
          ],
        },
      ],
    },
    {
      header: 'Transparencia Pasiva',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Transparencia Pasiva',
        },
      ],
    },
    {
      header: 'Accesibilidad Web',
      contenido: [
        {
          tipo: 'parrafo',
          valor:
            'Accesibilidad en medios electrónicos para la población en situación de discapacidad visual',
        },
      ],
    },
    {
      header: 'Habeas Data',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Ley 1581 de 2012 Protección de Datos Personales',
        },
      ],
    },
    {
      header: 'Preguntas y Respuestas Frecuentes',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Preguntas y Respuestas Frecuentes',
        },
      ],
    },
    {
      header: 'Glosario',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Glosario',
        },
      ],
    },
  ];
}
