import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class RetrievePwdService {
    public validateEmailURL = "mock-data/forget-pwd-mock.json";

    constructor(public http: Http) { }

    public sendValidationEmail(email: string): Observable<any> {
        return this.http.get(this.validateEmailURL)
            .pipe(
                map((res: Response) => res.json())
            );
    }
}