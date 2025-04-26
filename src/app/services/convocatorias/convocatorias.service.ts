import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

import { ConvocatoriaInterface } from '../../interfaces/convocatoria.interface';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl + '/convocatorias';
  }

  getAll(): Observable<ConvocatoriaInterface[]> {
    return this.http.get<ConvocatoriaInterface[]>(this.preUrl).pipe(
      tap((convocatorias: ConvocatoriaInterface[]) => {
        console.log('Convocatorias:', convocatorias);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  getById(id: number): Observable<ConvocatoriaInterface> {
    return this.http.get<ConvocatoriaInterface>(`${this.preUrl}/${id}`).pipe(
      tap((convocatoria: ConvocatoriaInterface) => {
        console.log('Convocatoria:', convocatoria);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  create(convocatoria: ConvocatoriaInterface): Observable<ConvocatoriaInterface> {
    return this.http.post<ConvocatoriaInterface>(this.preUrl, convocatoria).pipe(
      tap((newConvocatoria: ConvocatoriaInterface) => {
        console.log('New Convocatoria:', newConvocatoria);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  update(id: number, convocatoria: ConvocatoriaInterface): Observable<ConvocatoriaInterface> {
    return this.http.put<ConvocatoriaInterface>(`${this.preUrl}/${id}`, convocatoria).pipe(
      tap((updatedConvocatoria: ConvocatoriaInterface) => {
        console.log('Updated Convocatoria:', updatedConvocatoria);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.preUrl}/${id}`).pipe(
      tap((response: { message: string }) => {
        console.log('Deleted Convocatoria:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }
}