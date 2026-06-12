import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  taskId: string = '';
  title: string = '';
  description: string = '';
  status: string = '';
  dueDate: string = '';
  assignedToUserId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {

      this.taskId = id; 
  
      this.taskService.getTaskById(id).subscribe(task => {
  
        this.title = task.title;
        this.description = task.description;
        this.status = task.status;
        this.dueDate = task.dueDate;
        this.assignedToUserId = task.assignedToUserId;
  
      });
    }
  }

  updateTask() {

    const task = {
      title: this.title,
      description: this.description,
      status: this.status,
      dueDate: this.dueDate,
      assignedToUserId: this.assignedToUserId
    };
  
    this.taskService.updateTask(this.taskId, task).subscribe({
      next: () => {
        alert('Task updated successfully');
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  
  }
}
