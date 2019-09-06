import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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

