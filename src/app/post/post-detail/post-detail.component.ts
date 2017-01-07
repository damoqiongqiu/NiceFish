import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Post } from '../model/post-model';
import { PostDetailService } from './services/post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  private post: Post = new Post();

  constructor(public postDetailService: PostDetailService,
      public activeRoute: ActivatedRoute
  ) { 
    console.log(this.postDetailService);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params =>this.getPost(params["postId"])
    );
  }

  public getPost(id:number){
    debugger;
    this.postDetailService.getPost(id)
      .map(
        data => {
          debugger;
        this.post = data;
      },
        error => console.error(error)
      );
  }
}
