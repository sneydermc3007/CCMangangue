import { Component } from '@angular/core';

@Component({
  selector: 'app-proponentes',
  templateUrl: './proponentes.component.html',
  styleUrl: './proponentes.component.scss',
})
export class ProponentesComponent {
  public information = [
    {
      header: '¿QUÉ ES EL REGISTRO ÚNICO DE PROPONENTES?',
      contenido: [
        {
          tipo: 'parrafo',
          valor:
            'Consiste en la inscripción, clasificación y calificación de todas las personas naturales y jurídicas que aspiran a celebrar contratos de obra, consultoría, suministro y compraventa de bienes muebles con el Estado.',
        },
        {
          tipo: 'parrafo',
          valor:
            'La clasificación la hacen por si mismos los proponentes que se registran de acuerdo con los criterios consagrados en el decreto 1584 de 1994, a saber: experiencia, capacidad financiera y técnica, organización y disponibilidad de equipos.',
        },
      ],
    },
    {
      header:
        '¿CUÁLES SON LAS FECHAS QUE ESTABLECE LA LEY PARA REALIZAR LA INSCRIPCIÓN EN EL NUEVO RUP?',
      contenido: [
        {
          tipo: 'parrafo',
          valor:
            'Según lo dispuesto por el Gobierno Nacional, los proponentes actuales y aquellos que aspiren a serlo, deberán inscribirse en el Registro Único de Proponentes según la normatividad vigente. Para realizar este trámite, el proponente debe solicitar el formulario único en cualquier sede de la Cámara de Comercio, diligenciarlo y anexar los documentos exigidos en los decretos que pueden consulta.',
        },
      ],
    },
    {
      header:
        '¿CUÁL ES EL PAPEL DE LAS CÁMARAS DE COMERCIO EN TORNO AL NUEVO RUP?',
      contenido: [
        {
          tipo: 'parrafo',
          valor:
            'Las cámaras de comercio dejan de realizar el control formal del formulario y adquieren la función de verificación documental, como un tercero imparcial. Su papel radica en recibir y verificar documentalmente la información de todos los proponentes. Lo certificado por la Cámara es plena prueba para las licitaciones con el Estado y salvo las excepciones legales, las entidades estatales no pueden exigir requisitos adicionales.',
        },
      ],
    },
    {
      header:
        '¿QUÉ PASOS DEBE LLEVAR A CABO EL PROPONENTE PARA REALIZAR SU INSCRIPCIÓN?',
      contenido: [
        {
          tipo: 'lista',
          valor: [
            'Diligenciar el formulario del RUP o adquiéralo en cualquiera de las sedes de la Cámara de Comercio.',
            'Adjuntar la documentación que acredita la información suministrada en el formulario.',
            'Cancelar los derechos conforme a las tarifas que establezca el Gobierno Nacional.',
            'Dirigirse a la Cámara de Comercio de su domicilio.',
          ],
        },
      ],
    },
  ];
}
