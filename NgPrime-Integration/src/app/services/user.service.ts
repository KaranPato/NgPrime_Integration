import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl).pipe();
  }

  addUpdateUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data).pipe();
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id).pipe();
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id).pipe();
  }
}
