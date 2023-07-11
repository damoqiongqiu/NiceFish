import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { PostService } from "../post.service";
import { MessageService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "write-post",
  templateUrl: "./write-post.component.html",
  styleUrls: ["./write-post.component.scss"],
  animations: [fadeIn]
})

/**
 * 集成 CKEditor 来编辑内容。
 * @see https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
 */
export class WritePostComponent {
  public isMock=environment.isMock;
  public capchaURL = environment.dataURL.capchaURL;//FIXME:验证码相关的代码需要整合到一个公共服务中去，避免相似的代码散落在各处。
  //绑定到编辑器的数据模型，里面可以带HTML标签
  public post: any = {
    title: "",
    content: "",
    captcha:""
  };
  public Editor = ClassicEditor;
  private isEdit = false;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postService: PostService,
    private messageService: MessageService) {
  }

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url.indexOf("edit") != -1) {
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
    if(this.isEdit) {
      this.activeRoute.params.subscribe(
        params => this.getPostDetail(params["postId"])
      );
    }
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
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

  doEditPost() {
    this.postService.editPost(this.post).subscribe(
      (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Success Message",
          detail: "编辑成功",
          sticky: true,
          life: 1000
        });
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doWritePost() {
    this.postService.writePost(this.post).subscribe(
      (res) => {
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.log(error);
        //FIXME: 这里的错误提示样式有问题
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "提交失败"+error,
          sticky: true,
          life: 1000
        });
      }
    );
  }

  doCommit() {
    if(this.isMock){
      this.messageService.add({
        severity: "warn",
        summary: "Warn",
        detail: "注意：当前为 Mock 模式，不会与服务端交互，所有输入项都可以随意输入，符合校验规则即可。如果需要与服务端交互，请重新启动到 backend 模式 ng serve --configuration development-backend",
        sticky: true
      });
      setTimeout(() => {
        this.router.navigateByUrl("/home");
      }, 1000);
      return;
    }

    if (this.isEdit) {
      this.doEditPost();
    } else {
      this.doWritePost();
    }
  }

  public refreshCaptcha(): void {
    this.capchaURL = `${this.capchaURL}&kill_cache=${new Date().getTime()}`;
  }
}
