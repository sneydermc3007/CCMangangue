import { Component, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions } from '@fullcalendar/core';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FullCalendarModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions | undefined;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        locale: esLocale,
        events: [
          { title: 'Prueba', date: '2024-11-01' },
        ]
      };
    }
  }
}