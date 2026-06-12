import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
      console.log(data);
    });
  }

  editTask(id: string) {
    this.router.navigate(['/edit-task', id]);
  }

  deleteTask(id: string) {

    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }
  
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        alert('Task deleted successfully');
      },
      error: (error) => {
        console.log(error);
      }
    });
  
  }
}