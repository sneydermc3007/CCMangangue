import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";

interface GlossaryItem {
  term: string;
  definition: string;
  isExpanded?: boolean; 
}


@Component({
  selector: 'app-glosario',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './glosario.component.html',
  styleUrl: './glosario.component.scss'
})
export class GlosarioComponent {

  glossaryItems: GlossaryItem[] = [
    { term: 'ACTA', definition: 'Documento contentivo de lo sucedido y acordado en las reuniones de los socios, accionistas, miembros de la junta directiva de las sociedades y entidades sin ánimo de lucro.', isExpanded: false },
    { term: 'ACTA DE CONCILIACIÓN', definition: 'Es el documento que contiene el acuerdo conciliatorio y presta mérito ejecutivo y hace tránsito a cosa juzgada.', isExpanded: false },
    { term: 'AGENCIA', definition: 'Es una categoría de establecimientos de comercio, cuyos administradores carecen de poder para representarla (artículo 264 del Código de Comercio).', isExpanded: false },
    { term: 'ASAMBLEA DE ACCIONISTAS', definition: 'Máximo órgano social en las sociedades por acciones y entidades sin ánimo de lucro.', isExpanded: false },
    { term: 'ARBITRAJE', definition: 'Es un método alternativo de solución de conflictos (MASC) por medio del cual un tercero llamado árbitro o tribunal arbitral soluciona las controversias entre dos o más partes, por habilitación de ellas a través de un pacto arbitral.', isExpanded: false },
    { term: 'ASESORÍA GRUPAL', definition: 'Servicio prestado a más de un emprendedor o empresario con inquietudes o intereses comunes alrededor de una temática, para brindarles soluciones útiles.', isExpanded: false },
    { term: 'ASESORÍA INDIVIDUAL', definition: 'Es un servicio prestado de manera personalizada por profesionales que orientan al emprendedor o empresario en temas específicos de su actividad y proceso empresarial.', isExpanded: false },
    { term: 'CANDIDATO', definition: 'Persona que puede postularse para las elecciones de Junta Directiva o Revisor Fiscal.', isExpanded: false },
    { term: 'CÁMARAS DE COMERCIO', definition: 'Instituciones privadas, de carácter gremial, que cumplen por delegación legal funciones públicas delegadas por el estado.', isExpanded: false },
    { term: 'CAPITAL AUTORIZADO', definition: 'Cuantía fija que determina el tope máximo de capitalización de la sociedad.', isExpanded: false },
    { term: 'CAPITAL PAGADO', definition: 'Es la parte del capital suscrito que los accionistas efectivamente han pagado y que ha ingresado a la sociedad.', isExpanded: false },
    { term: 'CAPITAL SUSCRITO', definition: 'Es la parte del capital autorizado que los accionistas se comprometen a pagar a plazos.', isExpanded: false },
    { term: 'CENTROS DE ARBITRAJE Y CONCILIACIÓN', definition: 'Son instituciones que prestan a los árbitros y conciliadores los recursos logísticos, físicos, técnicos y financieros necesarios para el desarrollo de sus funciones. Son autorizados y vigilados por el Ministerio del Interior y de Justicia.', isExpanded: false },
    { term: 'CERTIFICADO TEXTUAL', definition: 'Herramienta mediante la cual las Cámaras de Comercio producen copias auténticas de los actos, contratos y documentos sujetos a registro.', isExpanded: false },
    { term: 'CERTIFICADO DE EXISTENCIA Y REPRESENTACIÓN LEGAL', definition: 'Aquel mediante el cual se acredita la inscripción del contrato social, reformas y nombramientos de administradores y representantes legales en la cámara de comercio con jurisdicción en el domicilio de la respectiva sociedad.', isExpanded: false },
    { term: 'CERTIFICADO DE INSCRIPCIÓN DE LIBROS DE COMERCIO', definition: 'Informan sobre los libros de contabilidad y las actas que haya registrado el comerciando, indicando en ellos el número y fecha de registro y el destino de cada libro.', isExpanded: false },
    { term: 'CERTIFICADO DE MATRÍCULA MERCANTIL', definition: 'Acreditan el cumplimiento de este requisito legal respecto del comerciante y de sus establecimientos de comercio e informan, entre otros aspectos, el nombre y número de matrícula de los establecimientos de la persona natural o jurídica.', isExpanded: false },
    { term: 'CERTIFICADOS HISTÓRICOS', definition: 'Se expiden a solicitud del interesado y de acuerdo a la información requerida que se encuentra contenida en los soportes documentales que reposan en los archivos.', isExpanded: false },
    { term: 'CERTIFICADO DEL REGISTRO ÚNICO DE PROPONENTES –RUP', definition: 'Documento que certifica la capacidad jurídica, financiera, organizacional de las personas que licitas o pretenden licitar con el estado.', isExpanded: false },
    { term: 'CÓDIGO CIIU', definition: 'Es la sigla que traduce Clasificación Industrial Internacional Uniforme y corresponde a la clasificación de las actividades económicas a nivel nacional.', isExpanded: false },
    { term: 'CONCILIACIÓN', definition: 'Es un mecanismo alternativo de solución de conflictos a través del cual, dos o más personas buscan por sí mismas la solución de sus diferencias, con la ayuda de un tercero neutral, denominado conciliador.', isExpanded: false },
    { term: 'CORPORACIÓN – ASOCIACIÓN', definition: 'Persona jurídica sin ánimo de lucro conformada por dos o más personas para realizar actividades altruistas que proporcionen bienestar a los asociados o a la comunidad en general.', isExpanded: false },
    { term: 'CLUSTER', definition: 'Concentración geográfica de empresas e instituciones relacionadas con un mismo negocio.', isExpanded: false },
    { term: 'COMITÉ DE AFILIADOS', definition: 'Decide las solicitudes de afiliación; determina el censo electoral y dispone su actualización y depuración, cuando a ello hubiere lugar; desafilia a quienes incurran en cualquier causal de desafiliación y cumple o ejecuta las instrucciones, órdenes o decisiones de la SIC.', isExpanded: false },
    { term: 'COMPETITIVIDAD', definition: 'Está dada por el mayor nivel de productividad que las empresas alcanzan en una región determinada. Se necesita innovación para alcanzar mayores niveles de productividad.', isExpanded: false },
    { term: 'CONCILIACIÓN', definition: 'Es una herramienta para solucionar conflictos en la cual un tercero experto llamado conciliador interviene en el conflicto para que las partes lleguen a un acuerdo que le ponga fin.', isExpanded: false },
    { term: 'CONCILIADOR', definition: 'Es la persona calificada que actúa habilitada por las partes para facilitar el diálogo entre ellas y promover fórmulas de acuerdo que permitan llegar a soluciones satisfactorias para ambas partes que pongan fin al conflicto.', isExpanded: false },
    { term: 'CONFLICTO', definition: 'Situación, natural al ser humano, en la que dos o más personas se encuentran en desacuerdo sobre un asunto o hecho, propiciando oposición y/o confrontación entre ellas.', isExpanded: false },
    { term: 'CONVOCADA', definition: 'En el procedimiento arbitral, es la parte demandada. En la conciliación, es la parte que es requerida para que participe en la misma.', isExpanded: false },
    { term: 'CONVOCANTE', definition: 'Es la parte que en el procedimiento arbitral solicita la constitución del tribunal arbitral y presenta la demanda. En la conciliación, es la parte que la solicita.', isExpanded: false },
    { term: 'DESARROLLO', definition: 'Es el resultado de la investigación o de cualquier otro tipo de conocimiento científico para la fabricación de nuevos productos, procesos, sistemas de producción, o para generar mejoras tecnológicas sustanciales, generando prototipos o plantas piloto.', isExpanded: false },
    { term: 'DESISTIBLE', definition: 'Son todos aquellos asuntos susceptibles de renuncia o que permiten no iniciar o desistir de continuar un proceso jurídico.', isExpanded: false },
    { term: 'EMPRESA ASOCIATIVA DE TRABAJO', definition: 'Es una organización económica productiva, donde los asociados aportan su capacidad laboral por tiempo indefinido y algunos aportan alguna destreza tecnológica o de conocimiento necesario para el cumplimiento de los objetivos de la empresa.', isExpanded: false },
    { term: 'EMPRESA UNIPERSONAL', definition: 'Persona jurídica conformada por una persona natural o jurídica la cual destina parte de sus activos a la realización de una o varias actividades de carácter empresarial.', isExpanded: false },
    { term: 'ENCUESTA', definition: 'Estudio que se realiza mediante la recolección datos a través de un cuestionario previamente diseñado.', isExpanded: false },
    { term: 'ESTABLECIMIENTO DE COMERCIO', definition: 'Es el un conjunto de bienes organizados por el empresario para realizar los fines de la empresa.', isExpanded: false },
    { term: 'ESTANDARIZACIÓN', definition: 'Pautas que se establecen para que un elemento, producto, conocimiento o forma de pensar sea igual a los demás garantizando la calidad y homogeneidad de los procesos y resultados, la seguridad de su funcionamiento y un desarrollo con responsabilidad social.', isExpanded: false },
    { term: 'FORMALIZACIÓN EMPRESARIAL', definition: 'El 29 de diciembre de 2010, el Gobierno Nacional promulgó la ley 1429, o Ley de Formalización y Generación de Empleo, que brinda beneficios e incentivos a los empresarios para disminuir los costos de formalizarse y apoyarlos en el crecimiento de sus negocios.', isExpanded: false },
    { term: 'FORMULARIO RUES', definition: 'Conjunto de información requerida para los registros administrados por las cámaras de comercio.', isExpanded: false },
    { term: 'FORTALECIMIENTO EMPRESARIAL', definition: 'Estrategias dirigidas al aumento de las capacidades de la empresa, para desarrollar una mejor respuesta en las demandas del mercado.', isExpanded: false },
    { term: 'HOMONIMIA', definition: 'Consiste en confirmar que el nombre a usar para la nueva empresa, no ha sido registrado previamente.', isExpanded: false },
    { term: 'IMPUESTO DE REGISTRO', definition: 'Tributo de carácter departamental de la Gobernación de Bolívar sobre los actos y documentos sujetos a este impuesto.', isExpanded: false },
    { term: 'FORTALECIMIENTO EMPRESARIAL', definition: 'Estrategias dirigidas al aumento de las capacidades de la empresa, para desarrollar una mejor respuesta en las demandas del mercado.', isExpanded: false },
    { term: 'HOMONIMIA', definition: 'Consiste en confirmar que el nombre a usar para la nueva empresa, no ha sido registrado previamente.', isExpanded: false },
    { term: 'IMPUESTO DE REGISTRO', definition: 'Tributo de carácter departamental de la Gobernación de Bolívar sobre los actos y documentos sujetos a este impuesto.', isExpanded: false },
    { term: 'INTERNACIONALIZACIÓN', definition: 'Apoyo a los empresarios en su proceso de internacionalización, dándoles a conocer los conceptos básicos así como los pasos críticos a considerar durante una ruta exportadora.', isExpanded: false },
    { term: 'INVESTIGACIÓN', definition: 'Corresponde a la indagación original planificada que genera nuevos conocimientos.', isExpanded: false },
    { term: 'JUNTA DE SOCIOS', definition: 'Máximo órgano de las sociedades de personas.', isExpanded: false },
    { term: 'JUNTA DIRECTIVA', definition: 'Órgano de administración.', isExpanded: false },
    { term: 'Limitada (LTDA)', definition: 'Persona Jurídica constituida mediante escritura pública entre mínimo dos socios y máximo veinticinco, quienes responden por sus aportes.', isExpanded: false },
    { term: 'LIBRO DE ACTAS DEL MÁXIMO ÓRGANO', definition: 'Contiene las anotaciones cronológicas de lo que sucede en las reuniones ordinarias y extraordinarias en las sociedades y entidades sin ánimo de lucro.', isExpanded: false },
    { term: 'LIBRO DE REGISTRO DE SOCIOS, ACCIONISTAS O ASOCIADOS', definition: 'Da cuenta de la información relacionada con los socios o asociados de la entidad según la denominación establecida en los estatutos para las personas que integran el máximo órgano.', isExpanded: false },
    { term: 'MATRÍCULA MERCANTIL', definition: 'Es el registro público de los comerciantes y de los establecimientos de comercio en el Registro Mercantil de la Cámara de Comercio del domicilio del comerciante o del lugar donde se encuentre ubicado el establecimiento.', isExpanded: false },
    { term: 'MESAS DE COMPETITIVIDAD', definition: 'Instancia de coordinación público-privada orientada a la coordinación, promoción e impulso de la competitividad, el desarrollo económico y la descentralización de las políticas económico-productivas de un territorio, mediante la concertación y articulación del sector público, el sector privado y la sociedad civil.', isExpanded: false },
    { term: 'MODELO DE SERVICIOS EMPRESARIALES', definition: 'Es el apoyo a la creación, formalización y fortalecimiento de empresas de la Región.', isExpanded: false },
    { term: 'MODIFICACIÓN RAZÓN SOCIAL', definition: 'Cambio del nombre de la sociedad de personas.', isExpanded: false },
    { term: 'NORMAS DE CALIDAD', definition: 'Documento que se proporciona para un uso común; contiene una serie de reglas, directrices o características para el desarrollo de las actividades de calidad y sus resultados, con el fin de conseguir un grado óptimo de orden en el contexto de la calidad.', isExpanded: false },
    { term: 'NÚMERO DE IDENTIFICACIÓN TRIBUTARIA (NIT)', definition: 'Número de Identificación Tributaria que asigna la DIAN por una sola vez cuando el obligado se inscribe en el RUT.', isExpanded: false },
    { term: 'PACTO ARBITRAL', definition: 'El pacto arbitral es el acuerdo por medio del cual las partes manifiestan la voluntad de resolver sus conflictos a través de un tribunal arbitral, abandonando así la posibilidad de acudir a la jurisdicción ordinaria.', isExpanded: false },
    { term: 'PERSONA JURÍDICA', definition: 'Es una entidad con derechos y obligaciones que existe creada por una o más personas físicas para cumplir un objetivo social que puede ser con o sin ánimo de lucro.', isExpanded: false },
    { term: 'PERSONA NATURAL', definition: 'Persona física que por sí misma, realiza actividades mercantiles respaldadas con su patrimonio personal, de manera pública y profesional.', isExpanded: false },
    { term: 'REGISTRO DE ENTIDADES SIN ÁNIMO DE LUCRO (ESAL)', definition: 'Es el registro de las personas jurídicas que tienen propósitos altruistas o de cooperación en favor de sus asociados, de terceros o de la comunidad en general. Deben renovar anualmente su inscripción y actualizar su información entre el primero de enero y el 31 de marzo.', isExpanded: false },
    { term: 'REGISTRO MERCANTIL', definition: 'Tiene por objeto llevar las inscripciones de las matrículas de los comerciantes, sus establecimientos de comercio así como la inscripción de todos los actos, libros y documentos respecto de los cuales la Ley exigiera la capacidad del registro.', isExpanded: false },
    { term: 'REGISTRO NACIONAL DE TURISMO (RNT)', definition: 'Es un registro en el que deben inscribirse los prestadores de servicios turísticos que operen en Colombia y que es obligatorio para su funcionamiento.', isExpanded: false },
    { term: 'REGISTRO ÚNICO EMPRESARIAL Y SOCIAL (RUES)', definition: 'Plataforma nacional administrada por Confecámaras que integra los registros públicos delegados a las cámaras de comercio del país.', isExpanded: false },
    { term: 'REGISTRO ÚNICO DE PROPONENTES (RUP)', definition: 'Es un registro que habilita a las personas naturales o jurídicas, nacionales o extranjeras, con domicilio o sucursal en Colombia, para participar en licitaciones y celebrar contratos con el Estado.', isExpanded: false },
    { term: 'REGISTRO ÚNICO TRIBUTARIO (RUT)', definition: 'Forma de identificar y clasificar las personas naturales y jurídicas sujetas de obligaciones con la Dirección de Impuestos y Aduanas Nacionales –DIAN.', isExpanded: false },
    { term: 'RENOVACIÓN DE LA MATRÍCULA MERCANTIL', definition: 'Obligación legal que debe cumplirse entre el primero de enero y el 31 de marzo. De no hacerlo, genera sanciones económicas que pueden ser impuestas por la Superintendencia de Industria y Comercio, de conformidad con el artículo 30 de la Ley 1727 de 2014.', isExpanded: false },
    { term: 'REPRESENTANTE LEGAL', definition: 'Persona con facultades otorgadas por la ley para obrar en nombre de otra.', isExpanded: false },
    { term: 'REVISOR FISCAL', definition: 'Figura externa (debe ser contador público), que vigila de forma permanente a los órganos de administración y representación por interés de los socios, del Estado y de la comunidad en general. Es obligatorio en las sociedades anónimas, en comandita por acciones y en las sucursales de sociedad extranjera.', isExpanded: false },
    { term: 'SISTEMA PREVENTIVO DE FRAUDES – SIPREF', definition: 'Herramienta que tiene como fin proteger la información de los registros públicos administrados por las cámaras y evitar que sea modificada por terceros. Le permite al titular registral controlar los cambios en la información de su registro y en caso de que la información no corresponda a su empresa o entidad sin ánimo de lucro, reportarlo de manera inmediata a la Cámara para evitar su modificación.', isExpanded: false },
    { term: 'SEGMENTACIÓN DE LA POBLACIÓN', definition: 'Selección y agrupación de una parte de la población, con base en criterios de comportamiento, gusto, necesidades, potencialidades y motivaciones similares según el objetivo que se pretende alcanzar o la necesidad que se desea satisfacer.', isExpanded: false },
    { term: 'SUCURSAL', definition: 'Es una categoría de Establecimiento de comercio abierto por una sociedad, dentro o fuera de su domicilio, para el desarrollo de los negocios sociales o parte de ellos, administrados por mandatarios con facultades para representar a la sociedad (artículo 263 del Código de Comercio).', isExpanded: false },
    { term: 'SEMINARIOS', definition: 'Es un espacio donde se presentan temáticas empresariales de interés general o sectorial. Los seminarios son servicios eventuales y no cuentan con un contenido fijo respecto a su tema.', isExpanded: false },
    { term: 'SERVICIO DE ACOMPAÑAMIENTO', definition: 'Servicio para emprendedores y empresarios que de acuerdo con sus necesidades requieren asesoría y acompañamiento en la construcción y ejecución de su ruta de servicios.', isExpanded: false },
    { term: 'SERVICIOS DE APRENDIZAJE', definition: 'Son servicios con un enfoque práctico, basado en la metodología de aprender haciendo, en la que los emprendedores y empresarios encuentran respuestas concretas y soluciones reales a sus necesidades.', isExpanded: false },
    { term: 'SERVICIOS DE ASESORÍA', definition: 'En este tipo de servicios se contempla la orientación de servicios, solución de dudas sobre temáticas empresariales, consultoría especializada y asistencia técnica.', isExpanded: false },
    { term: 'SERVICIOS DE INFORMACIÓN', definition: 'Su propósito es facilitar a los emprendedores y empresarios herramientas, bases de datos, estudios e investigaciones y, en general, información comercial o empresarial necesaria para apoyar su gestión empresarial.', isExpanded: false },
    { term: 'SERVICIOS EMPRESARIALES', definition: 'Son los insumos fundamentales y las herramientas de apoyo para la efectiva prestación de servicios, de acuerdo con las necesidades y expectativas de los emprendedores y empresarios.', isExpanded: false },
    { term: 'SUFRAGANTE', definition: 'Persona que puede votar en las elecciones de Junta Directiva y Revisoría Fiscal de la Cámara de Comercio de Magangué.', isExpanded: false },
    { term: 'SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO (SIC)', definition: 'Es un organismo de carácter técnico, cuya actividad está orientada a fortalecer los procesos de desarrollo empresarial y los niveles de satisfacción del consumidor colombiano.', isExpanded: false },
    { term: 'TALLERES', definition: 'Modalidad de aprendizaje de gran utilidad para los emprendedores y empresarios, cuando es necesario profundizar en un tema. Se realizan ejercicios para resolver inquietudes o desarrollar sus competencias.', isExpanded: false },
    { term: 'TRIBUNAL ARBITRAL', definition: 'Es el órgano compuesto por uno o tres árbitros que actuará como juez y dirimirá la controversia surgida entre las partes.', isExpanded: false },
    { term: 'USOS DEL SUELO', definition: 'Son los diferentes usos que el hombre puede hacer de la tierra, con base en su estudio y los procesos que llevan a determinar el más conveniente en un espacio concreto. Los usos del suelo son determinados y reglamentados administrativamente, a través de los planes de ordenamiento territorial de cada municipio.', isExpanded: false }
  ];
  

  toggleItem(item: GlossaryItem) {
    item.isExpanded = !item.isExpanded;
  }
}
