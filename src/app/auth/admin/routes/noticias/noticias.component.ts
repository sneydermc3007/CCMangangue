import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  public tabs: any[] = [
    {
      header: 'Listar',
    },
    {
      header: 'Acciones',
    },
  ];

  noticias: any[] = [
    {
      "titulo": "Nueva alianza comercial en Magangué",
      "descripcion": "La Cámara de Comercio de Magangué ha firmado una nueva alianza para fortalecer el desarrollo económico de la región.",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNWC1oDHFXZYgMMiRsK8sNGCweAz3Z2Nvrg&s"
    },
    {
      "titulo": "Feria de emprendimiento 2024",
      "descripcion": "Se llevará a cabo la feria de emprendimiento donde los jóvenes empresarios podrán mostrar sus productos e innovaciones.",
      "imagen": "https://www.uniminuto.edu/sites/default/files/2022-09/uniminuto%20feria%20de%20emprendimiento.JPG"
    },
    {
      "titulo": "Seminario sobre transformación digital",
      "descripcion": "Expertos en tecnología compartirán sus conocimientos en un seminario gratuito sobre transformación digital y su impacto en los negocios.",
      "imagen": "https://media.licdn.com/dms/image/v2/D4D12AQEUjweJFKmCSQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1654121716736?e=2147483647&v=beta&t=EDLgPCur7YGJg-fpJlOEJEXyjQcd-nqBE5YY-KpunWM"
    }
  ];

  acciones = [
    { id: 1, nombre: "Publicar Noticia", descripcion: "Publica una nueva noticia en el portal", estado: "Activo" },
    { id: 2, nombre: "Actualizar Banner", descripcion: "Modifica el banner de la página principal", estado: "Inactivo" },
    { id: 3, nombre: "Revisar Comentarios", descripcion: "Verifica y aprueba comentarios de los usuarios", estado: "Activo" },
    { id: 4, nombre: "Enviar Boletín", descripcion: "Envía el boletín mensual a los suscriptores", estado: "Pendiente" }
  ];

  displayEditModal = false; // Controla la visibilidad del modal
  selectedAccion: any = {}; // Almacena la acción seleccionada para editar

  estados = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
    { label: 'Pendiente', value: 'Pendiente' }
  ];

  // Método para abrir el modal de edición
  openEditModal(accion: any) {
    this.selectedAccion = { ...accion }; // Crea una copia de la acción seleccionada
    this.displayEditModal = true;
  }

  // Método para guardar cambios
  saveChanges() {
    const index = this.acciones.findIndex(a => a.id === this.selectedAccion.id);
    if (index !== -1) {
      this.acciones[index] = { ...this.selectedAccion }; // Actualiza la acción en la lista
    }
    this.displayEditModal = false;
  }

  // Método para eliminar una acción
  deleteAccion(id: number) {
    this.acciones = this.acciones.filter(accion => accion.id !== id);
  }
}
