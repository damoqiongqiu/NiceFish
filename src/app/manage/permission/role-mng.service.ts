import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class RoleMngService {
    public isMock=environment.envName.indexOf("mock")!=-1;

    private roleTableURL = environment.dataURL.roleTableURL;
    private delRoleURL = environment.dataURL.delRoleURL;
    
    constructor(public httpClient: HttpClient) { }

    public getRoleTable(page=1,searchStr=""): Observable<any> {
        let reqURL=_.template(this.roleTableURL)({page:page});

        if(this.isMock){
            return this.httpClient.get(this.roleTableURL);
        }
        
        return this.httpClient.post(reqURL,{
            roleName:searchStr
        });
    }

    public del(id): Observable<any> {
        let reqURL=_.template(this.delRoleURL)({id:id});
        return this.httpClient.delete(reqURL);
    }

    public newRole(newURL:string,data:any): Observable<any> {
        return this.httpClient.post(newURL,data);
    }

    public updateRole(updateURL:string,role:any): Observable<any> {
        return this.httpClient.post(updateURL,role);
    }

    public getRoleDetails(dataURL: string,roleId): Observable<any> {
        return this.httpClient.get(dataURL+roleId);
    }

    public getAllPermissionsByRoleId(dataURL: string,roleId): Observable<any> {
        return this.httpClient.get(dataURL+roleId);
    }

    public getAllPermissions(dataURL: string,data): Observable<any> {
        return this.httpClient.post(dataURL,data);
    }

}
