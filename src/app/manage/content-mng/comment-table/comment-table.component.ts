import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { CommentTableService } from "./comment-table.service";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "comment-table",
  templateUrl: "./comment-table.component.html",
  styleUrls: ["./comment-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class CommentTableComponent implements OnInit {
  public commentList: Array<any> = [];
  public totalRecords=0;
  public currentPage=1;
  public searchStr="";

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    private messageService: MessageService,
    private commentTableService:CommentTableService,
    private confirmationService: ConfirmationService
    ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage=params["page"];
        this.getCommentListByPage()
      }
    );
  }

  public getCommentListByPage() {
    this.commentTableService
    .getCommentTable(this.currentPage)
    .subscribe(
      data => {
        this.commentList=data.content;
        this.totalRecords=data.totalElements;
      },
      error => { console.log(error) }
    );
  }

  public pageChanged(event: any): void {
    let currentPage=(event.first/event.rows)+1;
    this.router.navigateByUrl("/manage/comment-table/page/"+ currentPage);
  }

  public delComment(rowData,ri): void {
    this.confirmationService.confirm({
        message: "确定要删除吗？",
        accept: () => {
          this.commentTableService.delComment(rowData.id)
          .subscribe(
            data=> {
              console.log(data);
              if(data&&data.success) {
                this.getCommentListByPage();
              } else {
                this.messageService.add({ 
                  severity: "error",
                  summary: "删除失败", 
                  detail: data.msg||"删除失败" 
                });
              }
            },error=> {
              console.log(error);
            });
        }
    });
  }

  public searchRole() {
    this.currentPage=1;
    this.getCommentListByPage();
  }

  public resetSearch() {
    this.currentPage=1;
    this.searchStr="";
    this.getCommentListByPage();
  }
}
