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

    constructor(public httpClient: HttpClient) { }

    public getUserTable(page=1,searchStr=""): Observable<any> {
        let reqURL=_.template(this.userListURL)({page:page});
        
        if(this.isMock){
            return this.httpClient.get(this.userListURL);
        }

        return this.httpClient.post(reqURL,{userName:searchStr});
    }

    public del(id): Observable<any> {
        let reqURL=_.template(this.delUserURL)({id:id});
        return this.httpClient.delete(reqURL);
    }
}
