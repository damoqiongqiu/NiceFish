import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-table',
  templateUrl: './tag-table.component.html',
  styleUrls: ['./tag-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class TagTableComponent implements OnInit {
	  public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;

    public firstText:string="首页";
    public lastText:string="尾页";
    public previousText:string="上一页";
    public nextText:string="下一页";

  	constructor(private router: Router,
        private route: ActivatedRoute) { 

    }
    
  	ngOnInit() {
  		
  	}

    private pageChanged():void{
      
    }
}
