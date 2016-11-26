import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

	private postList:Array<any>=[
		{postId:"1",title:'angular1.3是因为什么特性导致不支持ie8的？',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"2",title:'数据库字段Pointer的操作方法',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"3",title:'澳大利亚创业公司 http://pik.io 诚招AngularJS / Ionic开发人员',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"4",title:'上海 浦西 招募angularjs工程师 20-35k',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"5",title:'分享一个移动项目中消除click事件点击延迟的方法',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"6",title:'Angular2项目日常开发中所遇问题及解决方案记录(四)',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"7",title:'【AngularJS 资深前端开发兼职】急聘有经验的兼职前端开发工程师',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"8",title:'APICloud提供适用于命令行的开发工具，开发更具极客精神！',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"9",title:'使用APICloud平台一周时间开发出休闲娱乐内容类APP',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'},
		{postId:"10",title:'分享一个使用APICloud云数据库已上线的商城APP',postTime:'2016-11-21 10:44',userName:'大漠穷秋',userId:'1',readTimes:'10000',commentTimes:'10000'}
	];

	constructor(private router: Router,
        private route: ActivatedRoute) { 

	}

  	ngOnInit() {

  	}

  	private refreshData(params){

	}

	public setPage(pageNo:number):void {

	};
	 
	public pageChanged(event:any):void {
		console.log(event);
		this.postList=this.postList.reverse();
	};

	private gotoWrite():void{
		//如果没有登录，调往登录页，如果已登录，跳往写作页
		this.router.navigateByUrl("user/write");
	}
}
