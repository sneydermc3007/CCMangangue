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
            { label: 'Acta de Disolución Asociación', link: '', description: '...' },
            { label: 'Acta de Liquidación Asociación', link: '', description: '...' },
            { label: 'Acta de Nombramiento Asociación', link: '', description: '...' },
            { label: 'Acta de Reforma Estatutaria Asociación', link: '', description: '...' },
            { label: 'Carta de Aceptación Asociación', link: '', description: '...' },
            { label: 'Estatutos Asociación', link: '', description: '...' },
            { label: 'Acta de Reactivación Asociación', link: '', description: '...' }
        ]
    },
    {
        label: 'Corporaciones',
        elementos: [
            { label: 'Acta de Constitución Corporación', link: '', description: '...' },
            { label: 'Acta de Disolución Corporación', link: '', description: '...' },
            { label: 'Acta de Liquidación Corporación', link: '', description: '...' },
            { label: 'Acta de Nombramiento Corporación', link: '', description: '...' },
            { label: 'Acta de Reforma Estatutaria Corporación', link: '', description: '...' },
            { label: 'Carta de Aceptación Corporación', link: '', description: '...' },
            { label: 'Estatutos Corporación', link: '', description: '...' },
            { label: 'Acta de Reactivación Corporación', link: '', description: '...' }
        ]
    },
    {
        label: 'Fundaciones',
        elementos: [
            { label: 'Acta de Constitución Fundación', link: '', description: '...' },
            { label: 'Acta de Disolución Fundación', link: '', description: '...' },
            { label: 'Acta de Liquidación Fundación', link: '', description: '...' },
            { label: 'Acta de Nombramiento Fundación', link: '', description: '...' },
            { label: 'Acta de Reforma Estatutaria Fundación', link: '', description: '...' },
            { label: 'Carta de Aceptación Fundación', link: '', description: '...' },
            { label: 'Estatutos Fundación', link: '', description: '...' },
            { label: 'Acta de Reactivación Fundación', link: '', description: '...' },
        ]
    },
    {
        label: 'SAS',
        elementos: [
            { label: 'Estatutos S.A.S', link: '', description: '...' },
            { label: 'Acta de Disolución S.A.S', link: '', description: '...' },
            { label: 'Acta de Liquidación S.A.S', link: '', description: '...' },
            { label: 'Acta de Nombramiento S.A.S', link: '', description: '...' },
            { label: 'Acta de Reforma Estatutaria S.A.S', link: '', description: '...' },
            { label: 'Certificación Aumento de Capital Suscrito y Pagado S.A.S', link: '', description: '...' },
        ]
    },
    {
        label: 'LTDA',
        elementos: [
            { label: 'Acta de Cesión de Cuotas LTDA', link: '', description: '...' },
            { label: 'Acta de Disolución LTDA', link: '', description: '...' },
            { label: 'Acta de Liquidación LTDA', link: '', description: '...' },
            { label: 'Acta de Nombramiento LTDA', link: '', description: '...' },
            { label: 'Acta de Reforma Estatutaria LTDA', link: '', description: '...' },
            { label: 'Acta de Transformación de LTDA a S.A.S', link: '', description: '...' },
            { label: 'Modelo de Constitución LTDA', link: '', description: '...' }
        ]
    },
    {
        label: 'Sociedad Anónima',
        elementos: [
          { label: 'Acta de Disolución S.A', link: '', description: '...' },
          { label: 'Acta de Liquidación S.A', link: '', description: '...' },
          { label: 'Acta de Nombramiento S.A', link: '', description: '...' },
          { label: 'Acta de Reforma Estatutaria S.A', link: '', description: '...' },
          { label: 'Acta de Transformación de S.A. a S.A.S', link: '', description: '...' },
          { label: 'Certificación Aumento de Capital S.A', link: '', description: '...' },

        ]
    },
    {
        label: 'Poderes',
        elementos: [
            { label: 'Modelo de Poder Especial Cambio de Actividad', link: '', description: '...' },
            { label: 'Modelo de Poder Especial Cambio de Dirección', link: '', description: '...' },
            { label: 'Modelo de Poder Especial Cambio de Domicilio Comerciante', link: '', description: '...' },
            { label: 'Modelo de Poder Especial Cambio de Nombre Establecimiento', link: '', description: '...' },
            { label: 'Modelo de Poder Especial Cancelación Comerciante y Establecimiento', link: '', description: '...' },
            { label: 'Modelo de Poder Especial Cancelación Comerciante', link: '', description: '...' },
            { label: 'Modelo de Poder Especial Cancelación Establecimiento', link: '', description: '...' },
            { label: 'Modelo de Poder Especial de Compraventa', link: '', description: '...' },
            { label: 'Modelo de Poder Especial para Matricula Mercantil', link: '', description: '...' },
        ]
    },
    {
        label: 'Establecimiento de Comercio',
        elementos: [
            { label: 'Contrato de Arrendamiento de Establecimiento de Comercio', link: '', description: '...' },
            { label: 'Contrato de Compraventa de Establecimiento de Comercio', link: '', description: '...' },
            { label: 'Contrato de Preposición de Establecimiento de Comercio', link: '', description: '...' }
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
            { label: 'CARTA LEY 1429 de 2010', link: 'https://ccmagangue.org.co/media/pdf/COSTUMBREMERCANTIL2023.pdf', description: '...' },
            { label: 'FORMATO DE EVIDENCIA DE IDENTIFICACION DE LA PERSONA QUE REALIZA TRAMITE PRESENCIAL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/687388Formatos.docx', description: '...' },
            { label: 'FORMATO DE AUTORIZACION DE MATRICULAS E INSCRIPCIONES', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/687376Formatos-2.docx', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE ACTIVIDAD COMERCIAL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502695Formato.docx', description: '...' },
            { label: 'FORMATO DE REGISTRO DE LIBROS', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502628Formato.docx', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE NOMBRE DE AGENCIA', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502685Formato.docx', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE DIRECCIÓN Y ACTIVIDAD ECONÓMICA', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/costumbremercantil2020.pdf', description: '...' },
            { label: 'FORMATO PARA PETICIONES Y CONSULTAS', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502612Formato.docx', description: '...' },
            { label: 'FORMATO PARA CAMBIO DE NOMBRE DE ESTABLECIMIENTO DE COMERCIO', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502627Formato.docx', description: '...' },
            { label: 'REQUISITOS APERTURA DE SUCURSAL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506291Formato.docx', description: '...' },
            { label: 'FORMATO PARA TRASLADO DE DOMICILIO PERSONA NATURAL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502680Formato.docx', description: '...' },
            { label: 'REQUISITOS COMPRAVENTA A TITULO GRATUITO DE ESTABLECIMIENTO DE COMERCIO', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506281Formato.docx', description: '...' },
            { label: 'REQUISITO MATRICULA DE PERSONAL NATURAL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506260Formato.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION EAT', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506273Formato.docx', description: '...' },
            { label: 'REQUISITOS CANCELACION DE PERSONA NATURAL - ESTABLECIMIENTO DE COMERCIO', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506283Formato.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION ENTIDADES DEL SECTOR SOLIDARIO', link: 'https://ccmagangue.org.co/media/pdf/COSTUMBREMERCANTIL2023.pdf', description: '...' },
            { label: 'REQUISITOS CONSTITUCION DE ENTIDADES SIN ANIMO DE LUCRO', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506272Formato.docx', description: '...' },
            { label: 'REQUISITOS DE APERTURA DE AGENCIA', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506261Formato.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION EMPRESA UNIPERSONAL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506263Formato.docx', description: '...' },
            { label: 'REQUISITOS MATRICULA SOCIEDAD DE HECHO', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506277Formato.docx', description: '...' },
            { label: 'REQUISITOS CONSTITUCION SOCIEDADES COMERCIALES', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506274Formato.docx', description: '...' },
            { label: 'SOLICITUD DE CANCELACION MATRICULA MERCANTIL', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/502621Formato.docx', description: '...' },
            { label: 'REQUISITOS DISOLUCION Y LIQUIDACION ENTIDAD SIN ANIMO DE LUCRO', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506275Formato-1.docx', description: '...' },
            { label: 'SOLICITUD DE REVOCACION DATOS PERSONALES', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506275Formato-1.docx', description: '...' },
            { label: 'SOLICITUD ACCESO A DATOS PERSONALES', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506293Formato.docx', description: '...' },
            { label: 'Modelo Capacidad Operativa Persona Natural', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/MODELO-CAPACIDAD-TECNICA-PERSONA-NATURAL.docx', description: '...' },
            { label: 'SOLICITUD DE RECTIFICACION O ACTUALIZACION DE DATOS PERSONALES', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506285Formato.docx', description: '...' },
            { label: 'SOLICITUD DE SUPRESION DE DATOS PERSONALES', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/506292Formato.docx', description: '...' },
            { label: 'Modelo Capacidad Técnica Persona Jurídica', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/MODELO-CAPACIDAD-OPERATIVA-PERSONA-JURIDICA.docx', description: '...' },
            { label: 'LISTA DE CHEQUEO PARA INSCRIPCIÓN Y ACTUALIZACIÓN REGISTRO NACIONAL DE TURISMO', link: 'https://ccmagangue.org.co/media/pdf/costumbremercantil2009.pdf', description: '...' },
            { label: 'Modelo Cumplimiento Ley 1336 de 2009 Persona Jurídica', link: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/11/MODELO-CUMPLIMIENTO-LEY-1336-DE-2009-PERSONA-NATURAL.docx', description: '...' },
            { label: 'Modelo Capacidad Técnica Persona Natural', link: 'https://ccmagangue.org.co/v2/download/modelo-capacidad-tecnica-persona-natural/?wpdmdl=4389&refresh=672cd73337c521730991923', description: '...' },
            { label: 'Formato 2 Socio Unico No Controlante - Decreto 667 de 2018', link: 'https://ccmagangue.org.co/media/pdf/COSTUMBREMERCANTIL2023.pdf', description: '...' },
            { label: 'Modelo Cumplimiento Ley 1336 de 2009 Persona Natural', link: 'https://ccmagangue.org.co/v2/download/modelo-cumplimiento-ley-1336-de-2009-persona-natural/?wpdmdl=4391&refresh=672cd7333be011730991923', description: '...' },
            { label: 'Modelo Capacidad Operativa Persona Jurídica', link: 'https://ccmagangue.org.co/v2/download/modelo-capacidad-operativa-persona-juridica/?wpdmdl=4387&refresh=672cd7333f6581730991923', description: '...' },
            { label: 'Formato 1 Socio Unico Controlante - Decreto 667 de 2018', link: 'https://ccmagangue.org.co/pdf/sas/Decreto667de2018Formato1.pdf', description: '...' }
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