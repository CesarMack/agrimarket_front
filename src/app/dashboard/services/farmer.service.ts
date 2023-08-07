import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';

@Injectable({ providedIn: 'root' })
export class FarmerService {
  private apiUrl: string = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Dashboard> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Dashboard>(`${this.apiUrl}/farmers/dashboard`, {
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
