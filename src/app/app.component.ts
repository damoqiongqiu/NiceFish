import { Component,HostListener,ElementRef,Renderer} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from 'ng2-translate';

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
		public translate: TranslateService,
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

	ngOnInit() {
        this.translate.addLangs(["zh", "en"]);
        this.translate.setDefaultLang('zh');

        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    }
	toggle(button:any){
		console.log(button);
	}

	public doLogout():void{
		this.userLoginService.logout();
		this.router.navigateByUrl("");
	}
}