import { Injectable } from '@angular/core';
import { userList } from './mock-userlist';

@Injectable()
export class UserListService {

  constructor() { }
  
  getUserList(){
    return userList;
  }

  getUserNumber():number{
  	return userList.length;
  }

  addUser(user:any){
  	userList.push(user);
  }
}
