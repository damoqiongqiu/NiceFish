import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PostTableService {
    public delURL = "";
    public toEditURL = "";

    constructor(public httpClient: HttpClient) { }

    public getPostTable(dataURL: string): Observable<any> {
        return this.httpClient.get(dataURL);
    }

    public del(): Observable<any> {
        return this.httpClient.delete(this.delURL);
    }

    public toEdit(): Observable<any> {
        return this.httpClient.get(this.toEditURL);
    }
}
