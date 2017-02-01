import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	
  constructor(public router: Router,
        public activeRoute: ActivatedRoute) { 

  }

  ngOnInit() {
  	this.activeRoute.params.subscribe(
        params =>{console.log(params)}
    );
  }
}