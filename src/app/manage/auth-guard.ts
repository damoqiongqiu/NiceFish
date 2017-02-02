import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { UserLoginService } from '../user/user-login/user-login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  	constructor(
  		private router: Router,
  		public userLoginService: UserLoginService) {

  	}
  
  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  		//这里可以调用真实的服务进行验证
  		// 	this.userLoginService.currentUser
		     // .subscribe(
			 // 	data => {
					
			 // 	},
			 // 	error => console.error(error)
			 // );
    	return true;
  	}
}
