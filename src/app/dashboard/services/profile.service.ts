import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { CPData } from '../interfaces/cp';
import { Profile } from '../interfaces/profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrlCP: string = 'https://api.copomex.com/query';
  private apiUrl: string = 'https://agrimarketapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getCPInfo(cp: string): Observable<CPData> {
    return this.http
      .get<CPData>(
        `${this.apiUrlCP}/info_cp/${cp}?type=simplified&token=e99527a4-4d5f-4411-8b05-fdb907c1798e`
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

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
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
}
