export interface MenuItem {
    label: string;
    link: string;
    description: string;
}
  
export interface MenuCategory {
    label: string;
    elementos: MenuItem[];
}
  
const menu: MenuCategory[] = [
    {
        label: 'Asociaciones',
        elementos: [
            { label: 'Acta de Disolución Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/ACTA_DISOLUCIÓN_ASOCIACIÓN.docx', description: '...' },
            { label: 'Acta de Liquidación Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/ACTA_LIQUIDACIÓN_ASOCIACIÓN.docx', description: '...' },
            { label: 'Acta de Nombramiento Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/ACTA_NOMBRAMIENTO_ASOCIACIÓN.docx', description: '...' },
            { label: 'Acta de Reforma Estatutaria Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/ACTA_REFORMAR_ESTATUTARIA_ASOCIACIÓN.docx', description: '...' },
            { label: 'Carta de Aceptación Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/CARTA_ACEPTACIÓN_ASOCIACIÓN.docx', description: '...' },
            { label: 'Estatutos Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/ESTATUTOS_ASOCIACIÓN.docx', description: '...' },
            { label: 'Acta de Reactivación Asociación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ASOCIACIONES/ACTA_REACTIVACIÓN_ASOCIACIÓN.docx', description: '...' }
        ]
    },
    {
        label: 'Corporaciones',
        elementos: [
            { label: 'Acta de Constitución Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ACTA_CONSTITUCIÓN_CORPORACIÓN.docx', description: '...' },
            { label: 'Acta de Disolución Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ACTA_DISOLUCIÓN_CORPORACIÓN.docx', description: '...' },
            { label: 'Acta de Liquidación Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ACTA_LIQUIDACIÓN_CORPORACIÓN.docx', description: '...' },
            { label: 'Acta de Nombramiento Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ACTA_NOMBRAMIENTO_CORPORACIÓN.docx', description: '...' },
            { label: 'Acta de Reforma Estatutaria Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ACTA_REFORMA_ESTATUTARIA_CORPORACIÓN.docx', description: '...' },
            { label: 'Carta de Aceptación Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/CARTA_ACEPTACIÓN_CORPORACIÓN.docx', description: '...' },
            { label: 'Estatutos Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ESTATUTOS_CORPORACIÓN.docx', description: '...' },
            { label: 'Acta de Reactivación Corporación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/CORPORACIONES/ACTA_REACTIVACIÓN_CORPORACIÓN.docx', description: '...' }
        ]
    },
    {
        label: 'Fundaciones',
        elementos: [
            { label: 'Acta de Constitución Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ACTA_CONSTITUCIÓN_FUNDACIÓN.docx', description: '...' },
            { label: 'Acta de Disolución Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ACTA_DISOLUCIÓN_FUNDACIÓN.docx', description: '...' },
            { label: 'Acta de Liquidación Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ACTA_LIQUIDACIÓN_FUNDACIÓN.docx', description: '...' },
            { label: 'Acta de Nombramiento Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ACTA_NOMBRAMIENTO_FUNDACIÓN.docx', description: '...' },
            { label: 'Acta de Reforma Estatutaria Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ACTA_REFORMA_ESTATUTARIA_FUNDACIÓN.docx', description: '...' },
            { label: 'Carta de Aceptación Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/CARTA_ACEPTACIÓN_FUNDACIÓN.docx', description: '...' },
            { label: 'Estatutos Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ESTATUTOS_FUNDACIÓN.docx', description: '...' },
            { label: 'Acta de Reactivación Fundación', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/FUNDACIONES/ESTATUTOS_FUNDACIÓN.docx', description: '...' },
        ]
    },
    {
        label: 'SAS',
        elementos: [
            { label: 'Estatutos S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SAS/CAMBIO_ESTATUTOS_SAS.docx', description: '...' },
            { label: 'Acta de Disolución S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SAS/ACTA_DISOLUCIÓN_SAS.docx', description: '...' },
            { label: 'Acta de Liquidación S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SAS/ACTA_LIQUIDACIÓN_SAS.docx', description: '...' },
            { label: 'Acta de Nombramiento S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SAS/ACTA_NOMBRAMIENTO_SAS.docx', description: '...' },
            { label: 'Acta de Reforma Estatutaria S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SAS/ACTA_REFORMAR_ESTATUTARIA_SAS.docx', description: '...' },
            { label: 'Certificación Aumento de Capital Suscrito y Pagado S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SAS/MODELO_CERTIFICADO_AUMENTO_CAPITAL_SAS.docx', description: '...' },
        ]
    },
    {
        label: 'LTDA',
        elementos: [
            { label: 'Acta de Cesión de Cuotas LTDA', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/ACTA_CESIÓN_CUOTAS_LTDA.docx', description: '...' },
            { label: 'Acta de Disolución LTDA', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/ACTA_DISOLUCIÓN_LTDA.docx', description: '...' },
            { label: 'Acta de Liquidación LTDA', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/ACTA_LIQUIDACIÓN_LTDA.docx', description: '...' },
            { label: 'Acta de Nombramiento LTDA', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/ACTA_NOMBRAMIENTO_LTDA.docx', description: '...' },
            { label: 'Acta de Reforma Estatutaria LTDA', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/ACTA_REFORMA_ESTATUTARIA_LTDA.docx', description: '...' },
            { label: 'Acta de Transformación de LTDA a S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/ACTA_TRANFORMACIÓN_LTDA_SAS.docx', description: '...' },
            { label: 'Modelo de Constitución LTDA', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/LTDA/MODELO_CONSTITUCIÓN_LIMITADA.docx', description: '...' }
        ]
    },
    {
        label: 'Sociedad Anónima',
        elementos: [
          { label: 'Acta de Disolución S.A', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SOCIEDAD_ANÓNIMA/ACTA_DISOLUCIÓN_S.A.docx', description: '...' },
          { label: 'Acta de Liquidación S.A', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SOCIEDAD_ANÓNIMA/ACTA_LIQUIDACIÓN_S.A.docx', description: '...' },
          { label: 'Acta de Nombramiento S.A', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SOCIEDAD_ANÓNIMA/ACTA_NOMBRAMIENTO_S.A.docx', description: '...' },
          { label: 'Acta de Reforma Estatutaria S.A', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SOCIEDAD_ANÓNIMA/ACTA_REFORMAR_ESTATUTARIA_S.A.docx', description: '...' },
          { label: 'Acta de Transformación de S.A. a S.A.S', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SOCIEDAD_ANÓNIMA/MODELO_ACTA_TRANFORMACIÓN_S.A_S.A.S.odt', description: '...' },
          { label: 'Certificación Aumento de Capital S.A', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/SOCIEDAD_ANÓNIMA/MODELO_CERTIFICADO_AUMENTO_CAPITAL_S.A.docx', description: '...' },

        ]
    },
    {
        label: 'Poderes',
        elementos: [
            { label: 'Modelo de Poder Especial Cambio de Actividad', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CAMBIO_ACTIVIDAD.doc', description: '...' },
            { label: 'Modelo de Poder Especial Cambio de Dirección', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CAMBIO_DIRECCIÓN.doc', description: '...' },
            { label: 'Modelo de Poder Especial Cambio de Domicilio Comerciante', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CAMBIO_DOMICILIO_COMERCIANTE.doc', description: '...' },
            { label: 'Modelo de Poder Especial Cambio de Nombre Establecimiento', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CAMBIO_NOMBRE_ESTABLECIMIENTO.doc', description: '...' },
            { label: 'Modelo de Poder Especial Cancelación Comerciante y Establecimiento', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CANCLACIÓN_COMERCIANTE_ESTABLECIMIENTO.doc', description: '...' },
            { label: 'Modelo de Poder Especial Cancelación Comerciante', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CANCELACIÓN_COMERCIANTE.doc', description: '...' },
            { label: 'Modelo de Poder Especial Cancelación Establecimiento', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_CANCELACIÓN_ESTABLECIMIENTO.doc', description: '...' },
            { label: 'Modelo de Poder Especial de Compraventa', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_COMPRAVENTA.docx', description: '...' },
            { label: 'Modelo de Poder Especial para Matricula Mercantil', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/PODERES/MODELO_PODER_ESPECIAL_MATRÍCULA_MERCANTIL.doc', description: '...' },
        ]
    },
    {
        label: 'Establecimiento de Comercio',
        elementos: [
            { label: 'Contrato de Arrendamiento de Establecimiento de Comercio', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ESTABLECIMIENTOS_COMERCIO/MODELO_CONTRATO_ARRENDAMIENTO_ESTABLECIMIENTOS_COMERCIO.docx', description: '...' },
            { label: 'Contrato de Compraventa de Establecimiento de Comercio', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ESTABLECIMIENTOS_COMERCIO/MODELO_CONTRATO_COMPRAVENTA_ESTABLECIMIENTO_COMERCIO.docx', description: '...' },
            { label: 'Contrato de Preposición de Establecimiento de Comercio', link: 'docs/MODELOS_ACTOS_DOCUMENTOS/ESTABLECIMIENTOS_COMERCIO/MODELO_CONTRATO_PREPOSICIÓN_ESTABLECIMIENTO_COMERCIO.docx', description: '...' }
        ]
    },
    {
        label: 'Otros',
        elementos: [
            { label: 'Constitución Sociedad en Comandita Simple', link: '', description: '...' },
            { label: 'Constitución Sociedad de Economía Mixta', link: '', description: '...' },
            { label: 'Empresa Asociativa de Trabajo - EAT', link: '', description: '...' },
            { label: 'Minuta Constitución de Empresa Unipersonal', link: '', description: '...' },
            { label: 'Minuta Sociedad Agraria de Transformación SAT', link: '', description: '...' },
        ]
    },
    {
        label: 'Documentos de Apoyo',
        elementos: [
            { label: 'CARTA LEY 1429 de 2010', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/CARTA_LEY_1429_2010.docx', description: '...' },
            { label: 'FORMATO DE EVIDENCIA DE IDENTIFICACION DE LA PERSONA QUE REALIZA TRAMITE PRESENCIAL', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_EVIDENCIA_IDENTIFICACIÓN_LA_PERSONA_QUE_REALIZA_TRÁMITE_PRESENCIAL.docx', description: '...' },
            { label: 'FORMATO DE AUTORIZACION DE MATRICULAS E INSCRIPCIONES', link: '', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE ACTIVIDAD COMERCIAL', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_PARA_CAMBIO_ACTIVIDAD_COMERCIAL.docx', description: '...' },
            { label: 'FORMATO DE REGISTRO DE LIBROS', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_REGISTRO_LIBROS.docx', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE NOMBRE DE AGENCIA', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_PARA_CAMBIO_NOMBRE_AGENCIA.docx', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE DIRECCIÓN Y ACTIVIDAD ECONÓMICA', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_PARA_CAMBIO_DIRECCIÓN_ACTIVIDAD_ECONÓMICA.docx', description: '...' },
            { label: 'FORMATO PARA PETICIONES Y CONSULTAS', link: '', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE NOMBRE DE ESTABLECIMIENTO DE COMERCIO', link: '', description: '...' },
            { label: 'REQUISITOS APERTURA DE SUCURSAL', link: '', description: '...' },
            { label: 'FORMATO PARA TRASLADO DE DOMICILIO PERSONA NATURAL', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_PARA_TRASLADO_DOMICILIO_PERSONA_NATURAL.docx', description: '...' },
            { label: 'REQUISITOS COMPRAVENTA A TITULO GRATUITO DE ESTABLECIMIENTO DE COMERCIO', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITO_COMPRAVENTA_CESIÓN_TITULO_GRATUITO_ESTABLECIMIENTO_COMERCIO.docx', description: '...' },
            { label: 'REQUISITO MATRICULA DE PERSONAL NATURAL', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITOS_MATRICULA_PERSONA_NATURAL.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION EAT', link: '', description: '...' },
            { label: 'REQUISITOS CANCELACION DE PERSONA NATURAL - ESTABLECIMIENTO DE COMERCIO', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITOS_CANCELACIÓN_PERSONA_NATURAL_ESTABLECIMIENTO_COMERCIO.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION ENTIDADES DEL SECTOR SOLIDARIO', link: '', description: '...' },
            { label: 'REQUISITOS CONSTITUCION DE ENTIDADES SIN ANIMO DE LUCRO', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITO_CONSTITUCIÓN_SIN_ANIMO_LUCRO.docx', description: '...' },
            { label: 'REQUISITOS DE APERTURA DE AGENCIA', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITOS_PARA_APERTURA_AGENCIA.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION EMPRESA UNIPERSONAL', link: '', description: '...' },
            { label: 'REQUISITOS MATRICULA SOCIEDAD DE HECHO', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITO_MATRICULA_SOCIEDAD_HECHO.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION SOCIEDADES COMERCIALES', link: '', description: '...' },
            { label: 'SOLICITUD DE CANCELACION MATRICULA MERCANTIL', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/SOLICITUD_CANCELACIÓN_MATRÍCULA_MERCANTIL.docx', description: '...' },
            { label: 'REQUISITOS DISOLUCION Y LIQUIDACION ENTIDAD SIN ANIMO DE LUCRO', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/REQUISITOS_DISOLUCIÓN_LIQUIDACIÓN_ENTIDAD_SIN_ÁNIMO_LUCRO.docx', description: '...' },
            { label: 'SOLICITUD DE REVOCACION DATOS PERSONALES', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/SOLICITUD_REVOCACIÓN_AUTORIZACIÓN_DATOS_PERSONALES .docx', description: '...' },
            { label: 'SOLICITUD ACCESO A DATOS PERSONALES', link: '', description: '...' },
            { label: 'Modelo Capacidad Operativa Persona Natural', link: '', description: '...' },
            { label: 'SOLICITUD DE RECTIFICACION O ACTUALIZACION DE DATOS PERSONALES', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/SOLICITUD_RECTIFICACIÓN_ACTUALIZACIÓN_DATOS_PERSONALES.docx', description: '...' },
            { label: 'SOLICITUD DE SUPRESION DE DATOS PERSONALES', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/SOLICITUD_SUPRESIÓN_DATOS_PERSONALES.docx', description: '...' },
            { label: 'Modelo Capacidad Técnica Persona Jurídica', link: '', description: '...' },
            { label: 'LISTA DE CHEQUEO PARA INSCRIPCIÓN Y ACTUALIZACIÓN REGISTRO NACIONAL DE TURISMO', link: '', description: '...' },
            { label: 'Modelo Cumplimiento Ley 1336 de 2009 Persona Jurídica', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/CUMPLIMIENTO_LEY_1336_2009_PJ.docx', description: '...' },
            { label: 'Modelo Capacidad Técnica Persona Natural', link: '', description: '...' },
            { label: 'Formato 2 Socio Unico No Controlante - Decreto 667 de 2018', link: '', description: '...' },
            { label: 'Modelo Cumplimiento Ley 1336 de 2009 Persona Natural', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/CUMPLIMIENTO_LEY_1336_2009_PERSONA_NATURAL.docx', description: '...' },
            { label: 'Modelo Capacidad Operativa Persona Jurídica', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/MODELO_CAPACIDAD_OPERATIVA_PJ.docx', description: '...' },
            { label: 'Formato 1 Socio Unico Controlante - Decreto 667 de 2018', link: 'public/docs/MODELOS_ACTOS_DOCUMENTOS/DOCUMENTOS_APOYO/FORMATO_1_DECRETO_667_2018.pdf', description: '...' }
        ]
    }
];
  
export const getMenu = (): MenuCategory[] => {
    return menu;
};

export const getMenuCategory = (categoryLabel: string): MenuCategory | undefined => {
    return menu.find(category => category.label === categoryLabel);
};

export const getMenuItemsByCategory = (categoryLabel: string): MenuItem[] | undefined => {
    const category = menu.find(c => c.label === categoryLabel);
    return category ? category.elementos : undefined;
};