import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { Suggestions } from '../interfaces/suggestions';
import { Users } from '../interfaces/users';
import { Category } from '../interfaces/category';
import { ProductType } from '../interfaces/productType';
import { Units } from '../interfaces/units';
import { User } from '../interfaces/user';
import { Backups } from '../interfaces/backups';

@Injectable({ providedIn: 'root' })
export class AdmiService {
  private apiUrl: string =
    'https://agrimarketapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Dashboard> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Dashboard>(`${this.apiUrl}/admins/dashboard`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getSuggestions(): Observable<Suggestions> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Suggestions>(`${this.apiUrl}/suggested_products`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
  updateStatusSuggestion(id: String): Observable<any> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .post<any>(
        `${this.apiUrl}/admins/suggestions/${id}`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getUsers(): Observable<Users> {
    const token = localStorage.getItem('user_token');

    console.log(token);

    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<Users>(`${this.apiUrl}/admins/users`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  findUser(name: string): Observable<Users> {
    const token = localStorage.getItem('user_token');

    console.log(token);
    const data = {
      name: name,
    };
    // Verificar si el token está disponible en el localStorage
    if (!token) {
      // Manejar la situación en la que el token no está disponible
      // Puede lanzar un error, redirigir a la página de inicio de sesión, etc.
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .post<Users>(`${this.apiUrl}/admins/find_user`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getCategory(): Observable<Category> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<Category>(`${this.apiUrl}/categories`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getProductType(): Observable<ProductType> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);

    return this.http
      .get<ProductType>(`${this.apiUrl}/product_types`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
  findProductType(name: string): Observable<ProductType> {
    const token = localStorage.getItem('user_token');

    console.log(token);
    const data = {
      name: name,
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<ProductType>(`${this.apiUrl}/admins/find_product_type`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  setProductType(name: String, category: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const data = {
      name: name,
      category_id: category,
      active: 1,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<any>(`${this.apiUrl}/admins/product_types`, data, {
        headers,
      })
      .pipe(
        catchError(() => {
          throw new Error('Authentication error');
        })
      );
  }
  updateProductType(
    id: String,
    name: String,
    category: String
  ): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const data = {
      name: name,
      category_id: category,
    };
    console.log(data);
    console.log(`${this.apiUrl}/admins/product_types/${id}`);

    return this.http
      .post<any>(`${this.apiUrl}/admins/product_types/${id}`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  changeStatus(id: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json', // Agregar la cabecera Accept
      'Content-Type': 'application/x-www-form-urlencoded', // Agregar la cabecera Content-Type
    });

    return this.http
      .post<any>(
        `${this.apiUrl}/admins/product_types/${id}/active`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  setCategories(name: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const data = {
      name: name,
      active: 1,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<any>(`${this.apiUrl}/admins/categories`, data, {
        headers,
      })
      .pipe(
        catchError(() => {
          throw new Error('Authentication error');
        })
      );
  }

  changeStatusCategories(id: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json', // Agregar la cabecera Accept
      'Content-Type': 'application/x-www-form-urlencoded', // Agregar la cabecera Content-Type
    });

    return this.http
      .post<any>(
        `${this.apiUrl}/admins/categories/${id}/active`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  updateCategoryType(id: String, name: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const data = {
      name: name,
    };

    return this.http
      .post<any>(`${this.apiUrl}/admins/categories/${id}`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  ///Units

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
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  setUnit(name: String, code: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const data = {
      name: name,
      code: code,
      active: 1,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<any>(`${this.apiUrl}/admins/units_of_measurements`, data, {
        headers,
      })
      .pipe(
        catchError(() => {
          throw new Error('Authentication error');
        })
      );
  }

  updateUnitType(id: String, name: String, code: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const data = {
      name: name,
      code: code,
    };

    return this.http
      .post<any>(`${this.apiUrl}/admins/units_of_measurements/${id}`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  changeStatusUnit(id: String): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json', // Agregar la cabecera Accept
      'Content-Type': 'application/x-www-form-urlencoded', // Agregar la cabecera Content-Type
    });

    return this.http
      .post<any>(
        `${this.apiUrl}/admins/units_of_measurements/${id}/active`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  ///Show user

  getUserData(): Observable<User> {
    const token = localStorage.getItem('user_token');
    const idUser = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<User>(`${this.apiUrl}/users/${idUser}`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  //register

  setRegisterUser(
    name: String,
    lastName: String,
    email: String,
    password: String
  ): Observable<any> {
    const token = localStorage.getItem('user_token');
    console.log(token);

    const data = {
      first_name: name,
      last_name: lastName,
      email: email,
      password: password,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<any>(`${this.apiUrl}/admins/register`, data, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  //API BACKUP

  private apiUrlBD: string =
    'https://agrimarketapi.azurewebsites.net/api/v1/';
  setBackupDifferential(): Observable<any> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<any>(
        `${this.apiUrlBD}admins/backups/makeDifferentialBackup`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  getBackupDifferential(): Observable<Backups> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    });

    console.log(token);

    return this.http
      .get<Backups>(`${this.apiUrlBD}admins/backups/DifferentialBackup`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  deleteBackupDifferential(name: String): Observable<any> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    console.log(token);

    console.log(name);

    return this.http
      .post<any>(
        `${this.apiUrlBD}admins/backups/deleteDifferentialBackup/${name}`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  restoreBackupDifferential(name: String): Observable<any> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<any>(
        `${this.apiUrlBD}admins/backups/restoreDifferentialBackup/${name}`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
  //Backup  Full

  getFullBackup(): Observable<Backups> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    });

    console.log(token);

    return this.http
      .get<Backups>(`${this.apiUrlBD}admins/backups/FullBackup`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }

  restoreFullBackup(): Observable<any> {
    const token = localStorage.getItem('user_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<any>(
        `${this.apiUrlBD}admins/backups/restoreFullBackup`,
        {},
        {
          headers,
        }
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
}
