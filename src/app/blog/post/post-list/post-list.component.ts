import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { PostService } from "../post.service";

@Component({
	selector: "postlist",
	templateUrl: "./post-list.component.html",
	styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
	public itemsPerPage = 10;
	public totalRecords = 11;
	public currentPage = 1;
	public offset = 0;
	public end = 0;

	public searchText: string;
	public searchTextStream: Subject<string> = new Subject<string>();

	public postList: Array<any>;

	constructor(
		public router: Router,
		public activeRoute: ActivatedRoute,
		public postService: PostService) {

		// console.log("------这里开始对比Promise和Observable，这块代码是为了学习Observable使用的------");

		// //以下是Promise的写法
		// let promise = new Promise(resolve => {
		//     setTimeout(() => {
		//         resolve("---promise timeout---");
		//     }, 2000);
		// });
		// promise.then(value => console.log(value));

		// //以下是Observable的写法
		// let stream1$ = new Observable(observer => {
		//     let timeout = setTimeout(() => {
		//         observer.next("observable timeout");
		//     }, 2000);

		//     return () => {
		//         clearTimeout(timeout);
		//     }
		// });
		// let disposable = stream1$.subscribe(value => console.log(value));

		// //【第一个核心不同点来了】：Observable是可以中途取消的，而Promise一旦触发就不能取消了
		// setTimeout(() => {
		//     disposable.unsubscribe();
		// }, 1000);

		// //【第二个核心不同点来了】：Observable可以持续发射很多值，而Promise只能发射一个值就结束了
		// let stream2$ = new Observable<number>(observer => {
		// 	let count = 0;
		// 	let interval = setInterval(() => {
		// 		observer.next(count++);
		// 	}, 1000);

		// 	return () => {
		// 		clearInterval(interval);
		// 	}
		// });
		// stream2$.subscribe(value => console.log("Observable>" + value));

		// //【第三个核心不同点来了】：Observable提供了很多的工具函数，最最最常用的filter和map演示如下
		// stream2$
		// 	.pipe(
		// 		filter(val => val % 2 == 0)
		// 	)
		// 	.subscribe(value => console.log("filter>" + value));

		// stream2$
		// 	.pipe(
		// 		map(value => value * value)
		// 	)
		// 	.subscribe(value => console.log("map>" + value));

		// console.log("------------------------------------------------");
	}

	ngOnInit() {
		// 从路由里面获取URL参数
		this.activeRoute.params.subscribe(params => {
			console.log(params);
			this.currentPage = params.page;
			this.loadData();
		});

		this.searchTextStream
			.pipe(
				debounceTime(500),
				distinctUntilChanged()
			)
			.subscribe(() => {
				console.log(this.searchText);
				this.loadData()
			});
	}

	public loadData() {
		this.offset = (this.currentPage - 1) * this.itemsPerPage;
		this.end = (this.currentPage) * this.itemsPerPage;
		return this.postService.getPostList().subscribe(
			res => {
				this.postList = res["items"].slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
			},
			error => { console.log(error) },
			() => { }
		);
	}

	public pageChanged(event: any): void {
		let temp = parseInt(event.page) + 1;
		this.router.navigateByUrl("posts/page/" + temp);
	}

	public searchChanged(): void {
		this.searchTextStream.next(this.searchText);
	}
}
