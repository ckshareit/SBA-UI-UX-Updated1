import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {



  constructor() { }
  userLoginStatus:boolean;

  changeLoginStatus(status:boolean){
this.userLoginStatus=status;
  }

  getLoginStatus():boolean{
    return this.userLoginStatus;
  }

}
