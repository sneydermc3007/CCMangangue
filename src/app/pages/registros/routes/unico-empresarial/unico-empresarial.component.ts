import { Component } from '@angular/core';

import { AccordionInterface } from '../../../../interfaces/acordion.interface';

@Component({
  selector: 'app-unico-empresarial',
  templateUrl: './unico-empresarial.component.html',
  styleUrl: './unico-empresarial.component.scss'
})
export class UnicoEmpresarialComponent {
  public information: AccordionInterface[] = [
    {
      header: 'Marco Legal',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'El marco legal está en:'
        },
        {
          tipo: 'parrafo',
          valor: 'Ley 590 de 2000'
        },
        {
          tipo: 'parrafo',
          valor: 'Circular 05 de 2002 de la Superintendencia de Industria y Comercio.'
        },
        {
          tipo: 'parrafo',
          valor: 'Es operado por CONFECAMARAS desde el 1 de Enero de 2005.'
        },
        {
          tipo: 'parrafo',
          valor: 'A través del RUE, desde cualquier cámara de comercio del país se puede:'
        },
        {
          tipo: 'lista',
          valor: [
            'Solicitar y recibir certificados en línea de registro mercantil y registro de proponentes.',
            'Verificar y controlar que el nombre de la empresa sea único en el país.',
            'Realizar matrículas, renovaciones o cancelaciones.',
            'Inscribir actos y documentos sujetos a registro.',
            'Inscribirse en el registro único de proponentes como constructor, consultor o proveedor.',
            'Actualizar, modificar o cancelar el registro de proponentes.',
            'Consultar datos básicos de empresas colombianas, a través de internet y en las Cámaras de Comercio.'
          ]
        },
        {
          tipo: 'parrafo',
          valor: '¿Qué trámites podré realizar a través del formulario RUEs?'
        },
        {
          tipo: 'parrafo',
          valor: 'El formulario RUES consta de dos páginas más anexos, en las que usted puede efectuar:'
        },
        {
          tipo: 'lista',
          valor: [
            'La matrícula, renovación y el traslado de domicilio del Registro Mercantil y de los vendedores de juegos de suerte y azar',
            'La inscripción, renovación y el traslado de domicilio del Registro de Entidades sin Ánimo de Lucro, Economía Solidaria, Veedurías Ciudadanas y ONG´S Extranjeras.',
            'La inscripción, actualización, renovación y cancelación por traslado de domicilio del Registro Único de Proponentes'
          ]
        },
        {
          tipo: 'parrafo',
          valor: 'Base técnica para el crecimiento de servicios virtuales registrales de la Red de Cámaras de Comercio, como:'
        },
        {
          tipo: 'lista',
          valor: [
            'Expedición de Nit',
            'Registro Nacional de Turismo',
            'Reporte de contratos, multas y sanciones de las Entidades del Estado',
            'Expedición de certificados de Cámara de Comercio por internet con firmas digitales.',
            'Portal de Creación de Empresas'
          ] 
        }
      ]
    },
    {
      header: 'Beneficios para los Empresarios',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Protección del nombre comercial a nivel nacional.',
            'Información nacional disponible, oportuna y actualizada.',
            'Menos trámites, menos costos, menos tiempo.',
            'Seguridad jurídica.',
            'Mayor número de centros de atención.',
            'Aporte a la trasparencia de los negocios, consultas de multas y sanciones de proponentes e inhabilidades, impedimentos y prohibiciones del registro mercantil.'
          ]
        },
        {
          tipo: 'parrafo',
          valor: 'Al Registro Único Empresarial (RUE) de que trata el artículo 11 de la Ley 590 de 2000, que integró el Registro Mercantil y el Registro Único de Proponentes, se incorporarán e integrarán los siguientes registros:'
        },
        {
          tipo: 'lista',
          valor: [
            'Registro de Entidades sin Ánimo de Lucro',
            'Registro Nacional Público de vendedores de Juegos de Suerte y Azar',
            'Registro Público de Veedurías Ciudadanas',
            'Registro Nacional de Turismo',
            'Registro de Entidades Extranjeras de Derecho Privado sin Ánimo de Lucro',
            'Registro de la Economía Solidaria'
          ]
        }, 
        {
          tipo: 'parrafo',
          valor: 'El Registro Único Empresarial y Social -RUES-, es administrado por las Cámaras de Comercio atendiendo a criterios de eficiencia, economía y buena fe, para brindar al Estado, a la sociedad en general, a los empresarios, a los contratistas, a las entidades de economía solidaria y a las entidades sin ánimo de lucro una herramienta confiable de información unificada tanto en el orden nacional como en el internacional.'
        }
      ]
    }
  ];
}
