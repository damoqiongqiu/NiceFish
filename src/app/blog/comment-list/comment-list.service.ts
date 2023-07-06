import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash'

@Injectable()
export class CommentListService {
    public commentListByPostIdURL =  environment.dataURL.commentListByPostIdURL;
    public writeCommentURL = environment.dataURL.writeCommentURL;

    constructor(public httpClient: HttpClient) {
    }

    public getCommentList(postId, page = 1): Observable<any> {
        let reqURL=_.template(this.commentListByPostIdURL)({postId:postId,page:page});
        return this.httpClient.get(reqURL);
    }

    public writeComment(comment: any): Observable<any> {
        let reqURL=_.template(this.writeCommentURL)();
        return this.httpClient.post(
            reqURL,
            comment,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }
}
