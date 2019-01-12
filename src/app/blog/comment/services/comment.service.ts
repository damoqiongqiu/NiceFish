import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class CommentService {
    public commentListURL = "mock-data/comment-mock.json";

    constructor(public http: Http) { }

    public getCommentList(postId: number): Observable<any[]> {
        return this.http
            .get(this.commentListURL)
            .pipe(
                map((res: Response) => res.json())
            );
    }
}