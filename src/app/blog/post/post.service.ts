import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
    public postDetailURL = "mock-data/post-mock.json";
    public postListURL = "mock-data/postlist-mock.json";
    public postListSearchURL = "mock-data/postlist-search-mock.json";

    constructor(public httpClient: HttpClient) {
    }

    public getPost(): Observable<any> {
        return this.httpClient.get(this.postDetailURL);
    }

    public getPostList(): Observable<any> {
        return this.httpClient.get(this.postListURL);
    }

    public getPostNumber(): number {
        return 0;
    }

    public addPost() {

    }

    public search() {

    }
}
