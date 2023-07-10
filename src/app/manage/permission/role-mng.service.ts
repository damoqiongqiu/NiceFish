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
    private newRoleURL = environment.dataURL.newRoleURL;
    private updateRoleURL = environment.dataURL.updateRoleURL;
    private roleDetailURL = environment.dataURL.roleDetailURL;
    
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

    public getRoleInfo(roleId): Observable<any> {
        let reqURL=_.template(this.roleDetailURL)({id:roleId});
        return this.httpClient.get(reqURL);
    }

    public newRole(roleInfo:any): Observable<any> {
        return this.httpClient.post(this.newRoleURL,roleInfo);
    }
    
    public updateRole(roleInfo:any): Observable<any> {
        return this.httpClient.post(this.updateRoleURL,roleInfo);
    }
    
    public deleteRole(id): Observable<any> {
        let reqURL=_.template(this.delRoleURL)({id:id});
        return this.httpClient.delete(reqURL);
    }
}
