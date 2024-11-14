import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';

import { SharedModule } from "../../shared/shared.module";

import { VideoInterface } from "../../interfaces/video.interface";
import { AcordeonInterface } from '../../interfaces/acordeon.interface';

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
      titulo: 'Ley de transparencia y acceso a la información pública | Cámara de Comercio de Magangué',
      url: 'https://www.youtube.com/embed/1tee4hVJIC8'
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
  public information: AcordeonInterface[] = [
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
          valor: ['Plan Anual de Adquisiciones.'],
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio no son sujetos del sistema presupuestal nacional o territorial, y en tal sentido, no están obligadas a contar con el Plan Anual de Adquisicione'
        },
        {
          tipo: 'lista',
          valor: ['Publicación de la información contractual.']
        },
        {
          tipo: 'link',
          valor: 'SECOP I',
          enlace: 'https://www.contratos.gov.co/consultas/inicioConsulta.do'
        },
        {
          tipo: 'parrafo',
          valor: 'Para consultar los procesos de la Cámara de Comercio de Magangué en el SECOP I, seleccione el nombre de la Entidad en la lista “Entidad compradora”, Régimen Especial, en la lista “Modalidad de Contratación” y luego haga clic en “Buscar”'
        },
        {
          tipo: 'lista',
          valor: ['Publicación de la ejecución de los contratos.']
        },
        {
          tipo: 'parrafo',
          valor: 'No aplica por el Régimen contractual privado de las Cámaras de Comercio. Las cámaras de comercio publican en el SECOP I en el formulario de Régimen Especial y este solo tiene los estados: convocado, celebrado, terminado sin liquidar y/o liquidado'
        },
        {
          tipo: 'lista',
          valor: [
            {
              label: 'Manual de contratación, adquisición y/o compras',
              subitems: [
                { label: 'Publicación de la información contractual', pagina: 'externa', enlace: 'https://www.contratos.gov.co/consultas/resultadoListadoProcesos.jsp?entidad=213430024&desdeFomulario=true#' },
                { label: 'Publicación de la ejecución de los contratos', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/Manual-de-Contratacion-y-Compras-de-Bienes-yo-Servicios-Causacion-y-Pagos-2022.pdf' }
              ]
            }
          ]
        },
        {
          tipo: 'lista',
          valor: ['Formatos o modelos de contratos o pliegos tipo.']
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámaras de Comercio tienen un régimen privado de contratación, por lo tanto, no están obligadas a publicar esta información. Su sistema de contratación está amparado por el principio de la autonomía de la voluntad privada y regulado por el régimen jurídico institucional establecido en los Estatutos, la Política de Contratación y en lo aplicable, en la legislación civil y comercial.'
        }
      ],
    },
    {
      header: 'Planeación, presupuesto e informes',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            { 
              label: 'Presupuesto general de ingresos, gastos e inversión.', pagina: 'leyes-transparencia/informacion-presupuestal-anual', subitems: [
                { label: 'Estados Financieros.', pagina: 'leyes-transparencia/estados-financieros-dictamenes-revisoria-fiscal'}
              ] 
            },
            { label: 'Ejecución presupuestal.', pagina: 'leyes-transparencia/ejecuccion-presupuestas-historica' },
            'Plan de Acción.',
          ],
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio como sujetos no tradicionales no les aplica los planes en los términos del artículo 74 de la ley 1474 de 2011.'
        },
        {
          tipo: 'lista',
          valor: ['Proyectos de inversión.']
        },
        {
          tipo: 'parrafo',
          valor: 'La Cámaras de Comercio como organizaciones de naturaleza privada, no están obligadas a la inscripción en el respectivo Banco de Programas y Proyectos de Inversión, conforme lo dispone el artículo 77 de la Ley 1474 del 2011.'
        },
        {
          tipo: 'lista',
          valor: ['Informes de empalme.']
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio como sujetos no tradicionales no les aplica los planes en los términos del artículo 74 de la ley 1474 de 2011.'
        },
        {
          tipo: 'lista',
          valor: ['Información pública y/o relevante.']
        },
        {
          tipo: 'parrafo',
          valor: 'Este numeral aplica para las Empresas Industriales y Comerciales del Estado y las sociedades de Economía Mixta con base en lo establecido en el anexo 2 de la Resolución 1519 de 2020.'
        },
        {
          tipo: 'lista',
          valor: [
            {
              label: 'Informes de gestión, evaluación y auditoría.',
              subitems: [
                { label: 'Informe de Gestión.', pagina: 'leyes-transparencia/informes-gestion' },
                { label: 'Planes de Mejoramiento.', pagina: 'leyes-transparencia/planes-mejoramiento' },
                { label: 'SuperSociedades.', pagina: 'externa', enlace: 'https://www.supersociedades.gov.co' },
                { label: 'Informe Contraloria.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/Resultado-de-la-Audiotoria-Financiera-VIGENCIA-2018.pdf' }
              ]
            }
          ]
        },
        {
          tipo: 'lista',
          valor: ['Informes de la Oficina de Control Interno.']
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio como organizaciones privadas no están comprendidas en entidades de la rama ejecutiva de los niveles nacional y territorial del sector central y las descentralizadas por servicios o territorialmente. No les aplica la Ley 87 de 1993 por lo tanto no les obliga este reporte, ni ningún otro que se regule en este marco.'
        },
        {
          tipo: 'lista',
          valor: ['Informes sobre Defensa Pública y Prevención del Daño Antijurídico.']
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio, como entidades de naturaleza privada, no realizan informes sobre defensa pública en los términos de las entidades públicas.'
        },
        {
          tipo: 'lista',
          valor: [{ label: 'Informes trimestrales sobre acceso a información, quejas y reclamos.', pagina: 'leyes-transparencia/informe-peticiones-quejas-reclamos' }]
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio, como entidades de naturaleza privada, no realizan estos informes en los términos de las entidades públicas. Realizan el Informe de solicitudes de acceso a la información.'
        },
        {
          tipo: 'lista',
          valor: [
            {  label: 'Costumbre Mercantil.', pagina: 'leyes-transparencia/costumbre-mercantil' },
            {  label: 'Estudio Economico de la Jurisdicción de la Cámara de Comercio de Magangué.', pagina: 'leyes-transparencia/estudios-investigaciones-publicas' }
          ]
        }
      ],
    },
    {
      header: 'Trámites',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Trámites', pagina: '/tramites' }
        },
      ],
    },
    {
      header: 'Participa',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong>Contenido del Menú Participa:</strong>',
        },
        {
          tipo: 'parrafo',
          valor: 'Las Cámaras de Comercio son sujetos obligados no tradicionales y no están obligadas a tener mecanismos para que los interesados participen en la formulación de políticas, control y evaluación de la gestión institucional.'
        }
      ],
    },
    {
      header: 'Datos Abiertos',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            {  
              label: 'Instrumentos de gestión de la información.', 
              subitems: [
                { label: 'Instrumentos para la gestión de la Transparencia.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/media/pdf/Esquemadepublicaciondeinformacion.xlsx' },
                { label: 'Datos Abiertos.', pagina: 'externa', enlace: 'https://www.datos.gov.co/browse?Información-de-la-Entidad_Municipio=Magangué&Información-de-la-Entidad_Nombre-de-la-Entidad=Cámara+de+Comercio+de+Magangué' },
                { label: 'Programa Gestión Documental.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/media/pdf/CCMDGD-4PROGRAMADEGESTIÓNDOCUMENTAL.pdf' },
                { label: 'Tabla de Retención Documental.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/TablasdeRetencionDocumental.pdf' },
                { label: 'Acta Aprobación Tablas de Retención Documental.', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/ActaAprobacionTablasdeRetencionDocumental.pdf' },
                { label: 'Certificado Convalidación', pagina: 'pdf', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/Certificadodeconvalidacionccm.pdf' }
              ]
            },
            { label: 'Sección de Datos Abiertos.', pagina: 'https://www.datos.gov.co/browse?Información-de-la-Entidad_Municipio=Magangué&Información-de-la-Entidad_Nombre-de-la-Entidad=Cámara+de+Comercio+de+Magangué'}
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
            { 
              label: 'Otros del grupos de Interés', subitems: [
                { label: 'Grupos de Interés', pagina: 'leyes-transparencia/directorio-agremiaciones-asociaciones-otros' }
              ]
            },
            { 
              label: 'Información para niñas, niños y adolescentes', subitems: [
                { label: 'Clic aquí para ir a la pagina web', pagina: 'externa', enlace: 'https://zonainfantil.ccmagangue.org.co' }
              ]
            },
            { 
              label: 'Información para Mujeres', subitems: [
                { label: 'Participación de Mujeres', pagina: 'leyes-transparencia/sistemas-informacion' }
              ]
            }
          ],
        },
      ],
    },
    {
      header: 'Obligaciones de reporte de información específica por parte de la entidad',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Normatividad Especial.', pagina: 'normativa/leyes'}
        },
      ],
    },
    {
      header: 'Información tributaria en entidades territoriales locales',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong>Procesos de recaudo de rentas locales.</strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'Esta sección solo aplica para entidades del nivel territorial (Municipios y Distritos). (así como se hace en el numeral 6. Participa)'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Tarifas de liquidación del Impuesto de Industria y Comercio (ICA).</strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'Esta sección solo aplica para entidades del nivel territorial (Municipios y Distritos). (así como se hace en el numeral 6. Participa)'
        }
      ],
    },
    {
      header: 'Transparencia Pasiva',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Transparencia Pasiva', pagina: 'leyes-transparencia/transparencia-pasiva' }
        },
      ],
    },
    {
      header: 'Accesibilidad Web*',
      contenido: [
        {
          tipo: 'parrafo',
          valor:
            { label: 'Accesibilidad en medios electrónicos para la población en situación de discapacidad visual', pagina: 'leyes-transparencia/accesibilidad-medios-electronicos-poblocacion'}
        },
      ],
    },
    {
      header: 'Habeas Data',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Ley 1581 de 2012 Protección de Datos Personales', pagina: 'leyes-transparencia/datos-personales' }
        },
        {
          tipo: 'parrafo',
          valor: {label: 'Directiva 06 de 2019 – Indice cumplimiento Ley de Transparencia', pagina: 'leyes-transparencia/indice-cumplimiento-lt' },
        }
      ],
    },
    {
      header: 'Preguntas y Respuestas Frecuentes',
      contenido: [
        {
          tipo: 'parrafo',
          valor: { label: 'Preguntas y Respuestas Frecuentes', pagina: 'fqa' }
        },
      ],
    },
    {
      header: 'Glosario',
      contenido: [
        {
          tipo: 'parrafo',
          valor: {label: 'Glosario', pagina: 'glosario'}
        },
      ],
    },
  ];
}
