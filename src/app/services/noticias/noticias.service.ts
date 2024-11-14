import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

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

  public getNoticias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.preUrl}/noticias`).pipe(
      tap((noticias: any[]) => {
        console.log('noticias:', noticias);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public addNoticia(noticia: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.preUrl}/noticias`, noticia, { observe: 'response' }).pipe(
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
