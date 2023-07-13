import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

/**
 * 后端接口权限服务
 */
@Injectable()
export class ApiPermissionService {
    public isMock=environment.isMock;

    private apiPermissionTableURL = environment.dataURL.apiPermissionTableURL;
    private apiPermissionDetailURL = environment.dataURL.apiPermissionDetailURL;
    private delApiPermissionURL = environment.dataURL.delApiPermissionURL;
    private newApiPermissionURL = environment.dataURL.newApiPermissionURL;
    private updateApiPermissionURL = environment.dataURL.updateApiPermissionURL;
    private apiRoleListURL = environment.dataURL.apiRoleListURL;

    constructor(public httpClient: HttpClient) { }

    public getApiPermissionTable(page=1,searchStr=""): Observable<any> {
        let reqURL=_.template(this.apiPermissionTableURL)({page:page});
        
        if(this.isMock){
            return this.httpClient.get(this.apiPermissionTableURL);
        }

        return this.httpClient.post(reqURL,{
            apiName:searchStr
        });
    }

    public getRolesByApiId(apiId): Observable<any> {
        let reqURL=_.template(this.apiRoleListURL)({id:apiId});
        return this.httpClient.get(reqURL);
    }

    public getApiPermDetails(apiId): Observable<any> {
        let reqURL=_.template(this.apiPermissionDetailURL)({id:apiId});
        return this.httpClient.get(reqURL);
    }

    public deleteByApiId(id): Observable<any> {
        let reqURL=_.template(this.delApiPermissionURL)({id:id});
        return this.httpClient.delete(reqURL);
    }

    public newApiPermission(apiPermission:any): Observable<any> {
        return this.httpClient.post(this.newApiPermissionURL,apiPermission);
    }

    public updateApiPermission(apiPermission:any): Observable<any> {
        return this.httpClient.post(this.updateApiPermissionURL,apiPermission);
    }
}
