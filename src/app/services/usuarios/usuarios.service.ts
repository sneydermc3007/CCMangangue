import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private preUrl: string = '';

  constructor(private http: HttpClient) { 
    this.preUrl = environment.apiUrl;
  }

  public getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.preUrl}/usuarios`).pipe(
      tap((usuarios: any[]) => {
        console.log('Usuarios:', usuarios);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/usuarios/login`, { email, password }).pipe(
      tap((usuario: any) => {
        console.log('Usuario:', usuario);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

  public createUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/usuarios/crear`, usuario).pipe(
      tap((usuario: any) => {
        console.log('Usuario creado:', usuario);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  public editarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/usuarios/${id}`, usuario).pipe(
      tap((usuario: any) => {
        console.log('Usuario editado:', usuario);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return [];
      })
    );
  }
}
