import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UserLoginService } from './user-login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private userLoginService: UserLoginService) {
    console.log(userLoginService);
  }

  ngOnInit() {
  }

  public doLogin():void{
    console.log("开始登录...");
    this.userLoginService.login();
  }

  public doLogout():void{
    console.log("开始退出...");
    this.userLoginService.logout();
  }
}