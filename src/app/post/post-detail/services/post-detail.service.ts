import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Post } from '../../model/post-model';

@Injectable()
export class PostDetailService {
    private postDetailURL = "app/post/post-detail/services/post-mock.json";

    constructor(private http: Http) { }

    public getPost(id:number):Observable<Post>{
        debugger;
        return this.http.get(this.postDetailURL)
                .map((res: Response) => {
                    debugger;
                    return res.json();
                })
                .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}