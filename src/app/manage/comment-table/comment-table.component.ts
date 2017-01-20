import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
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

    constructor(public router: Router,
        public activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
      this.activeRoute.params.subscribe(
        params =>this.getCommentsByPage(params["page"])
      );
    }

    public getCommentsByPage(page:Number):void{
      console.log("页码>"+page);
    }

    public pageChanged(event:any):void {
      let urlTree:UrlTree=this.router.parseUrl(this.router.url);
      const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;
      this.router.navigateByUrl(s[0]+"/commenttable/page/"+event.page);
    }
    
    public delComment(commentId:Number):void{
      console.log(commentId);

    }
}
