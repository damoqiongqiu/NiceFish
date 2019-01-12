import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class UserLoginService {
  public userLoginURL = 'mock-data/user-login-mock.json';
  public subject: Subject<any> = new Subject<any>();

  constructor(public http: Http) { }

  public get currentUser(): Observable<any> {
    return this.subject.asObservable();
  }

  public login(user: any) {
    return this.http
      .get(this.userLoginURL)
      .pipe(
        map((response: Response) => {
          let user = response.json();
          console.log("user object>" + user);
          if (user && user.token) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.subject.next(Object.assign({}, user));
          }
          return response;
        })
      )
      .subscribe(
        data => {
          console.log("login success>" + data);
        },
        error => {
          console.error(error);
        }
      );
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
