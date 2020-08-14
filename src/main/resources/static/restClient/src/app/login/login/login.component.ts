import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.msg='login button is Clicked';
    console.log(this.msg);
  }

}
