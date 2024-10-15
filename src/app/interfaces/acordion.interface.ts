export interface AccordionInterface {
    header: string;
    contenido: Contenido[] | undefined;
}

interface Contenido {
    tipo: string;
    valor: string | string[];
}