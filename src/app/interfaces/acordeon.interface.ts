export interface AcordeonInterface {
    header: string;
    contenido: Contenido[] | undefined;
}

interface Contenido {
    tipo: string;
    valor: (string | Valor)[] | string | Valor;
    enlace?: string;
}

interface Valor {
    label?: string;
    pagina?: string;
    enlace?: string;
    archivo?: string;
    subitems?: Valor[];
    menu?: any;
}