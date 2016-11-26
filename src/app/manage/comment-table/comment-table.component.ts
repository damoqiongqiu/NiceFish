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
  	public totalItems:number = 64;
    public currentPage:number = 4;
     
    public maxSize:number = 10;
    public bigTotalItems:number = 175;
    public bigCurrentPage:number = 5;

    constructor() { }

    ngOnInit() {
    }

    private pageChanged():void{
      
    }
}
