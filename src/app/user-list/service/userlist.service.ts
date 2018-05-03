import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserListService {
  public userListURL:string = 'mock-data/userlist-mock.json';

  constructor(public http:Http) { }
  
  public getUserList():Observable<any>{
    return this.http
               .get(this.userListURL)
               .map((res:Response) => {
                   let result=res.json();
                   console.log(result);
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
