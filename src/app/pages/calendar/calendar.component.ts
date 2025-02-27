import { Component, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions } from '@fullcalendar/core';

import { SharedModule } from '../../shared/shared.module';

import { CalendariosService } from '../../services/calendarios/calendarios.service';

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
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      list: 'Lista'
    },
    height: 'auto',
    events: []
  };
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private calendarioService: CalendariosService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.calendarioService.getEventos().subscribe((eventos) => {
        const formattedEvents = eventos.map(evento => ({
          title: evento.titulo,
          start: `${evento.fecha}T${evento.hora_inicio}`,
          end: `${evento.fecha}T${evento.hora_fin}`
        }));
        
        // Asignar los eventos a calendarOptions
        this.calendarOptions = {
          ...this.calendarOptions,
          events: formattedEvents
        };
      });
    }
  }
}
