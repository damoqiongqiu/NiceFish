import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { UserInfo } from '../model/user-info-model';

@Injectable()
export class UserRegisterService {
    private userRegisterURL = "app/user/user-register/user-register-mock.json";
    constructor(private http:Http) { }

    public register(userInfo:UserInfo){
        //JSON.stringify(userInfo)
        return this.http.get(this.userRegisterURL)
            .map((response: Response) => response.json());
    }
}