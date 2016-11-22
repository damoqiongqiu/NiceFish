import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitestat',
  templateUrl: './sitestat.component.html',
  styleUrls: ['./sitestat.component.scss']
})
export class SitestatComponent implements OnInit {
	public currentTime: Date = new Date();

	constructor() {
		let me=this;
		window.setInterval(function(){
			me.currentTime=new Date();
		},1000);
	}
	
	ngOnInit() {
		
	}
}
