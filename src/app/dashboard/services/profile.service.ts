import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { CPData } from '../interfaces/profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrl: string = 'https://api.copomex.com/query/';

  constructor(private http: HttpClient) {}

  getCPInfo(cp: string): Observable<CPData> {
    return this.http
      .get<CPData>(
        `${this.apiUrl}/info_cp/${cp}?type=simplified&token=e99527a4-4d5f-4411-8b05-fdb907c1798e`
      )
      .pipe(
        catchError((e) => {
          console.log(e);

          throw new Error('Authentication error');
        })
      );
  }
}
