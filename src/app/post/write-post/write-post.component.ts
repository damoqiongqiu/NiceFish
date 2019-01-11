import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
  animations: [flyIn]
})

//CKEDitor的文档在这里https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
export class WritePostComponent {
  public content = '';
  public Editor = ClassicEditor;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }

  public doAddPost() {
    console.log(this.content);
  }
}
