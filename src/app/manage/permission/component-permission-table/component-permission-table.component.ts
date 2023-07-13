import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ComponentPermissionService } from "../component-permission.service";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { TreeNode } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: "component-permission-table",
  templateUrl: "./component-permission-table.component.html",
  styleUrls: ["./component-permission-table.component.scss"],
  animations: [fadeIn],
})
export class ComponentPermissionTableComponent {
  public searchStr = "";
  public compPermList: Array<any> = [];
  public totalRecords = 0;
  public currentPage = 1;

  files!: TreeNode[];
  cols!: Column[];
  selectedColumns!: Column[];

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public compPermService: ComponentPermissionService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.files = [];
    for (let i = 0; i < 50; i++) {
      let node = {
        data: {
          name: "Item " + i,
          icon: Math.floor(Math.random() * 1000) + 1 + "kb",
          url: "url " + i,
          displayOrder: 1,
          permission: "*",
          createTime: "2023-07-13",
          updateTime: "2023-07-13",
          visiable: true,
          remark: "remark " + i,
        },
        children: [
          {
            data: {
              name: "Item " + i + "-0",
              icon: Math.floor(Math.random() * 1000) + 1 + "kb",
              url: "url " + i,
              displayOrder: 1,
              permission: "*",
              createTime: "2023-07-13",
              updateTime: "2023-07-13",
              visiable: true,
              remark: "remark " + i,
            },
          },
        ],
      };
      this.files.push(node);
    }

    this.cols = [
      { field: "name", header: "组件名称" },
      { field: "icon", header: "图标" },
      { field: "url", header: "URL" },
      { field: "displayOrder", header: "显示顺序" },
      { field: "permission", header: "权限通配符" },
      // { field: "createTime", header: "创建时间" },
      // { field: "updateTime", header: "更新时间" },
      { field: "visiable", header: "是否可见" },
      // { field: "remark", header: "备注" },
    ];

    this.selectedColumns = this.cols;

    this.activeRoute.params.subscribe((params) => {
      this.currentPage = params["page"];
      // this.getCompPermListByPage();
    });
  }

  public getCompPermListByPage() {
    return this.compPermService
      .getCompPermTable(this.currentPage, this.searchStr)
      .subscribe((data) => {
        this.compPermList = data.content;
        this.totalRecords = data.totalElements;

        this.getRolesAsync();
      });
  }

  /**
   * 查询每一个权限对应的角色
   */
  private getRolesAsync() {
    this.compPermList.forEach((compPerm, index) => {
      this.compPermService
        .getRolesByCompId(compPerm.compId)
        .subscribe((res) => {
          res.success && res.data && (compPerm.roles = res.data);
        });
    });
  }

  public searchPermission() {
    this.currentPage = 1;
    this.getCompPermListByPage();
  }

  public resetSearch() {
    this.currentPage = 1;
    this.searchStr = "";
    this.getCompPermListByPage();
  }

  public pageChanged(event: any): void {
    this.currentPage = event.first / event.rows + 1;
    this.router.navigateByUrl(
      "/manage/component-permission-table/page/" + this.currentPage
    );
  }

  public delPermission(rowData, ri): void {
    this.confirmationService.confirm({
      message: "确定要删除吗？",
      accept: () => {
        let compId = rowData.compId;
        this.compPermService.deleteByCompId(compId).subscribe(
          (data) => {
            if (data && data.success) {
              this.messageService.add({
                severity: "success",
                summary: "Success Message",
                detail: "删除成功",
                sticky: false,
                life: 1000,
              });
              this.getCompPermListByPage();
            } else {
              this.messageService.add({
                severity: "error",
                summary: "Fail Message",
                detail: data.msg || "删除失败",
                sticky: false,
                life: 1000,
              });
            }
          },
          (error) => {
            this.messageService.add({
              severity: "error",
              summary: "Fail Message",
              detail: error || "删除失败",
              sticky: false,
              life: 1000,
            });
          }
        );
      },
    });
  }

  public newPermission() {
    this.router.navigateByUrl("/manage/component-permission-table/edit/-1");
  }

  public editPermission(rowData, ri): void {
    let compId = rowData.compId;
    this.router.navigateByUrl(
      "/manage/component-permission-table/edit/" + compId
    );
  }
}
