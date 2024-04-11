import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Auth, userRegister } from '../interfaces/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl: string =
    'http://[2806:2f0:1001:45b:1810:b1fa:fe5c:19b]:8000/api/v1';

  constructor(private http: HttpClient) {}

  auth(email: String, password: String): Observable<Auth> {
    const data = {
      email: email,
      password: password,
    };

    return this.http.post<Auth>(`${this.apiUrl}/user/login`, data).pipe(
      catchError(() => {
        throw new Error('Authentication error');
      })
    );
  }

  register(data: userRegister): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/user/register`, data).pipe(
      catchError(() => {
        throw new Error('Authentication error');
      })
    );
  }
}
