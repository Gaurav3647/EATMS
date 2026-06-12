import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  title: string = '';
  description: string = '';
  status: string = '';
  dueDate: string = '';
  assignedToUserId: number = 1;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  createTask() {

    const task = {
      title: this.title,
      description: this.description,
      status: this.status,
      dueDate: this.dueDate,
      assignedToUserId: this.assignedToUserId
    };

    this.taskService.createTask(task).subscribe({
      next: () => {
        alert('Task created successfully');
        this.router.navigate(['/tasks']);
      },
      
      error: (error) => {
        console.log(error);
      }
    });
  }
}
