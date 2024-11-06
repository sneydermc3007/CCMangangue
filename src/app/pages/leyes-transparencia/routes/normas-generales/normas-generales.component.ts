import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-normas-generales',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './normas-generales.component.html',
  styleUrl: './normas-generales.component.scss'
})
export class NormasGeneralesComponent {
  public normas = [
    { label: 'Ley 1727 de 2014', link: 'https://goo.gl/xJfMxk' },
    { label: 'Decreto 2042 de 2014', link: 'https://ccmagangue.org.co/media/pdf/Decretoreglamentario2042del15deoctubrede2014.pdf' },
    { label: 'Código de Comercio, Artículos 26 al 47 y 78 al 97 Ley 1429 de 2010', link: 'https://www.sic.gov.co/sites/default/files/normatividad/Ley_1429_2010.pdf' },
    { label: 'Decreto 545 de 2011', link: 'https://pagosimple.com/wp-content/uploads/Decreto-545-de-2011.pdf' },
    { label: 'Decreto 489 de 2013', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=52301' },
    { label: 'Decreto Ley 019 de 2012', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=45322' },
    { label: 'Ley 6 de 1992', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=2767' },
    { label: 'Ley 1607 de 2012 art 182', link: 'http://www.icbf.gov.co/cargues/avance/docs/ley_1607_2012.htm' },
    { label: 'Ley 2150 de 1995', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=1208' },
    { label: 'Ley 643 de 2001', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4168' },
    { label: 'Ley 850 de 2003', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=10570' },
    { label: 'Ley 1101 de 2006', link: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1150_2007.html' },
    { label: 'Decreto 2893 de 2011', link: 'http://www.mininterior.gov.co/sites/default/files/upload/decreto_2893_de_11072011.pdf' },
    { label: 'Ley 454 de 1998', link: 'https://www.ccb.org.co/content/download/4831/61208/file/Ley%20454%20DE%201998.pdf' },
    { label: 'Ley 80 de 1993', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=304' },
    { label: 'Ley 1150 de 2007', link: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1150_2007.html' },
    { label: 'Decreto 1510 de 2013', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53776' },
    { label: 'Ley 1581 de 2012', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=49981' },
    { label: 'Decreto 1377 de 2013', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53646' },
    { label: 'Ley 1712 de 2014', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=56882' },
    { label: 'Decreto 103 de 2015', link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=60556' },
    { label: 'Decreto 1074 de 2015', link: 'http://wp.presidencia.gov.co/sitios/normativa/decretos/2015/Decretos2015/DECRETO%201074%20DEL%2026%20DE%20MAYO%20DE%202015.pdf&TSPD_101_R0=08394a21d4ab2000f24b77d2486cd0ebe6e3365f85e65c73b926e27f27c54664e8a32b191d1ba03408d665f5401430000d372671d58101c4da169466ee63696a4765ba17dfcc640ddff2cfada3d7f58f3a4ac596961d18fa935c4d7d7d473a9e' },
  ]

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
