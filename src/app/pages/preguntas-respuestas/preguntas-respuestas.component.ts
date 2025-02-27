import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

import { SharedModule } from '../../shared/shared.module';

import { AcordeonInterface } from '../../interfaces/acordeon.interface';

interface tabs { header: string, dataView: AcordeonInterface[] }

@Component({
  selector: 'app-preguntas-respuestas',
  standalone: true,
  imports: [CommonModule, TabViewModule, SharedModule],
  templateUrl: './preguntas-respuestas.component.html',
  styleUrl: './preguntas-respuestas.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasRespuestasComponent {
  public tabs: tabs[] = [
    {
      header: 'Registros públicos',
      dataView: [
        {
          header: '¿CUÁLES SON LAS OBLIGACIONES DE LOS COMERCIANTES?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'Matricularse en el Registro Mercantil.',
                'Inscribir en el registro mercantil todos los actos, libros y documentos sobre los cuales la ley exija esta formalidad.',
                'Llevar la contabilidad de sus negocios.',
                'Conservar la correspondencia y demás documentos relacionados con sus negocios.',
                'Denunciar ante el juez competente la cesación en el pago de sus obligaciones.',
                'Abstenerse de ejecutar actos de competencia desleal.',
              ],
            },
          ],
        },
        {
          header: '¿QUIÉNES CONFORMAN LAS CÁMARAS DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Toda Cámara de Comercio está conformada por los comerciantes matriculados y los comerciantes afiliados.',
            },
            {
              tipo: 'formatted',
              valor: `<strong>Matriculados:</strong> Son todos los comerciantes, personas naturales y jurídicas (sociedades), quienes, por ejercer el comercio, están obligados por la ley a tramitar su matrícula y la de sus establecimientos de comercio e inscribir los actos y documentos sujetos a registro.</br>
              <strong>Afiliados:</strong> Son aquellos comerciantes que, además de cumplir con la obligación anterior, voluntariamente solicitan su afiliación a la Cámara de Comercio, para disfrutar de algunos servicios especiales mediante el pago de una cuota adicional. Igualmente obtienen el derecho a elegir y ser elegidos como miembros de la Junta Directiva.`,
            },
          ],
        },
        {
          header: '¿QUIÉNES DEBEN MATRICULARSE EN LA CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'El comerciante como persona natural, las sociedades o personas jurídicas (constituidas mediante escritura pública).',
                'Los auxiliares de los comerciantes, tales como: los comisionistas, corredores, agentes, factores de comercio y representantes de firmas nacionales o extranjeras.',
                'Los empresarios que aspiran a contratar con el Estado, según la Ley 80 de 1993.',
                'Las sociedades de economía mixta y las empresas industriales y comerciales del Estado.',
                'Los establecimientos de comercio (no hacemos referencia al local comercial).',
                'Las sucursales o agencias de las sociedades comerciales. Los fondos de pensiones Jubilación e invalidez.',
              ],
            },
          ],
        },
        {
          header: '¿CUÁL ES LA FINALIDAD DEL REGISTRO MERCANTIL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor: `Todo comerciante tiene la obligación de inscribirse en Registro, obteniendo con ello los siguientes beneficios:`,
            },
            {
              tipo: 'lista',
              valor: [
                'Publicidad al comerciante y a sus establecimientos comerciales, así como a los documentos sometidos a registro. Con ello se le da garantía a otras personas y al mismo comerciante sobre su actuación como tal.',
                'En relación con los libros de comercio (contabilidad, actas y registro de socios o accionistas), su inscripción busca proporcionar una garantía relativa de veracidad sobre lo que en ellos se copie o asiente.',
                'Se protege el nombre comercial del establecimiento (solo en la jurisdicción de la Cámara). Es decir, la Cámara de Comercio debe abstenerse de matricular un establecimiento con el mismo nombre de otro ya registrado.',
                'El registro facilita la prueba de los documentos en él inscritos, mediante certificaciones expedidas por la Cámara de Comercio.',
                'La Cámara de Comercio, en ciertos casos, podrá legítimamente rechazar el registro de un acto o documento cuando éste presente algún vicio de ilegalidad formal.',
              ],
            },
          ],
        },
        {
          header: '¿CUÁLES SON LAS FUNCIONES DE LA CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Representar los intereses generales de todos los comerciantes e industriales ante el gobierno y ante los comerciantes mismos. Llevar el registro público mercantil de todo el comercio y certificar sobre los actos y documentos en él inscritos (Art. 86 del Código de Comercio). Llevar el registro público de proponentes (Artículos 22 y 79 de la Ley 80/93). Llevar la inscripción de entidades sin ánimo de lucro, cooperativas, fundaciones, juntas de acción comunal, cooperativas, fondos de empleados y asociaciones mutuales. Promover el desarrollo de la región que le corresponde.',
            },
          ],
        },
        {
          header: '¿QUIÉNES NO SE MATRICULAN EN LA CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Los artistas y los talleres para confeccionar sus propias obras. Esto es distinto de quienes comercian con obras de arte, los cuales deben, efectuar su matrícula mercantil. Los profesionales y sus oficinas o consultorios destinados a realizar su profesión. Los agricultores y sus depósitos donde almacenan su propia cosecha para distribuirla en el mercado. Esto es diferente a montar una compraventa de productos agrícolas, la cual se debe matricular.',
            },
          ],
        },
        {
          header:
            '¿CUÁNDO SE DEBEN MATRICULAR LOS COMERCIANTES EN LA CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'La matrícula debe solicitarse dentro del mes siguiente al momento en que se comienza la actividad mercantil, así:',
            },
            {
              tipo: 'lista',
              valor: [
                'Las personas naturales, dentro del mes siguiente al momento en que se iniciaron en los negocios.',
                'Las personas jurídicas o sociedades, dentro del mes siguiente a la fecha de la escritura de constitución o del permiso de funcionamiento.',
                'Los establecimientos de comercio también se deben matricular dentro de los 30 días siguientes de su apertura.',
              ],
            },
          ],
        },
        {
          header:
            '¿EL COMERCIANTE PUEDE MATRICULARSE EN CUALQUIER CÁMARA DE COMERCIO DEL PAÍS?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'NO. Cada Cámara de Comercio tiene una jurisdicción asignada por el gobierno. Por tanto, el comerciante, de acuerdo con el domicilio donde desarrolla su actividad comercial, debe matricularse en la Cámara correspondiente a su jurisdicción. Si posee negocios en más de un municipio, debe consultar si éstos corresponden a diferentes Cámaras y en este caso debe efectuar la matrícula de cada negocio de acuerdo con la jurisdicción de cada Cámara.',
            },
          ],
        },
        {
          header:
            '¿CÓMO SE REALIZA LA MATRÍCULA MERCANTIL, SU RENOVACIÓN ANUAL Y LA INSCRIPCIÓN DE OTROS DOCUMENTOS?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Se diligencia el formulario y se presenta en la Sede Principal de la Cámara de Comercio o en cualquiera de las sedes seccionales en los municipios donde se efectúa la liquidación y se recibe el dinero que debe pagarse por la matrícula o por la renovación. Usted también puede consultar telefónicamente su liquidación llamando a las sedes de la Entidad.',
            },
            {
              tipo: 'parrafo',
              valor:
                'Ahí se le indicará el procedimiento para el trámite de otros documentos, tales como:',
            },
            {
              tipo: 'lista',
              valor: [
                'Cambio de Dirección.',
                'Cambio de propietario.',
                'Cancelación de Establecimiento de Comercio.',
                'Cancelación de la matrícula mercantil.',
              ],
            },
            {
              tipo: 'parrafo',
              valor:
                'Siendo el registro un acto público, la falsedad en los datos será sancionada conforme al Código Penal y la Cámara de Comercio estará obligada a llevar la denuncia correspondiente.',
            },
          ],
        },
        {
          header: '¿PUEDEN LOS MENORES DE EDAD SER COMERCIANTES?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Los menores de edad pueden ser comerciantes ya que poseen capacidad de goce, las cuales les dan facultad para ser sujetos de derechos y obligaciones. De conformidad con lo anterior, pueden matricularse en el registro mercantil, por lo que el formulario de matrícula deberá ser diligenciado por los representantes legales del menor (Padres o tutores), los cuales deben presentarse personalmente ante la entidad o hacer reconocimiento de firmas en notaria. La representación legal es ejercida por una persona, debe demostrarse este hecho, allegando los documentos correspondientes. Ej. Sentencia ejecutoriada, certificado de defunción del cónyuge.',
            },
          ],
        },
        {
          header: '¿PUEDE UN MENOR DE EDAD EJERCER DIRECTAMENTE EL COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Los menores de edad directamente no pueden ejercer el comercio, ya que tienen restringida su capacidad de ejercicio, es decir, la facultad para ejercer por si mismo sus derechos, o contraer sus obligaciones. Sólo el menor puede comprometer su pecunio profesional',
            },
          ],
        },
        {
          header:
            '¿QUÉ AUTORIZACIÓN ES REQUERIDA A LOS MENORES DE EDAD PARA INSCRIBIRSE EN EL REGISTRO MERCANTIL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Las autorizaciones a los menores de edad, no es para que el menor ejerza el comercio por cuenta propia, sino por cuenta ajena o a nombre de otro, de conformidad con el artículo 12 del Código de Comercio (menores de adultos). Esta solicitud la realiza directamente los representantes legales.',
            },
          ],
        },
        {
          header:
            '¿QUÉ ES EL IMPUESTO DE REGISTRO Y QUIÉNES SON SUS BENEFICIARIOS?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'El impuesto de registro es un gravamen creado por el Congreso de la República mediante la Ley 223 de 1995, que afecta a todos los actos, documentos o contratos que deben registrarse ante las Cámara de Comercio y en las oficinas de instrumentos públicos. Las cámaras de comercio únicamente ejercen una función de liquidación y recaudo del citado impuesto.',
            },
          ],
        },
        {
          header: '¿QUÉ ES UN ESTABLECIMIENTO DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Es un conjunto de bienes organizados por el empresario o comerciante en un sitio determinado para el desarrollo de sus actividades económicas (Tiendas, supermercados, almacenes bodegas, hoteles, fabricas, plantas industriales, factorías, etc.). Una misma persona podrá tener varios establecimientos de comercio y, a su vez, un solo establecimiento de comercio podrá pertenecer a varias personas, y destinarse al desarrollo de diversas actividades comerciales (artículo 515 ).',
            },
          ],
        },
        {
          header:
            '¿POR QUÉ ES IMPORTANTE LA MATRÍCULA MERCANTIL DEL ESTABLECIMIENTO DE COMERCIO?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'La matrícula de los establecimientos de comercio facilita la prueba de su propiedad, mediante el certificado que expide la Cámara de Comercio.',
                'Mientras esté vigente la matrícula, no se podrán registrar otros establecimientos de comercio o sociedades con el mismo nombre.',
                'Evita multas que puede imponer la Superintendencia de Industria y Comercio o las autoridades locales.',
                'Es una fuente de información comercial para quienes deseen conocer los datos del establecimiento (actividad, ubicación, valor, etc.)',
                'Permite ingresar a la gran base de datos de la Cámara de Comercio.',
                'Facilita la celebración de negocios con los sectores público y privado.',
              ],
            },
          ],
        },
        {
          header: '¿QUÉ TIPOS DE ESTABLECIMIENTOS DE COMERCIO EXISTEN?',
          contenido: [
            {
              tipo: 'formatted',
              valor: `<strong>Establecimientos de comercio:</strong> Es un conjunto de bienes organizados por el empresario o comerciante en un sitio determinado para el desarrollo de sus actividades económicas (Tiendas, supermercados, almacenes bodegas, hoteles, fabricas, plantas industriales, factorías, etc.).</br>
              <strong>Sucursales:</strong> Son sucursales los establecimientos de comercio abiertos por una sociedad, dentro o fuera de su domicilio, para el desarrollo de los negocios sociales o de parte de ellos, administrados por mandatarios con facultades para representar a la sociedad. Cuando el administrador carezca de facultades para representar legalmente a la sociedad.</br>
              <strong>Agencias:</strong> Es un establecimiento de comercio (llámese tienda, oficina, almacén, fábrica, bodega, planta industrial, factoría, etc.) abierto por una sociedad, dentro o fuera de su domicilio principal para el desarrollo de sus actividades o parte de ellas, cuyo administrador carece de facultades para representarla legalmente.`,
            },
          ],
        },
        {
          header:
            '¿QUÉ PERSONAS NATURALES SE DEBEN MATRICULAR EN LA CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Se deben matricular todas las personas naturales que realicen en forma permanente o habitual actividades consideradas como mercantiles, a título de ejemplo: Quien compra mercancías para después venderlas, con ánimo de lucrarse; o quien es propietario de un hotel o droguería, explotando su negocio.',
            },
          ],
        },
        {
          header: '¿CUÁNDO DEBE RENOVARSE LA MATRÍCULA DE UNA PERSONA NATURAL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Entre los meses de enero a marzo de cada año debe renovarse la matrícula, para obtener los beneficios que de ella se derivan y evitar sanciones legales. El plazo vence el 31 de marzo de cada año.',
            },
          ],
        },
        {
          header: '¿CÓMO SE CANCELA LA MATRÍCULA DE UNA PERSONA NATURAL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Mediante solicitud escrita reconocida ante notario o juez o presentándose personalmente ante el secretario de la Entidad y cancelando los derechos que ordena la ley. En caso que el comerciante haya fallecido, la solicitud de cancelación la podrá solicitar cualquiera de los herederos, manifestando esta condición, una vez se les haya reconocido tal calidad con la escritura o sentencia donde se apruebe el trabajo de partición, y así mismo deberá aportar certificado de defunción del comerciante fallecido',
            },
          ],
        },
        {
          header: '¿QUÉ SUJETOS ESTÁN OBILIGADOS A TENER REVISOR FISCAL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'De conformidad con el artículo 203 del Código de Comercio, deberán tener revisor fiscal: – Las sociedades por acciones (anónimas, en comandita por acciones). – Las sucursales de compañías extranjeras. – Las sociedades en las que, por ley o por los estatutos, la administración no corresponda a todos los socios, cuando así lo disponga cualquier número de socios excluidos de la administración que representen no menos del veinte por ciento del capital. – “Todas las sociedades comerciales, de cualquier naturaleza, cuyos activos brutos al 31 de diciembre del año inmediatamente anterior sean o excedan el equivalente de cinco mil salarios mínimos y/o cuyos ingresos brutos durante el año inmediatamente anterior sean o excedan el equivalente a tres mil salarios mínimos” (Parágrafo 2, artículo 13 Ley 43 de 1990).',
            },
          ],
        },
        {
          header:
            '¿QUÉ INFORMACIÓN FINANCIERA DEBO REPORTAR AL MOMENTO DE RENOVAR LA MATRÍCULA MERCANTIL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Para renovar la matrícula en un año determinado, debe tener en cuenta la información financiera a 31 de diciembre del año inmediatamente anterior. Si usted no tiene el balance definitivo, puede usar el balance de prueba y una vez tenga el definitivo presentarlo para la re liquidación y actualización correspondiente.',
            },
          ],
        },
        {
          header:
            '¿CÓMO SE RENUEVA LA MATRÍCULA MERCANTIL CUANDO SE DEBEN AÑOS ANTERIORES?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Se debe presentar en cualquiera de las sedes de la Cámara de Comercio el formulario de renovación carátula y anexo para el Anexo Renovación Matrícula más de un Año Pendiente por Renovar tanto para el comerciante como para el establecimiento de comercio y pagar los derechos correspondientes.',
            },
          ],
        },
        {
          header:
            '¿ES POSIBLE OBTENER EXENCIONES O DESCUENTOS EN LA RENOVACIÓN DE LA MATRÍCULA MERCANTIL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'No, la renovación de la matricula mercantil es una obligación que no tiene excepciones ni exenciones de ninguna clase, de conformidad a lo dispuesto por el Código de Comercio y el Decreto 898 de 2002.',
            },
          ],
        },
        {
          header:
            '¿CUÁLES SON LAS SANCIONES POR NO RENOVAR LA MATRÍCULA MERCANTIL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'El incumplimiento a la obligación legal de renovar la matrícula mercantil dentro del plazo señalado por la ley, puede acarrear sanciones de carácter pecuniario, impuestas por la Superintendencia de Industria y Comercio. Además, puede ser requerido por las autoridades locales que pueden llegar hasta el sellamiento del local por no tener la matrícula al día.',
            },
          ],
        },
        {
          header: '¿CUÁL ES F.P.I (FACTOR DE PARIDAD INTERNACIONAL) VIGENTE?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'El valor correspondiente al F.P.I. vigente en la actualidad corresponde a 2 .04 fijado por la resolución número 10819 del 4 de marzo de 2009 emitida por la Superintendencia de Industria y Comercio.',
            },
          ],
        },
        {
          header: '¿QUÉ DEBO HACER PARA REGISTRAR NOMBRAMIENTOS DE SOCIEDADES?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Se debe traer el acta de nombramiento firmada por secretario y presidente del órgano que se reúne, la cual debe cumplir la totalidad de las formalidades previstas en los artículos 163, 164 y 189 del Código de Comercio. Además, se requiere allegar la carta de aceptación de las personas nombradas. Al momento de traer el acta, se le informará el valor a pagar, que incluye los derechos de inscripción y el impuesto de registro, el cual se liquida respecto de cada nombramiento.',
            },
          ],
        },
        {
          header:
            '¿CÓMO REALIZO UN CAMBIO DE NOMBRE DE UN ESTABLECIMIENTO DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Debe diligenciar el formato para cambio de nombre, este formato debe estar diligenciado por el representante legal o persona natural y se debe hacer presentación personal o debe venir con la firma autenticada y reconocimiento de contenido ante un Notario, Juez o Secretario de la Cámara de Comercio. El formato también se encuentra disponible en nuestra página web (Sección Documentos de Apoyo).',
            },
          ],
        },
        {
          header:
            '¿ES OBLIGATORIO QUE LAS UNIONES TEMPORALES Y LOS CONSORCIOS SE INSCRIBAN ANTE LAS CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Los consorcios y uniones temporales no inscriben en el registro mercantil que llevan las cámaras de comercio, pues no forman una persona jurídica.',
            },
          ],
        },
        {
          header: '¿CUÁNDO SE CONSIDERA QUE HAY HOMONIMIA?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'La homonimia implica la existencia de dos comerciantes (personas naturales, sociedades comerciales o establecimientos de comercio) con nombres idénticos, sin tener en cuenta la naturaleza jurídica (S.A., Ltda.) o nombres reservados para las instituciones financieras o comunes sin reserva para el uso del público en general. No hay homonimia cuando dos nombres son similares.',
            },
          ],
        },
        {
          header: '¿QUÉ DEBO HACER PARA REGISTRAR NUEVOS LIBROS?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Debe diligenciar el formato para inscripción de libros, el cual debe firmar el Representante Legal o el comerciante persona natural, debe traer certificación de la terminación del libro anterior expedida por revisor fiscal o contador público. En caso contrario deberá traer el libro anterior. En ambos se deben pagar los derechos correspondientes.',
            },
          ],
        },
        {
          header:
            '¿SE ME PERDIERON LOS LIBROS, QUÉ DEBO HACER PARA REGISTRAR UNOS NUEVOS?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Debe diligenciar el formato para inscripción de libros, el cual debe firmar el Representante Legal o la persona natural, debe presentar copia auténtica de la denuncia, la cual debe tener como mínimo los datos del libro extraviado, como son, el destino del libro y número de registro en la Cámara de Comercio de Magangué; traer los libros nuevos y pagar los derechos de inscripción.',
            },
          ],
        },
        {
          header:
            '¿EN LA CONTINUACIÓN DE UN LIBRO YA REGISTRADO SE DEBE MANTENER EL MISMO CÓDIGO O SE PUEDE CAMBIAR?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Si el libro que traen tiene consecutivo en la numeración respecto al anterior debe mantener el Nombre y el Código asignados, pero si no conserva el consecutivo puede cambiar tanto el código como el nombre del libro.',
            },
          ],
        },
        {
          header:
            '¿DÓNDE SE PUEDE DENUNCIAR LA PÉRDIDA DE LOS LIBROS DEL COMERCIANTE?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Si se trata de la pérdida de los libros, se puede denunciar en cualquier unidad de denuncia de la Policía Nacional. Si existen indicios de que se ha cometido un ilícito, la denuncia se debe presentar en la Fiscalía General de la Nación.',
            },
          ],
        },
        {
          header:
            '¿SE PUEDE TRANSFORMAR UNA EMPRESA UNIPERSONAL EN SOCIEDAD, A TRAVÉS DE UN DOCUMENTO PRIVADO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'No, de acuerdo con la ley 222, en su artículo 77, siempre que las empresas unipersonales se transformen en sociedades, deben hacerlo a través de escritura pública.',
            },
          ],
        },
        {
          header:
            '¿CUÁL ES LA DIFERENCIA ENTRE UNA SOCIEDAD CIVIL Y UNA SOCIEDAD COMERCIAL?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'La naturaleza civil o comercial de una sociedad se deduce de su objeto social. Si el objeto de una sociedad es civil, en los términos del artículo 23 del Código de Comercio, la misma será civil. La principal diferencia entre unas y otras es que las sociedades comerciales se deben matricular en el registro mercantil, mientras que las sociedades civiles no tienen esta posibilidad.',
            },
          ],
        },
        {
          header:
            '¿CÓMO SE REALIZA LA ENAJENACIÓN DE UN ESTABLECIMIENTO DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Mediante documento privado o escritura pública señalando el establecimiento que se pretende enajenar y con indicación del negocio jurídico que sustenta la operación (compraventa, donación, etc.). Esta operación supone el pago de derechos de matrícula por cada uno de los vendedores o compradores y del impuesto de registro, el cual se causa sobre el valor del negocio jurídico o sin cuantía cuando se hace a título gratuito. También, cuando procede, el pago de la retención en la fuente.',
            },
          ],
        },
        {
          header:
            '¿QUÉ DOCUMENTOS SE REQUIEREN PARA CONSTITUIR UNA ENTIDAD SIN ÁNIMO DE LUCRO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Documento privado de constitución o en su defecto el certificado de la Alcaldía para las entidades constituidas antes de 1995. Estos documentos deben cumplir los requisitos señalados en el art. 40 del decreto 2150 de 1995. También se deberán anexar los formularios de carátula única empresarial, adicional de registros con otras entidades y prerut de la DIAN.',
            },
          ],
        },
        {
          header:
            '¿PUEDE LA SUCURSAL DE UNA SOCIEDAD EXTRANJERA ABRIR AGENCIAS O ESTABLECIMIENTOS DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'No es posible porque las sucursales de sociedad extranjera se consideran establecimientos de comercio.',
            },
          ],
        },
        {
          header:
            '¿PUEDE UN ADMINISTRADOR O REPRESENTANTE LEGAL DE UNA SOCIEDAD REGISTRAR DIRECTAMENTE ANTE LA CÁMARA DE COMERCIO DE MAGANGUÉ SU RENUNCIA?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Si lo puede hacer, pero bajo los efectos de la sentencia C-621 de 2003 de la Corte Constitucional, que señala que los administradores o representantes solamente se retiran del certificado de existencia y representación legal cuando hay nuevos nombramientos o por su remoción.',
            },
          ],
        },
      ],
    },
    {
      header: 'Afiliados',
      dataView: [
        {
          header: '¿QUIÉNES SON AFILIADOS A LA CÁMARA DE COMERCIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Son aquellos comerciantes que, además de cumplir con la obligación anterior, voluntariamente solicitan su afiliación a la Cámara de Comercio, para disfrutar de algunos servicios especiales mediante el pago de una cuota adicional. Igualmente obtienen el derecho a elegir y ser elegidos como miembros de la Junta Directiva.',
            },
          ],
        },
      ],
    },
    {
      header: 'Proponente',
      dataView: [
        {
          header: '¿QUÉ ES EL REGISTRO ÚNICO DE PROPONENTES?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Consiste en la inscripción, clasificación y calificación de todas las personas naturales y jurídicas que aspiran a celebrar contratos de obra, consultoría, suministro y compraventa de bienes muebles con el Estado.',
            },
            {
              tipo: 'parrafo',
              valor:
                'La clasificación la hacen por si mismos los proponentes que se registran de acuerdo con los criterios consagrados en el decreto 1584 de 1994, a saber: experiencia, capacidad financiera y técnica, organización y disponibilidad de equipos.',
            },
          ],
        },
        {
          header:
            '¿CUÁLES SON LAS FECHAS QUE ESTABLECE LA LEY PARA REALIZAR LA INSCRIPCIÓN EN EL NUEVO RUP?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Según lo dispuesto por el Gobierno Nacional, los proponentes actuales y aquellos que aspiren a serlo, deberán inscribirse en el Registro Único de Proponentes según la normatividad vigente. Para realizar este trámite, el proponente debe solicitar el formulario único en cualquier sede de la Cámara de Comercio, diligenciarlo y anexar los documentos exigidos en los decretos que pueden consulta.',
            },
          ],
        },
        {
          header:
            '¿CUÁL ES EL PAPEL DE LAS CÁMARAS DE COMERCIO EN TORNO AL NUEVO RUP?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Las cámaras de comercio dejan de realizar el control formal del formulario y adquieren la función de verificación documental, como un tercero imparcial. Su papel radica en recibir y verificar documentalmente la información de todos los proponentes. Lo certificado por la Cámara es plena prueba para las licitaciones con el Estado y salvo las excepciones legales, las entidades estatales no pueden exigir requisitos adicionales.',
            },
          ],
        },
        {
          header:
            '¿QUÉ PASOS DEBE LLEVAR A CABO EL PROPONENTE PARA REALIZAR SU INSCRIPCIÓN?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'Diligenciar el formulario del RUP o adquiéralo en cualquiera de las sedes de la Cámara de Comercio.',
                'Adjuntar la documentación que acredita la información suministrada en el formulario.',
                'Cancelar los derechos conforme a las tarifas que establezca el Gobierno Nacional.',
                'Dirigirse a la Cámara de Comercio de su domicilio.',
              ],
            },
          ],
        },
      ],
    },
    {
      header: 'Formación empresarial',
      dataView: [
        {
          header: 'FORMACIÓN EMPRESARIAL',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Si desea ampliar información sobre alguna formación puede comunicarse al (095) 687 5362, y/o al correo electrónico desarrolloempresarial@ccmagangue.org.co, o si desea en nuestras oficinas.',
            },
          ],
        },
      ],
    },
    {
      header: 'Tarifas',
      dataView: [
        {
          header: 'TARIFAS DE LOS TRÁMITES',
          contenido: [
            {
              tipo: 'link',
              valor: 'Ver Tarifas',
            },
          ],
        },
      ],
    },
    {
      header: 'Proveedores',
      dataView: [
        {
          header:
            '¿QUÉ REQUISITOS SE REQUIEREN PARA SER PROVEEDOR DE LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'Ser persona natural o jurídica.',
                'Estar matriculado en el Registro Mercantil de las Cámaras de Comercio, cuando su actividad lo requiera.',
                'Haber cumplido con la renovación del Registro Mercantil.',
                'Tener el Rut actualizado con la actividad económica que está ofertando.',
                'No tener inhabilidades e incompatibilidades con la Cámara de Comercio de Magangué.',
              ],
            },
          ],
        },
        {
          header:
            '¿QUÉ DOCUMENTOS SE REQUIEREN EN CASO DE SER CONTRATADO POR LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: undefined,
        },
        {
          header:
            '¿TIENE LA CÁMARA DE COMERCIO DE MAGANGUÉ UN MANUAL DE COMPRAS Y DONDE SE PUEDE CONSULTAR?',
          contenido: undefined,
        },
        {
          header:
            '¿CUÁNTO TIEMPO DEMORA LA CÁMARA DE COMERCIO DE MAGANGUÉ PARA HACER EFECTIVO UN PAGO DE UNA FACTURA DE UN PRODUCTO Y/O SERVICIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Quince (15) días calendario, contados a partir de la radicación en la Ventanilla Única de correspondencia de la entidad.',
            },
          ],
        },
        {
          header: '¿DÓNDE SE RADICAN LAS FACTURAS?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'En la ventanilla única de Correspondencia, ubicada en la Cra. 4 No. 12 – 12, Barrio: Centro, Piso: Uno y Dos, en el horario de 08:00 a.m. a 06:00 p.m.',
            },
          ],
        },
        {
          header:
            '¿QUÉ SUCEDE SI NO SE TIENE CUENTA BANCARIA PARA HACER TRANSFERENCIA POR CONCEPTO DE UN PAGO DE UN PRODUCTO Y/O SERVICIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'En casos especiales se girará cheque para ser cobrado únicamente por el primer beneficiario.',
            },
          ],
        },
        {
          header:
            '¿QUÉ VIGENCIA TIENEN MIS DOCUMENTOS LEGALES RADICADOS COMO PROVEEDOR?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Un (1) año, siempre y cuando en el transcurso de este, no se sufran cambios.',
            },
          ],
        },
        {
          header:
            '¿CÓMO SE SOLICITA LOS CERTIFICADOS DE RETENCIÓN EN LA FUENTE PRACTICADOS POR LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Al correo ccmcontabilidad@ccmagangue.org.co o a contador@ccmagangue.org.co',
            },
          ],
        },
        {
          header:
            '¿CÓMO SE SOLICITA CERTIFICADO DEL SERVICIO PRESTADO Y/O PRODUCTO VENDIDO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Al correo ccmcontabilidad@ccmagangue.org.co o a contador@ccmagangue.org.co',
            },
          ],
        },
        {
          header:
            '¿A QUÉ CORREO ELECTRÓNICO PUEDO PRESENTAR MI PROPUESTA COMERCIAL A LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'Al correo ccmcontabilidad@ccmagangue.org.co o a contador@ccmagangue.org.co',
            },
          ],
        },
        {
          header:
            '¿DEBO PERTENECER A LA JURISDICCIÓN DE LA CÁMARA DE COMERCIO DE MAGANGUÉ PARA PODER COTIZAR UN PRODUCTO Y/O SERVICIO?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'No. Cualquier comerciante puede presentar, cotizar y participar en el proceso de compras de la Cámara de Comercio de Magangué',
            },
          ],
        },
        {
          header:
            '¿A QUÉ NÚMEROS TELEFÓNICOS ME PUEDO COMUNICAR AL ÁREA DE COMPRAS Y PROVEEDORES?',
          contenido: [
            {
              tipo: 'parrafo',
              valor: 'PBX: 2772000 Ext. 1036 o al celular 321-3752480',
            },
          ],
        },
        {
          header:
            '¿QUÉ PRODUCTOS Y/O SERVICIOS CONTRATA LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: [
            {
              tipo: 'parrafo',
              valor:
                'La CÁMARA DE COMERCIO DE MAGANGUÉ compra productos y/o contrata servicios de diferentes categorías, que tienen que ver con el giro ordinario de sus operaciones y los que se desglosan de los convenios y contratos suscritos con entidades de orden nacional, públicos, privados y aliados estratégicos, entre ellos (Impresiones, diseño, montajes de stand, papelería y elementos de escritorio, productos de aseo y cafetería, capacitadores, consultores, asesores, refrigerios, servicio de restaurante, herramientas agrícolas, equipos de cómputo y software, remodelación, adecuación, transporte terrestre y aéreo, mobiliario para oficina y mantenimiento de infraestructura entre otros.',
            },
          ],
        },
        {
          header:
            '¿QUÉ INFORMACIÓN MÍNIMA DEBE CONTENER MI COTIZACIÓN O PROPUESTA?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'Descripción detallada del producto y/o servicio indicando las características, cantidades y calidad exigida.',
                'Tiempo de entrega del producto y/o servicio en días hábiles.',
                'Valor del producto y/o servicio (incluido impuestos), adjuntar el Rut.',
                'Forma de Pago (Pago anticipado, contado, contra entrega y/o anticipo el cual no puede ser superior al 50% del valor del producto y/o servicio y se requerirá póliza de garantía).',
                'Garantías que ofrece.',
              ],
            },
          ],
        },
        {
          header:
            '¿QUÉ ACTIVIDADES NO REQUIEREN ESTAR MATRICULADOS EN LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: [
            {
              tipo: 'lista',
              valor: [
                'Los artistas y los talleres para confeccionar sus propias obras. Esto es distinto de quienes comercian con obras de arte, los cuales deben, efectuar su matrícula mercantil.',
                'Los profesionales y sus oficinas o consultorios destinados a realizar su profesión.',
                'Los agricultores y sus depósitos donde almacenan su propia cosecha para distribuirla en el mercado, esto es diferente a montar una compraventa de productos agrícolas, la cual se debe matricular.',
                'Cantantes, artistas musicales solistas.',
              ],
            },
          ],
        },
        {
          header:
            '¿DÓNDE SE ENCUENTRA INFORMACIÓN DE LAS CONTRATACIONES DE LA CÁMARA DE COMERCIO DE MAGANGUÉ?',
          contenido: undefined,
        },
      ],
    },
  ];
}
