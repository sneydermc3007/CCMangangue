import { Component } from '@angular/core';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrl: './capacitaciones.component.scss'
})
export class CapacitacionesComponent {
  public searchTerm: string = '';

  public capacitaciones: any[] = [
    {
      fecha: 'NOV 07',
      imagen: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2023/11/Black-Modern-Chef-Hiring-Facebook-Post.png?w=940&ssl=1',
      titulo: 'CURSO DE “MANIPULACIÓN DE ALIMENTOS “',
      descripcion: '📄Contribuyendo al desarrollo empresarial de la región, la Cámara de Comercio de Magangué en conjunto con el Servicio Nacional de Aprendizaje (SENA), te invitamos a participar del curso de "Manipulación de Alimentos "👌📣Dirigido al sector restaurante - hombres y mujeres que deseen mejorar sus habilidades...'
    },
    {
     fecha: 'SEP 20',
      imagen: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2023/09/Posteo-de-Instagram-Conferencia-charla-doctor-minimalista-azul-18.png?w=1080&ssl=1',
      titulo: 'BENEFICIOS TRIBUTARIOS',
      descripcion: 'Formación empresarial virtual👩🏻‍💼Temáticas: Beneficio Tributario Conferencistas: Gissela SalazarTe esperamos en: ⏰A las 4:00pm Este viernes 22 de septiembre de 2023¡Prográmate y aprende con nosotros!¡Te esperamos!#Formación #Capacitaciones #CámaraDeComercioMagangué #Bolivar #Magangué'
    }
  ];


  public filteredConvocatorias() {
    return this.capacitaciones.filter(capacitacion => {
      return capacitacion.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        capacitacion.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
