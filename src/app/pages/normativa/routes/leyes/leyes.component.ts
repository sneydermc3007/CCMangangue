import { Component } from '@angular/core';

import { TimelineModule } from 'primeng/timeline';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-leyes',
  standalone: true,
  imports: [
    TimelineModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    SharedModule
  ],
  templateUrl: './leyes.component.html',
  styleUrl: './leyes.component.scss'
})
export class LeyesComponent {

  public tabs: any[] = [
    { header: 'Leyes',  contenido: [
      { 
        year: '2019',  color: '#9C27B0', items: [
          { titulo: 'LEY 1955 DE 2019', descripcion: 'Por el cual se expide el Plan Nacional de Desarrollo 2018-2022 “Pacto por Colombia, Pacto por la Equidad.”' },
          { titulo: 'DECRETO 957 DE 2019', descripcion: '“por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011” (Criterios de Clasificación para micros, mediana y grandes empresas).' },
          { titulo: 'RESOLUCION 2404 DE 2019', descripcion: 'Por medio de la cual se adopta la Batería de Instrumentos para la Evaluación de Factores de Riesgo Psicosocial, la Guía técnica para la promoción, prevención e intervención de los factores psicosociales y sus efectos en la población trabajadora.' }
        ]
      },
      { 
        year: '2020', color: '#673AB7', items: [
          { titulo: 'CIRCULAR 0017 DE 2020', descripcion: 'Lineamientos Mínimos a Implementar de Promoción y Prevención para la Preparación, Respuesta y Atención de casos de Enfermedad por COVID-19 (Anteriormente llamado Coronavirus).' },
          { titulo: 'Decreto 417 de 2020', descripcion: 'Por el cual se declara un Estado de Emergencia Económica, Social y Ecológica en todo el territorio nacional.' },
          { titulo: 'CIRCULAR 021 DE 2020', descripcion: 'Medidas de Protección al Empleo con Ocasión a la Fase de Contención de COVID-19 y de la Declaración de la Emergencia Sanitaria.' },
          { titulo: 'DECRETO 420 DE 2020', descripcion: 'Por el cual se imparten instrucciones para expedir normas en materia de orden público en virtud de la emergencia sanitaria generada por la pandemia de COVID-19.' },
          { titulo: 'CIRCULAR 022 DE 2020', descripcion: 'Fiscalización Laboral Rigurosa a las decisiones laborales de los empleadores durante la Emergencia Sanitaria.' },
          { titulo: 'DECRETO 457 DE 2020', descripcion: 'Por el cual se imparten instrucciones en virtud de la emergencia sanitaria generada por la pandemia del Coronavirus COVID-19 y el mantenimiento del orden público.' },
          { titulo: 'DECRETO 488 DE 2020', descripcion: 'Por el cual se dictan medidas de orden laboral, dentro del Estado de Emergencia Económica, Social y Ecológica.' },
          { titulo: 'RESOLUCION 0666 DE 2020', descripcion: 'Por medio del cual se adoptan las medidas para implementar el protocolo general de bioseguridad para mitigar, controlar y realizar el adecuado manejo de la pandemia del Covid-19.' },
          { titulo: 'DECRETO 165 DE 2020', descripcion: 'Por medio del cual se establecen medidas de orden público en virtud de la emergencia sanitaria ocasionada por coronavirus Covid-19, y se declara el toque de queda en el municipio.' },
          { titulo: 'DECRETO 749 DE 2020', descripcion: 'Se imparten instrucciones en virtud de la emergencia sanitaria generada por la pandemia del Coronavirus COVID-19, y el mantenimiento del orden público.' },
          { titulo: 'CIRCULAR 1381 DE 2020', descripcion: 'Recomendaciones para la prestación de los servicios registrales de forma presencial en las Cámaras de Comercio.' },
          { titulo: 'CIRCULAR 002 DE 2020', descripcion: 'Se dictan disposiciones para la salida de los ciudadanos en el municipio de Magangué a la hora de realizar compras a establecimientos comerciales.' },
          { titulo: 'DECRETO 129 DE 2020', descripcion: 'Por medio del cual se expiden medidas de restricción, en aras de garantizar el aislamiento preventivo obligatorio en el municipio de Majagual – Sucre.' },
          { titulo: 'DECRETO 001 DE 2020', descripcion: 'Por medio del cual se adoptan medidas y acciones sanitarias en el distrito de Santa Cruz de Mompox con ocasión de la Declaratoria de Emergencia Sanitaria por Causa del Coronavirus COVID-19.' },
          { titulo: 'DECRETO 236 DE 2020', descripcion: 'Por medio del cual se establecen medidas de orden público en virtud de la emergencia sanitaria ocasionada por coronavirus Covid-19, y se declara el toque de queda y se dictan otras disposiciones.' },
          { titulo: 'DECRETO 071 DE 2020', descripcion: 'Por Medio Del Cual Se Adoptan Medidas Transitorias Para La Prevención Y Contención Del Coronavirus Covid-19 En El Municipio De San Martin De Loba – Bolívar, Se Modifica El Horario Y Atención Al Público Y Se Toman Otras Determinaciones.' },
          { titulo: 'DECRETO 001 DE 2020', descripcion: 'Por medio del cual se adoptan medidas y acciones sanitarias en el distrito de Santa Cruz de Mompox con ocasión de la Declaratoria de Emergencia Sanitaria por Causa del Coronavirus COVID-19 con base en la directriz emitida por el Presidente de la República y el Ministerio de Salud y se dictan otras disposiciones.' },
          { titulo: 'DECRETO 1168 DE 2020', descripcion: 'Por el cual se imparten instrucciones en virtud de la emergencia sanitaria generada por la pandemia del Coronavirus COVID – 19, y el mantenimiento del orden público y se decreta el aislamiento selectivo con distanciamiento individual responsable.' },
          { titulo: 'CIRCULAR 0063 DE 2020', descripcion: 'Se dictan disposiciones y renovaciones conforme a la capacitación virtual de carácter gratuito en el SG-SST, especialmente a los responsables de liderar dicho Sistema de Gestión.' },
          { titulo: 'CIRCULAR 0064 DE 2020', descripcion: 'Se establecen acciones mínimas para el retorno de actividades laborales sin afectar las condiciones de salud mental de los trabajadores, en el numeral 5 se especifica la adopción de la batería Psicosocial de manera virtual, aprovechando los canales de virtualización para reducir los niveles de exposición por contagio por Covid-19.' },
          { titulo: 'DECRETO 1462 DE 2020', descripcion: 'Por la cual se prorroga la emergencia sanitaria por el nuevo Coronavirus que causa la Covid-19.' }
        ]
      },
      { 
        year: '2021',  color: '#FF9800', items: [
          { titulo: 'RESOLUCION 0223 DE 2021', descripcion: 'Por medio del cual se modifica la Resolución 0666 de 2020 en el sentido de sustituir su anexo técnico.' },
          { titulo: 'LEY 2088 DE 2021', descripcion: 'Por la cual se regula el trabajo en casa y se dictan otras disposiciones.' },
          { titulo: 'DECRETO 1756 DE 2021', descripcion: 'Por el cual se adiciona la sección 2 al capítulo 46 del Libro 2 Parte 2 Título 2 del Decreto 1074 de 2015, Decreto único Reglamentario del Sector Comercio, Industria y Turismo.' },
          { titulo: 'DECRETO 358 DE 2021', descripcion: 'Por el cual se reglamentan varios artículos del Estatuto Tributario y otras leyes relacionadas con materia tributaria.' },
          { titulo: 'DECRETO 1349 DE 2021', descripcion: 'Por el cual se adiciona un capítulo al Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, referente a la circulación de la factura electrónica como título valor y se dictan otras disposiciones.' },
          { titulo: 'DECRETO 676 DE 2021', descripcion: 'Por el cual se incorpora una enfermedad directa a la tabla de enfermedades laborales y se dictan otras disposiciones.' },
          { titulo: 'RESOLUCION 777 DE 2021', descripcion: 'Por medio de la cual se definen los criterios y condiciones para el desarrollo de actividades económicas y sociales y se adopta el protocolo de bioseguridad correspondiente.' },
          { titulo: 'Ley 24 de 1878', descripcion: 'Sobre cámaras, Tribunales y procedimientos de comercio.' },
          { titulo: 'Ley 57 1887', descripcion: 'Código civil colombiano.' },
          { titulo: 'Ley 111 de 1890', descripcion: 'Por la cual se autoriza al gobierno para la creación de Cámaras de comercio.' },
          { titulo: 'Ley 28 1931', descripcion: 'Por la cual se decreta que las Cámaras de Comercio deben fomentar el desarrollo comercial, industrial, agrícola y turístico.' },
          { titulo: 'Ley 42 1993', descripcion: 'Incluye disposiciones de control fiscal y referencias a varias sentencias y circulares de la Contraloría.' },
          { titulo: 'Ley 87 1993', descripcion: 'Por la cual se establecen normas para el ejercicio del control interno en entidades estatales.' },
          { titulo: 'Ley 190 1995', descripcion: 'Normas para preservar la moralidad en la Administración Pública y erradicar la corrupción.' },
          { titulo: 'Ley 222 1995', descripcion: 'Por la cual se modifica el Código de Comercio, establece un régimen de procesos concursales y otras disposiciones.' },
          { titulo: 'Ley 223 de 1995', descripcion: 'Normas sobre racionalización tributaria y otras disposiciones.' },
          { titulo: 'Ley 489 1998', descripcion: 'Normas sobre organización y funcionamiento de entidades del orden nacional.' },
          { titulo: 'Ley 590 2000', descripcion: 'Disposiciones para promover el desarrollo de micro, pequeñas y medianas empresas.' },
          { titulo: 'Ley 594 2000', descripcion: 'Ley general de archivos y otras disposiciones.' },
          { titulo: 'Ley 599 2000', descripcion: 'Código Penal Colombiano.' },
          { titulo: 'Ley 610 2000', descripcion: 'Establece el trámite de procesos de responsabilidad fiscal de competencia de las contralorías.' },
          { titulo: 'Ley 643 2001', descripcion: 'Régimen del monopolio rentístico de juegos de suerte y azar.' },
          { titulo: 'Ley 678 2001', descripcion: 'Reglamenta la responsabilidad patrimonial de los agentes del Estado.' },
          { titulo: 'Ley 788 2002', descripcion: 'Normas en materia tributaria y penal del orden nacional y territorial.' },
          { titulo: 'Ley 828 2003', descripcion: 'Normas para el control de evasión del sistema de seguridad social.' },
          { titulo: 'Ley 850 2003', descripcion: 'Reglamenta las veedurías ciudadanas.' },
          { titulo: 'Ley 905 2004', descripcion: 'Modifica la Ley 590 de 2000 sobre promoción de micro, pequeñas y medianas empresas.' },
          { titulo: 'Ley 962 2005', descripcion: 'Disposiciones sobre racionalización de trámites y procedimientos administrativos.' },
          { titulo: 'Ley 1116 2006', descripcion: 'Régimen de insolvencia empresarial en Colombia.' },
          { titulo: 'Ley 1150 2007', descripcion: 'Medidas para eficiencia y transparencia en contratación con recursos públicos.' },
          { titulo: 'Ley 1429 2010', descripcion: 'Ley de formalización y generación de empleo.' },
          { titulo: 'Ley 1437 2011', descripcion: 'Código de procedimiento administrativo y contencioso administrativo.' },
          { titulo: 'Ley 1474 2011', descripcion: 'Normas para fortalecer la prevención y sanción de actos de corrupción.' },
          { titulo: 'Ley 1564 2012', descripcion: 'Código General del Proceso y otras disposiciones.' },
          { titulo: 'Ley 1581 2012', descripcion: 'Disposiciones generales para la protección de datos personales.' },
          { titulo: 'Ley 1607 2012', descripcion: 'Normas en materia tributaria.' },
          { titulo: 'Ley 1712 2014', descripcion: 'Ley de transparencia y derecho de acceso a la información pública.' },
          { titulo: 'Ley 1727 2014', descripcion: 'Reforma del código de comercio y fortalecimiento de cámaras de comercio.' },
          { titulo: 'Ley 1753 2015', descripcion: 'Plan Nacional de Desarrollo 2014-2018.' },
          { titulo: 'Ley 1755 2015', descripcion: 'Regula el derecho fundamental de petición.' },
          { titulo: 'Ley 1757 2015', descripcion: 'Disposiciones en promoción y protección del derecho a la participación.' },
          { titulo: 'Ley 1778 2016', descripcion: 'Normas sobre responsabilidad por actos de corrupción transnacional.' },
          { titulo: 'Normatividad Archivística', descripcion: 'Normatividad en archivística publicada.' },
          { titulo: 'Normatividad Archivística II', descripcion: 'Normatividad archivística adicional publicada.' }
        ]
      },
    ]},
    { header: 'Decretos', contenido: [
      { titulo: 'Decreto Nª 706 del 1904', descripcion: 'Por el cual se reforma el número 62 de 1891 en desarrollo de la ley 111 de 1890.' },
      { titulo: 'Decreto 586 de 1920', descripcion: 'Por el cual se reorganizan las Cámaras de comercio.' },
      { titulo: 'Decreto 1745 del 29 de Mayo de 1986', descripcion: 'Por el cual se crea la Cámara de Comercio de Arauca.' },
      { titulo: 'Decreto 695 de 1972', descripcion: 'Por el cual el presidente de la República de Colombia en uso de sus facultades constitucionales y legales.' },
      { titulo: 'Decreto 1520 de 1978', descripcion: 'Por el cual se reglamenta el Título VI del libro primero del Código de comercio y se dictan otras disposiciones reglamentarias del decreto-ley 149 de 1976.' },
      { titulo: 'Decreto 410 de 1979', descripcion: 'Código de comercio de Colombia.' },
      { titulo: 'Decreto 2150 de 1995', descripcion: 'Por el cual se suprimen y reforman regulaciones, procedimientos o trámites innecesarios existentes en la Administración Pública.' },
      { titulo: 'Decreto 782 de 1996', descripcion: 'Por el cual se reglamenta parcialmente la ley 223 de 1995.' },
      { titulo: 'Decreto 4567 de 2011', descripcion: 'Por el cual se reglamenta parcialmente la Ley 909 de 2004 y Decreto-ley 770 de 2005.' },
      { titulo: 'Decreto 4632 de 2011', descripcion: 'Por medio del cual se reglamenta parcialmente la ley 1474 de 2011 en lo que se refiere a la Comisión Nacional para la Moralización y la Comisión Nacional Ciudadana para la Lucha contra la Corrupción y se dictan otras disposiciones.' },
      { titulo: 'Decreto 019 de 2012', descripcion: 'Por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública.' },
      { titulo: 'Decreto 1377 de 2013', descripcion: 'Por el cual se reglamenta parcialmente la Ley 1581 de 2012.' },
      { titulo: 'Decreto 3035 de 2013', descripcion: 'Por el cual se reglamentan normas orgánicas del presupuesto.' },
      { titulo: 'Decreto 222 de 2014', descripcion: 'Por el cual se corrigen yerros en el texto de la Ley 1673 de 2013.' },
      { titulo: 'Decreto 1293 de 2014', descripcion: 'Por el cual se modifica el Decreto 503 de 1997 y se dictan otras disposiciones.' },
      { titulo: 'Decreto 1298 de 2014', descripcion: 'Por el cual se modifica el artículo 10 del Decreto 3035 de 2013.' },
      { titulo: 'Decreto 1649 de 2014', descripcion: 'Por el cual se modifica la estructura del Departamento Administrativo de la Presidencia de la República.' },
      { titulo: 'Decreto 2042 de 2014', descripcion: 'Por el cual se reglamenta la Ley 1727 de 2014, el título VI del libro primero del Código de Comercio y se dictan otras disposiciones.' },
      { titulo: 'Decreto 103 de 2015', descripcion: 'Por el cual se reglamenta parcialmente la Ley 1712 de 2014 y se dictan otras disposiciones.' },
      { titulo: 'Decreto 1069 de 2015', descripcion: 'Incorpora modificaciones al decreto único reglamentario del sector justicia y del derecho.' },
      { titulo: 'Decreto 1074 de 2015', descripcion: 'Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.' },
      { titulo: 'Decreto 1082 de 2015', descripcion: 'Por medio del cual se expide el Decreto Único Reglamentario del Sector Administrativo de Planeación Nacional.' },
      { titulo: 'Decreto 1083 de 2015', descripcion: 'Por medio del cual se expide el Decreto Único Reglamentario del Sector de Función Pública.' },
      { titulo: 'Decreto 1494 de 2015', descripcion: 'Por el cual se corrigen yerros en la Ley 1712 de 2014.' },
      { titulo: 'Decreto 1523 de 2015', descripcion: 'Por medio del cual se reglamenta el artículo 14 de la Ley 1340 de 2009 y se modifica el Capítulo 29 del Decreto 1074 de 2015.' },
      { titulo: 'Decreto 1166 de 2016', descripcion: 'Por el cual se adiciona el capítulo 12 al Decreto 1069 de 2015, relacionado con peticiones presentadas verbalmente.' },
      { titulo: 'Decreto 889 de 2017', descripcion: 'Por el cual se establecen medidas e instrumentos para la reincorporación económica y social de los integrantes de las FARC-EP.' },
      { titulo: 'Decreto N° 857 de 2017', descripcion: 'Por el cual se modifica el artículo 2.2.2.45.55 del Decreto 1074 de 2015.' },
      { titulo: 'Código sustantivo de trabajo', descripcion: 'Decreto 2663 y 3743 de 1950, adoptados en la ley 141 de 1961.' },
      { titulo: 'Decreto Nª 405 del 2019', descripcion: 'Por el cual se nombra un miembro principal en la Junta Directiva de la Cámara de Comercio de Valledupar para el Valle del Río Cesar.' },
      { titulo: 'Decreto 933 de 2003', descripcion: 'Por medio del cual se reglamenta el Contrato de Aprendizaje y se dictan otras disposiciones.' },
      { titulo: 'Decreto 2063 del 01 de noviembre de 2018', descripcion: 'Por el cual se modifican varios artículos del Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.' }
    ]},
    { header: 'Conceptos', contenido: [
      { titulo: 'Conceptos de la Ley 80 de 1993', descripcion: 'Las cámaras de comercio no están sujetas a la ley 80 de 1993 que establece el régimen de contratación administrativa.' },
      { titulo: 'Concepto de Ley 1308 de 2000 – Consejo de estado', descripcion: 'Por medio del cual se publica el concepto de la ley 1308 de 2000.' },
      { titulo: 'Concepto de Decreto 899 de 2017', descripcion: 'Por medio del cual se publica la circular N° 1226.' },
      { titulo: 'Concepto de superintendencia de industria y comercio', descripcion: 'Funciones de la dirección de inspección y vigilancia para la prestación de servicios de salud.' },
      { titulo: 'Concepto de superintendencia de industria y comercio', descripcion: 'Las personas jurídicas sin ánimo de lucro pueden entregar en dación de pago parte de sus activos, bienes muebles e inmuebles.' },
      { titulo: 'Concepto de Superintendencia de Industria y Comercio', descripcion: 'Obligación de matricular el establecimiento.' },
      { titulo: 'Contrato de Aprendizaje SENA', descripcion: 'Instructivo preguntas y respuestas más frecuentes del Contrato de Aprendizaje.' },
      { titulo: 'Concepto de superintendencia de industria y comercio', descripcion: 'Obligación del comerciante a renovar su matrícula mercantil anualmente.' },
      { titulo: 'Concepto de Registro Nacional de bases de datos', descripcion: 'Por medio de la presente publicamos el concepto de Registro nacional de bases de datos.' },
      { titulo: 'Concepto SIC – RUP', descripcion: 'Por medio del cual se responde si es posible que las cámaras de comercio se registren como proponentes para contratar con el estado.' },
      { titulo: 'Concepto de exclusión de accionista en sociedad por acciones simplificada', descripcion: 'Por medio del cual se publica el concepto de exclusión de accionista en sociedad por acciones simplificada.' },
      { titulo: 'Concepto de Código Nacional de Policía En las Actividades Económicas', descripcion: 'El Código de Policía contiene disposiciones con efecto directo en el control de las actividades comerciales, generando nuevas interacciones con la actividad registral de las Cámaras de Comercio.' },
      { titulo: 'Concepto de superintendencia de industria y comercio', descripcion: 'Por medio de la presente se publica el concepto de superintendencia de industria y comercio.' }
    ]},
    { header: 'Resoluciones Generales', contenido: [
      { titulo: 'Resolución No 3546 de 2018', descripcion: 'La Secretaria General Encargada del Empleo de Ministra del Trabajo, en ejercicio de las facultades constitucionales y legales, en especial las conferidas por los numerales 2°, 3°, 5°, 6° y 13 del artículo 6° del Decreto-ley 4108 de 2011 y en desarrollo de lo previsto en los artículos 15, 16 y 17 de la Ley 1780 de 2016.' },
      { titulo: 'Resolución 8934 2014 SIC', descripcion: 'Por la cual se establecen las directrices en materia de gestión documental y organización de archivos que deben cumplir los vigilados por superintendencia de industria y comercio.' },
      { titulo: 'Resolución 16771 2014', descripcion: 'Por la cual se autoriza una modificación en el Formulario del Registro Único Empresarial y Social (RUES) y en el esquema gráfico del certificado del Registro Único de Proponentes (RUP).' },
      { titulo: 'Resolución 3564 2015', descripcion: 'Por la cual se reglamentan los artículos 2.1 1.2.1.1, 2.1.1.2.1.11, 2.1.2.1.1.2.2.2 y el parágrafo 2 del artículo 2.1.1.3.1.1 del Decreto N° 1081 de 2015.' }
    ]}
  ]
}
