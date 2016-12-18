import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostListService {
  private postListURL = 'app/post/postlist/services/postlist-mock.json';

  constructor(public http:Http) { }
  
  public getPostList():Observable<any>{
    console.log("load post list...");
    return this.http.get(this.postListURL)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getPostNumber():number{
    return 0;
  }

  public addPost(user:any){

  }

  public search(searchText: string) {

  }
}
