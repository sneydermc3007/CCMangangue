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
        title: 'Laboratorio de Emprendimiento Productivo Inspira a Jóvenes Innovadores',
        description: `El laboratorio de emprendimiento productivo ha alcanzado con éxito su objetivo de fomentar la creatividad y el espíritu emprendedor entre los jóvenes de la comunidad. Este espacio innovador ha proporcionado herramientas y conocimientos esenciales para ayudar a los participantes a convertir sus ideas en proyectos empresariales viables.
A través de talleres prácticos, mentorías y recursos especializados, el laboratorio ha capacitado a numerosos jóvenes, alentándolos a desarrollar sus habilidades y a explorar nuevas oportunidades en el mundo empresarial. Los resultados han sido notables, con varios proyectos emergentes que ya están tomando forma y generando interés en el mercado.
La iniciativa ha creado un ambiente colaborativo donde los jóvenes pueden intercambiar ideas y recibir apoyo, convirtiéndose en un punto de referencia para el emprendimiento local. Con su enfoque en la innovación y el desarrollo personal, el laboratorio se ha establecido como un pilar fundamental en el impulso del potencial emprendedor de la nueva generación.`,
        image: '/noticias/1.jpeg'
      },
      {
        title: 'ÉXITO DEL “OFERTÓN DEL CENTRO DE MAGANGUÉ” IMPULSA LA ECONOMÍA LOCAL',
        descripcion: `Del 3 al 5 de octubre de 2024, Magangué vivió el “Ofertón del Centro de Magangué”, un evento que movilizó la economía local con la participación de más de 63 almacenes. Los comerciantes ofrecieron descuentos de hasta el 60%, logrando ventas que superaron los 550 millones de pesos.
El evento atrajo a numerosos compradores, quienes disfrutaron de ofertas competitivas en una amplia gama de productos. Además, aquellos que gastaron más de 30 mil pesos participaron en sorteos de atractivos premios, incluyendo neveras, televisores, lavadoras y celulares, distribuyéndose un total de más de 160 premios de manera transparente.
El éxito del Ofertón no solo benefició a los comerciantes, sino que también brindó a los habitantes de Magangué la oportunidad de adquirir productos de calidad a precios reducidos, generando un ambiente de alegría en el centro de la ciudad. Este evento piloto ha sentado las bases para considerar su institucionalización como el “Día del Comercio”, con la meta de superarse en futuras ediciones, incluyendo la posibilidad de un artista destacado para atraer más compradores.`,
        image: '/noticias/2.jpeg'
      },
      {
        title: 'Éxito de la Feria "Moda Sostenible" en el Marco del Festi Jazz',
        description: `Los días 13 y 14 de septiembre, se llevó a cabo la exitosa feria "Moda Sostenible" en el marco del Festi Jazz, destacando la creatividad y el talento de los emprendimientos de Mompox y la región. El evento ofreció un atractivo desfile de moda, donde se exhibieron piezas innovadoras que promovieron la sostenibilidad en la industria textil.
Además del desfile, los asistentes disfrutaron de una variada oferta gastronómica y artesanías momposinas, lo que permitió a los visitantes sumergirse en la rica cultura de la región. La feria fue un éxito rotundo, generando un impacto significativo en el impulso comercial de los emprendedores locales, quienes encontraron en este espacio una plataforma ideal para exhibir y vender sus productos.
Con una gran afluencia de público, el evento no solo celebró la moda responsable, sino que también fomentó el desarrollo económico y cultural de Mompox, consolidando la feria "Moda Sostenible" como un pilar del Festi Jazz y un referente para futuras iniciativas en la región.
`,
        image: '/noticias/3.jpeg'
      }
    ];
  }
}
