import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
  animations: [flyIn]
})

export class WritePostComponent {
  public post: any = {};

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }
}
