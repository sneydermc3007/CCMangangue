import { Component } from '@angular/core';

import { AcordeonInterface } from '../../../../interfaces/acordeon.interface';

@Component({
  selector: 'app-entidades-animo-lucro',
  templateUrl: './entidades-animo-lucro.component.html',
  styleUrl: './entidades-animo-lucro.component.scss'
})
export class EntidadesAnimoLucroComponent {
  public information: AcordeonInterface[] = [
    {
      header: 'Registro Entidades Sin Ánimo de Lucro',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Una entidad sin ánimo de lucro puede constituirse:'
        },
        {
          tipo: 'lista',
          valor: [
            'Por acta de constitución junto con los estatutos.',
            'Por escritura pública.',
            'Por documento privado.'
          ]
        }
      ]
    },
    {
      header: 'Por Acta de Constitución',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'De la reunión donde se decida crear la entidad, se elaborará un acta que se denomina “acta de la asamblea de constitución” y debe contener:'
        },
        {
          tipo: 'lista',
          valor: [
            'Los estatutos que van a regir la entidad que deben contener los requisitos que más adelante se señalan; pueden estar insertos en el acta o en documento anexo.',
            'Los nombramientos de los órganos de administración y vigilancia.',
            'Firma de las personas que actuaron como presidente y secretario de la reunión. Ambas firmas deben estar reconocidas ante juez o notario, o ante el funcionario autorizado de la cámara de comercio.'
          ]
        },
        {
          tipo: 'formatted',
          valor: '<strong>Nota: </strong> Se recomienda este mecanismo para evitar la comparecencia de todos los fundadores ante el juez, el notario o el funcionario autorizado por la cámara de comercio.'
        }
      ]
    },
    {
      header: 'Por Escritura Pública',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Cuando se constituye por escritura pública, todos los asociados o fundadores deben comparecer a la notaría, en forma personal o mediante apoderado, a otorgar el instrumento público que debe contener los estatutos con los requisitos que más adelante se señalan.'
        }
      ]
    },
    {
      header: 'Por Documento Privado',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Cuando se constituye por documento privado, todos los asociados o fundadores deben firmar el documento de constitución, que debe contener los estatutos con los requisitos que más adelante se señalan. Este documento debe ser reconocido ante juez o notario, o con presentación personal ante el funcionario autorizado por la cámara de comercio, por todas las personas que firmen como asociados o fundadores.'
        }
      ]
    },
    {
      header: '¿Qué debe contener el documento de constitución?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Nombre, identificación y domicilio (ciudad o municipio donde desarrolla sus actividades) de los asociados o fundadores.',
            'Nombre de la entidad sin ánimo de lucro y su sigla, si la tiene. La conformación del nombre depende de la clase de entidad que se constituya, para lo cual deberán tenerse en cuenta las normas que la rigen.',
            'Clase de persona jurídica: indique si se trata de una corporación, fundación, cooperativa, fondo de empleados, asociación mutual, etc.',
            ' Domicilio de la entidad: ciudad o municipio donde la entidad sin ánimo de lucro va a desarrollar su objeto social. Fecha de la reunión.'
          ]
        }
      ]
    },
    {
      header: 'Contenido de los estatutos',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Los estatutos de las entidades sin ánimo de lucro son las disposiciones internas que conforman el marco de acción, funcionamiento y desarrollo de los objetivos de la entidad constituyente y sobre los cuales se basan su existencia, toma de decisiones, designación de administradores, disolución y liquidación.'
        },
        {
          tipo: 'parrafo',
          valor: 'En razón de las disposiciones legales vigentes, los estatutos de las entidades sin animo de lucro deben contener unos requisitos generales que se encuentran regulados en el Art. 40 Decreto 2150 de 1995,y que como mínimo deben tener toda entidad sin ánimo de lucro que se constituya, y unos especiales que se encuentran previstos de manera diferencial para cada tipo de entidad. Los estatutos de una entidad sin ánimo de lucro pueden elaborarse en documento privado, reconocido notarialmente por sus fundadores, o pueden elaborarse por escritura pública, otorgada ante notario público.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Estos estatutos deben contener: </strong>'
        },
        {
          tipo: 'parrafo',
          valor: 'Nombre, identificación y domicilio de las personas que intervengan como otorgantes: Este requisito consiste en la elaboración de la lista de asociados fundadores o constituyentes de la entidad, personas naturales o jurídicas, indicando además su numero de identificación (cédula de ciudadanía o cédula de extranjería o pasaporte o Nit, o tarjeta de identidad) y su domicilio es decir la ciudad o el municipio donde habitan y desarrollan normalmente sus actividades.'
        },
        {
          tipo: 'parrafo',
          valor: 'El nombre: Debe identificarse el nombre que se le asigna la entidad sin animo de lucro que se constituye, el cual debe estar integrado por las palabras que indiquen el tipo de entidad escogido; por ejemplo Cooperativa María. “Asociación Vida”. “Fondo de Empleados de la Presidencia “, “Corporación Feliz”, “Asociación de padres de Familia del Colegio Menor”.Etcétera.'
        },
        {
          tipo: 'parrafo',
          valor: 'El domicilio de la entidad: Aunque el Decreto 2150 no incluye este requisito, debe indicarse el domicilio principal de entidad, es decir, el lugar permanente donde ha de realizar su actividad principal y donde funciona la administración de la entidad. Este domicilio se establece como la ciudad o el municipio donde se tiene la sede social principal o de negocios; por ejemplo; Bogotá, Cali, Medellín, etcétera.'
        },
        {
          tipo: 'parrafo',
          valor: 'Las entidades si ánimo de lucro, sólo pueden matricular establecimientos de comercio, entendiéndose por ellos lo que señala el articulo 515 del C de Co. ( No pueden Matricular Sucursales o agencias.) Cualquier persona natural o jurídica, nacional o extranjera, con ánimo de lucro puede ser titular del derecho de dominio sobre un establecimiento de comercio. El sistema del Código no ha restringido la posibilidad de ser dueño de un establecimiento de comercio. El sistema del Código　no ha restringido la posibilidad de ser dueño de estos conjuntos de bienes en atención a la naturaleza o características de la persona.'
        },
        {
          tipo: 'parrafo',
          valor: 'La clase de persona jurídica: Debe indicarse en primer lugar que se trata de una entidad sin ánimo de lucro y en segundo lugar, el tipo de entidad que se constituye, es decir, que se trata, por ejemplo de una asociación, o una corporación, etcétera.'
        },
        {
          tipo: 'parrafo',
          valor: 'El objeto: Este requisito se cumple indicando detalladamente las actividades principales que va a desarrollar la entidad sin ánimo de lucro que se constituye y que conforman el objetivo de su creación.'
        },
        {
          tipo: 'parrafo',
          valor: 'Adicionalmente pueden incluirse actividades secundarias, que sean necesarias para el cumplimiento del objetivo principal. Debe tenerse en cuenta las excepciones del Art. 45 del Decreto 2150/91y los artículos 3 del Decreto 427/96.'
        },
        {
          tipo: 'parrafo',
          valor: 'El patrimonio y la forma de hacer los aportes: Debe indicarse la suma de dinero entregada por los fundadores o constituyentes, o su equivalente cuando se hagan aportes en especie, con lo cual esta dándose nacimiento a la entidad sin animo de lucro. Debe indicarse además, que destinación tienen esos dineros, como se incrementan (donaciones, rifas, bazares, etcétera) y si hay un sistema de aportes, es decir, el pago de las cuotas periódicas por los asociados, señalando como y cuando se hacen esos aportes. En caso de las fundaciones, dado su carácter eminentemente patrimonial, siempre deben indicarse el patrimonio inicial destinado a la realización del objeto social.'
        },
        {
          tipo: 'parrafo',
          valor: 'La forma de administración con indicación de quien tenga a su cargo la administración y representación legal: Todas las entidades que se constituyan deben establecer un sistema para su administración, indicando además que facultades se les concede a los órganos internos que se establezcan. Usualmente, las entidades sin animo de lucro poseen los siguientes órganos:'
        },
        {
          tipo: 'parrafo',
          valor: 'Asamblea General. Esta conformada por todos los asociados, tanto fundadores o constituyentes, como los que con posterioridad ingresen a la entidad. Su función es velar por el cumplimiento de los objetivos de la entidad y es el máximo órgano administrativo, ya que en este éste radica ( sino se delega) las máximas potestades sobre existencia y funcionamiento de la entidad.'
        },
        {
          tipo: 'parrafo',
          valor: 'Junta directiva o consejo directivo o consejo de administración: Aunque estos órganos de administración no son propios de todas las entidades sin animo de lucro, la gran mayoría los adopta para que coadministren, junto con el representante legal, el desarrollo de los objetivos de la entidad, su funcionamiento y control. Estos órganos siempre están conformados por un numero impar de miembros y pueden elegirse renglones principales y suplentes. De su seno pueden elegirse presidente, vicepresidente, secretario, vocales, etcétera, a quienes se le asignan sus funciones especificas.'
        },
        {
          tipo: 'parrafo',
          valor: 'Representante Legal: Es la persona que tiene a cargo la responsabilidad de representarla legalmente a la entidad que se constituye. Tal representación involucra adelantar las actividades necesarias para el cumplimiento del objetivo de la entidad, celebrar contratos, firmar cheques, etcétera. La representación legal puede estar en cabeza de un gerente, presidente, director, etcétera, quienes pueden tener suplentes que lo reemplazan en sus faltas temporales o absolutas.'
        },
        {
          tipo: 'parrafo',
          valor: 'Revisor Fiscal: Es un contador publico titulado que tiene como fundamento verificar los registros contables, la información, aprobación de los balances y el estado financiero de la entidad. Es un órgano de control externo.'
        },
        {
          tipo: 'parrafo',
          valor: 'Fiscal o comité de control social o junta de vigilancia: Son órganos de control interno que crean para que colaboren en la verificación del cumplimiento de los objetivos de la entidad y el ejercicio de las funciones de los otros órganos de administración. Están conformados por los asociados de la entidad y a los que deben indicarse claramente que facultades se les conceden; sus funciones están encaminadas al control y vigilancia internos. El comité de control social o la junta de vigilancia son órganos de control interno o fiscalización, propios de las entidades del sector solidario (fondos de empleados , cooperativas , asociaciones mutuales, etcétera).'
        },
        {
          tipo: 'parrafo',
          valor: 'La periodicidad de las reuniones ordinarias y los casos en que habrá de convocarse a reuniones extraordinarias:'
        },
        {
          tipo: 'parrafo',
          valor: 'Debe indicarse en los estatutos cuando se llevan a cabo las reuniones ordinarias de los órganos de administración ( asamblea general, junta directiva o consejo directivo) y que asuntos debe tratar, además expresar como en que circunstancias puede celebrase las reuniones extraordinarias, estableciendo adicionalmente la mayoría de votos con que se adoptan decisiones (por ejemplo quórum de la mitad más uno).'
        },
        {
          tipo: 'parrafo',
          valor: 'La asamblea general ordinaria, normalmente, es aquella que se celebra dentro de los tres primeros meses del año y tiene como objetivos verificar el desarrollo de las actividades de la entidad, aprobar los estados financieros ( balance general) del ultimo año y elegir los órganos de la administración y fiscalización.'
        },
        {
          tipo: 'parrafo',
          valor: 'Las reuniones extraordinarias se celebran en cualquier momento y se convocan para atender asuntos urgentes o importantes que requieren una aprobación inmediata y no dan espera a la reunión ordinaria.'
        },
        {
          tipo: 'parrafo',
          valor: 'Respecto a las convocatorias o citaciones a estas reuniones, es importante que se establezca, dentro de los estatutos, como, quien y con cuanta antelación se cita a este tipo de reuniones, lo que se denominara el medio para convocar, el órgano que convoca y la antelación de la convocatoria. Es importante que estos aspectos se pacten en los estatutos sociales.'
        },
        {
          tipo: 'parrafo',
          valor: 'Medio para convocar. Es el mecanismo por el cual se comunica a todos los asociados en qué día, a que hora, en donde y que tema se van a tratar en la reunión ordinaria o extraordinaria, de la asamblea o de junta directiva o de otro órgano de administración. Como medio para convocar pueden utilizarse carteleras, cartas, telegramas, correo electrónico, volantes, avisos en prensa etcétera. En todo caso, la ley dispone que cuando no se indica en los estatutos como se convocan las reuniones, deberán hacerse mediante aviso en un diario de amplia circulación en el domicilio de la entidad.'
        },
        {
          tipo: 'parrafo',
          valor: 'Órgano que se convoca. Es la persona o personas facultadas en los estatutos para realizar las convocatorias; por ejemplo el gerente, el fiscal, el presidente, etcétera. También pueden convocar algunos órganos de administración como la junta directiva, el consejo directivo, etcétera, o un porcentaje de asociados, por ejemplo el 25% de los asociados, el 15% de los asociados etcétera. Deben establecerse en los estatutos quienes o quienes estén facultados para efectuar las convocatorias, es decir, para citar a las reuniones ordinarias y extraordinarias.'
        },
        {
          tipo: 'parrafo',
          valor: 'La duración precisa de la entidad y las causales de disolución: Debe indicarse el término que se tiene previsto como duración de la entidad que se constituye. Normalmente, el término se establece en razón del tiempo que tome el objetivo por realizar; si es a largo plazo, el término será mayor, si es a corto plazo, el término será menor. Por ejemplo: duración 100 años o 10 años, etcétera, En las entidades sin animo de lucro, debe indicarse el termino preciso de duración, con excepción de las fundaciones y entidades del sector solidario ( cooperativas, preecoperativa, fondos de empleados y asociaciones mutuales) cuya duración debe ser indefinida.'
        },
        {
          tipo: 'parrafo',
          valor: 'La disolución de la entidad es la manifestación de acabar con la entidad que sea ha constituido, para lo cual deben establecerse unas causales especificas. Las causales de disolución se incluyen en los estatutos y son los asuntos considerados como conducentes a la disolución de la entidad. A pesar de que la ley dispone, en razón del tipo de entidad, algunas causales especiales para su disolución ( el vencimiento del termino de duración), los asociados pueden proponer otras causales de disolución; por ejemplo: por voluntad de la asamblea, no cumplimento del objetivo social, por reducción del numero de asociados. Etcétera.'
        },
        {
          tipo: 'parrafo',
          valor: 'La forma de hacer la liquidación una vez disuelta la corporación o Fundación: La declaratoria de disolución de la entidad implica que deba adelantarse un proceso de liquidación, es decir que deba terminarse con la vida jurídica. En los estatutos, deben establecerse una serie de pasos o etapas para seguir, que están relacionadas con la liquidación total de la entidad. Estas etapas pueden ser:'
        },
        {
          tipo: 'lista',
          valor: [
            'Nombramiento de liquidador o liquidadores.',
            'Aviso en prensa (3) con intervalos de 15 días.',
            'Estudio de la situación financiera de la entidad.',
            'Elaboración de inventarios y balance general.',
            'Pago de pasivos de las entidades (laborales, tributarios, etcétera)',
            'Destinación del remanente (dineros que sobren)',
            'Aprobación de la liquidación.',
            'Elaboración y registro del acta de liquidación'
          ]
        },
        {
          tipo: 'parrafo',
          valor: 'Hay que anotar que las entidades sin ánimo de lucro no pueden distribuir entre sus asociados el remanente o dinero sobrante en la liquidación, una vez cubiertos los pasivos, ya que el remanente debe entregarse a una entidad sin ánimo de lucro de naturaleza semejante a la liquidada, determinada por la Asamblea o el máximo órgano o a una entidad de beneficencia publica.'
        },
        {
          tipo: 'parrafo',
          valor: 'Las facultades y obligaciones del revisor fiscal, si es del caso: Generalmente, la ley le otorga funciones de control contable y financiero y de aprobación de balances. Es obligatoria su elección para entidades del sector solidario cuyos activos superen 300 salarios mínimos legales mensuales vigentes. No obstante, dichas entidades　(las que pertenecen al sector solidario) se pueden exonerar de la obligación de tener revisor fiscal cuando el total de sus activos al 31 de diciembre del año inmediatamente anterior　sean inferiores a 300 salarios mínimos y además que no estén arrojando perdidas. Esta excepción no opera para las cooperativas con sección de ahorro y crédito.'
        },
        {
          tipo: 'parrafo',
          valor: 'Sin embargo, por disposición de las Circulares 004 del 3 de septiembre de 2007 y 008 del 11 de octubre de 2007 de la Superintendencia de Industria y Comercio, si en los estatutos se crea el cargo de revisor fiscal deberá indicarse el nombre de la persona que desempeñará esa función.'
        },
        {
          tipo: 'parrafo',
          valor: 'Nombre e identificación de los administradores y representantes legales: Aunque este requisito debe estar especificado en el acta de constitución de la entidad sin animo de lucro, puede incluirse como un articulo transitorio de los estatutos en el que se indique los nombres y números de identificación de las personas nombradas en los diferentes órganos de administración. De representación legal y de control. Por ejemplo: la junta directiva ( renglones principales y suplentes), el gerente y su suplente, el revisor fiscal, etcétera.'
        },
        {
          tipo: 'parrafo',
          valor: 'Es pertinente tener presente que los nombramientos de los miembros de los órganos de administración deben coincidir exactamente con los cargos creados en los estatutos, tanto en nombre como en números de miembros. Por ejemplo, si el estatuto crea la junta directiva, no puede nombrarse un consejo directivo, si el numero de miembros es de tres(3) principales y suplentes, no pueden nombrarse cinco (5).'
        },
        {
          tipo: 'parrafo',
          valor: 'Las personas nombradas deben manifestar su aceptación, bien dentro del texto del acta o los estatutos, o en una carta firmada por cada una de ellas.'
        }
      ]
    },
    {
      header: 'Registro en Cámaras de Comercio',
      contenido: [
        {
          tipo: 'parrafo',
          valor: 'Una vez constituida la entidad sin animo de lucro, debe procederse a su registro en la entidad correspondiente, bien sea cámaras de comercio, si se trata de aquellas entidades que se registran en esa entidad, o en la Alcaldía, las gobernaciones, superintendencias,etc. Paso 1. Para efectuar el registro, se debe presentar copia autenticada del acta de constitución y los estatutos debidamente firmados por el　presidente y secretario nombrados para la reunión de constitución, y una comunicación suscrita por el representante legal de la entidad, en la cual se indique la dirección, el teléfono y el fax de la entidad sin animo de lucro que se constituye, así como el nombre de la entidad gubernamental que ejerza la inspección o control y vigilancia. (Dagma, Gobernación, Supersolidaria, Superintendencia de puertos y transportes). También se debe indicar una certificación suscrita por el representante legal, indicando que ha dado cumplimiento y observancia de las disposiciones legales y reglamentarias vigentes, cuando se trate de entidades del sector solidario (cooperativas, fondos de empleados, asociaciones mutuales, etcétera). Esta entidad gubernamental procederá a emitir la aprobación de los estatutos de la entidad sin ánimo de lucro que se constituye.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Nota: </strong> En el evento en que la entidad sin ánimo de lucro constituida no se registre en las cámaras de comercio, deberán enviarse los estatutos, el acta de constitución a la entidad gubernamental que vaya ejercer inspección, control o vigilancia, para obtener su personería. Si la entidad sin ánimo de lucro tiene personería jurídica reconocida antes de 1996, pero es de aquellas que deben registrarse en las cámaras de comercio, hay que solicitar a la entidad gubernamental que le otorgó personería jurídica que le expedida　un certificado especial de inscripción, el cual debe contener los requisitos de la constitución y entregarlos para registro en la cámara de comercio correspondiente.'
        }
      ]
    },
    {
      header: 'Pasos para efectuar el registro en Cámara de Comercio',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong>Paso 1: </strong> Diligenciar el formulario adicional de registro con otras entidades.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Paso 2: </strong> Diligenciar el formulario de Registro Único Tributario.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Paso 3: </strong> Pagar los derechos de inscripción e impuestos de registro.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>Paso 4: </strong> La Cámara de Comercio verifica los requisitos formales e inscribe a la entidad sin ánimo de lucro. Solicita Asignación RUT a la Dirección de Impuestos y Aduanas Nacionales.'
        },
        {
          tipo: 'formatted',
          valor: '<strong>NOTA: </strong> Tener en cuenta que pueden existir otros requisitos adicionales de acuerdo con el tipo de entidad que se está constituyendo.'
        },
      ]
    },
    {
      header: 'Normatividad Entidades sin Ánimo de Lucro',
      contenido: [
        {
          tipo: 'formatted',
          valor: '<strong> Ley 79 de 1988 </strong> Por la cual se actualiza la legislación cooperativa'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 100 de 1993 </strong> Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 115 de 1994 </strong> Por la cual se expide la Ley General de Educación'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 133 de 1994 </strong> Por la cual se desarrolla el derecho de libertad religiosa y de cultos, reconocido en el artículo 19 de la Constitución Política'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 181 de 1995 </strong> Por la cual se dictan disposiciones para el fomento del deporte, la recreación, el aprovechamiento del tiempo libre y la educación física y se crea el sistema nacional del deporte'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Decreto 2150 de 1995 </strong> Constitución, registro, reformas estatutarias, certificación de existencia y representación legal'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Decreto 427 de 1996 </strong> Funcionamiento del registro de entidades sin ánimo de lucro'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 454 de 1998 </strong> Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Administrativo Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 537 de 1999 </strong> Por medio de la cual se hace una adición al Capítulo II en el artículo 45 del Decreto Ley 2150 de 1995'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Resolución 0040 de 2000 </strong> Disolución y Liquidación de las entidades del sector real sometidas a su inspección y vigilancia'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Resolución 0041 de 2000 </strong> Control de legalidad de los actos de registro de nombramientos de las entidades del sector real sometidas a su inspección y vigilancia'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Decreto 1774 de 2000 </strong> Por el cual se reglamenta la ley 537 del 1° de diciembre de 1999'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Ley 675 de 2001 </strong> Por medio de la cual se expide el régimen de propiedad horizontal'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Decreto 1286 de 2005 </strong> Normas sobre la participación de los padres de familia en el mejoramiento de los procesos educativos de los establecimientos oficiales y privados, y se adoptan otras disposiciones'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Circula Externa 4 de 2007 </strong> Modificación del numeral 1.3.3. y adición de los numerales 1.3.4., 1.3.5. y 1.3.6. del Título VIII Capítulo Primero de la Circular Única'
        },
        {
          tipo: 'formatted',
          valor: '<strong> Circula Externa 8 de 2007 </strong> Modificación del numeral 1.3.3. y adición de los numerales 1.3.7., 1.3.8. y 1.3.9. del Título VIII Capítulo Primero de la Circular Única'
        }
      ]
    }
  ];
}
