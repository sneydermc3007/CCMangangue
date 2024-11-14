import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendariosService {
  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl;
  }

  public getEventos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.preUrl}/eventos`).pipe(
      tap((eventos: any[]) => {
        console.log('eventos:', eventos);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public createEvento(evento: any): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/eventos/evento`, evento).pipe(
      tap((nuevoEvento) => {
        console.log('Evento creado:', nuevoEvento);
      }),
      catchError((error: any) => {
        console.error('Error al crear el evento:', error);
        throw error;
      })
    );
  }

  updateEvento(evento: any): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/eventos/eventos/${evento.id}`, evento).pipe(
      tap((updatedEvent) => {
        console.log('Evento actualizado:', updatedEvent);
      }),
      catchError((error: any) => {
        console.error('Error al actualizar el evento:', error);
        throw error;
      })
    );
  }

  deleteEvento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.preUrl}/eventos/evento/${id}`).pipe(
      tap((deletedEvent) => {
        console.log('Evento eliminado:', deletedEvent);
      }),
      catchError((error: any) => {
        console.error('Error al eliminar el evento:', error);
        throw error;
      })
    );
  }
  
  
}
