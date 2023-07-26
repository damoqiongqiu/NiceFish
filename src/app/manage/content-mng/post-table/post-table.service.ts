import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import * as _ from 'lodash';

@Injectable()
export class PostTableService {
    public delPostURL = environment.dataURL.delPostURL;
    public postTableURL = environment.dataURL.postTableURL;

    constructor(public httpClient: HttpClient) { }

    public getPostTable(page = 1): Observable<any> {
        let reqURL = _.template(this.postTableURL)({ page: page });
        return this.httpClient.get(
            reqURL,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public del(id): Observable<any> {
        let reqURL = _.template(this.delPostURL)({ id: id });
        return this.httpClient.delete(reqURL);
    }
}
