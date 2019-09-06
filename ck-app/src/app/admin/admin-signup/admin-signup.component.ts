import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('f', { static: false }) signupForm: NgForm;
  
  genders = ['Male', 'Female'];
  user = {
    name: '',
    email: '',
    gender: '',
    password:''
  };
  submitted = false;

  
  

  onSubmit() {
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.name;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.email = this.signupForm.value.userData.password;

    
  }

}
