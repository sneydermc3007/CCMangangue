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
      title: 'Ley de transparencia y acceso a la información pública | Cámara de Comercio de Magangué',
      url: 'https://www.youtube.com/embed/1tee4hVJIC8',
    },
  ];
  public decretos = [
    {
      titulo: 'Decreto 1074 de 2015',
      descripcion: 'Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.',
    },
    {
      titulo: 'Decreto 1081 de 2015',
      descripcion: 'Por medio del cual se expide el Decreto Reglamentario Único del Sector Presidencia de la República.',
    },
    {
      titulo: 'Resolución 3564 de 2015',
      descripcion: 'Por el cual se reglamentan aspectos relacionados con la Ley de Transparencia y Acceso a la Información Pública.',
    },
  ];
  public information = [
    {
      header: 'Información de la Entidad',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            { label: 'Misión y Visión', pagina: "/camara/mision-vision" },
            { label: 'Funciones y Deberes', pagina: "pdf", archivo: "https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/funcionesdelascamarasdecomercio.pdf" },
            { label: 'Estructura Orgánica-Organigrama', pagina: "pdf", archivo: "https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/organigrama-mapaproceso.pdf" },
            { label: 'Mapa de Procesos', pagina: "/camara/mapa-procesos" },
            { label: 'Directorio institucional', pagina: "/leyes-transparencia/mecanismos-atencion" },
            { label: 'Directorio Colaboradores y Contratistas', pagina: "/leyes-transparencia/directorio-colaboradores-contratistas" },
            { label: 'Directorio de Entidades', pagina: "externa", enlace: "https://confecamaras.org.co/conozca-la-red-de-camaras-de-comercio/" },
            { label: 'Directorio de agremiaciones o asociaciones en las que participe', pagina: "/leyes-transparencia/directorio-agremiaciones-asociaciones" },
            { label: 'Servicio al público, normas, formularios y protocolos de atención', pagina: "externa", enlace: "http://ccmagangue.docxflow.com/public/sucursal" },
            { label: 'Procedimientos que se siguen para tomar decisiones en las diferentes áreas', pagina: "/camara/mapa-procesos" },
            { label: 'Mecanismo de presentación directa de solicitudes, quejas y reclamos', pagina: "externa", enlace: "http://ccmagangue.docxflow.com/public/sucursal" },
            { label: 'Calendario de actividades y eventos', pagina: "/calendario" },
            { label: 'Información sobre decisiones que puede afectar al público', pagina: "/camara/informacion" },
            { label: 'Entes y autoridades que lo vigilan', pagina: "pdf", archivo: "https://ccmagangue.org.co/v2/wp-content/uploads/2022/08/Entes%20de%20control.pdf" },
            "Publicación de hojas de vida",
            { label: 'Estudios, investigaciones y otras publicaciones', pagina: "/leyes-transparencia/estudios-investigaciones-publicas" },
          ],
        },
      ],
    },
    {
      header: 'Normatividad',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Normativa', pagina: '/normativa' }
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
