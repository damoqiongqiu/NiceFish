import { Component,HostListener,ElementRef,Renderer} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from './user/user-login/user-login.service';
import { Observable } from 'rxjs/Observable';

import { User } from './user/model/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
	private currentUser : Observable<User> ;
	constructor(
		private elementRef: ElementRef, 
		private renderer: Renderer,
		private router: Router,
        private route: ActivatedRoute,
		private userLoginService: UserLoginService
	) {
	    renderer.listen(elementRef.nativeElement, 'click', (event) => {
	    	//console.log(event);
	    });

		this.currentUser = this.userLoginService.currentUser;
	}
	toggle(button){
		console.log(button);
	}

	private doLogout():void{
		this.userLoginService.logout();
		this.router.navigateByUrl("home");
	}
}