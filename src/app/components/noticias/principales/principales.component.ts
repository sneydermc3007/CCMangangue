import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principales',
  templateUrl: './principales.component.html',
  styleUrl: './principales.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class PrincipalesComponent implements OnInit {
  public noticias: any[] = [];

  ngOnInit() {
    this.noticias = [
      {
        title: 'PROCESO DE CONVOCATORIA PÚBLICA DE FECHA 03 DE SEPTIEMBRE DE 2024.',
        description: 'La Cámara de Comercio de Magangué se permite informar, a los interesados, los resultados de la convocatoria pública para elección del representante de la comunidad por los Gremios de la Producción ante la Junta Directiva de la ESE Hospital La Divina Misericordia, en el cual es nombrado el comerciante ÁLVARO JAVIER ACUÑA ACUÑA como el siguiente miembro de la Junta Directiva de la E.S.E. HOSPITAL LA DIVINA MISERICORDIA.',
        image: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2024/09/SUBIR_IMAGEN.png?w=816&ssl=1'
      },
      {
        title: 'EXPODULCES 2024',
        description: 'La cámara de comercio abre convocatoria para los emprendimientos que se dedican a la fabricación de Dulces típicos, postres, chichas, pasteles, a qué se inscriban en el Expodulces 2024, aprovecha esta gran oportunidad y reserva tu cupo totalmente gratis.Cupos limitados.',
        image: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2024/03/Blue-Navy-Elegant-Medical-Health-Services-Instagram-Post.png?w=1080&ssl=1'
      },
      {
        title: 'CONVOCATORIA PÚBLICA PARA SER MIEMBRO DE JUNTA DIRECTIVA DE LA E.S.E. HOSPITAL LA DIVINA MISERICORDIA POR EL GREMIO DE PRODUCCIÓN.',
        description: 'La Cámara de Comercio de Magangué, se permite convocar a los comerciantes interesados en participar de la elección del Representante de los Gremios de Producción en la Junta Directiva de la E.S.E. Hospital la Divina Misericordia, con base en el artículo 2.5.3.8.4.2.3 del Decreto 780 de 2016, el cual establece el “Mecanismo de conformación de las Juntas Directivas para las Empresas Sociales del Estado de carácter territorial;',
        image: 'https://i0.wp.com/ccmagangue.org.co/v2/wp-content/uploads/2024/09/principal-1.png?w=562&ssl=1'
      }
    ];
  }
}
