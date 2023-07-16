import { flyIn } from "../../../shared/animations/fly-in";
import { fadeIn } from "../../../shared/animations/fade-in";
import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ComponentPermissionService } from "../component-permission.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "component-permission-edit",
  templateUrl: "./component-permission-edit.component.html",
  styleUrls: ["./component-permission-edit.component.scss"],
  animations: [flyIn, fadeIn]
})
export class ComponentPermissionEditComponent implements OnInit {
  public isMock = environment.isMock;
  public error: Error;
  public compPermId: string = "-1";
  public pId: string = "-1";
  public componentPermission: any = {
    parentEntity: null,
    compPermId: this.compPermId,
    componentName: "",
    icon: null,
    url: null,
    displayOrder: 1,
    permission: "",
    compVisiable: true,
    visiable: 1,
    remark: null,
  };

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public compPermService: ComponentPermissionService,
    public messageService: MessageService,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.compPermId = params["compPermId"];
      this.pId = params["pId"];
      this.loadComponentPermissionDetail();
    });
  }

  loadComponentPermissionDetail() {
    //this.compPermId 参数为 -1 时，表示新增
    if (this.compPermId == "-1") {
      //this.pId 参数为 -1 时，表示新增的是根节点，否则新增的是子节点
      if (this.pId !== "-1") {
        this.compPermService.getCompPermDetails(this.pId).subscribe((response) => {
          this.componentPermission.parentEntity = response;
        });
      }
      return;
    }

    //编辑已经存在的页面权限
    this.compPermService.getCompPermDetails(this.compPermId).subscribe((response) => {
      response.compVisiable = response.visiable == 1 ? true : false;
      this.componentPermission = response;
    });
  }

  save() {
    this.componentPermission.visiable = this.componentPermission.compVisiable ? 1 : 0;
    console.log(this.componentPermission);

    if (this.isMock) {
      return;
    }

    if (this.compPermId == "-1") {
      //创建子节点时，只传递 compPermId 参数
      if (this.pId !== "-1") {
        this.componentPermission.parentEntity = {
          compPermId: this.pId
        }
      }
      this.compPermService.newCompPerm(this.componentPermission).subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: '成功', detail: '新增页面权限成功' });
          window.history.back();
        },
        error => {
          this.messageService.add({ severity: 'error', summary: '失败', detail: '新增页面权限失败' });
          console.error(error);
        }
      );
    } else {
      this.compPermService.updateCompPerm(this.componentPermission).subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: '成功', detail: '更新页面权限成功' });
          window.history.back();
        },
        error => {
          this.messageService.add({ severity: 'error', summary: '失败', detail: '更新页面权限失败' });
          console.error(error);
        }
      );
    }
  }

  public cancel(): void {
    window.history.back();
  }
}
