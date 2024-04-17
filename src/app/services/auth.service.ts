import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Auth, userRegister } from '../interfaces/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl: string = 'http://agrimarketapi.zapto.org:8000/api/v1';

  constructor(private http: HttpClient) {}

  auth(email: String, password: String): Observable<Auth> {
    const data = {
      email: email,
      password: password,
    };

    return this.http.post<Auth>(`${this.apiUrl}/user/login`, data).pipe(
      catchError((res) => {
        if (res.status === 504) {
          throw new Error('No tienes conexión a internet');
        } else {
          throw new Error(res.error.message);
        }
      })
    );
  }

  register(data: userRegister): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/user/register`, data).pipe(
      tap((response: any) => {
        // Aquí puedes verificar la respuesta y lanzar un error si es necesario
        if (response.error) {
          throw new Error('Ya existe un usuario con ese correo electrónico');
        }
      }),
      catchError((res) => {
        if (res.status === 504) {
          throw new Error('No tienes conexión a internet');
        } else if (res.error) {
          throw new Error('Ya existe un usuario con ese correo electrónico');
        } else {
          throw new Error('Error al registrar el usuario');
        }
      })
    );
  }
}
