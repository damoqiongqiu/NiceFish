import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PostTableService {
    public delURL: string = "";
    public toEditURL: string = "";

    constructor(public http: Http) { }

    public getPostTable(dataURL: string) {
        return this.http.get(dataURL)
            .pipe(
                map((res: Response) => res.json()),
                catchError((error: any) => Observable.throw(error || 'Server error'))
            );
    }

    public del(postId: number): Observable<any> {
        return this.http.delete(this.delURL)
            .pipe(
                map((res: Response) => res.json())
            );
    }

    public toEdit(postId: number): Observable<any> {
        return this.http.get(this.toEditURL)
            .pipe(
                map((res: Response) => res.json())
            );
    }
}