import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Catalog } from '../interfaces/catalog';
import { Product } from '../interfaces/product';
@Injectable({ providedIn: 'root' })
export class MainService {
  private apiUrl: string = 'https://agrimarketapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Catalog> {
    const token = localStorage.getItem('user_token');

    if (!token) {
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Catalog>(`${this.apiUrl}/products`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
  getProductByName(name: string): Observable<Catalog> {
    const token = localStorage.getItem('user_token');

    if (!token) {
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Catalog>(`${this.apiUrl}/products?search=${name}`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
  getProductData(id: string): Observable<Product> {
    const token = localStorage.getItem('user_token');

    if (!token) {
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<Product>(`${this.apiUrl}/products/${id}`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  createOrder(data: any): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<{ data: { id: string } }>(`${this.apiUrl}/clients/orders`, data, {
        headers,
      })
      .pipe(
        map((response) => response.data.id),
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
}
