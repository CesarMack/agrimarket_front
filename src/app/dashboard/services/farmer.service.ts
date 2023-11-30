import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { Catalog, Product } from '../interfaces/catalog';
import { ProductType } from '../interfaces/productType';
import { Units } from '../interfaces/units';
import { ProductData } from '../interfaces/productData';
import { Orders } from '../interfaces/orders';
import { Order } from '../interfaces/order';
import { Cards } from '../interfaces/cards';

@Injectable({ providedIn: 'root' })
export class FarmerService {
  private apiUrl: string = 'https://agrimarketapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Dashboard> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<Dashboard>(`${this.apiUrl}/farmers/dashboard`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  getCatalog(): Observable<Catalog> {
    const token = localStorage.getItem('user_token');

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

  getProductType(): Observable<ProductType> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<ProductType>(`${this.apiUrl}/product_types`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  getUnits(): Observable<Units> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Units>(`${this.apiUrl}/units_of_measurements`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  getInfoProduct(id: string): Observable<ProductData> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<ProductData>(`${this.apiUrl}/products/${id}`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
  getOrders(): Observable<Orders> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Orders>(`${this.apiUrl}/orders`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  getStatusOrder(status: string): Observable<Orders> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Orders>(`${this.apiUrl}/orders?status=${status}`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
  getOrder(id: string): Observable<Order> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Order>(`${this.apiUrl}/orders/${id}`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  getDashboardCard(): Observable<Cards> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Cards>(`${this.apiUrl}/farmers/dashboard`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  updateStatusOrder(id: string, status: string): Observable<String> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<Order>(
        `${this.apiUrl}/orders/update_order_status/${id}`,
        { status: status },
        {
          headers,
        }
      )
      .pipe(
        map((response) => response.data.status),
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  createProduct(data: any): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<{ data: { id: string } }>(`${this.apiUrl}/farmers/products`, data, {
        headers,
      })
      .pipe(
        map((response) => response.data.id),
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }

  updateProduct(data: any, id: string): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<{ data: { id: string } }>(
        `${this.apiUrl}/farmers/products/${id}`,
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

  deletePhoto(id: string): Observable<string> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .delete<{ data: string }>(
        `${this.apiUrl}/farmers/products/${id}/photos`,
        {
          headers,
        }
      )
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          throw new Error('Authentication error');
        })
      );
  }
  uploadPhoto(photo: File, id: string): Observable<string> {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const formData: FormData = new FormData();
    formData.append('photo', photo, photo.name);

    return this.http
      .post<string>(`${this.apiUrl}/farmers/products/${id}/photos`, formData, {
        headers,
      })
      .pipe(
        catchError((error) => {
          throw new Error('Error uploading photo');
        })
      );
  }
}
