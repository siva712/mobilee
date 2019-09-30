import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { Task1Component } from './task1/task1.component';
import { Album1Component } from './album1/album1.component';
import { ShowphotosComponent } from './showphotos/showphotos.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:DashboardComponent},
  {path:'task',component:TaskComponent},
  {path:'posts',component:PostsComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'task1',component:Task1Component},
  {path:'album1',component:Album1Component},
  {path:'showphotos',component:ShowphotosComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
