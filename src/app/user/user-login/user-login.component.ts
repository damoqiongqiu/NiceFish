import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private userLoginService: UserLoginService
  ) {
    console.log(userLoginService);
  }

  ngOnInit() {
  }

  public doLogin():void{
    console.log("开始登录...");
    this.userLoginService.login();
    let routerInstance=this.router;
    setTimeout(function(){
      routerInstance.navigateByUrl("usermain");
    },1000);
  }

  public doLogout():void{
    console.log("开始退出...");
    this.userLoginService.logout();
  }
}