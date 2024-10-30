import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-actas-documentos',
  standalone: true,
  imports: [
    SharedModule,
    DialogModule
  ],
  templateUrl: './actas-documentos.component.html',
  styleUrl: './actas-documentos.component.scss'
})
export class ActasDocumentosComponent {
  menu: MenuItem[];
  selectedItem: string = '';
  displayModal: boolean = false;
  documents = [
    { title: 'Asociaciones' },
    { title: 'Corporaciones' },
    { title: 'Fundaciones' },
    { title: 'SAS' },
    { title: 'LTDA' },
    { title: 'Sociedad Anónima' },
    { title: 'Poderes' },
    { title: 'Establecimiento de Comercio' },
    { title: 'Otros' },
    { title: 'Documentos de Apoyo' },
  ];

  constructor() {
    this.menu = [
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
        label: 'Establecimientos de Comercio',
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
          { label: 'CARTA LEY 1429 de 2010', link: '', description: '...' },
          { label: 'FORMATO DE EVIDENCIA DE IDENTIFICACION DE LA PERSONA QUE REALIZA TRAMITE PRESENCIAL', link: '', description: '...' },
          { label: 'FORMATO DE AUTORIZACION DE MATRICULAS E INSCRIPCIONES INACTIVAS', link: '', description: '...' },
          { label: 'FORMATO PARA CAMBIO DE ACTIVIDAD COMERCIAL', link: '', description: '...' },
          { label: 'FORMATO DE REGISTRO DE LIBROS', link: '', description: '...' },
          { label: 'FORMATO PARA CAMBIO DE NOMBRE DE AGENCIA', link: '', description: '...' },
          { label: 'FORMATO PARA CAMBIO DE DIRECCIÓN Y ACTIVIDAD ECONÓMICA', link: '', description: '...' },
          { label: 'FORMATO PARA PETICIONES Y CONSULTAS', link: '', description: '...' },
          { label: 'FORMATO PARA CAMBIO DE NOMBRE DE ESTABLECIMIENTO DE COMERCIO', link: '', description: '...' },
          { label: 'REQUISITOS APERTURA DE SUCURSAL', link: '', description: '...' },
          { label: 'FORMATO PARA TRASLADO DE DOMICILIO PERSONA NATURAL', link: '', description: '...' },
          { label: 'REQUISITOS COMPRAVENTA A TITULO GRATUITO DE ESTABLECIMIENTO DE COMERCIO', link: '', description: '...' },
          { label: 'REQUISITO MATRICULA DE PERSONAL NATURAL', link: '', description: '...' },
          { label: 'REQUISITOS CONSTITUCION EAT', link: '', description: '...' },
          { label: 'REQUISITOS CANCELACION DE PERSONA NATURAL - ESTABLECIMIENTO DE COMERCIO', link: '', description: '...' },
          { label: 'REQUISITOS CONSTITUCION ENTIDADES DEL SECTOR SOLIDARIO', link: '', description: '...' },
          { label: 'REQUISITOS CONSTITUCION DE ENTIDADES SIN ANIMO DE LUCRO', link: '', description: '...' },
          { label: 'REQUISITOS DE APERTURA DE AGENCIA', link: '', description: '...' },
          { label: 'REQUISITOS CONSTITUCION EMPRESA UNIPERSONAL', link: '', description: '...' },
          { label: 'REQUISITOS MATRICULA SOCIEDAD DE HECHO', link: '', description: '...' },
          { label: 'REQUISITOS CONSTITUCION SOCIEDADES COMERCIALES', link: '', description: '...' },
          { label: 'SOLICITUD DE CANCELACION MATRICULA MERCANTIL', link: '', description: '...' },
          { label: 'REQUISITOS DISOLUCION Y LIQUIDACION ENTIDAD SIN ANIMO DE LUCRO', link: '', description: '...' },
          { label: 'SOLICITUD DE REVOCACION DATOS PERSONALES', link: '', description: '...' },
          { label: 'SOLICITUD ACCESO A DATOS PERSONALES', link: '', description: '...' },
          { label: 'Modelo Capacidad Operativa Persona Natural', link: '', description: '...' },
          { label: 'SOLICITUD DE RECTIFICACION O ACTUALIZACION DE DATOS PERSONALES', link: '', description: '...' },
          { label: 'Modelo Capacidad Técnica Persona Jurídica', link: '', description: '...' },
          { label: 'SOLICITUD DE SUPRESION DE DATOS PERSONALES', link: '', description: '...' },
          { label: 'Modelo Cumplimiento Ley 1336 de 2009 Persona Jurídica', link: '', description: '...' },
          { label: 'LISTA DE CHEQUEO PARA INSCRIPCIÓN Y ACTUALIZACIÓN REGISTRO NACIONAL DE TURISMO', link: '', description: '...' },
          { label: 'Formato 2 Socio Unico No Controlante - Decreto 667 de 2018', link: '', description: '...' },
          { label: 'Modelo Capacidad Técnica Persona Natural', link: '', description: '...' },
          { label: 'Modelo Cumplimiento Ley 1336 de 2009 Persona Natural', link: '', description: '...' },
          { label: 'Modelo Capacidad Operativa Persona Jurídica', link: '', description: '...' },
          { label: 'Formato 1 Socio Unico Controlante - Decreto 667 de 2018', link: '', description: '...' },
        ]
      }
    ];
  }


  openModal(documentTitle: string): void {
    this.selectedItem = documentTitle;
    this.displayModal = true;
  }

  closeModal(): void {
    this.displayModal = false;
  }
}
