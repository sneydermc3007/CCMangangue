import { Component } from '@angular/core';

@Component({
  selector: 'app-elecciones-junta',
  templateUrl: './elecciones-junta.component.html',
  styleUrl: './elecciones-junta.component.scss'
})
export class EleccionesJuntaComponent {
  documentList = [
    { date: '', description: 'Cronograma de Elección de Junta Directiva', downloadLink: ''},
    { date: '', description: 'Normativa de Elecciones de Junta Directiva  Ley 1727 de 2014', downloadLink: ''},
    { date: '', description: 'Normativa de Elecciones de Junta Directiva  Decreto 2042 de 2014', downloadLink: ''},
    { date: '01 de Agosto de 2022', description: 'Designación de personal encargado de recepcionar PQR de Elecciones', downloadLink: '' },
    { date: '01 de Agosto de 2022', description: 'Publicidad en certificados de las elecciones de Junta Directiva', downloadLink: '' },
    { date: '02 de agosto 2022', description: 'Preguntas y Respuestas sobre las Elecciones de Junta Directiva de la Cámara de Comercio de Magangué', downloadLink: '' },
    { date: '30 de agosto de 2022', description: 'Primera publicidad de elecciones de Junta Directiva', downloadLink: '' },
    { date: '30 de agosto de 2022', description: 'Publicidad en Certificados de las elecciones de Junta directiva Modificada', downloadLink: '' },
    { date: '01 septiembre de 2022', description: 'Publicidad Invitación a participar en elecciones de Revisoría Fiscal', downloadLink: '' },
    { date: '02 septiembre de 2022', description: 'Primera depuración del censo electoral', downloadLink: '' },
    { date: '15 septiembre de 2022', description: 'Oficio Proceso de Elección de los Miembros de Junta Directiva', downloadLink: '' },
    { date: '14 de Octubre de 2022', description: 'Formato de Aceptación de los candidatos – Persona Natural', downloadLink: '' },
    { date: '14 de Octubre de 2022', description: 'Formato de Aceptación de los candidatos – Persona Jurídica', downloadLink: '' },
    { date: '14 de Octubre de 2022', description: 'Formato Acta de Inscripción de listas', downloadLink: '' },
    { date: '31 de Octubre de 2022', description: 'Segunda depuración del censo electoral', downloadLink: '' },
    { date: '09 de Noviembre de 2022', description: 'Segunda publicidad de Elecciones de Junta Directiva', downloadLink: '' },
    { date: '09 de Noviembre de 2022', description: 'Designación de Jurado para  Primer Sorteo', downloadLink: '' },
    { date: '17 de Noviembre de 2022', description: 'Listado de Candidatos Aprobados por la Superintendencia de sociedades', downloadLink: '' },
    { date: '22 de Noviembre de 2022', description: 'Designación de Jurado para  Segundo Sorteo', downloadLink: '' },
    { date: '24 de Noviembre de 2022', description: 'Tarjetones para elección de Junta Directiva y Revisor Fiscal – Muestra no válida para votar', downloadLink: '' },
    { date: '06 de Enero de 2023', description: 'Cronograma de Elecciones de Revisoría Fiscal', downloadLink: '' },
    { date: '06 de Enero de 2023', description: 'Publicidad Invitación a participar en elecciones de Revisoría Fiscal', downloadLink: '' },
    { date: '23 de Febrero de 2023', description: 'Candidatos para Elección de Revisor Fiscal', downloadLink: '' },
    { date: '23 de Febrero de 2023', description: 'Censo Depurados aptos para Votar Elecciones de Revisor Fiscal', downloadLink: '' }
  ];
}
