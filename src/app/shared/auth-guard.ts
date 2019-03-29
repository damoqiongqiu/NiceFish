import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { SignInService } from "../blog/user/sign-in/sign-in.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		public signInService: SignInService) {

	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// 这里可以调用真实的服务进行验证
		// 	this.signInService.currentUser
		// .subscribe(
		// 	data => {

		// 	},
		// 	error => console.error(error)
		// );
		return true;
	}
}
