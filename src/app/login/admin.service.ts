import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8090/api/auth';

  constructor(private http: HttpClient) {}

  //admin login API call
  login(data: any): Observable<any> {
    console.log('AdminService login called with data:', data);
    return this.http.post(`${this.baseUrl}/login`, data);
  }

}
