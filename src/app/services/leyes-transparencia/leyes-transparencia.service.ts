import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeyesTransparenciaService {
  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl;
  }

  public getDecretos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.preUrl}/decretos`).pipe(
      tap((decretos: any[]) => {
        console.log('Decretos:', decretos);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public getDecreto(id: number): Observable<any> {
    return this.http.get<any>(`${this.preUrl}/decretos/${id}`).pipe(
      tap((decreto: any) => {
        console.log('Decreto:', decreto);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public crearDecreto(decreto: any): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/decretos/crear`, decreto).pipe(
      tap((decreto: any) => {
        console.log('Decreto creado:', decreto);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public editarDecreto(id: number, decreto: any): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/decretos/${id}`, decreto).pipe(
      tap((decreto: any) => {
        console.log('Decreto editado:', decreto);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public eliminarDecreto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.preUrl}/decretos/${id}`).pipe(
      tap((decreto: any) => {
        console.log('Decreto eliminado:', decreto);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public getLeyes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.preUrl}/acordeon`).pipe(
      tap((leyes: any[]) => {
        console.log('Leyes:', leyes);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    )
  }

  public crearLey(ley: any): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/acordeon`, ley).pipe(
      tap((ley: any) => {
        console.log('Ley creada:', ley);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public editarLey(id: number, ley: any): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/acordeon/${id}`, ley).pipe(
      tap((ley: any) => {
        console.log('Ley editada:', ley);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public eliminarLey(id: number): Observable<any> {
    return this.http.delete<any>(`${this.preUrl}/acordeon/${id}`).pipe(
      tap((ley: any) => {
        console.log('Ley eliminada:', ley);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }
}
