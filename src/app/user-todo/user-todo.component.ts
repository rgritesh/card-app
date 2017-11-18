import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User }         from '../user';
import {UserTodo} from '../todo';
import { UserService }  from '../user.service';
  
@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',

})
export class UserTodoComponent implements OnInit {
  userTodo: any ;
  @Input() user: User;
 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getTodo(id)
      .subscribe(userTodo => this.userTodo = userTodo);
  }

  goBack(): void {
    this.location.back();
  }


}
