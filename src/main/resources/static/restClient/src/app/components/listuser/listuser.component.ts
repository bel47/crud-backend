import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserService} from "../../shared_service/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
 // private user:User[];
  user: Observable<User[]>;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      user=>{
      console.log(user);
      this.user = this.userService.getUsers();
    },
      error => {
        console.log(error);
      });
  }

}
