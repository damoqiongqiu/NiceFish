import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../../model/post-model';

@Injectable()
export class PostListService {
  private postListURL = 'app/post/postlist/services/postlist-mock.json';
  private postListSearchURL = 'app/post/postlist/services/postlist-search-mock.json';

  constructor(public http:Http) { }
  
  public getPostList(searchText: string,page:number=1):Observable<Post[]>{
    let url = this.postListURL;
    let params = new URLSearchParams();
    if (searchText) {
			params.set('searchText',searchText);
      url = this.postListSearchURL;
      console.log(`searchText=${searchText}`);
		}
    params.set('page',String(page));
    return this.http.get(url,{search:params})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getPostNumber():number{
    return 0;
  }

  public addPost(user:any){

  }

  public search() {
    
  }
}
