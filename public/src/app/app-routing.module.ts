import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { MealStartComponent } from './menu/meal-start/meal-start.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingleItemComponent } from './posts/single-item/single-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent,
  },
  {
    path: 'posts', 
    component: PostsComponent,
    children: [
      {
        path: 'single',
        component: SingleItemComponent,
        children:[
          {
            path:':item',
            component: SingleItemComponent
          }
        ]
      }
    ]
  },
  {
    path: 'users', 
    component: UsersComponent
  },
  {
    path: 'menu', 
    component: MenuComponent,
    children: [
      {
        path: 'meal',
        component: MealStartComponent,
      },
    ]
  },
  {
    path: 'photos', 
    component: PhotosComponent
  },
  {
    path: 'signup', 
    component: SignupComponent
  },
  { 
    path: '**', 
    component: PagenotfoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
