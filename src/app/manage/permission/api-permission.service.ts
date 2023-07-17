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
    public isMock = environment.isMock;

    private apiPermissionTableURL = environment.dataURL.apiPermissionTableURL;
    private apiPermissionListAll = environment.dataURL.apiPermissionListAll;
    private apiPermissionListAllByRole = environment.dataURL.apiPermissionListAllByRole;
    private apiPermissionDetailURL = environment.dataURL.apiPermissionDetailURL;
    private delApiPermissionURL = environment.dataURL.delApiPermissionURL;
    private newApiPermissionURL = environment.dataURL.newApiPermissionURL;
    private updateApiPermissionURL = environment.dataURL.updateApiPermissionURL;
    private apiRoleListURL = environment.dataURL.apiRoleListURL;

    constructor(public httpClient: HttpClient) { }

    /**
     * 带分页
     * @param page 
     * @param searchStr 
     * @returns 
     */
    public getApiPermissionTable(page = 1, searchStr = ""): Observable<any> {
        let reqURL = _.template(this.apiPermissionTableURL)({ page: page });
        if (this.isMock) {
            return this.httpClient.get(this.apiPermissionTableURL);
        }
        return this.httpClient.post(reqURL, {
            apiName: searchStr
        });
    }

    /**
     * 获取所有的 API 权限，TODO:带分页？？？
     * @returns 
     */
    public getApiPermissionListAll(): Observable<any> {
        let reqURL = _.template(this.apiPermissionListAll)();
        if (this.isMock) {
            return this.httpClient.get(this.apiPermissionListAll);
        }
        return this.httpClient.post(reqURL, {});
    }

    /**
     * 获取角色对应的 API 权限，TODO:带分页？？？
     * @returns 
     */
    public getApiPermissionListAllByRole(roleEntity = {}): Observable<any> {
        let reqURL = _.template(this.apiPermissionListAllByRole)();
        if (this.isMock) {
            return this.httpClient.get(this.apiPermissionListAllByRole);
        }
        return this.httpClient.post(reqURL, roleEntity);
    }

    public getRolesByApiId(apiPermissionId): Observable<any> {
        let reqURL = _.template(this.apiRoleListURL)({ id: apiPermissionId });
        return this.httpClient.get(reqURL);
    }

    public getApiPermDetails(apiPermissionId): Observable<any> {
        let reqURL = _.template(this.apiPermissionDetailURL)({ id: apiPermissionId });
        return this.httpClient.get(reqURL);
    }

    public deleteByApiId(id): Observable<any> {
        let reqURL = _.template(this.delApiPermissionURL)({ id: id });
        return this.httpClient.delete(reqURL);
    }

    public newApiPermission(apiPermission: any): Observable<any> {
        return this.httpClient.post(this.newApiPermissionURL, apiPermission);
    }

    public updateApiPermission(apiPermission: any): Observable<any> {
        return this.httpClient.post(this.updateApiPermissionURL, apiPermission);
    }
}
