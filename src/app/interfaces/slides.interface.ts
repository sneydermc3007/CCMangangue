export interface SlideInterface {
  id: number;
  pagina_id: number;
  posicion: number;
  estado: string;
  link: null | string;
  tipo_link: string;
  portada_url: string;
  pagina: PaginaInterface | null;
}

export interface PaginaInterface {
  id: number;
  titulo: string;
  contenido: null;
  imagen_principal: null;
  imagen_segundaria: null;
  tipo: string;
}
