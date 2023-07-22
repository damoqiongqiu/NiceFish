import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class UserMngService {
    private userListURL = environment.dataURL.userListURL;
    private delUserURL = environment.dataURL.delUserURL;
    private userDetailURL = environment.dataURL.userDetailURL;
    private signUpURL = environment.dataURL.signUpURL;
    private updateUserURL = environment.dataURL.updateUserURL;
    private userMenuListURL = environment.dataURL.userMenuListURL;

    constructor(public httpClient: HttpClient) { }

    public getUserTable(page = 1, searchStr = ""): Observable<any> {
        let reqURL = _.template(this.userListURL)({ page: page });
        return this.httpClient.post(reqURL, { userName: searchStr });
    }

    public del(id): Observable<any> {
        let reqURL = _.template(this.delUserURL)({ id: id });
        return this.httpClient.delete(reqURL);
    }

    public getUserDetails(userId): Observable<any> {
        let reqURL = _.template(this.userDetailURL)({ id: userId });
        return this.httpClient.get(reqURL);
    }

    public newUser(user): Observable<any> {
        return this.httpClient.post(this.signUpURL, user);
    }

    public updateUser(user): Observable<any> {
        return this.httpClient.post(this.updateUserURL, user);
    }

    /**
     * 根据 userId 加载此用户的菜单
     * @param userId 
     * @returns 
     */
    public getMenuByUser(userId): Observable<any> {
        let reqURL = _.template(this.userMenuListURL)({ id: userId });
        return this.httpClient.get(reqURL);
    }
}
