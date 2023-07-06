import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable()
export class RetrievePwdService {
    public sendEmailURL = environment.dataURL.sendEmailURL;
    
    constructor(public httpClient: HttpClient) {
    }

    public sendValidationEmail(email: string): Observable<any> {
        return this.httpClient.get(this.sendEmailURL);
    }
}
