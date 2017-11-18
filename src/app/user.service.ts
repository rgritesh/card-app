import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

import {UserTodo} from './todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api
  private todoUrl= 'https://jsonplaceholder.typicode.com/todos?userId=';

  constructor(
    private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(users => this.log(`fetched User`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  

  /** GET user todo by user id.*/
  getTodo(id: number): Observable<UserTodo> {
    const url = `${this.todoUrl}${id}`;
    return this.http.get<UserTodo>(url).pipe(
      tap(_ => this.log(`fetched User id=${id}`)),
      catchError(this.handleError<UserTodo>(`getUserTodo id=${id}`))
    );
  }

 

 

  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    console.log('UserService: ' + message);
  }
}
