import { Component } from '@angular/core';

@Component({
  selector: 'app-formacion-empresarial',
  templateUrl: './formacion-empresarial.component.html',
  styleUrl: './formacion-empresarial.component.scss',
})
export class FormacionEmpresarialComponent {
  public information = [
    {
      header: 'FORMACIÓN EMPRESARIAL',
      contenido: [
        {
          tipo: 'parrafo',
          valor:
            'Si desea ampliar información sobre alguna formación puede comunicarse al (095) 687 5362, y/o al correo electrónico desarrolloempresarial@ccmagangue.org.co, o si desea en nuestras oficinas.',
        },
      ],
    },
  ];
}
