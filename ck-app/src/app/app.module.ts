import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { UserComponent } from './user/user.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { MentorLoginComponent } from './mentor/mentor-login/mentor-login.component';
import { MentorSignupComponent } from './mentor/mentor-signup/mentor-signup.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MentorDashComponent } from './login-component/mentor-dash/mentor-dash.component';
import { UserDashComponent } from './login-component/user-dash/user-dash.component';
import { AdminDashComponent } from './login-component/admin-dash/admin-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    UserComponent,
    MentorComponent,
    AdminComponent,
    UserLoginComponent,
    UserSignupComponent,
    MentorLoginComponent,
    MentorSignupComponent,
    AdminSignupComponent,
    AdminLoginComponent,
    LoginComponentComponent,
    MentorDashComponent,
    UserDashComponent,
    AdminDashComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
