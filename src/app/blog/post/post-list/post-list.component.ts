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
	//以下是分页参数，需要跟服务端做对接，TODO:改到系统配置中
	public rows = 10;//每页记录条数
	public totalElements = 0;
	public currentPage = 0;
	public offset = 0;
	public end = 0;

	public searchText: string;
	public searchTextStream: Subject<string> = new Subject<string>();

	public postList: Array<any>;

	constructor(
		public router: Router,
		public activeRoute: ActivatedRoute,
		public postService: PostService) {
	}

	ngOnInit() {
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
				this.loadData();
			});
	}

	public loadData() {
		this.offset = (this.currentPage - 1) * this.rows;
		this.end = (this.currentPage) * this.rows;
		this.postService.getPostList(this.currentPage).subscribe(
			(res) => {
				console.log(res);
				this.postList = res.content;
				this.totalElements = res.totalElements;
			},
			error => {
				console.log(error);
			}
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
