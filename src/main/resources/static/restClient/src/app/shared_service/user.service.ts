import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://localhost:8181/api/';
  private user:User;

   headerOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'users');
  }
  getUser(id:number): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'user/'+id);
  }
  deleteUser(id:number): Observable<User[]>{
    return this.http.delete<User[]>(this.baseUrl+'user/'+id);
  }
  createUsers(user:User): Observable<User[]>{
    return this.http.post<User[]>(this.baseUrl+'user',JSON.stringify(user), {headers:this.headerOptions});
  }
  updateUsers(user:User): Observable<User[]>{
    return this.http.put<User[]>(this.baseUrl+'user',JSON.stringify(user), {headers:this.headerOptions});
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  setter(user:User){
    this.user = user;
  }

  getter(){
    return this.user;
  }
}
