import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

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
