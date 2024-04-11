import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Catalog } from '../interfaces/catalog';
import { Product } from '../interfaces/product';
@Injectable({ providedIn: 'root' })
export class MainService {
  private apiUrl: string =
    'http://[2806:2f0:1001:45b:1810:b1fa:fe5c:19b]:8000/api/v1';

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
}
