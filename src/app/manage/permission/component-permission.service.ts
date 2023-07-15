import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from "lodash";

/**
 * 前端页面权限服务
 */
@Injectable()
export class ComponentPermissionService {
    public isMock = environment.isMock;

    private compPermListURL = environment.dataURL.compPermListURL;
    private compPermDetailURL = environment.dataURL.compPermDetailURL;
    private delCompPermURL = environment.dataURL.delCompPermURL;
    private newCompPermURL = environment.dataURL.newCompPermURL;
    private updateCompPermURL = environment.dataURL.updateCompPermURL;
    private compRoleListURL = environment.dataURL.compRoleListURL;

    constructor(public httpClient: HttpClient) { }

    public getCompPermTable(page = 1, searchStr = ""): Observable<any> {
        let reqURL = _.template(this.compPermListURL)({ page: page });

        if (this.isMock) {
            return this.httpClient.get(this.compPermListURL);
        }

        return this.httpClient.post(reqURL, {
            componentName: searchStr,
        });
    }

    public getRolesByCompId(compPermId): Observable<any> {
        let reqURL = _.template(this.compRoleListURL)({ id: compPermId });
        return this.httpClient.get(reqURL);
    }

    public getCompPermDetails(compPermId): Observable<any> {
        let reqURL = _.template(this.compPermDetailURL)({ id: compPermId });
        return this.httpClient.get(reqURL);
    }

    public deleteByCompPermId(compPermId): Observable<any> {
        let reqURL = _.template(this.delCompPermURL)({ id: compPermId });
        return this.httpClient.delete(reqURL);
    }

    public newCompPerm(compnentPermission: any): Observable<any> {
        return this.httpClient.post(this.newCompPermURL, compnentPermission);
    }

    public updateCompPerm(compnentPermission: any): Observable<any> {
        return this.httpClient.post(this.updateCompPermURL, compnentPermission);
    }
}
