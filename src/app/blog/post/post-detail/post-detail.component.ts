import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../post.service";

@Component({
  selector: "post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"]
})
export class PostDetailComponent implements OnInit {
  public post: any = {};

  constructor(public postService: PostService, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getPostDetail(params["postId"])
    );
  }

  public getPostDetail(id: string) {
    this.postService
      .getPostDetail(id)
      .subscribe(
        (data) => {
          this.post = data;
        },
        error => console.error(error)
      );
  }
}
