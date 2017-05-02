import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/user-model';

@Injectable()
export class UserLoginService {
  public userLoginURL = 'mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();
  
  constructor(public http:Http){}

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public login(user:User){
    return this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              console.log("user object>"+user);
              if(user && user.token){
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(Object.assign({},user));
              }
              return response;
            })
            .subscribe(
                data => {
                    console.log("login success>"+data);
                },
                error => {
                    console.error(error);
                }
            );
  }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
