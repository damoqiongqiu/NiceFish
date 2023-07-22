import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RoleMngService } from "../role-mng.service";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "role-table",
  templateUrl: "./role-table.component.html",
  styleUrls: ["./role-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class RoleTableComponent implements OnInit {
  public searchStr = "";
  public roleList: Array<any>;
  public totalRecords = 0;
  public currentPage = 1;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public roleMngService: RoleMngService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage = params["page"];
        this.getRoleListByPage();
      }
    );
  }

  public getRoleListByPage() {
    return this.roleMngService.getRoleTable(this.currentPage, this.searchStr).subscribe(
      data => {
        this.roleList = data.content;
        this.totalRecords = data.totalElements;
      }
    );
  }

  public pageChanged(event: any): void {
    this.currentPage = (event.first / event.rows) + 1;
    this.router.navigateByUrl("/manage/role-table/page/" + this.currentPage);
  }

  public searchRole() {
    this.currentPage = 1;
    this.getRoleListByPage();
  }

  public resetSearch() {
    this.currentPage = 1;
    this.searchStr = "";
    this.getRoleListByPage();
  }

  public delRole(rowData, ri): void {
    this.confirmationService.confirm({
      message: "确定要删除吗？",
      accept: () => {
        this.roleMngService.deleteRole(rowData.roleId)
          .subscribe(data => {
            if (data && data.success) {
              this.messageService.add({
                severity: "success",
                summary: "Success Message",
                detail: "删除成功",
                sticky: false,
                life: 1000
              });
              this.getRoleListByPage();
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

  public newRole() {
    this.router.navigateByUrl("/manage/role-table/edit-role/-1");//复用 RoleEditComponent ，roleId 传 -1 表示新建
    return true;
  }

  public editRole(rowData, ri) {
    let roleId = rowData.roleId;
    this.router.navigateByUrl("/manage/role-table/edit-role/" + roleId);
  }
}
