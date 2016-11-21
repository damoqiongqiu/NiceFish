import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {
	//If just open one group at a time.
	public oneAtATime:boolean = false;

  	public groups:Array<any> = [
    	{
    		groupId:1,
      		title: 'Department-1',
      		isOpen:true,
      		teams:[
      			{
      				teamId:1,
      				teamName:'Team-1'
      			},
      			{
      				teamId:2,
      				teamName:'Team-2'
      			},
      		]
    	},
    	{
    		group:2,
      		title: 'Department-2',
      		isOpen:true,
      		teams:[
      			{
      				teamId:3,
      				teamName:'Team-3'
      			},
      			{
      				teamId:4,
      				teamName:'Team-4'
      			},
      		]
    	}
  	];

	constructor() { }

  	ngOnInit() {
  	}
}
