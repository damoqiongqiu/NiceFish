import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../model/user-model';

@Injectable()
export class UserRegisterService {
    private userRegisterURL = "app/user/user-register/user-register-mock.json";
    private testEmailURL = "";
    private subject: Subject<User> = new Subject<User>();

    constructor(private http:Http) { }

    public get currentUser():Observable<User>{
      return this.subject.asObservable();
    }

    public register(user: User){
        //JSON.stringify(userInfo)
        return this.http.get(this.userRegisterURL)
            .map((response: Response) => {
                let user = response.json();
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(user);    
            });
    }

    public testEmail(email:string){
        return this.http.get(this.testEmailURL)
            .map((response: Response) => response.json());
    }
}