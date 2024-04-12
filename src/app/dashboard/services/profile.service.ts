import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { CPData } from '../interfaces/cp';
import { Profile } from '../interfaces/profile';
import { Farm } from '../interfaces/farm';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrlCP: string = 'https://api.copomex.com/query';
  private apiUrl: string = 'http://agrimarketapi.zapto.org:8000/api/v1';

  constructor(private http: HttpClient) {}

  getCPInfo(cp: string): Observable<CPData> {
    return this.http
      .get<CPData>(
        `${this.apiUrlCP}/info_cp/${cp}?type=simplified&token=e99527a4-4d5f-4411-8b05-fdb907c1798e`
      )
      .pipe(
        catchError((e) => {
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
          throw new Error('Authentication error');
        })
      );
  }
  getDataFarms(): Observable<Farm> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<Farm>(`${this.apiUrl}/farmers/estates`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  getDataFarm(id: string): Observable<Farm> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<Farm>(`${this.apiUrl}/estates/${id}`, {
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

  createFarmer(data: any): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<{ data: { name: string } }>(
        `${this.apiUrl}/farmers/estates`,
        data,
        {
          headers,
        }
      )
      .pipe(
        map((response) => response.data.name),
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
  updateFarmer(data: any, id: string): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<{ data: { id: string } }>(
        `${this.apiUrl}/farmers/estates/${id}`,
        data,
        {
          headers,
        }
      )
      .pipe(
        map((response) => response.data.id),
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
}
