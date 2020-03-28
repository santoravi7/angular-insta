import { Injectable } from '@angular/core';
import { User } from './user'
import { USER } from './user-credentials';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MesageService } from './mesage.service';

@Injectable({
  providedIn : 'root'
})
export class UsersService {
  private usersUrl = "api/users";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http : HttpClient,
  private mesageService: MesageService) { }

  getUsers (): Observable<User[]> {
    console.log("getUser in service -- ")
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched notes')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getStories (): Observable<User[]>{
      console.log("get stories");
      return this.http.get<User["stories"]>(this.usersUrl)
      .pipe(
        tap(_=>this.log("fetched stories")),
        catchError(this.handleError<User[]>('getStories',[]))
      )
  }

  getUser(id: number): Observable<User> {
    console.log("get user === ");
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched User id=${id}`)),
      catchError(this.handleError<User>(`User id=${id}`))
    );
  }

  addUser (user: User): Observable<User> {
    console.log("Add user in service");
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added hero w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }
  reversedList=[];
  updateUser(user: User): Observable<User> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated note id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  private log(message: string) {
    this.mesageService.add(`UsersService: ${message}`);
  }

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

}