import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PostListService } from './services/postlist-service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
	public maxSize:number = 5;
	public itemsPerPage:number=6;
	public totalItems:number;
	public currentPage:number = 1;

	public firstText:string="首页";
	public lastText:string="尾页";
	public previousText:string="上一页";
	public nextText:string="下一页";

	private searchText:string;
	private searchTextStream:Subject<string> = new Subject<string>();

	private postList:Array<Post>;


	constructor(public router: Router,
        public route: ActivatedRoute,
        public postService:PostListService) {
		
	}

  	ngOnInit() {
		this.searchTextStream
	        .debounceTime(400)
	        .distinctUntilChanged()
	        .subscribe(searchText => this.loadData(this.searchText,this.currentPage));
		this.loadData(this.searchText,this.currentPage);
  	}

  	private loadData(searchText:string,page:number){
		let offset = (this.currentPage-1)*this.itemsPerPage;
		let end = (this.currentPage)*this.itemsPerPage;
  		debugger;
		  return this.postService.getPostList(searchText,page).subscribe(
			  res=>{
				this.totalItems = res["total"];
				//TODO.正式环境中，需要去掉slice
				this.postList = res["items"].slice(offset,end>this.totalItems?this.totalItems:end);
				console.log(`第${this.currentPage}页的数据为：`,this.postList);
			  },
        	error => console.log(error),
			() => console.log('Completed!')
		);
	}

	public setPage(pageNo:number):void {

	};
	 
	public pageChanged(event:any):void {
		console.log(event);
		this.currentPage = event.page;
		this.loadData(this.searchText,this.currentPage);
	};

	public searchBtnClick(){
		this.loadData(this.searchText,this.currentPage);
	}

	private gotoWrite():void{
		//如果没有登录，调往登录页，如果已登录，跳往写作页
		this.router.navigateByUrl("user/write");
	}

	private searchChanged($event):void{
		console.log(this.searchText);
		this.currentPage = 1;
		this.searchTextStream.next(this.searchText);
	}
}
