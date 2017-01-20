import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserTableComponent implements OnInit {
    public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;

    public firstText:string="首页";
    public lastText:string="尾页";
    public previousText:string="上一页";
    public nextText:string="下一页";

  	constructor(public router: Router,
        public activeRoute: ActivatedRoute) { 

    }

  	ngOnInit() {
      this.activeRoute.params.subscribe(
        params =>this.getUsersByPage(params["page"])
      );
  	}

    public getUsersByPage(page:Number):void{
      console.log("页码>"+page);
    }

  	public pageChanged(event):void{
      this.router.navigateByUrl("manage/usertable/page/"+event.page);
    }
}
