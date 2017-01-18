import { Component,HostListener,ElementRef,Renderer} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/merge';

import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';
import { User } from './user/model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
	public currentUser : User;
	constructor(
		public elementRef: ElementRef, 
		public renderer: Renderer,
		public router: Router,
        public route: ActivatedRoute,
		public userLoginService: UserLoginService,
		public userRegisterService: UserRegisterService
	) {
	    renderer.listen(elementRef.nativeElement, 'click', (event:any) => {
	    	//console.log(event);
	    });
		this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

		this.userLoginService.currentUser
			.merge(this.userRegisterService.currentUser)
			.subscribe(
				data => this.currentUser = data,
				error => console.error(error)
			);
	}
	toggle(button:any){
		console.log(button);
	}

	public doLogout():void{
		this.userLoginService.logout();
		this.router.navigateByUrl("");
	}
}