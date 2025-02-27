import { Component } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-junta-directiva',
  templateUrl: './junta-directiva.component.html',
  styleUrl: './junta-directiva.component.scss',
})
export class JuntaDirectivaComponent {
  public selectedNodes!: TreeNode[];

  public juntaDirectiva: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        name: 'Jair Aristizabal Valencia',
        title: 'Presidente Junta Directiva',
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            name: 'Nacira del Carmen Tobias de Barros',
            title: 'Vicepresidente Junta Directiva',
          },
          children: [
            {
              expanded: false,
              type: 'person',
              data: {
                name: 'Juan Francisco Diaz Perez',
                title: 'Miembro Representante del Comercio',
              },              
            },
            {
              expanded: false,
              type: 'person',
              data: {
                name: 'Jercid Florez Correa',
                title: 'Miembro Representante del Comercio',
              },              
            },
          ],
        },
      ],
    },
  ];

  public revisoriaFiscal: TreeNode[] = [
    {
      expanded: false,
      type: 'person',
      data: {
        name: 'ACONTIS Asesorias Contables del Caribe S.A.S.',
        title: 'Revisor Fiscal Principal',
      }
    }
  ];
}
