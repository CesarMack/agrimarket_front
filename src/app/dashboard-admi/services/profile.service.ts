import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrlCP: string = 'https://api.copomex.com/query';
  private apiUrl: string = 'http://agrimarketapi.zapto.org:8000/api/v1';

  constructor(private http: HttpClient) {}

  getDataProfile(): Observable<Profile> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<Profile>(`${this.apiUrl}/users/me`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  updateProfile(data: any): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<string>(`${this.apiUrl}/users/me/update`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
}
