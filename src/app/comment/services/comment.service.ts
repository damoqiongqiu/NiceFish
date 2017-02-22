import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Comment } from '../model/comment-model';

@Injectable()
export class CommentService {
    public commentListURL = "src/mock-data/comment-mock.json";

    constructor(public http: Http) { }

    public getCommentList(postId: number):Observable<Comment[]>{
        return this.http.get(this.commentListURL)
            .map((res: Response) => res.json())
    }
}