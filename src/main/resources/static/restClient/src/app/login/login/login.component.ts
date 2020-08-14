import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    let user = new User();
    //this.userService.setter(user);
    this.router.navigate(["/login"]);
  }
}
