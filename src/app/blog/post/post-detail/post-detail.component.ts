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

  constructor(public postDetailService: PostService,
    public activeRoute: ActivatedRoute
  ) {
    console.log(this.postDetailService);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getPost()
    );
  }

  public getPost() {
    this.postDetailService
      .getPost()
      .subscribe(
        data => this.post = data,
        error => console.error(error)
      );
  }
}
