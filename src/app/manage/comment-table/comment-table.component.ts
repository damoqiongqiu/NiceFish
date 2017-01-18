import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class CommentTableComponent implements OnInit {
  	public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;

    public firstText:string="首页";
    public lastText:string="尾页";
    public previousText:string="上一页";
    public nextText:string="下一页";

    constructor() { }

    ngOnInit() {
    }

    public pageChanged():void{
      
    }
}
