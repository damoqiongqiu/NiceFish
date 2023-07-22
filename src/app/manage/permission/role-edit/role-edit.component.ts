import { flyIn } from "../../../shared/animations/fly-in";
import { fadeIn } from "../../../shared/animations/fade-in";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RoleMngService } from "../role-mng.service";
import { MessageService, TreeNode } from "primeng/api";
import { ApiPermissionService } from "../api-permission.service";
import { ComponentPermissionService } from "../component-permission.service";

interface Column {
  field: string;
  header: string;
}

interface NodeEvent {
  originalEvent: Event;
  node: TreeNode;
}

@Component({
  selector: "role-edit",
  templateUrl: "./role-edit.component.html",
  styleUrls: ["./role-edit.component.scss"],
  animations: [flyIn, fadeIn]
})
export class RoleEditComponent implements OnInit {
  public roleInfo: any = {
    roleId: "-1",
    roleName: "",
    roleEnabled: true,
    status: 1,
    remark: "",
  };

  //以下是 API 权限相关的属性
  public apiPermissionListAll: Array<any> = [];
  public apiPermissionListByRole: Array<any> = [];
  public selectAll: boolean = false;

  //以下是前端组件权限相关的属性
  public compPermList: Array<any> = [];
  public cols: Column[] = [
    { field: "componentName", header: "组件名称" },
    { field: "url", header: "URL" },
    { field: "displayOrder", header: "显示顺序" },
    { field: "permission", header: "权限通配符" },
    { field: "visiable", header: "是否可见" },
  ];
  public selectedComp: Array<any> = [];

  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public roleMngService: RoleMngService,
    public messageService: MessageService,
    public apiPermService: ApiPermissionService,
    public compPermService: ComponentPermissionService,
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.roleInfo.roleId = params["roleId"];
        this.getRoleInfo();
        this.getApiPermListAll();
        this.getApiPermListByRoleId();
        this.getCompPermListAll();
        this.getCompPermListByRoleId();
      }
    );
  }

  public getRoleInfo(): void {
    this.roleMngService.getRoleInfo(this.roleInfo.roleId).subscribe(
      response => {
        if (!response) return;
        response.roleEnabled = response.status == 1 ? true : false;
        this.roleInfo = response;
      },
      error => console.error(error)
    );
  }

  /**
   * 获取所有 API 权限列表，TODO:带分页？？？
   */
  public getApiPermListAll(): void {
    this.apiPermService.getApiPermissionListAll().subscribe(
      response => {
        this.apiPermissionListAll = response;
      },
    );
  }

  /**
   * 获取角色的全部 API 权限列表
   */
  public getApiPermListByRoleId(): void {
    this.apiPermService.getApiPermissionListAllByRole({ roleId: this.roleInfo.roleId }).subscribe(
      response => {
        this.apiPermissionListByRole = response;
      },
    );
  }

  public onApiPermSelectionChange(value = []): void {
    console.log(value);
    console.log(this.apiPermissionListByRole);
  }

  /**
   * PrimeNG 组件需要的数据格式与服务端返回的数据格式不一致。
   * 这里 tree 递归，整理成 PrimeNG 组件需要的数据格式，此方法直接修改原始节点上的数据，不生成副本。
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
    node.expanded = true;
    if (node.children) {
      node.children.forEach((child) => {
        this.treeDataTransformer(child);
      });
    }
    return node;
  }

  /**
   * 获取所有前端组件权限列表，TODO:带分页？？？
   */
  public getCompPermListAll(): void {
    this.compPermService
      .getCompPermTable(1, "")
      .subscribe((data) => {
        data.content.forEach((node) => {
          this.treeDataTransformer(node);
        });
        this.compPermList = data.content;
      });
  }

  /**
   * 获取角色的前端组件权限列表
   */
  public getCompPermListByRoleId(): void {
    this.compPermService
      .getCompPermListByRoleId({ roleId: this.roleInfo.roleId })
      .subscribe((response) => {
        response.forEach((node) => {
          this.treeDataTransformer(node);
        });
        this.selectedComp = response;
      });
  }

  public onCompPermSelect(event: NodeEvent) {
    console.log(event);
    console.log(this.selectedComp);
  }

  public save(): void {
    //整理成服务端接口需要的数据格式
    this.roleInfo.status = this.roleInfo.roleEnabled ? 1 : 0;
    delete this.roleInfo.apiEntities;
    delete this.roleInfo.componentEntities;

    let apiPermListTemp = [];
    this.apiPermissionListByRole.forEach((apiPerm) => {
      apiPermListTemp.push({
        apiPermissionId: apiPerm.apiPermissionId,//只传 id
      });
    });

    let compPermListTemp = [];
    this.selectedComp.forEach((compPerm) => {
      compPermListTemp.push({
        compPermId: compPerm.compPermId,//只传 id
      });
    });

    this.roleInfo.apiEntities = apiPermListTemp;
    this.roleInfo.componentEntities = compPermListTemp;

    console.log(this.roleInfo);

    //如果存在 roleId 参数，则为编辑状态，否则为新增状态。
    if (this.roleInfo.roleId == "-1") {
      this.roleMngService.newRole(this.roleInfo).subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: '成功', detail: '新增角色成功' });
          window.history.back();
        },
        error => {
          this.messageService.add({ severity: 'error', summary: '失败', detail: '新增角色失败' });
          console.error(error);
        }
      );
    } else {
      this.roleMngService.updateRole(this.roleInfo).subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: '成功', detail: '更新角色成功' });
          window.history.back();
        },
        error => {
          this.messageService.add({ severity: 'error', summary: '失败', detail: '更新角色失败' });
          console.error(error);
        }
      );
    }
  }

  public cancel(): void {
    //FIXME:如果存在编辑过的数据，提示是否保存
    window.history.back();
  }
}
