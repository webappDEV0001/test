import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '../../config';

@Injectable()
export class CounterService {
  constructor(private http: HttpClient) {}

  /**
   * @description
   * Endpoint for counter RU of CRUD
   *
   */

  fetchCounter(): Observable<any> {
    return this.http.get<any>(`${apiUrl}counter/`);
  }

  updateCounter(payload: any): Observable<any> {
    return this.http.patch<any>(`${apiUrl}counter/1/`, payload);
  }
}
