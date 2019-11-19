import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { User } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + '/users').pipe();
  }
}
