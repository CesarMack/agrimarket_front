import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Catalog } from '../interfaces/catalog';
import { Product } from '../interfaces/product';
@Injectable({ providedIn: 'root' })
export class MainService {
  private apiUrl: string = 'https://agrimarketapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Catalog> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    if (!token) {
      throw new Error('Token not available');
    }
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

  getProductData(id: string): Observable<Product> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    if (!token) {
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Product>(`${this.apiUrl}/products/${id}`, {
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
