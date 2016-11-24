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
    this.userLoginService.login();
    this.router.navigateByUrl("usermain");
  }

  public doLogout():void{
    this.userLoginService.logout();
    this.router.navigateByUrl("home");
  }
}