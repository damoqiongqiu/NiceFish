import { Component, OnInit, Input} from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { PostTableService } from './services/post-table.service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
    @Input() dataURL:string="mock-data/postlist-mock.json";

    public postList:Array<any>;
    
  	constructor(
        public router: Router,
        public activeRoute: ActivatedRoute,
        public postTableService: PostTableService
    ) {
      
    }

  	ngOnInit() {
  		this.activeRoute.params.subscribe(
        params =>this.getPostsByPage(params["page"])
      );
  	}

    public getPostsByPage(page:Number){
      console.log("页码>"+page);
      return this.postTableService.getPostTable(this.dataURL).subscribe(
        res=>{
          console.log(res);
          this.postList=res.items;
        },
        error => {console.log(error)},
        () => {}
      );
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

    public editPost(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public top(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public unTop(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public delPost(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public onRowSelect(event):void{
      console.log(event.data);
    }

    public onRowUnselect(event):void{
      console.log(event.data);
    }
}
