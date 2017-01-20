import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
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
	  public postList:Array<any>;
    public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;

  	constructor(public router: Router,
        public activeRoute: ActivatedRoute,
        public postTableService: PostTableService) { 

    }

  	ngOnInit() {
  		this.activeRoute.params.subscribe(
        params =>this.getPostsByPage(params["page"])
      );
  	}

    public del(postId: number){
      this.postTableService.del(postId);
    }

    public toEdit(postId: number){
      this.postTableService.toEdit(postId);
    }

    public getPostsByPage(page:Number):void{
      console.log("页码>"+page);
    }

    public pageChanged(event:any):void {
      let urlTree:UrlTree=this.router.parseUrl(this.router.url);
      const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;
      this.router.navigateByUrl(s[0]+"/posttable/page/"+event.page);
    }

    public goToWrite():void{
      this.router.navigateByUrl("user/write");
    }

    public editPost(postId:Number):void{
      console.log(postId);
    }

    public top(postId:Number):void{
      console.log(postId);

    }

    public unTop(postId:Number):void{
      console.log(postId);

    }

    public delPost(postId:Number):void{
      console.log(postId);

    }
}
