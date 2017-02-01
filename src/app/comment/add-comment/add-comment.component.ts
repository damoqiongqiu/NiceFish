import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CommentService } from '../services/comment.service';
import { Comment } from '../model/comment-model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public comments: Array<Comment>;

  constructor(
    public commentService: CommentService,
    public activeRoute: ActivatedRoute)
  { 

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentList(params["postId"])
    );
  }

  public getCommentList(postId: number){
    this.commentService.getCommentList(postId)
      .subscribe(
        data => {
          this.comments = data["items"]
        },
        error => console.error(error)
      );
  }
}
