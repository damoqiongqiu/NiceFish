import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class PostService {
    public postDetailURL = "mock-data/post-mock.json";
    public postListURL = 'mock-data/postlist-mock.json';
    public postListSearchURL = 'mock-data/postlist-search-mock.json';

    constructor(public http: Http) {
    }

    public getPost(id: number): Observable<any> {
        return this.http
            .get(this.postDetailURL)
            .pipe(
                map((res: Response) => res.json())
            );
    }

    public getPostList(searchText: string, page: number = 1): Observable<any[]> {
        let url = this.postListURL;
        let params = new URLSearchParams();
        if (searchText) {
            params.set('searchText', searchText);
            url = this.postListSearchURL;
            console.log(`searchText=${searchText}`);
        }
        params.set('page', String(page));

        return this.http
            .get(url, { search: params })
            .pipe(
                map((res: Response) => {
                    let result = res.json();
                    console.log(result);
                    return result;
                }),
                catchError((error: any) => Observable.throw(error || 'Server error'))
            );
    }

    public getPostNumber(): number {
        return 0;
    }

    public addPost(user: any) {

    }

    public search() {

    }
}