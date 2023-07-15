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

  cols!: Column[];
  selectedColumns!: Column[];

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public compPermService: ComponentPermissionService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: "componentName", header: "组件名称" },
      { field: "url", header: "URL" },
      { field: "displayOrder", header: "显示顺序" },
      { field: "permission", header: "权限通配符" },
      { field: "visiable", header: "是否可见" },
    ];

    this.selectedColumns = this.cols;

    this.activeRoute.params.subscribe((params) => {
      this.currentPage = params["page"];
      this.getCompPermListByPage();
    });
  }

  /**
   * PrimeNG 组件需要的数据格式与服务端返回的数据格式不一致。
   * 这里 tree 递归，整理成 PrimeNG 组件需要的数据格式
   * @param node 
   * @returns 
   */
  private treeDataTransformer(node) {
    let data: any = {};
    this.cols.forEach((col) => {
      data[col.field] = node[col.field];
    });
    data.compPermId = node.compPermId;
    node.data = data;
    if (node.children) {
      node.children.forEach((child) => {
        this.treeDataTransformer(child);
      });
    }
    return node;
  }

  public getCompPermListByPage() {
    return this.compPermService
      .getCompPermTable(this.currentPage, this.searchStr)
      .subscribe((data) => {
        data.content.forEach((node) => {
          this.treeDataTransformer(node);
        });
        this.compPermList = data.content;
        this.totalRecords = data.totalElements;
        // this.getRolesAsync();
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

  public delComponentPermission(rowData): void {
    console.log(rowData);
    this.confirmationService.confirm({
      message: "确定要删除吗？",
      accept: () => {
        let compPermId = rowData.compPermId;
        this.compPermService.deleteByCompPermId(compPermId).subscribe(
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
