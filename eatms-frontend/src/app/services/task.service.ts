import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://localhost:7030/api/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks() {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getTaskById(id: string) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  createTask(task: any) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.post(this.apiUrl, task, { headers });
  }

  updateTask(id: string, task: any) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.put(
      `${this.apiUrl}/${id}`,
      task,
      {
        headers,
        responseType: 'text'
      }
    );  }

    deleteTask(id: string) {

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
      );    }
}