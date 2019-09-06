import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginStatusService } from 'src/app/login-status.service';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent implements OnInit {

 
  constructor(private userStatus:LoginStatusService, public callToApp:AppComponent) { }

  ngOnInit() {
  }

  @ViewChild('f', { static: false }) loginForm: NgForm;
  
 
  user = {
    email: '',
    password:''
  };
  submitted = false;

  
  userFlag:boolean=false;

  

  userLoginFlag(){
this.userFlag=true;
this.userStatus.changeLoginStatus(this.userFlag);

this.callToApp.fromUser();
  }

  

  onSubmit() {
    this.submitted = true;
   
    this.user.email = this.loginForm.value.userData.email;
   
    this.user.email = this.loginForm.value.userData.password;

   this.userLoginFlag();
  }

}
