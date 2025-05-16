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
    { nombre: 'DAVID BRIÑEZ DE LEÒN', cargo: 'PRESIDENTE EJECUTIVO', correo: 'presidentejecutivo@ccmagangue.org.co' },
    { nombre: 'CAROLYNNE POLANCO RAAD', cargo: 'ABOGADO DE PRESIDENCIA', correo: 'abogadodepresidencia@ccmagangue.org.co' },
    { nombre: 'ANA MILENA HERNANDEZ BOHORQUEZ', cargo: 'RECEPCIONISTA', correo: 'recepcion@ccmagangue.org.co' },

    { nombre: 'NERGIDO MANUEL BENITEZ FIGUEROA', cargo: 'Director  Jurídico y de Registros Públicos, Conciliación y Arbitraje', correo: 'juridica@ccmagangue.org.co' },
    { nombre: 'JHON JAIRO ESCORCIA ARCIRIA', cargo: 'Director Financiero y Contable (E)', correo: 'ccmcontabilidad@ccmagangue.org.co' },
    { nombre: 'JENIFER YERARDIN RODRÍGUEZ VIDAL', cargo: 'Director de Desarrollo Empresarial', correo: 'direccionempresarial@ccmagangue.org.co' },
    { nombre: 'MANUEL ESTEBAN URECHE OSPINO', cargo: 'Director de Gestión Administrativa', correo: 'direccionadministrativa@ccmagangue.org.co' },

    { nombre: 'CANDELARIA MARCELA NAVARRO FIGUEROA', cargo: 'Profesional SST y Calidad', correo: 'profesionalsst@ccmagangue.org.co' },
    { nombre: 'MARIA VICTORIA PINEDA JIMENEZ', cargo: 'Profesional SIG y Gestiòn Documental', correo: 'profesionalsig@ccmagangue.org.co' },

    { nombre: 'FRANCISCO JAVIER CASTRO MÉNDEZ', cargo: 'Coordinador de Pago y Presupuesto', correo: 'coordinadorfinanciero@ccmagangue.org.co' },
    { nombre: 'MOYRA CASTRO MONTERO', cargo: 'Coordinador de Afiliados', correo: 'coordinadorafiliados@ccmagangue.org.co' },
    { nombre: 'YAMIL GABRIEL ARRIETA RAMOS', cargo: 'Coordinador de Desarrollo Empresarial', correo: 'coordinadordesarrolloempresarial@ccmagangue.org.co' },

    { nombre: 'EDUARDO JOSE ANAYA FONSECA', cargo: 'Ingeniero Asistente de Sistemas', correo: 'ingasistentedesistemas@ccmagangue.org.co' },
    { nombre: 'ENOHEMIT JIMENEZ DIAZ', cargo: 'Asistente de Gestión Documental', correo: 'asistentegestiondocumental@ccmagangue.org.co' },
    { nombre: 'GINETH PAOLA AVILA PULIDO', cargo: 'Contadora Asistente', correo: 'contadorasistente@ccmagangue.org.co' },
    { nombre: 'JAIDER RODRIGUEZ PRINS', cargo: 'Asistente de Gestiòn Documental', correo: 'asistentegestiondocumental1@ccmagangue.org.co' },
    { nombre: 'JORGE LUIS GUERRA QUIROZ', cargo: 'Ingeniero Asistente de Sistemas', correo: 'ingasistentedesistemas2@ccmagangue.org.co' },
    { nombre: 'JUANA DE DIOS ALFARO DÍAZ', cargo: 'Auxiliar de Servicios Generales', correo: 'serviciosgenerales@ccmagangue.org.co' },
    { nombre: 'LUZ ELAINE ARRIETA ACUÑA', cargo: 'Asistente Administrativo', correo: 'asistenteadministrativo@ccmagangue.org.co' },

    { nombre: 'CESAR DEL CRISTO VILORIA CARRASCAL', cargo: 'Abogado de Registros Publicos', correo: 'atencionalcliente@ccmagangue.org.co' },
    { nombre: 'KARLA ISABEL ARRIETA ARANGO', cargo: 'Abogado de Registros Publicos', correo: 'abogadoregistro2@ccmagangue.org.co' },
    { nombre: 'MARIA ANGELICA JIMENEZ BROCHERO', cargo: 'Abogado de Registros Publicos', correo: 'abogadoregistro4@ccmagangue.org.co' },
    { nombre: 'CARLOS IGNACIO ROJAS PATERNINA', cargo: 'Asistente de Registros – Caja', correo: 'asistentecaja4@ccmagangue.org.co' },
    { nombre: 'NEDITH ISABEL BENÍTEZ TOVAR', cargo: 'Asistente de Registros - Caja', correo: 'asistentecaja1@ccmagangue.ogr.co' },
    { nombre: 'CARMEN FRANCO VILORIA', cargo: 'Asistente de Servicios Oficina Sede – Guaranda', correo: 'ccmguaranda@ccmagangue.org.co' },
    { nombre: 'DINA MARCELA MUNIVE SALAS', cargo: 'Asistente de Servicios Oficina Sede- sucre', correo: 'ccmsucre@ccmagangue.org.co' },
    { nombre: 'DURLEY TEJADA HOYOS', cargo: 'Asistente de Servicios Oficina Sede – Majagual', correo: 'ccmmajagual@ccmagangue.org.co' },
    { nombre: 'HEYDIS MARTÍNEZ VELILLA', cargo: 'Asistente de Servicios Oficina Sede - Mompox', correo: 'ccmmompox@ccmagangue.org.co' },
    { nombre: 'INES ELENA CEBALLOS MARIA', cargo: 'Asistente de Servicios Oficina Sede – Tiquisio', correo: 'ccmtiquisio@ccmagangue.org.co' },
    { nombre: 'XIOMARA CRESPO LEÓN', cargo: 'Asistente de Servicios Oficina Sede - San Martin de Loba', correo: 'ccmsanmartindeloba@ccmagangue.org.co' },

    { nombre: 'JOSE DAVID BENAVIDES CASTRO', cargo: 'Auditor interno', correo: 'auditorinterno@ccmagangue.org.co' },
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
