import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  fullName: string = '';
  email: string = '';
  password: string = '';
  role: string = 'User';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  createUser() {

    const user = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.userService.createUser(user).subscribe({
      next: () => {
        alert('User created successfully');
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

}