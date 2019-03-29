import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CommentListService {
    public commentListURL = "mock-data/comment-mock.json";

    constructor(public httpClient: HttpClient) {
    }

    public getCommentList(postId: number): Observable<any> {
        return this.httpClient.get(this.commentListURL);
    }
}
