import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  deleteUser(id: string) {

    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }
  
    this.userService.deleteUser(id).subscribe({
      next: () => {
  
        alert('User deleted successfully');
  
        this.userService.getAllUsers().subscribe(data => {
          this.users = data;
        });
  
      },
      error: (error) => {
        console.log(error);
      }
    });
  
  }

}