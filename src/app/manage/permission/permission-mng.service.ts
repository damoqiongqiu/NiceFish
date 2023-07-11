import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class PermissionMngService {
    public isMock=environment.isMock;

    private permissionTableURL = environment.dataURL.permissionTableURL;
    private delPermissionURL = environment.dataURL.delPermissionURL;

    constructor(public httpClient: HttpClient) { }

    public getPermissionTable(page=1,searchStr=""): Observable<any> {
        let reqURL=_.template(this.permissionTableURL)({page:page});
        
        if(this.isMock){
            return this.httpClient.get(this.permissionTableURL);
        }

        return this.httpClient.post(reqURL,{
            permissionStr:searchStr
        });
    }

    public del(id): Observable<any> {
        let reqURL=_.template(this.delPermissionURL)({id:id});
        return this.httpClient.delete(reqURL);
    }

    public toEdit(editURL:string): Observable<any> {
        return this.httpClient.get(editURL);
    }

    public newPermission(newURL:string,data:any): Observable<any> {
        return this.httpClient.post(newURL,data);
    }

    public updatePermission(updateURL:string,permission:any): Observable<any> {
        return this.httpClient.post(updateURL,permission);
    }

    public getPermissionDetails(dataURL: string,permissionId): Observable<any> {
        return this.httpClient.get(dataURL+permissionId);
    }
}
