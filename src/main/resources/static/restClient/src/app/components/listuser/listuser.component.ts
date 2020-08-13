import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserService} from "../../shared_service/user.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  user: Observable<User[]>;
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
     this.reloadData();
  }
  reloadData() {
    this.userService.getUsers().subscribe(
      user=>{
        console.log(user);
        this.user = this.userService.getUsers();
      },
      error => {
        console.log(error);
      });
  }
  deleteUser(user){
    this.userService.deleteUser(user.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateUser(user){
    this.userService.setter(user);
   // this.reloadData();
    this.router.navigate(["/op"]);
  }

  newUser(){
    let user = new User();
    this.userService.setter(user);
    this.router.navigate(["/op"]);
  }
}
