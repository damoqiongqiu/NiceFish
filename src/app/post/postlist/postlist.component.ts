import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostListService } from './services/postlist-service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
	public maxSize:number = 5;
	public itemsPerPage:number=5;
	public totalItems:number = 15;
	public currentPage:number = 1;

	public firstText:string="首页";
	public lastText:string="尾页";
	public previousText:string="上一页";
	public nextText:string="下一页";

	private searchText:string;

	private postList:Array<any>;

	constructor(public router: Router,
        public route: ActivatedRoute,
        public postService:PostListService) {
		this.loadData();
	}

  	ngOnInit() {

  	}

  	private loadData(){
  		this.postService.getPostList().subscribe(
  			postList=>this.postList=postList,
        	error => console.log(error),
			() => console.log('Completed!')
		);
	}

	public setPage(pageNo:number):void {

	};
	 
	public pageChanged(event:any):void {
		console.log(event);
		this.loadData();
	};

	private gotoWrite():void{
		//如果没有登录，调往登录页，如果已登录，跳往写作页
		this.router.navigateByUrl("user/write");
	}

	private searchChanged($event):void{
		console.log(this.searchText);
	}
}
