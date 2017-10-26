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
      console.log($("#datepicker"));
      console.log($("#tabs"));
      //这里还是有问题，jQueryUI的组件貌似又不能用了
      // $("#datepicker").datepicker();
      // $("#tabs").tabs();
  	}
}
