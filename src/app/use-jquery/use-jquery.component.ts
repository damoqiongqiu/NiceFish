import { Component, ElementRef, OnInit } from '@angular/core';

let $ =require("jQuery");
let jQuery=$;
let zt=require("ztree");

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
  		var el=$(this.rootNode.nativeElement).find("#example")[0];
  		console.log(el);
  		console.log(zt);
  	}
}
