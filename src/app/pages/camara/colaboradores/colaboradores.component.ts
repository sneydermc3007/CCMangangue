import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.scss'
})
export class ColaboradoresComponent {
  @ViewChild('table') table: Table | undefined;

  personas = [
    { nombre: 'David Briñez de León', cargo: 'Presidente Ejecutivo', correo: 'presidenteejecutivo@ccmagangue.org.co' },
    { nombre: 'Maria Jose Viloria', cargo: 'Recepcionista', correo: 'recepcion@ccmagangue.org.co' },
    { nombre: 'Nergido Manuel Benítez Figueroa', cargo: 'Director Jurídico y de Registros Públicos', correo: 'juridica@ccmagangue.org.co' },
    { nombre: 'Maria Elvira Villacob Carmona', cargo: 'Directora Financiera', correo: 'ccmcontabilidad@ccmagangue.org.co' },
    { nombre: 'Farid Ricardo Ternera Klever', cargo: 'Director de Gestión Administrativa', correo: 'direccionadministrativa@ccmagangue.org.co' },
    { nombre: 'Juan David de la Torre Jimenez', cargo: 'Director de Desarrollo Empresarial', correo: 'direccionempresarial@ccmagangue.org.co' },
  ];

  displayModal: boolean = false;
  selectedPersona: any = null;

  verDetalles(persona: any) {
    this.selectedPersona = persona;
    this.displayModal = true;
  }

  applyFilter(value: any, field: string) {
    console.log(value, field);


    // if (this.table) {
    //   this.table.filter(value, field, 'contains');
    // }
  }

}
