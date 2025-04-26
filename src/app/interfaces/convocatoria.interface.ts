export interface ConvocatoriaInterface {
  id?: number;
  titulo: string;
  fecha: string;
  imagen: string;
  resumen: string;
  contenido: string;
  estado: 'activo' | 'inactivo';
}