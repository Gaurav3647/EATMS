import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CreateAssetComponent } from './pages/create-asset/create-asset.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { EditAssetComponent } from './pages/edit-asset/edit-asset.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AssetsComponent,
    TasksComponent,
    CreateAssetComponent,
    CreateTaskComponent,
    EditAssetComponent,
    EditTaskComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
