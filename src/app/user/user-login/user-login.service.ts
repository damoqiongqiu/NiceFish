import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/index';

@Injectable()
export class UserLoginService {
  public currentUser : User;
  constructor(private http:Http){
  }

  public login(user:User){
  	console.log("user login service login...");
    return this.http.post('/api/users/login',JSON.stringify({ username: user.username,password:user.password}))
            .map((response: Response) => {
              let user = response.json();
              if(user && user.token){
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.currentUser = user;
              }
              console.log(response);
            });
  }

  public logout():void{
  	console.log("user login service logout...");
    //退出登录移除
    localStorage.removeItem("currentUser");
    this.currentUser = null;
  }
}
