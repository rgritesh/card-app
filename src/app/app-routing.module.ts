import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserboardComponent }   from './userboard/userboard.component';
import {UserTodoComponent} from './user-todo/user-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: UserboardComponent },
  { path: 'todo/:id', component: UserTodoComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
