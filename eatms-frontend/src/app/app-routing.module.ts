import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAssetComponent } from './pages/create-asset/create-asset.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { EditAssetComponent } from './pages/edit-asset/edit-asset.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'create-asset', component: CreateAssetComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'edit-asset/:id', component: EditAssetComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'users', component: UsersComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }