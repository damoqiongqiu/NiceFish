import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SignInService } from "../user/sign-in/sign-in.service";
import { SignUpService } from "../user/sign-up/sign-up.service";
import { CommentListService } from "./comment-list.service";
import { MessageService } from "primeng/api";
import { merge } from "rxjs"
import { environment } from "../../../environments/environment";

@Component({
  selector: "comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"]
})
export class CommentListComponent implements OnInit {
  public isMock=environment.envName.indexOf("mock")!=-1;
  public capchaURL = environment.dataURL.capchaURL;//FIXME:验证码相关的代码需要整合到一个公共服务中去，避免相似的代码散落在各处。

  public currentUser: any;
  public postId: string;
  public comment: any = {};

  public comments: Array<any>;
  public rows = 10;
  public totalElements = 0;
  public currentPage = 1;
  public offset = 0;
  public end = 0;

  constructor(
    public commentListService: CommentListService,
    public signInService: SignInService,
    public signUpService: SignUpService,
    private messageService: MessageService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.postId;
      this.getCommentList();
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    merge(this.signInService.currentUser, this.signUpService.currentUser)
      .subscribe(
        (data) => {
          this.currentUser = data;
        },
        error => console.error(error)
      );
  }

  public getCommentList() {
    this.offset = (this.currentPage - 1) * this.rows;
    this.end = (this.currentPage) * this.rows;
    this.commentListService.getCommentList(this.postId, this.currentPage)
      .subscribe(
        (res) => {
          console.log(res);
          this.comments = res.content;
          this.totalElements = res.totalElements;
        },
        error => console.error(error)
      );
  }

  public doWriteComment() {
    if(this.isMock){
      this.messageService.add({
        severity: "warn",
        summary: "Warn",
        detail: "注意：当前为 Mock 模式，不会与服务端交互，所有输入项都可以随意输入，符合校验规则即可。如果需要与服务端交互，请重新启动到 backend 模式 ng serve --configuration development-backend",
        sticky: true
      });
      return;
    }

    this.comment.postId = this.postId;
    this.commentListService.writeComment(this.comment).subscribe(
      (res) => {
        this.comment= {};
        this.currentPage = 1;
        this.getCommentList();
        this.refreshCaptcha();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public pageChanged(event: any): void {
    this.currentPage = parseInt(event.page) + 1;
    this.getCommentList();
  }

  public refreshCaptcha(): void {
    this.capchaURL = `${this.capchaURL}&kill_cache=${new Date().getTime()}`;
  }
}
