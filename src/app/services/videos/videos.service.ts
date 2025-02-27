import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl;
  }

  public getVideos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.preUrl}/videos`).pipe(
      tap((videos: any[]) => {
        console.log('Videos:', videos);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public addVideo(video: any): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/videos/crear`, video).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public editVideo(video: any): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/videos/${video.id}`, video).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }
}
