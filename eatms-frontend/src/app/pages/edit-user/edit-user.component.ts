import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: string = '';

  fullName: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;

    this.userService.getUserById(this.id).subscribe({
      next: (user) => {

        this.fullName = user.fullName;
        this.email = user.email;
        this.role = user.role;

      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  updateUser() {

    const user = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.userService.updateUser(this.id, user).subscribe({
      next: () => {

        alert('User updated successfully');

        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

}