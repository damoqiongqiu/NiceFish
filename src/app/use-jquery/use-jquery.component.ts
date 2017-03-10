import { Component, ElementRef, OnInit } from '@angular/core';

var jQuery =require("jQuery");

@Component({
  selector: 'app-use-jquery',
  templateUrl: './use-jquery.component.html',
  styleUrls: ['./use-jquery.component.scss']
})
export class UseJqueryComponent implements OnInit {

	rootNode:any;

  	constructor(rootNode:ElementRef) { 
  		this.rootNode=rootNode;
  	}

  	ngOnInit() {
  		var el=jQuery(this.rootNode.nativeElement).find("#example")[0];
  		console.log(el);
  		console.log(jQuery);

  	}
}
