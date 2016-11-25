import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
	private postList:Array<any>;

  	constructor() { }

  	ngOnInit() {
  		
  	}
}
