import { Component,HostListener,ElementRef,Renderer} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';
import { User } from './user/model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
	private currentUser : User;
	constructor(
		private elementRef: ElementRef, 
		private renderer: Renderer,
		private router: Router,
        private route: ActivatedRoute,
		private userLoginService: UserLoginService,
		private userRegisterService: UserRegisterService
	) {
	    renderer.listen(elementRef.nativeElement, 'click', (event) => {
	    	//console.log(event);
	    });
		this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

		this.userLoginService.currentUser.subscribe(
			data => this.currentUser = data,
			error => console.log(error)
		)
		
		this.userRegisterService.currentUser.subscribe(
			data => this.currentUser = data,
			error => console.log(error)
		)
	}
	toggle(button){
		console.log(button);
	}

	private doLogout():void{
		this.userLoginService.logout();
		this.router.navigateByUrl("home");
	}
}