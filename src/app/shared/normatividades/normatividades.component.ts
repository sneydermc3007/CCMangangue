import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-normatividades',
  templateUrl: './normatividades.component.html',
  styleUrl: './normatividades.component.scss'
})
export class NormatividadesComponent {
  public title: string = '';
  public leyes: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const categoria = this.route.snapshot.paramMap.get('categoria');
    this.cargarLeyes(categoria);
  }

  cargarLeyes(categoria: string | null) {
    if (categoria === 'registro-mercantil') {
      this.title = 'Normatividad de Registro Mercantil';
      this.leyes = [
        { titulo: 'Ley 1780 de 2016', descripcion: 'Por medio de la cual se promueve el empleo y el emprendimiento juvenil, se generan medidas para superar barreras de acceso al mercado de trabajo y se dictan otras disposiciones.' },
        { titulo: 'Decreto 19 de 2012', descripcion: 'Por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública.' },
        { titulo: 'Ley 1258 de 2008', descripcion: 'Por medio de la cual se crea la Sociedad por Acciones Simplificada.' },
        { titulo: 'Ley 1116 de 2006', descripcion: 'Por la cual se establece el Régimen de Insolvencia Empresarial en la República de Colombia y se dictan otras disposiciones.' },
        { titulo: 'Ley 1014 de 2006', descripcion: 'De fomento a la cultura del emprendimiento.' },
        { titulo: 'Ley 1607 de 2012 – artículo 182', descripcion: 'De la tasa contributiva a favor de las Cámaras de Comercio.' },
        { titulo: 'Ley 222 de 1995', descripcion: 'Por la cual se modifica el Libro II del Código de Comercio, se expide un nuevo régimen de procesos concursales y se dictan otras disposiciones.' },
        { titulo: 'Decreto 434 de 2020', descripcion: 'Por el cual se establecen plazos especiales para la renovación de la matricula mercantil, el Runeol y los demás registros que integran el registro único empresarial y social RUES, así como para las reuniones ordinarias de las asambleas y demás cuerpos colegiados, para mitigar los efectos económicos del nuevo CoronaVirus Covid-19 en el territorio nacional.' },
        { titulo: 'Ley 1955 de 2019 y decreto 2068 de 2020', descripcion: 'Faculta a la superintendencia de sociedades para declarar las sociedades no operativas.' },
        { titulo: 'Ley 2069 de 2020, art. 70', descripcion: 'Por medio del cual se otorga la competencia para ejercer inspección, vigilancia y control a la superintendencia de sociedades sobre las Cámaras de Comercio.' }
      ];      
    }
    else if (categoria === 'registro-entidades-sin-animo-lucro') {
      this.title = 'Normatividad de Registro Entidades Sin Ánimo de Lucro';
      this.leyes = [
        { titulo: 'Ley 962 de 2005', descripcion: 'Dicta disposiciones sobre racionalización de trámites y procedimientos administrativos de los organismos y entidades del Estado y de los particulares que ejercen funciones públicas o prestan servicios públicos.' },
        { titulo: 'Ley 850 de 2003', descripcion: 'Por medio de la cual se reglamentan las veedurías ciudadanas.' },
        { titulo: 'Decreto 427 de 1996', descripcion: 'Por el cual se reglamentan del Capítulo II del título I y el capítulo XV del título II del decreto 2150 de 1995.' },
        { titulo: 'Ley 79 de 1988 – Decreto 3081 de 1990 – Decreto 2150 de 1995', descripcion: 'Por la cual se actualiza la Legislación Cooperativa.' }
      ];
    }
    else if (categoria === 'registro-unico-proponentes') { 
      this.title = 'Normatividad de Registro Único de Proponentes';
      this.leyes = [
        { titulo: 'Decreto 1082 de 2015', descripcion: 'Por medio de cual se expide el Decreto Único Reglamentario del sector Administrativo de Planeación Nacional que compila entre otras normas, los decretos 1510 de 2013 y el 791 de 2014 sobre el RUP, estableciéndose como su única norma rectora.' },
        { titulo: 'Ley 1314 de 2009', descripcion: 'Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia.' },
        { titulo: 'Ley 1150 de 2007', descripcion: 'Por medio de la cual se introducen medidas para la eficacia y la transparencia en la ley 80 de 1993 y se dictan otras disposiciones generales sobre la contratación con recursos públicos.' },
        { titulo: 'Ley 80 de 1993', descripcion: 'Reglamentada por el Decreto Nacional 734 de 2012, Modificada por la Ley 1150 de 2007, Reglamentada parcialmente por los Decretos Nacionales 679 de 1994, 626 de 2001, 2170 de 2002, 3629 y 3740 de 2004, 959, 2434 y 4375 de 2006; 2474 de 2008 y 2473 de 2010.' },
        { titulo: 'Decreto 399 y 579 de 2021', descripcion: 'Por medio de cual se sustituyen en algunos decretos del decreto 1082 de 2015, para que los acrediten el mejor indicador financiero y organizacional de los últimos 3 años, con el fin de contribuir a la reactivación económica.' },
        { titulo: 'Decreto 957 de 2019', descripcion: 'Por medio de cual se anuncia una nueva clasificación de las micro, pequeñas y medianas empresas con el fin de promover su desarrollo.' }
      ];
    }
    else if (categoria === 'registro-nacional-turismo') { 
      this.title = 'Normatividad de Registro Nacional de Turismo';
      this.leyes = [
        { titulo: 'Decreto 2063 de 2018', descripcion: 'Por el cual se modifican los artículos 2.2.4.1.1.6, 2.2.4.1.1.10, 2.2.4.1.2.1, 2.2.4.1.2.2, 2.2.4.1.2.3, 2.2.4.1.2.4, 2.2.4.1.3.4 del Decreto Único Reglamentario del sector comercio, industria y turismo, Decreto 1074 de 2015.' },
        { titulo: 'Decreto 2119 de 2018', descripcion: 'Por medio del cual se reglamenta la prestación del servicio de alojamiento turístico y se modifican la Sección 12 del capítulo 4 del título 4 de la parte 2 del libro 2 y el parágrafo del artículo 2.2.4.7.2 del Decreto 1074 de 2015, Decreto Único Reglamentario del sector Comercio, Industria y Turismo.' },
        { titulo: 'Decreto 229 de 2017', descripcion: 'Por el cual se establecen las condiciones y requisitos para la inscripción y actualización en el Registro Nacional de Turismo y se modifican en su integridad las Secciones 1, 2 y 3 del Capítulo 1 del Título 4 de la Parte 2 del Libro 2 del Decreto número 1074 de 2015, Decreto Único Reglamentario del sector Comercio, Industria y Turismo.' },
        { titulo: 'Ley 1558 de 2012', descripcion: 'Por la cual se modifica la Ley 300 de 1996 – Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones.' },
        { titulo: 'Ley 1329 de 2009', descripcion: 'Por medio de la cual se modifica el Título IV de la Ley 599 de 2000 y se dictan otras disposiciones para contrarrestar la explotación sexual comercial de niños, niñas y adolescentes.' },
        { titulo: 'Ley 1225 de 2008', descripcion: 'Por la cual se regula el funcionamiento y operación de los parques temáticos.' },
        { titulo: 'Ley 1101 de 2006', descripcion: 'Por la cual se modifica la Ley 300 de 1996 – Ley General de Turismo y se dictan otras disposiciones.' },
        { titulo: 'Ley 300 de 1996', descripcion: 'Por la cual se expide la ley general de turismo y se dictan otras disposiciones.' },
        { titulo: 'Decreto 343 de 2021', descripcion: 'Reglamenta los establecimientos de gastronomía y bares turísticos y se dictan disposiciones complementarias.' },
        { titulo: 'Decreto 1386 de 2021', descripcion: 'Por el cual se modifica y adiciona el titulo 4 de la parte 2 del libro 2 del decreto 1074 de 2015, decreto único reglamentario del sector comercio, industria y comercio, en relación con el registro nacional de Turismo y las obligaciones de los operadores de plataformas electrónicas o digitales de servicios turísticos prestados y/o disfrutados en Colombia.' }
      ];      
    }
    else if (categoria === 'registro-unico-nacional-entidades-operadoras-libranza') {
      this.title = 'Normatividad de Registro Único Nacional de Entidades Operadoras de Libranza – Runeol';
      this.leyes = [
        { titulo: 'Ley 1902 de 2018', descripcion: 'Por medio de la cual se establece un marco general para la libranza o descuento directo y se dictan otras disposiciones. (Modifica algunos artículos de la ley 1527 de 2012).' },
        { titulo: 'Decreto 1348 del 22 de agosto de 2016', descripcion: 'Por medio de la cual se establece un marco general para la libranza o descuento directo y se dictan otras disposiciones.' },
        { titulo: 'Decreto 1840 de 2015', descripcion: 'Por el cual se adiciona un capítulo al Libro 2, Parte 2, Título 2 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, y se dictan otras disposiciones.' },
        { titulo: 'Ley 1527 de 2012', descripcion: 'Por medio de la cual se establece un marco general para la libranza o descuento directo y se dictan otras disposiciones.' }
      ];
    }
    else if (categoria === 'registro-garantias-mobiliarias') { 
      this.title = 'Normatividad de Registro de Garantías Mobiliarias';
      this.leyes = [
        { titulo: 'Ley 1676 de agosto de 2013', descripcion: 'Por la cual se promueve el acceso al crédito y se dictan normas sobre garantías mobiliarias.' },
        { titulo: 'Decreto 1835 de 2015', descripcion: 'Por el cual se modifican y adicionan normas en materia de Garantías Mobiliarias al Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, Decreto 1074 de 2015, y se dictan otras disposiciones.' }
      ];
    }
    else if (categoria === 'centro-conciliacion') { 
      this.title = 'Normatividad de Centro de Conciliación';
      this.leyes = [
        { titulo: 'Ley 640 de 2001', descripcion: 'Normas generales aplicables a la conciliación.' },
        { titulo: 'Decreto 1069 de 2015', descripcion: 'Por el cual se expide el decreto único reglamentario del sector justicia y del derecho.' },
        { titulo: 'Decreto 1829 de 2013', descripcion: 'Régimen tarifario del centro de conciliación.' }
      ];
    }
  }
}
