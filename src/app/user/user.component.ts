import { Component,OnInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
       		animate(300, keyframes([
	        	style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
	        	style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
	        	style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
	      	]))
      ]),
      transition('* => void', [
            animate(300, keyframes([
	        	style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
	        	style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
	        	style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
	      	]))
      ])
    ])
  ]
})
export class UserComponent implements OnInit {
	constructor() {
    }
    ngOnInit() {
  	}
}