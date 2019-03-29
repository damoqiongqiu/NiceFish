import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CommentListService } from "./comment-list.service";

@Component({
  selector: "comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"]
})
export class CommentListComponent implements OnInit {
  public comments: Array<any>;

  constructor(
    public commentService: CommentListService,
    public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentList(params["postId"])
    );
  }

  public getCommentList(postId: number) {
    this.commentService.getCommentList(postId)
      .subscribe(
        data => {
          this.comments = data["items"]
        },
        error => console.error(error)
      );
  }
}
