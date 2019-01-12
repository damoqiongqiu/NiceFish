import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../../model/post-model';

@Injectable()
export class PostDetailService {
    public postDetailURL = "mock-data/post-mock.json";

    constructor(public http: Http) {
    }

    public getPost(id: number): Observable<Post> {
        return this.http
            .get(this.postDetailURL)
            .pipe(
                map((res: Response) => res.json())
            );
    }
}