import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserTableComponent implements OnInit {
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
