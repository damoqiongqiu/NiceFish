import { Component, OnInit, Input } from '@angular/core';

import { User } from '../model/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
	  @Input() 
    public panelTitle:string="用户信息";

  	public currentUser: User;

  	constructor() { 
    	this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  	}

  	ngOnInit() {
      
  	}
}
