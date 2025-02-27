import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    SharedModule
  ],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class DatosPersonalesComponent {
  public documentos = [
    { nombre: 'Aviso de Privacidad', url: 'pdfs/AvisoPrivacidad.pdf'},
    { nombre: 'Cláusula Aviso de Privacidad Hojas de Vida', url: 'pdfs/ClausulaAvisoPrivacidadHV.pdf'},
    { nombre: 'Clausula Formación Empresarial', url: 'pdfs/ClausulaFormacionEmpresarial.pdf'},
    { nombre: 'Documento de seguridad de la Cámara de Comercio', url: 'pdfs/DocumentoSeguridadCC.pdf'},
    { nombre: 'Formato de Solicitud de Bases de Datos Empresarial a la Medida', url: 'pdfs/FormatoSolicitudDB_Empresarial.pdf'},
    { nombre: 'Manual de Políticas y Procedimientos de Protección de Datos Personales', url: 'pdfs/ManualPoliticasProcedimientosProteccion.pdf'},
    { nombre: "Solicitud de Acceso a Datos Personales", url: 'pdfs/SolicitudAcessoDatosPersonales.pdf'},
    { nombre: "Solicitud de Rectificación o Actualización de Datos", url: 'pdfs/SolicitudRectificacionActualizacionDatosPersonales.pdf'},
    { nombre: "Solicitud de Revocación de Autorización de Datos Personales", url: 'pdfs/SolicitudRevocacionAutorizacionDatosPersonales.pdf'},
    { nombre: "Solicitud de Supresión de Datos Personales", url: 'pdfs/SolicitudSupresionDatosPersonales.pdf'},
    { nombre: "Uso y Tratamiento de los Datos Suministrados en los Registros Públicos de las Cámaras de Comercio", url: 'pdfs/UsoTratamientoDatosSuministradosRegistrosPublicos.pdf'}
  ];

  descargar(url: string) {
    window.open(url, '_blank');
  }
}
