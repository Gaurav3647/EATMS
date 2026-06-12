import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';

  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  login() {
    const loginData = {
      email: this.email,
      password: this.password
    };
  
    this.authService.login(loginData).subscribe({
      next: (response: any) => {

        console.log('FULL RESPONSE:', response);
      
        localStorage.setItem('token', response.token);
      
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
