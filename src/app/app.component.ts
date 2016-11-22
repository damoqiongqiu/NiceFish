import { Component,HostListener,ElementRef,Renderer} from '@angular/core';
import { UserLoginService } from './common/user-login/user-login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
		private elementRef: ElementRef, 
		private renderer: Renderer,
		private userLoginService: UserLoginService
	) {
	    renderer.listen(elementRef.nativeElement, 'click', (event) => {
	    	console.log(event);
	    });
	}

	toggle(button){
		console.log(button);
	}
}