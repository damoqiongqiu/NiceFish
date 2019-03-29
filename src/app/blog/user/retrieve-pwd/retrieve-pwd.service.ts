import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class RetrievePwdService {
    public validateEmailURL = "mock-data/forget-pwd-mock.json";

    constructor(public httpClient: HttpClient) {
    }

    public sendValidationEmail(email: string): Observable<any> {
        return this.httpClient.get(this.validateEmailURL);
    }
}
