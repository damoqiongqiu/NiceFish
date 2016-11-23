import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
	public totalItems:number = 64;
	public currentPage:number = 4;
	 
	public maxSize:number = 10;
	public bigTotalItems:number = 175;
	public bigCurrentPage:number = 5;

	private postList:Array<any>=[
		{postId:"1",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"2",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"3",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"4",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"5",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"6",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"7",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"8",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"9",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"10",title:'这是文章的标题，可以很长',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'}
	];

	constructor() { }

  	ngOnInit() {

  	}

  	private refreshData(params){

	}

	public setPage(pageNo:number):void {
		this.currentPage = pageNo;
	};
	 
	public pageChanged(event:any):void {
		console.log(event);
	};
}
