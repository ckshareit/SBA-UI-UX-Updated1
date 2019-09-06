import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { CompileShallowModuleMetadata } from '@angular/compiler';






       
@Injectable({
    providedIn: 'root'
  })
export class UserService {
       
        constructor(private http : HttpClient){
      
        }

        
      userRegister(user) {
        return  this.http.post('/server/user/signup', user);
       
      }

     
    }