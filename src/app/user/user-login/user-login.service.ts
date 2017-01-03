import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/user-model';

@Injectable()
export class UserLoginService {
  private subject: BehaviorSubject<User>;
  private userLoginURL = 'app/user/user-login/user-login-mock.json';

  constructor(private http:Http){
    console.log("UserLoginService init.");
    let user:User = JSON.parse(localStorage.getItem("currentUser"));
    this.subject = new BehaviorSubject<User>(user);
  }

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public login(user:User){
  	console.log("user login service login...");
    //JSON.stringify({ username: user.username,password:user.password})
    return this.http.get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              if(user && user.token){
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(Object.assign({},user));
              }
              return response;
            });
  }

  public logout():void{
  	console.log("user login service logout...");
    //退出登录移除
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
