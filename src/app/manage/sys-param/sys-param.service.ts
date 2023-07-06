import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class SysParamService {
    private getSysParamsURL=environment.dataURL.getSysParamsURL;

    constructor(public httpClient: HttpClient) { }

    public getAllParam(): Observable<any> {
        return this.httpClient.get(this.getSysParamsURL);
    }
}
