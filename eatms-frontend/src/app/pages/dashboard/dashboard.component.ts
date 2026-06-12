import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/asset.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalAssets: number = 0;
  totalTasks: number = 0;
  availableAssets: number = 0;
  pendingTasks: number = 0;

  constructor(
    private assetService: AssetService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {

    this.assetService.getAllAssets().subscribe(data => {
      this.totalAssets = data.length;
      this.availableAssets =
        data.filter(asset => asset.status === 'Available').length;
    });
    
    this.taskService.getAllTasks().subscribe(data => {
      this.totalTasks = data.length;
      this.pendingTasks =
        data.filter(task => task.status === 'Pending').length;
    });

  }

}