import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { UserMngService } from "src/app/manage/permission/user-mng.service";
import { RoleMngService } from "../role-mng.service";
import { environment } from "src/environments/environment";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: 'user-edit-role',
  templateUrl: './user-edit-role.component.html',
  styleUrls: ['./user-edit-role.component.scss'],
  animations: [
    fadeIn
  ]
})
export class UserEditRoleComponent {
  public isMock = environment.isMock;
  public userId: string = "-1";
  public searchStr = "";
  public totalRecords = 0;
  public currentPage = 1;
  public roleList: Array<any> = [];
  public selectedRoles: Array<any> = [];

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userMngService: UserMngService,
    public roleMngService: RoleMngService,
    public messageService: MessageService,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.userId = params["userId"];
      this.currentPage = params["page"];
      this.getRoleListByPage();
      this.getRoleListAllByUserId();
    });
  }

  /**
   * 获取系统中的所有角色列表，带分页
   * @returns 
   */
  public getRoleListByPage() {
    return this.roleMngService.getRoleTable(this.currentPage, this.searchStr).subscribe(
      data => {
        this.roleList = data.content;
        this.totalRecords = data.totalElements;
      }
    );
  }

  /**
   * 获取当前用户已经关联的全部角色列表，不带分页
   * @returns 
   */
  public getRoleListAllByUserId() {
    return this.roleMngService.getRoleListAllByUserId(this.userId).subscribe(
      response => {
        this.selectedRoles = response.data;
      }
    );
  }

  public pageChanged(event: any): void {
    this.currentPage = (event.first / event.rows) + 1;
    this.router.navigateByUrl(`/manage/user-table/user-edit-role/${this.userId}/${this.currentPage}`);
  }

  public onSelectionChange(value = []): void {
    console.log(value);
  }

  public cancel(): void {
    //FIXME:如果存在编辑过的数据，提示是否保存
    window.history.back();
  }
}
