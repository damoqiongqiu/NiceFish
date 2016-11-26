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
    public totalItems:number = 64;
    public currentPage:number = 4;
   
    public maxSize:number = 10;
    public bigTotalItems:number = 175;
    public bigCurrentPage:number = 5;

  	constructor() { }

  	ngOnInit() {
  		
  	}

    private pageChanged():void{
      
    }
}
