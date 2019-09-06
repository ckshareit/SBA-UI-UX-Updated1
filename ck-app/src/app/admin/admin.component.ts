import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  loginStatus=true;
  signupStatus=false;

  onClickSignup(){
    this.loginStatus=false;
    this.signupStatus=true;
  }

  onClickLogin(){
this.loginStatus=true;
this.signupStatus=false;
  }



}
