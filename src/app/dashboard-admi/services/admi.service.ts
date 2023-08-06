import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { Suggestions } from '../interfaces/suggestions';
import { Users } from '../interfaces/users';

@Injectable({ providedIn: 'root' })
export class AdmiService {
  private apiUrl: string = 'https://agrimarketapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Dashboard> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Dashboard>(`${this.apiUrl}/admins/dashboard`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getSuggestions(): Observable<Suggestions> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Suggestions>(`${this.apiUrl}/admins/suggestions`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getUsers(): Observable<Users> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Users>(`${this.apiUrl}/admins/users`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  findUser(name: string): Observable<Users> {
    const token = localStorage.getItem('user_token');

    console.log(token);
    const data = {
      name: name,
    };
    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .post<Users>(`${this.apiUrl}/admins/find_user`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
}
