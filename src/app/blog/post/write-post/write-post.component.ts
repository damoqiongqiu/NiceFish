import { Component } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivatedRoute, Router } from "@angular/router";
import { flyIn } from "../../../shared/animations/fly-in";

@Component({
  selector: "write-post",
  templateUrl: "./write-post.component.html",
  styleUrls: ["./write-post.component.scss"],
  animations: [flyIn]
})

/**
 * 集成 CKEditor 来编辑内容。
 * @see https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
 */
export class WritePostComponent {
  //绑定到编辑器的数据模型，里面可以带HTML标签
  public content = "";
  public Editor = ClassicEditor;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  public doAddPost() {
    console.log(this.content);
  }
}
