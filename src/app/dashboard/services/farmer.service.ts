import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { Catalog } from '../interfaces/catalog';

@Injectable({ providedIn: 'root' })
export class FarmerService {
  private apiUrl: string =
    'http://[2806:2f0:1001:845b:665:8b98:ce58:95dc]:80/api/v1';

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

  getCatalog(): Observable<Catalog> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Catalog>(`${this.apiUrl}/products`, {
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
