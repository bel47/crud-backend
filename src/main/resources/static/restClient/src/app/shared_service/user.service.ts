import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://localhost:8181/api/';
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.http.get(this.baseUrl+'users');
    return this.http.get<User[]>(this.baseUrl+'users');
  }
  getUser(id:number){
    return this.http.get(this.baseUrl+'user/'+id);
  }
  deleteUser(id:number){
    return this.http.delete(this.baseUrl+'user/'+id);
  }
  createUsers(user:User){
    return this.http.post(this.baseUrl+'user',JSON.stringify(user));
  }
  updateUsers(user:User){
    return this.http.put(this.baseUrl+'user',JSON.stringify(user));
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
}
