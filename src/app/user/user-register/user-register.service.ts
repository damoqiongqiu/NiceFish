import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { UserInfo } from '../model/user-info-model';

@Injectable()
export class UserRegisterService {
    private userRegisterURL = "";
    constructor(private http:Http) { }

    public register(userInfo:UserInfo):void{

    }
}