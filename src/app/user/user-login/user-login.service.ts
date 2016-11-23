import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserLoginService {
  public hasLogin: boolean=false;

  constructor(){

  }

  public login():void{
  	console.log("user login service login...");
  	this.hasLogin=true;
  }

  public logout():void{
  	console.log("user login service logout...");
  	this.hasLogin=false;
  }
}
