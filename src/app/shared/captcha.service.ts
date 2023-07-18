import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class CaptchaService {
    public isMock = environment.isMock;
    public capchaURL = environment.dataURL.capchaURL;

    constructor(public httpClient: HttpClient) { }

    public refreshCaptchaURL(): string {
        this.capchaURL = `${this.capchaURL}&kill_cache=${new Date().getTime()}`;
        return this.capchaURL;
    }
}
