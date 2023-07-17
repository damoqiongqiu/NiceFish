import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from "@angular/router";
import { UserMngService } from "../user-mng.service";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { environment } from "src/environments/environment";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class UserTableComponent implements OnInit {
  public isMock = environment.isMock;
  public searchStr = "";
  public userList: Array<any>;
  public totalRecords = 0;
  public currentPage = 1;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userMngService: UserMngService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage = params["page"];
        this.getUserListByPage();
      }
    );
  }

  public searchUser() {
    this.currentPage = 1;
    this.getUserListByPage();
  }

  public resetSearch() {
    this.currentPage = 1;
    this.searchStr = "";
    this.getUserListByPage();
  }

  public getUserListByPage() {
    return this.userMngService.getUserTable(this.currentPage, this.searchStr)
      .subscribe(data => {
        this.userList = data.content;
        this.totalRecords = data.totalElements;
      });
  }

  public pageChanged(event: any): void {
    this.currentPage = (event.first / event.rows) + 1;
    this.router.navigateByUrl("/manage/user-table/page/" + this.currentPage);
  }

  public editUser(rowData, ri): void {
    let userId = rowData.userId;
    this.router.navigateByUrl("/manage/profile/" + userId);
  }

  public delUser(rowData, ri): void {
    this.confirmationService.confirm({
      message: "确定要删除吗？",
      accept: () => {

        if (this.isMock) {
          return;
        }

        let userId = rowData.userId;
        this.userMngService.del(userId)
          .subscribe(data => {
            if (data && data.success) {
              this.messageService.add({
                severity: "success",
                summary: "Success Message",
                detail: "删除成功",
                sticky: false,
                life: 1000
              });
              this.getUserListByPage();
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

  public newUser(): void {
    this.router.navigateByUrl("/manage/profile/-1");
  }

  public blockUser(userId: Number): void {
    console.log(userId);
  }

  public unBlockUser(userId: Number): void {
    console.log(userId);
  }

  public resetPwd(userId: Number): void {
    console.log(userId);
  }
}
