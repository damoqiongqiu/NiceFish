import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class PostTableService {
    public delURL: string = "";
    public toEditURL: string = "";

    constructor(public httpClient: HttpClient) { }

    public getPostTable(dataURL: string): Observable<any> {
        return this.httpClient.get(dataURL);
    }

    public del(postId: number): Observable<any> {
        return this.httpClient.delete(this.delURL);
    }

    public toEdit(postId: number): Observable<any> {
        return this.httpClient.get(this.toEditURL);
    }
}