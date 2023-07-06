import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import * as _ from 'lodash'

@Injectable()
export class CommentTableService {
    private commentListURL = environment.dataURL.commentListURL;
    private delCommentURL = environment.dataURL.delCommentURL;

    constructor(public httpClient: HttpClient) { }

    public getCommentTable(page=1): Observable<any> {
        let reqURL=_.template(this.commentListURL)({page:page});
        return this.httpClient.get(reqURL);
    }

    public delComment(id): Observable<any> {
        let reqURL=_.template(this.delCommentURL)({id:id});
        return this.httpClient.delete(reqURL);
    }
}
