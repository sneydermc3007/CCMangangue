import { Component } from '@angular/core';

import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-tarifas',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tarifas.component.html',
  styleUrl: './tarifas.component.scss'
})
export class TarifasComponent {

  registroMercantil = [
    { label: 'Registro Mercantil 2024', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/01/Tarifas-Registro-2024.pdf' },
    { label: 'Registro Mercantil 2023', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2023/01/Tarifas-Mercantil-2023.pdf' },
    { label: 'Registro Mercantil 2022', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/Tarifas-Registro-2022.pdf' },
    { label: 'Registro Mercantil 2021', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/Tarifas-Registro-2021.pdf' },
    { label: 'Registro Mercantil 2020', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2020/01/RegistroMercantilTarifas2020.pdf' },
    { label: 'Registro Mercantil 2019', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2019/01/RegistroMercantilTarifas2019.pdf' },
    { label: 'Registro Mercantil 2018', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2018/01/tarifas-registro-mercantil-2018.pdf' },
    { label: 'Registro Mercantil 2017', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2017.pdf' },
    { label: 'Registro Mercantil 2016', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2016.pdf' },
    { label: 'Registro Mercantil 2015', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2015.pdf' },
    { label: 'Registro Mercantil 2014', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2014.pdf' },
    { label: 'Registro Mercantil 2013', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2013.pdf' },
    { label: 'Registro Mercantil 2012', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2012.pdf' },
    { label: 'Registro Mercantil 2011', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2011.pdf' },
    { label: 'Registro Mercantil 2010', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2010.pdf' },
    { label: 'Registro Mercantil 2008', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2008.pdf' },
    { label: 'Registro Mercantil 2007', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2007.pdf' },
    { label: 'Registro Mercantil 2006', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-registro-mercantil-2006.pdf' }
  ];

  registroUnicoProponentes = [
    { label: 'Registro Único de Proponentes 2024', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/01/Tarifas-Registro-2024.pdf' },
    { label: 'Registro Único de Proponentes 2021', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/Tarifas-Registro-Unico-de-Proponenetes.pdf' },
    { label: 'Registro Único de Proponentes 2020', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2020/01/RegistroUnicodeProponentesTarifas2020.pdf' },
    { label: 'Registro Único de Proponentes 2019', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2019/01/RegistroUnicodeProponentesTarifas2019.pdf' },
    { label: 'Registro Único de Proponentes 2018', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-proponentes-2018.pdf' },
    { label: 'Registro Único de Proponentes 2017', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-proponentes-2017.pdf' },
    { label: 'Registro Único de Proponentes 2016', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-proponentes-2016.pdf' },
    { label: 'Registro Único de Proponentes 2015', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-proponentes-2015.pdf' },
    { label: 'Registro Único de Proponentes 2014', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2017/08/tarifas-proponentes-2014.pdf' }
  ]

  registroUnicoNacional = [
    { label: 'Registro Único Nacional 2021', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2021/01/Tarifas-Operadores-de-Libranza-Runeol.pdf' },
    { label: 'Registro Único Nacional 2020', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2020/01/RegistroUnicoNacionaldeOperadoresdeLibranzaTarifas2020.pdf' },
    { label: 'Registro Único Nacional 2019', archivo: 'http://ccmagangue.org.co/v2/wp-content/uploads/2019/01/RegistroUnicoNacionaldeOperadoresdeLibranzaTarifas2019.pdf' }
  ]

  tarfifasPrivadas = [
    { label: 'Tarifas Privadas 2024', archivo: 'https://ccmagangue.org.co/v2/wp-content/uploads/2024/10/TARIFAS-DE-SERVICIOS-PRIVADOS-2024-1-1-1.pdf' }
  ]

  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
