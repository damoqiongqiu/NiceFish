import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostTableService {
    private delURL: string = "";
    private toEditURL: string = "";
    
    constructor(private http: Http) { }

    public getPostTable(){

    }

    public del(postId: number):Observable<any>{
        return this.http.delete(this.delURL)
            .map((res: Response) => res.json());
    }

    public toEdit(postId: number):Observable<any>{
        return this.http.get(this.toEditURL)
            .map((res: Response) => res.json());
    }
}