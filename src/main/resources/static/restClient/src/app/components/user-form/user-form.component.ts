import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserService} from "../../shared_service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
   user:User;
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getter();
  }
  onSubmit(){
    if(this.user.id == undefined){
      this.userService.createUsers(this.user).subscribe(
        user=>{
          console.log(user);
          this.router.navigate(["/"]);
        },
        error => {
          console.log(error);
        });
    }else {
      this.userService.updateUsers(this.user).subscribe(
        user=>{
          console.log(user);
          this.router.navigate(["/"]);
        },
        error => {
          console.log(error);
        });
    }
  }
}
