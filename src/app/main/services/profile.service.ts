import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Profile } from 'src/app/dashboard/interfaces/profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrlCP: string = 'https://api.copomex.com/query';
  private apiUrl: string =
    'http://[2806:2f0:1001:45b:41d9:d8cd:d716:6d8d]:8000/api/v1';

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
