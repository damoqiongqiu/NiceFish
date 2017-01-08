import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { ActivatedRoute, Router } from '@angular/router';
import { PostTableService } from './services/post-table.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
	  private postList:Array<any>;
    public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;

    public firstText:string="首页";
    public lastText:string="尾页";
    public previousText:string="上一页";
    public nextText:string="下一页";

  	constructor(private router: Router,
        private route: ActivatedRoute,
        private postTableService: PostTableService) { 

    }

  	ngOnInit() {
  		
  	}
    public del(postId: number){
      this.postTableService.del(postId);
    }

    public toEdit(postId: number){
      this.postTableService.toEdit(postId);
    }

    private pageChanged():void{
      
    }

    private goToWrite():void{
      this.router.navigateByUrl("user/write");
    }
}
