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
    return this.http.get(this.baseUrl + '/users').pipe();
  }

  addUpdateUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/users', data).pipe();
  }
}
