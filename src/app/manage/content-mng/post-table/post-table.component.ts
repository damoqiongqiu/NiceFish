import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostTableService } from "./post-table.service";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "post-table",
  templateUrl: "./post-table.component.html",
  styleUrls: ["./post-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class PostTableComponent implements OnInit {
  public postList: Array<any>;
  public totalRecords = 0;
  public currentPage = 1;
  public searchStr = "";

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postTableService: PostTableService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage = params["page"];
        this.getPostTableByPage();
      }
    );
  }

  public getPostTableByPage() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

    return this.postTableService.getPostTable(currentUser?.userId, this.currentPage).subscribe(
      data => {
        this.postList = data.content;
        this.totalRecords = data.totalElements;
      },
    );
  }

  public pageChanged(event: any): void {
    this.currentPage = (event.first / event.rows) + 1;
    this.router.navigateByUrl("/manage/post-table/page/" + this.currentPage);
  }

  public goToWrite(): void {
    this.router.navigateByUrl("user/write");
  }

  public editPost(rowData, ri): void {
    let postId = rowData.postId;
    this.router.navigateByUrl(`/post/edit-post/${postId}`);
  }

  public delPost(rowData, ri): void {
    this.confirmationService.confirm({
      message: "确定要删除吗？",
      accept: () => {
        this.postTableService.del(rowData.postId)
          .subscribe(data => {
            if (data && data.success) {
              this.messageService.add({
                severity: "success",
                summary: "Success Message",
                detail: "删除成功",
                sticky: false,
                life: 1000
              });
              this.getPostTableByPage();
            } else {
              this.messageService.add({
                severity: "error",
                summary: "Fail Message",
                detail: data.msg || "删除失败",
                sticky: false,
                life: 1000
              });
            }
          }, error => {
            this.messageService.add({
              severity: "error",
              summary: "Fail Message",
              detail: error || "删除失败",
              sticky: false,
              life: 1000
            });
          });
      }
    });
  }

  public top(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
  }

  public unTop(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
  }

  public searchRole() {
    this.currentPage = 1;
    this.getPostTableByPage();
  }

  public resetSearch() {
    this.currentPage = 1;
    this.searchStr = "";
    this.getPostTableByPage();
  }
}
