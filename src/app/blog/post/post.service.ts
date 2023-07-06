import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import * as _ from 'lodash'

@Injectable()
export class PostService {
    public postDetailURL =  environment.dataURL.postDetailURL;
    public postListURL = environment.dataURL.postListURL;

    constructor(public httpClient: HttpClient) {
        
    }

    public getPostList (page = 1): Observable<any> {
        let reqURL=_.template(this.postListURL)({page:page});
        return this.httpClient.get(
            reqURL,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public getPostDetail(id: string): Observable<any> {
        let reqURL=_.template(this.postDetailURL)({id:id});
        console.log(reqURL);
        return this.httpClient.get(reqURL);
    }

    public writePost(post: any): Observable<any> {
        return this.httpClient.post(
            "/cms/post/write-post",
            {
                title: post.title,
                content: post.content,
                userId: post.userId
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        )
    }

    public editPost(post: any): Observable<any> {
        return this.httpClient.post(
            "/cms/post/edit-post",
            {
                title: post.title,
                content: post.content,
                userId: post.userId
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        )
    }
    
    public search() {

    }
}
