import { Component, ElementRef, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'app-use-jquery',
  templateUrl: './use-jquery.component.html',
  styleUrls: ['./use-jquery.component.scss'],
  animations:[ fadeIn ]
})
export class UseJqueryComponent implements OnInit {
  	constructor() {
  	}

  	ngOnInit() {
      $("#datepicker").datepicker();
      $("#tabs").tabs();
  	}
}
