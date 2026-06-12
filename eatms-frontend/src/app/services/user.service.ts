import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7030/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getUserById(id: string) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any>(
      `${this.apiUrl}/${id}`,
      { headers }
    );
  }

  createUser(user: any) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.post(this.apiUrl, user, { headers });
  }

  deleteUser(id: string) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.delete(
      `${this.apiUrl}/${id}`,
      {
        headers,
        responseType: 'text'
      }
    );
  }

  updateUser(id: string, user: any) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.put(
      `${this.apiUrl}/${id}`,
      user,
      { headers }
    );
  }
}