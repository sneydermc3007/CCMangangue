import { Component, OnInit } from '@angular/core';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    PanelMenuModule,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent implements OnInit {
  menu: MenuItem[];
  selectedItem: string = '';

  constructor(private route: ActivatedRoute) {
    this.menu = [
      {
        label: 'Consultas - Registros Públicos',
        id: 'consultas-registros-publicos',
        expanded: false,
        command: () => this.onMenuSelect('Consultas - Registros Públicos'),
        elementos: [
          { label: 'Consultas de expedientes', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.001', description: '...' },
          { label: 'Consulta liquidación renovación', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.003', description: '...' },
          { label: 'Solicitudes de registro', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?cod_camara=19', description: '...' },
          { label: 'Notificaciones registros públicos', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.009', description: '...' },
          { label: 'Relación de renovados', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.013', description: '...' },
          { label: 'Relación de matriculados', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.015', description: '...' },
          { label: 'Ruta de documentos', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.019', description: '...' },
          { label: 'Consulta reportes E.E.', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.021', description: '...' },
          { label: 'Consulta cínculos identificación', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.030', description: '...' },
          { label: 'Consultas desistimientos decretados', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.033', description: '...' },
          { label: 'Formularios y formatos en blanco', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.401', description: '...' },
          { label: 'Solicitar clave afiliado', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.501', description: '...' },
          { label: 'Solicitar clave de prepago', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.503', description: '...' },
          { label: 'Consulta georeferenciada', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.701', description: '...' },
          { label: 'Calcular digito de verificación', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.901', description: '...' },
          { label: 'Historia de transacciones', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.01.955', description: '...' }
        ]
      },
      {
        label: 'Consultas - Registros Nacionales',
        id: 'consultas-registros-nacionales',
        expanded: false,
        command: () => this.onMenuSelect('Consultas - Registros Nacionales'),
        elementos: [
          { label: 'Consulta homonimia nacional', link: 'https://ruesfront.rues.org.co', description: '...' },
          { label: 'Rues cont. multas, sanciones', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?cod_camara=19', description: '...' }
        ]
      },
      {
        label: 'Operaciones - Registros Publicos',
        id: 'operaciones-registros-publicos',
        expanded: false,
        command: () => this.onMenuSelect('Operaciones - Registros Publicos'),
        elementos: [
          { label: 'Verificación de identidad', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Renovar matrícula mercatíl', link: 'https://sii.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.03.002', description: '...' },
          { label: 'Matricular', link: 'https://siimagangue.confecamaras.co/scripts/mregMatricularPnatEst.php?accion=seleccion&session_parameters=WlRMd1BiclFSTC9JcjRQUVdmQjZDekM0b3UwNFI5K1d6QmFNYWVhTk9yWS9uMXMrbVEwM1Q0R0VvdjRmajMydkNCQnJJeFdGMnpyQkpZQ3BWeGRoRkZZNHFEZllhbUdTTmJGT3J6M05aWFhqOHhheFRQc2VpS0I1Uktid1ViYi9pKzIyUktJZU9rOVlnTGJFUGIvODJ0SEY4Z1hWaWNOTU9BaEpRbjRnSE01ZU5SemhxcnMrOG1xUXl1cjVva2NJbGUzQVU4ajZiUjhJdTdGcEtCN2tmUnVkOHNQTzBONjY1dDl3QmlVdzYvaGNYUDQzV0IwZ3phUmF3UHU5MWEvaGgrUmMvS0RuZy9QYWlLSjlqdjVRUVVWcjRHZGQ4RytkMzlOc3V1ZHU5VFpmcUxXRWZhUFFvWHc3ZjNoZnFPU1pXM2cxUGtuSTNBUkQxMlhQaTVWMlN5WVJQaUZPU1laNDA2czRVbnVsVm8vOW5OSkdhN3pqM0UydTVnUW4xelFyRFoxdlV1UktmWGJFU1NYVjBEMlhDZDR4Z0cwczVMc2wyMkZnM0ZXZzBrTnJXNDZyRnRCREZncFpFQmY5Qm80T0pYcGp1NXJuS1ZIOHp3V3duRE5QSVoxczdxK3JIYzVrejFqWUsxZlA4WFFPeFJ0Q1cyZjl2VlhoQnNyUURwT2t2MFNpQ0hBLzNVcFF3SnhsU1phcTlYeEFiNW9jTjNwOHBXWUJXRng5MTUyamxBSUdjcXZsbkg5T05ISG1sNjEwNURvOEdoY3JIc2t2ZlQ2SS9YWGN2K3piZGZZVTNkK1hMeFFyWm5vK094bGxXQ3ozcFZrNEZ2b0hXaGxtN201T21nQWdYbFNHSHNSSGM2R1BpYitiNm1KUzNHMzVPSm9mTnA2SnNBSHFnUWR2ajhhVDhjdWVGWWR4TmF2eXplWXUvUGxSSFUvUE9QcDdORU9iUk9ZblI1eDdvZ0o4NVVRbFhhOXI0RlNhTHJ0UzluRUNaU2ExdjV6UmxuTzBKemVpTldjZUdUQm5zSEtvL2tKOHQ5em5LRmNLdDU4RWs2QTE5NUdYN3FKYm5GWEdEbzNURWxiV2wxcnRFQm1iRkJUclZPVWhBV0RYUXA2cUZNNlROM2JmcCtoWi9YVHZtNVRRYTg4WDRhcldadzQ3NXAzdTN1T0h1M0phTVhBcnZNeUpiTGE1dW5BRlNCbDluWXFMaDhNNFoxSVkyNFhSQUpSMkJRcVdQVklQTUJBbTZvR3NxWUpRMWdxNUxzME5ycEc2NWVhSDhyb0lIcC9UT0FvdXdNbi9CS1R5VGFoUCs4WFRUOHJKMU9tRE8zeTE3cFFsSTQ5TjBQY1NuTzlvTkV5c3Z3K2tSeHBQMWtxdi8vVzNqL3BiVVRrRit4VGlzUVI2SEwwcS9VZmg2ajdyUTR0aVVKU1Y4WlhWb0dvSldPb2ZkWHNEWW9GZjg2Yjh1c2lCVDdmMmJ4OVZDZW01T0hRbmJ6ZnBIWG9VbjFocjF2Snplcm9IcEtWcVp3SGlUTUpVTTlENXhGMmlhZyt2OThxSThlalJxTXlkTTZSTmJGSjE1Tjd6ZkZSdTNlRjJ6NzQwTVdnK1liaysrMXI1dlQxVDBvWlZWWWxRK0JzZEZtVnhxVnY2Tzc1SjM0c2FhRWo1bHM1Q0hpclhuRnQ2ckE0NGluNU9vRlpkUHI3S1ppcnZ5V1YxZ2FrZ1dFdEtDZzFwK3Vvd0xwRW10U1lVSzRocHpzZThJcmpxaDlERHh5U0czbUxKTjFuVndMdi9sSzFtcWxQQXF6cTd1R0JraHpCY0xZZ0R3N3BvTnFxTFRCM1lPR0w1NzliazNOdXNvQTRwRTNScC80OGw2c0NGNFY3QlpUeHdLeld6OGRTYXF1WDRvVU1jNDVTNXY2dFgyZEcxdGNJbExBYWZEVUVyRVVybllwZi9TN3ZnNGpwOUpKZGFzSFNjNUVwWWtrSUdhSTN0OGNvbG1aekhlWVpaNStvYThrTjQ3YjBVcXhzeE84NEdoRThGS1lEMDZ2bG5JTHp3MlU0RldqMUpGeUNMblcvWTJ1U3JPTjVVTWlJekYrdnMvVXdSeEVVNEc4eFZFek1TWUtsTG1wUG9TczFodWNiVHpPaFhjdkNmMEpxNjdITVJkTG9DVDdDSnFaNjZRT0hCRW4rZklPR1dKeWZNdmNyOGp2OUJEaTU4aW9qcHIvZmZnQWZaRm1oS25ya1Bjc2tFTDd6QWswNnU1QWxPL3NBQnBzYXU0VmtmaE1ONDZPOFR2MUVtN0cyM25GbnVmQU1sM0ppQmo4aWx3d3oxYWIxdnNuTGl4azVGQ2lmckYvRDZ2ekJENmFQZE5XbWdEcFUwN2V6enc5WGtFK1lFanVwbytKajRLdmN1dnRsamU0WmJlYjhWL2p2N2NiZGhFZjhuY1ViR25mbDNUajJxbHZ5bkxPeWJ5bWY4MnBIbkJybGpxdnlNN205eVdFZnhtVjZBQlE1MnBYQnBMLzBhQ2s5aDd4cEJ2bitjK0U2SXRUU2o3T1U2L2JoM2JjVkRDeWhHeTcrV1M1NmFCTy90K2tZbFBQZklTQUNtbzNFM2pzSG1WTEYzWG04NGZwMmQ3TmZNS25WcFpWTW1qRXNBcEVWL2ZsakhQNkVXMisrTFgwSXM3Q1pTWVkxeW5FUmpWcUx6aFlLcWNHVE5Ib2ZIandwMHZrQVNZSVY5RUFhSWlmTFVucnFNdjZrUnNMVDJacUtvcnd4ZTlieDdlMlZrbXdJV3h4NVdIRDVNQjgwdEhrd2E2VXdNcFpYRGRNNWRMR3Q5QXE1cmlPR2dydjFZVjdqbURWa2N2eGw0VFNBcjBhWGhZTzcwSFZsUU5VTGQraks5MEFtYVR0MmI0NWQzeUJzRDdpbXRseVdDY2s3TGVqM1BmUzBvWElMYlJReUhLbktLRUVmZk9TVUwrbWhmakdsdnphOEpVNC96Z0pWbFg0TnBhZHQ2WHYzUWVBV1JGZStMZGR1SXpSNXRPdUJ6ZERZeHBsczF1STIrUW5PdFVKVlU1WjVqcGJkdXhCbWdBOHA5andIYUljblR5NDgydTZRSWJ3eG43Rnp3eThKS0tEbTJKUDZhNWxEV2xhM29lbzBKMTVWUWZLbEhZa2l1bTFkVW1GbGtINEpWaU1wNFdoam9ndi9vKzhYaHd0TzJ0eVFMY3VSWXh3TXJRWDloVDZNcmRhRjNHbTdxdm15ZDRnNkttSWY5bWZhaHdJU2wySm1rZ0gwdDNKM2pHTTRiVHE0MHltRHI3a3FwUFIwT253Ykt5Smk2ZXkyZ2tXbER0azJxaUxLMDE1TGVjZTUrdWN2a2o2YlREQXNTQmV3bmdwb2crYTBwUldvRXcxNitRR0RsdlBNLzFFMC9md0dQNUtmZ0VwSTJFNjVMMWNBOFFZUUJmMUdOUE9zQ2JDZmFQbVJQNzl4S1ArT1dyRFE9', description: '...' },
          { label: 'Certificados', link: 'http://serviciosvirtuales.ccmagangue.org.co', description: '...' },
          { label: 'Radicar documentos', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Actos y documentos sin costo', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Registro libros electrónicos', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Actualización de datos (Mutación)', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Solicitud de cancelación reg. mercantíl', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Inscripción de proponente', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Actualización  de proponente', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Renovación de proponente', link: 'https://siimagangue.confecamaras.co/librerias/proceso/mregRenovacionProponente.php?accion=pantallaseleccion&session_parameters=WlRMd1BiclFSTC9JcjRQUVdmQjZDekM0b3UwNFI5K1d6QmFNYWVhTk9yWlFFcS92MWhyZkIxM29BcXBubjNnYThKZVkveWJqKzFNYVhwZ1FORE1sUEtxSzFDWmxCTS9Ob3NidDlqOEROOGlzYW9IY2RIWVlPWjMxcEFJaWZ1ZVNjK0RrUjhxV0NaaUM0NEVFM0xaVlNGNlgzSTk1b3YxVjBjMk9EY1FLOVZGZG8rVUdhNzgwdWpLYlFGbVhVbWJkSk9IZTI4N2dKL0FVZWtpMkQ4Y2RxSWhXM1N1WjVsaWtkRnhETGF2WnFZTHcyR3FIL0VrRDJDRlJ4dVZTaVVMcXZHWWJtL29teENHVmd6TlIydWZSK1NYenRIOXg5d3dZbEtKcE0venJseHVrSGlGYURDcG4vUG1oKy9yYW9wU2ljNXNweHg2OUJQY2VyTDZQTXo5amtNTER0Uis4UTM4ZFRxaUI4SjhuMjRXZDNLVlZGM0VyNnpETEo4Z0tTZ2N4QlpGQ1ljNHE1M212UzNLQ1VSYzgxTldML281dkJOWGM4L2swcStpZCtzK0JjNzB1QVdoL2VaTkUwL0Vjd3drTlBld0tNQTNybDBVbUFEdGEvcm9ySkdzREhCajBzZEVaakdveUpta3hoZGZZRUVkRFVSc1FvdXJmQlFKNVR1REs4YW05TkV6cStoU2loSkNYZDEzMUVkV2ZUMW9Mc0kwNjZZc1MrclhhL3A1NE5DYmRiRWt6RS8vNW5yci9xeTdReVZvelVPVElwNHpqbjdXR0tuNFdJT3lIcDdkR3BMQThMZWY3QXR4ZmRHL0FwSWtHR2FJV2Qxc2ZheDN0TlFLVGRWdGdQOHBEQStaSjkwYVY3QnFXVml6dllYK2FlejltMzRJa2NiYU50TE4zeTZ5S3JKYVFycUxLeVlUWGdyclplNFBVRXBVQnBlKzE5ZjNsVFd1VXdiY01PQUsxU045ZVVpMVBVTHBwRWNsUSt2NTFXZWt6OUFWVkFhQnZoUDQzbzZBcG10V211VW12emNpZXZsYm9oRU5FN0lFWXFnVXZxVkxpUWRDc1dkNU00NUpLWmFOTHNlVnNOWWRtR3FFditnSXNDZDVQN0xqeWFIY2pMOWppZlRUejJvVVBoTnIzYnpGSXZJZ0E2WGdsRzBXKzVDWVVSNVJ4eFJXV3BEUnZPWUFDMWdIREpzeTlLZlAyUjdvQjJ0Z3dQNFpkeEloY3J0UWtEelpIZEpUaTVLUjFMak01SWsrYlNKaUpDUDNtNXdIRXpCNTZtdmpGN3lVdk9GVmNvekxYbm1CTHAzTHpDaWwzTUJaWFV6MHRLUXNQRDhoWVFuVlU5V0ZsQVRlZXAvbXhMQ09MRHpSdTJoaFQ1U2l6MXZFNXdsRUlndlFMNWNwMkFSQzlTR0JoenFLNDJvNGVEM1htSXpoakIwZVQxcnNzSmZTTmhJOUMzMUwyWUNJL2xSdXdKZWRyaHgzclNiWVBOeEQwU0w5SEE4a2ZTSzdTcWdFTndobjdjbElWei9Db28rWXlGRmpEVWI2c2ZkRTVvSHQrODhFVFhtRm1HSWxybDBQOHgwZDBKQXllVzArRTczOHliVTBhVmpWR2VFLzZDNXFJUW9BWkE1WUIzaTlGL3k3VkZyTnRLSVRwNitkRzVKL3luYk8rU2MyK3NEc2gySUNZWHZxblM1ZlYvSldLOEw0bTlSb0lxamxBWnR4YzZtd084bjh3bjQra2V0K0x6OTZheDdwV1c4bTh3Z01ycmVIR1lPYkhab2h6bzhuOUR5STJ4QmRyb0RPSFdpS2ZmZGdtWitiRUZSRHowOTBDaEpqcXY1L2xGRFk5MUZKaUpnUWdxdG1GYXNzSVRtT3N2Nlc5eWJFRzd2VXRmd0Z0c1kvTHp3Sk1IL24yWmpKTGY2eWFhWXFrNEVMVGZPVkp4YXFONEg5dEt4ZXcreE9WMzNsaGtBcTVRaVdaV3d2ekJCdS9nV04xWS80WERlZERiSWkrd0FXMm5xV09ldjNvYkQ5OWRhS2ZyUW9PK3k5Z0RCdFdDTzFoNkV6eHVicjR0dGdwSDdpd1ZVcWNSZHNNL1VZWDczQTQ4bFNha0pyVC96MktaZ0dIRWlOeWQvSzVOVnQ5UngySVJHbS9pc0s1L2tzaEF6Ym80THFLS1VnRWhGeGc0ZUUvR2lMblQ1WFFWc0lkSjJ6d1lPV25vc3dSUUIvUVVQeG4rd2lvYzBuc1pJRVpNTXBQUkFRTm5hYjVXK285M1FKRnVzVFJNeDRabTBaUk9HOTZ6QllacnBDTDlmQUphRVVaSU9nZ013SnpTeGp1WWtRUmlhSHN2d0RHMldRM0wweVlDZFp0ZzJiWlR0WHExMG9ZdlRHdWdnZmxqbW9saEs1bjFNS0tXNHhVTDNqODBHSFAyQWIwa0pkYjJvZXFLeGdPaU9TVlc4SXhnZFJURG15Y1pMVzFqc0RWTEdmNkh2cmRhSkhGUVljQWhqeUN2RUdoMk1zeHJRR3VQQ1VlVWxSOGp5ZzNObTYwWkluYWFFNkZ4TDBCS3dBK3BuUTROK2ZrZlNEcEFCUkR2bldSbDFnZlRnOUtUejB2RXdJSE5lbkI1YmZBNnZGalZoaTk1TnB0ZkZ1N3NVV09pMnFIWU9vMUdkTTBySVcvcjlyZzBwUFFKdEZ5bjRzalZJeWNMaVpWQ0QxbWRZZWQrODczOWFDeW81RUFhVDRPWjlnTGt3VW1kelQ5U0RGOTFHb3JMb1c0eFM4OXhiaitBOWN3QS8vdlJnZ2dScmlGS1VibGIyc0NtRWU4bWRjbW4yall4a0pHeUZvZEI2NjNtb1VTZCsyanAwdkY1NTlZZTVkQUhXYml4aEREMXV1UmR4U2pjWkJObW5Na2J4cjdYOE4yMmtTdXBVYjlzaTJCcURyc0xEQW9xTU1ONEZ4U3Nnd0k0YnlyZ2o5YjAvSEJDTjlFVTEycVBGYjFQNm81ZWlMY0RsMnBxZUpxRzZxL2d6Y01kRm51Ky8wajBXSHB1WnQ5cFNldmtUaGw3ODVKVGdnOHYrUmtmNUtIdkd0dGY1TUJBZVhUYUxzK1dxZHl4N0Mrd2tRUStaREkxd0l1bTRWUDBxSFE2azZxdW1LRTlXdDdPaUZCRWF0dFVveDdtOTE1dFRmUE1Cd3ZYU2h0VUJKQWtoc3AxS25SRlY2dk9UV3llWTJtMmxHc1ErRUhremxVamd5dGMrQ0FKQVFndVJYNEFtcXRyeWJIY3NBWXN2a2Q4cHU0VjVVUlAzdWc1V0sxN0Y2YXRxY2N5REJHZlB4Tk9BVDNzcy9NcEp2WTA0TDcyWjdNamlyWk1wM1RKWDVBQnczSTZBTWpVNjRTRE4vR2hnbzcvdEx3cjFjeFFCamJxNUtDMUViTHVIdytiTmF6Z3JydmZDb0VtaTIvYW0zMmlZTG4xL3VxQVFiUWEwWEIrazQ9', description: '...' },
          { label: 'Cancelación de proponente', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Cambio domicilio proponente', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Prepagar servicios', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' },
          { label: 'Comprar de servicios empresariales', link: 'https://sii.confecamaras.co/vista/plantilla/index.php', description: '...' }
        ]
      },
      {
        label: 'Operaciones - Usuarios Publicos',
        id: 'operaciones-usuarios-publicos',
        expanded: false,
        command: () => this.onMenuSelect('Operaciones - Usuarios Publicos'),
        elementos: [
          { label: 'Actualización circular 19', link: 'https://sii2.confecamaras.co/vista/plantilla/index.php?empresa=19&cod=00.05.002', description: '...' }
        ]
      },
      {
        label: 'Registro Nacional de Turismo',
        id: 'registro-nacional-turismo',
        expanded: false,
        command: () => this.onMenuSelect('Registro Nacional de Turismo'),
        elementos: [
          { label: 'Registro nacional de turismo', link: 'https://rnt.confecamaras.co/home', description: '...' },
          { label: 'Pagos parafiscales fontur', link: 'https://www.fontur.com.co/es/servicio-al-cliente/contribucion-parafiscal?q=es/servicio-al-cliente/contribucion-parafiscal', description: '...' },
          { label: 'Certificación de calidad turistíca', link: 'http://serviciosvirtuales.ccmagangue.org.co', description: '...' }
        ]
      },
      {
        label: 'RUNEOL',
        id: 'runeol',
        expanded: false,
        command: () => this.onMenuSelect('RUNEOL'),
        elementos: [
          { label: 'Inscripción Runeol', link: 'http://52.202.78.221/Runeol/Pagos/InformacionPagos.aspx?OP=1380F23154CAF4B4A65AC936962E14E1', description: '...' },
          { label: 'Cancelación Runeol', link: 'http://52.202.78.221/Runeol/Entidades/Operaciones.aspx?OP=8FDC4480F1F53DFED5EAA5692C966FA6', description: '...' }
        ]
      },
      {
        label: 'Creación de Empresas',
        id: 'creacion-empresas',
        expanded: false,
        command: () => this.onMenuSelect('Creación de Empresas'),
        elementos: [
          { label: 'Registro de garantías mobiliarias', link: 'https://www.garantiasmobiliarias.com.co', description: '...' }
        ]
      }
    ];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const titulo = params.get('titulo');
      if (titulo) {
        const foundItem = this.menu.find(item => item.id === titulo);
        if (foundItem) {
          this.selectedItem = foundItem.label ?? '';
          foundItem.expanded = true;
        }
      }
    });
  }

  onMenuSelect(event: any | string) {
    this.selectedItem = event;
  }
}
