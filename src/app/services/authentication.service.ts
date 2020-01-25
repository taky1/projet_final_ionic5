import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated : boolean;

  constructor() { }
  
  public login(user:string, password:string){
    if(user=='admin' && password=='1234'){
      this.authenticated=true;
    }
    else{
      this.authenticated=false;
    }
      return this.authenticated;

  }
}
