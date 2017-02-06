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
  public post: Post = new Post();

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
    this.postDetailService
        .getPost(id)
        .subscribe(
          data => this.post = data,
          error => console.error(error)
        );
  }
}
