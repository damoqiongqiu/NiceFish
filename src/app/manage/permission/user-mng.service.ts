import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class UserMngService {
    public isMock=environment.envName.indexOf("mock")!=-1;

    private userListURL = environment.dataURL.userListURL;
    private delUserURL = environment.dataURL.delUserURL;
    private userDetailURL = environment.dataURL.userDetailURL;
    private signUpURL = environment.dataURL.signUpURL;
    private updateUserURL = environment.dataURL.updateUserURL;

    constructor(public httpClient: HttpClient) { }

    public getUserTable(page=1,searchStr=""): Observable<any> {
        let reqURL=_.template(this.userListURL)({page:page});
        
        //mock
        if(this.isMock){
            return this.httpClient.get(this.userListURL);
        }

        return this.httpClient.post(reqURL,{userName:searchStr});
    }

    public del(id): Observable<any> {
        let reqURL=_.template(this.delUserURL)({id:id});
        
        //mock
        if(this.isMock){
            return this.httpClient.get(this.delUserURL);
        }

        return this.httpClient.delete(reqURL);
    }

    public getUserDetail(userId): Observable<any> {
        let reqURL=_.template(this.userDetailURL)({id:userId});

        //mock
        if(this.isMock){
            return this.httpClient.get(this.userDetailURL);
        }

        return this.httpClient.get(reqURL);
    }

    public newUser(user): Observable<any> {
        //mock
        if(this.isMock){
            return this.httpClient.get(this.signUpURL);
        }
        
        return this.httpClient.post(this.signUpURL,user);
    }

    public updateUser(user): Observable<any> {
        //mock
        if(this.isMock){
            return this.httpClient.get(this.updateUserURL);
        }
        
        return this.httpClient.post(this.updateUserURL,user);
    }
}
