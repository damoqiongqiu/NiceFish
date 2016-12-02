import { Injectable } from '@angular/core';
import { URLSearchParams,Jsonp } from '@angular/http';
import { postList } from './postlist-mock';

@Injectable()
export class PostListService {

  constructor() { }
  
  getPostList(){
    return postList;
  }

  getPostNumber():number{
  	return postList.length;
  }

  addPost(user:any){
  	postList.push(user);
  }

  search(searchText: string) {
    return postList;
  }
}
