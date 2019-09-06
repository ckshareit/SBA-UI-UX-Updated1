import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
 
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  //@Output() searchCourse = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  message:string='';

  searchStatus=false;
  blur=true;

  onSearchClick(nameInput: HTMLInputElement){
this.message=nameInput.value;
this.searchStatus=!this.searchStatus;
this.blur=false;
//this.sendMessage();
  }

  onCloseClick(){
    
    this.searchStatus=false;
    this.blur=true;
      }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  courses = [{courseName: 'AWS Developers', mentorName: 'Chandan', experience: '10 Years', delivered:50000,timing:'9-10',fee:1000},{courseName: 'Spring', mentorName: 'Parth', experience: '7 Years', delivered:40000,timing:'10-11',fee:5000},
  {courseName: 'AWS Architect', mentorName: 'Chandan', experience: '5 Years', delivered:3000,timing:'12-1',fee:1500},{courseName: 'Mean', mentorName: 'Honey', experience: '8 Years', delivered:25000,timing:'2-3',fee:4000},
  {courseName: 'Android', mentorName: 'Yogendra', experience: '4 Years', delivered:42000,timing:'3-4',fee:4500},{courseName: 'Arduino', mentorName: 'Chandan', experience: '7 Years', delivered:1800,timing:'4-5',fee:2500},
  {courseName: 'Python', mentorName: 'Anirban', experience: '5 Years', delivered:35000,timing:'9-10',fee:1000},{courseName: 'Java', mentorName: 'Arushi', experience: '6 Years', delivered:36000,timing:'10-11',fee:500},
  {courseName: 'IT Infrastructure', mentorName: 'Chandan', experience: '12 Years', delivered:57000,timing:'11-12',fee:2100},{courseName: 'Mathematics', mentorName: 'Rahul', experience: '9 Years', delivered:38000,timing:'6-7',fee:1200}];



}
