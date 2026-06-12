import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7030/api/auth';

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}