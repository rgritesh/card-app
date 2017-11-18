import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ClarityModule } from "clarity-angular";
import { AppRoutingModule }     from './app-routing.module';  
import { AppComponent } from './app.component';
import {UserboardComponent} from './userboard/userboard.component';
import {UserTodoComponent} from './user-todo/user-todo.component';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserboardComponent,
    UserTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
