import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { PaginaInterface } from '../../interfaces/slides.interface';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl + '/slides';
  }

  getSlides(): Observable<any[]> {
    return this.http.get<any[]>(this.preUrl).pipe(
      tap((slides: any[]) => {
        console.log('Slides:', slides);
      }),
      map((slides: any[]) => slides === null ? [] : slides),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  getSlideById(id: number): Observable<any> {
    return this.http.get<any>(`${this.preUrl}/${id}`).pipe(
      tap((slide: any) => {
        console.log('Slide:', slide);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  createSlide(slide: any): Observable<any> {
    return this.http.post<any>(this.preUrl, slide).pipe(
      tap((newSlide: any) => {
        console.log('New slide:', newSlide);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  updateSlide(id: number, slide: any): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/${id}`, slide).pipe(
      tap((updatedSlide: any) => {
        console.log('Updated slide:', updatedSlide);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  deleteSlide(id: number): Observable<any> {
    return this.http.delete<any>(`${this.preUrl}/${id}`).pipe(
      tap((deletedSlide: any) => {
        console.log('Deleted slide:', deletedSlide);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }

  updatePage(id: number, page: PaginaInterface): Observable<any> {
    if (page.imagen_segundaria === '')
      page.imagen_segundaria = null;
    
    return this.http.put<any>(`${this.preUrl.split('/slides')[0]}/paginas/${id}`, page).pipe(
      tap((updatedPage: any) => {
        console.log('Updated page:', updatedPage);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      }
    ))
  }
}
