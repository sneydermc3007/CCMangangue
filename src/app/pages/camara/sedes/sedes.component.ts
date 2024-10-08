import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrl: './sedes.component.scss'
})
export class SedesComponent {
  public sedes = [
    {
      title: 'Principal Magangué Bolívar',
      info: {
        address: { subtitle: 'Dirección', value: 'Cra. 4 N 12 - 12, Piso 1 y 2. Barrio Centro' },
        phone: { subtitle: 'Teléfono Fijo', value: '(605) 5846175' },
        mobile: { subtitle: 'Celular', value: '314 7734540' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: '3006335739' },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmagangue@ccmagangue.org.co' }
      }
    },
    {
      title: 'Seccional Santa Cruz de Mompox – Bolívar',
      info: {
        address: { subtitle: 'Dirección', value: 'CL 19 N 2-82 Barrio Centro al lado de la Registraduría' },
        phone: { subtitle: 'Teléfono Fijo', value: null },
        mobile: { subtitle: 'Celular', value: '322 6408658' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: null },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmompox@ccmagangue.org.co' }
      }
    },
    {
      title: 'Seccional Sucre-Sucre',
      info: {
        address: { subtitle: 'Dirección', value: 'Calle centro 10 # 2 – 32 al lado de la Oficina del Centro y Reparación a las Victimas' },
        phone: { subtitle: 'Teléfono Fijo', value: null },
        mobile: { subtitle: 'Celular', value: 'No hay número institucional' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: null },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmsucre@ccmagangue.org.co' }
      }
    },
    {
      title: 'Seccional San Martín de Loba – Bolívar',
      info: {
        address: { subtitle: 'Dirección', value: 'Cr 19 cl 17 – 99 apartamento 2 Callejon Plenilunio.' },
        phone: { subtitle: 'Teléfono Fijo', value: null },
        mobile: { subtitle: 'Celular', value: '323 310 3074' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: null },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmsanmartindeloba@ccmagangue.org.co' }
      }
    },
    {
      title: 'Seccional Guaranda – Sucre',
      info: {
        address: { subtitle: 'Dirección', value: 'Cr 5 # 8-5 Diagonal al Parque Central' },
        phone: { subtitle: 'Teléfono Fijo', value: null },
        mobile: { subtitle: 'Celular', value: 'No hay número institucional' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: null },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmguaranda@ccmagangue.org.co' }
      }
    },
    {
      title: 'Seccional Majagual – Sucre',
      info: {
        address: { subtitle: 'Dirección', value: 'CL 5 N 21-56 Barrio San José' },
        phone: { subtitle: 'Teléfono Fijo', value: null },
        mobile: { subtitle: 'Celular', value: '313 695 2232' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: null },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmajagual@ccmagangue.org.co' }
      }
    },
    {
      title: 'Seccional Tiquisio – Bolívar',
      info: {
        address: { subtitle: 'Dirección', value: 'Brr San Martin Calle Principal. Alcaldía Municipal – Oficina Sisben.' },
        phone: { subtitle: 'Teléfono Fijo', value: null },
        mobile: { subtitle: 'Celular', value: 'No hay número institucional' },
        affiliatedMobile: { subtitle: 'Celular afiliados', value: null },
        hours: { subtitle: 'Horarios de Atención', value: 'Lunes a Viernes – 08:00 a.m. a 12:00 p.m. y 02:00 p.m. a 06:00 p.m.' },
        email: { subtitle: 'E-mail', value: 'ccmtiquisio@ccmagangue.org.co' }
      }
    }
  ];
}
