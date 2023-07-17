import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiPermissionService } from "../api-permission.service";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "api-permission-table",
  templateUrl: "./api-permission-table.component.html",
  styleUrls: ["./api-permission-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class ApiPermissionTableComponent implements OnInit {
  public searchStr = "";
  public apiPermissionList: Array<any> = [];
  public totalRecords = 0;
  public currentPage = 1;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public apiPermService: ApiPermissionService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage = params["page"];
        this.getPermissionListByPage();
      }
    );
  }

  public getPermissionListByPage() {
    return this.apiPermService.getApiPermissionTable(this.currentPage, this.searchStr).subscribe(
      data => {
        this.apiPermissionList = data.content;
        this.totalRecords = data.totalElements;
      },
    );
  }

  public searchPermission() {
    this.currentPage = 1;
    this.getPermissionListByPage();
  }

  public resetSearch() {
    this.currentPage = 1;
    this.searchStr = "";
    this.getPermissionListByPage();
  }

  public pageChanged(event: any): void {
    this.currentPage = (event.first / event.rows) + 1;
    this.router.navigateByUrl("/manage/api-permission-table/page/" + this.currentPage);
  }

  public delPermission(rowData, ri): void {
    this.confirmationService.confirm({
      message: "确定要删除吗？",
      accept: () => {
        let apiPermissionId = rowData.apiPermissionId;
        this.apiPermService.deleteByApiId(apiPermissionId)
          .subscribe(data => {
            if (data && data.success) {
              this.messageService.add({
                severity: "success",
                summary: "Success Message",
                detail: "删除成功",
                sticky: false,
                life: 1000
              });
              this.getPermissionListByPage();
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

  public newPermission() {
    this.router.navigateByUrl("/manage/api-permission-table/edit/-1");
  }

  public editPermission(rowData, ri): void {
    let apiPermissionId = rowData.apiPermissionId;
    this.router.navigateByUrl("/manage/api-permission-table/edit/" + apiPermissionId);
  }
}
