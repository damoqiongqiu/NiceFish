import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class RoleMngService {
    public isMock = environment.isMock;

    private roleTableURL = environment.dataURL.roleTableURL;
    private roleListByUserIdURL = environment.dataURL.roleListByUserIdURL;
    private delRoleURL = environment.dataURL.delRoleURL;
    private newRoleURL = environment.dataURL.newRoleURL;
    private updateRoleURL = environment.dataURL.updateRoleURL;
    private roleDetailURL = environment.dataURL.roleDetailURL;

    constructor(public httpClient: HttpClient) { }

    public getRoleTable(page = 1, searchStr = ""): Observable<any> {
        let reqURL = _.template(this.roleTableURL)({ page: page });

        //mock
        if (this.isMock) {
            return this.httpClient.get(this.roleTableURL);
        }

        return this.httpClient.post(reqURL, {
            roleName: searchStr
        });
    }

    /**
     * 根据 userId 获取此用户的所有角色列表
     * @param userId 
     * @returns 
     */
    public getRoleListAllByUserId(userId: any): Observable<any> {
        let reqURL = _.template(this.roleListByUserIdURL)({ userId: userId });
        return this.httpClient.get(reqURL);
    }

    public getRoleInfo(roleId): Observable<any> {
        let reqURL = _.template(this.roleDetailURL)({ id: roleId });
        return this.httpClient.get(reqURL);
    }

    public newRole(roleInfo: any): Observable<any> {
        //mock
        if (this.isMock) {
            return;
        }

        return this.httpClient.post(this.newRoleURL, roleInfo);
    }

    public updateRole(roleInfo: any): Observable<any> {
        //mock
        if (this.isMock) {
            return;
        }

        return this.httpClient.post(this.updateRoleURL, roleInfo);
    }

    public deleteRole(id): Observable<any> {
        //mock
        if (this.isMock) {
            return;
        }

        let reqURL = _.template(this.delRoleURL)({ id: id });
        return this.httpClient.delete(reqURL);
    }
}
