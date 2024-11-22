import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl;
  }

  public getNoticias(tipo?: string): Observable<any[]> {
    let params = new HttpParams();
  
    if (tipo)
      params = params.set('tipo', tipo);
  
    return this.http.get<any[]>(`${this.preUrl}/noticias`, { params }).pipe(
      tap((noticias: any[]) => {
        console.log(`Noticias ${tipo}s: `, noticias);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public getNoticia(id: number): Observable<any> {
    return this.http.get<any>(`${this.preUrl}/noticias/${id}`).pipe(
      tap((noticia: any) => {
        console.log('noticia:', noticia);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public addNoticia(noticia: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.preUrl}/noticias/crear`, noticia, { observe: 'response' }).pipe(
      tap((response: any) => {
        console.log('response  add nnoticias:', response);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    )
  }

  public updateNoticia(noticia: any): Observable<HttpResponse<any>> {
    return this.http.put<any>(`${this.preUrl}/noticias/${noticia.id}`, noticia, { observe: 'response' }).pipe(
      tap((response: any) => {
        console.log('response update noticias:', response);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    )
  }

  public deleteNoticia(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.preUrl}/noticias/${id}`, { observe: 'response' }).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    )
  }
}
