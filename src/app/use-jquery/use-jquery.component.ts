import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-jquery',
  templateUrl: './use-jquery.component.html',
  styleUrls: ['./use-jquery.component.scss']
})
export class UseJqueryComponent implements OnInit {
  	constructor() { 
  	}

  	ngOnInit() {
      $("#datepicker").datepicker();
      $("#tabs").tabs();
  	}
}
