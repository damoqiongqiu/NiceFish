import { flyIn } from "../../../shared/animations/fly-in";
import { fadeIn } from "../../../shared/animations/fade-in";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RoleMngService } from "../role-mng.service";
import { MessageService } from "primeng/api";
import { ApiPermissionService } from "../api-permission.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "role-edit",
  templateUrl: "./role-edit.component.html",
  styleUrls: ["./role-edit.component.scss"],
  animations: [flyIn, fadeIn]
})
export class RoleEditComponent implements OnInit {
  public isMock = environment.isMock;
  public roleInfo: any = {
    roleId: "-1",
    roleName: "",
    roleEnabled: true,
    status: 1,
    remark: "",
  };

  public apiPermissionListAll: Array<any> = [];
  public apiPermissionListByRole: Array<any> = [];

  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public roleMngService: RoleMngService,
    public messageService: MessageService,
    public apiPermService: ApiPermissionService,
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        if (params["roleId"] == "-1") return;

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
      data => {
        data.roleEnabled = data.status == 1 ? true : false;
        this.roleInfo = data;
      },
      error => console.error(error)
    );
  }

  /**
   * 获取所有 API 权限列表，TODO:带分页？？？
   */
  public getApiPermListAll() {
    return this.apiPermService.getApiPermissionListAll().subscribe(
      data => {
        this.apiPermissionListAll = data;
      },
    );
  }

  /**
   * 获取角色的 API 权限列表
   */
  public getApiPermListByRoleId() {
    return this.apiPermService.getApiPermissionListAllByRole({ roleId: this.roleInfo.roleId }).subscribe(
      data => {
        console.log(data);
        this.apiPermissionListByRole = data;
      },
    );
  }

  /**
   * 获取角色的前端组件权限列表
   */
  public getCompPermListByRoleId(): void {

  }

  /**
   * 获取所有前端组件权限列表，TODO:带分页？？？
   */
  public getCompPermListAll(): void {

  }

  public save(): void {
    this.roleInfo.status = this.roleInfo.roleEnabled ? 1 : 0;
    console.log(this.roleInfo);

    if (this.isMock) {
      return;
    }

    //如果存在 roleId 参数，则为编辑状态，否则为新增状态。
    if (this.roleInfo.roleId == "-1") {
      this.roleMngService.newRole(this.roleInfo).subscribe(
        data => {
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
        data => {
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
    window.history.back();
  }
}
