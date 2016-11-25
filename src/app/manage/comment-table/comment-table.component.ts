import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class CommentTableComponent implements OnInit {
	private commentList:Array<any>;
  	
  	constructor() {

  	}
  	
  	ngOnInit() {
  	
  	}
}
