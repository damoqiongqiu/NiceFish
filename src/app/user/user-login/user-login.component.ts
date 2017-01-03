import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user-model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    private user:User = new User();
    private error : Error;

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
      console.log(this.user);
      this.userLoginService.login(this.user)
        .subscribe(
                data => {
                    this.router.navigateByUrl("user");
                },
                error => {
                    this.error = error.message;
                    console.error(error);
                }
          );
    }

    public doLogout():void{
      this.userLoginService.logout();
      this.router.navigateByUrl("home");
    }

    public forgetPwd():void{

    }
    
}