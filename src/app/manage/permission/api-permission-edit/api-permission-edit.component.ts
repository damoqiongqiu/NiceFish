import { flyIn } from "../../../shared/animations/fly-in";
import { fadeIn } from "../../../shared/animations/fade-in";
import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ApiPermissionService } from "../api-permission.service";

@Component({
  selector: "api-permission-edit",
  templateUrl: "./api-permission-edit.component.html",
  styleUrls: ["./api-permission-edit.component.scss"],
  animations: [flyIn, fadeIn]
})
export class ApiPermissionEditComponent implements OnInit {
  public error: Error;
  private apiPermissionId: string = "-1";
  public apiPermission: any = {
    apiPermissionId: "-1",
    apiName: "",
    url: "",
    permission: "",
    remark: "",
    createTime: new Date(),
    updateTime: new Date(),
  };

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public apiPermService: ApiPermissionService,
    public messageService: MessageService,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.apiPermissionId = params["apiPermissionId"];
      this.apiPermission.apiPermissionId = this.apiPermissionId;
      console.log(this.apiPermissionId);
      this.loadApiPermissionDetail();
    });
  }

  loadApiPermissionDetail() {
    if (this.apiPermissionId == "-1") {
      return;
    }

    //编辑已经存在的 API 权限
    this.apiPermService.getApiPermDetails(this.apiPermissionId).subscribe((response) => {
      this.apiPermission = response.data;
    });
  }

  save() {
    delete this.apiPermission.createTime;
    delete this.apiPermission.updateTime;

    //如果存在 apiPermissionId 参数，则为编辑状态，否则为新增状态。
    if (this.apiPermission.apiPermissionId == "-1") {
      this.apiPermService.newApiPermission(this.apiPermission).subscribe(
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
      this.apiPermService.updateApiPermission(this.apiPermission).subscribe(
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
