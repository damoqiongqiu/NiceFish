import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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

  public formGroup: FormGroup;
  public genderList: any = [
    { label: '女', value: 0 },//value 必须是数值，与服务端的接口类型对应，否则无法选中。
    { label: '男', value: 1 },
    { label: '未知', value: 2 }
  ];
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
    this.formGroup = this.buildFormGroup();

    this.activeRoute.params.subscribe((params) => {
      this.userId = params["userId"];
      this.currentPage = params["page"];
      this.getUserDetails();
      this.getRoleListByPage();
      this.getRoleListAllByUserId();
    });
  }

  buildFormGroup() {
    let fields: any[] = [
      {
        key: "userName",
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
        ],
      },
      {
        key: "nickName",
        disabled: true,
        validators: [Validators.minLength(2), Validators.maxLength(32)],
      },
      {
        key: "email",
        validators: [
          Validators.required,
          Validators.pattern(
            "^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$"
          ),
        ],
      },
      {
        key: "cellphone",
        validators: [Validators.pattern("^[0-9]*$")],
      },
      {
        key: "gender",
        value: 2,
        validators: [],
      },
      {
        key: "status",
        value: true,
        validators: [],
      },
      {
        rows: 5,
        key: "remark",
        validators: [Validators.maxLength(200)],
      },
    ];

    let group: any = {};
    fields.forEach((field) => {
      group[field.key] = new FormControl({ value: field.value || "", disabled: true });
    });
    return new FormGroup(group);
  }

  public getUserDetails() {
    this.userMngService.getUserDetails(this.userId).subscribe((response) => {
      let userDetail = response.data;
      this.formGroup.patchValue({
        currentAvatarURL: userDetail.avatarURL,
        userName: userDetail.userName,
        nickName: userDetail.nickName,
        email: userDetail.email,
        cellphone: userDetail.cellphone,
        gender: userDetail.gender,
        status: userDetail.status === 1 ? true : false,
        remark: userDetail.remark,
      });
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

  public save(): void {
    this.roleMngService.saveUserRoleRelation(this.userId, this.selectedRoles).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: '成功', detail: '保存成功' });
        window.history.back();
      },
      error => {
        this.messageService.add({ severity: 'error', summary: '失败', detail: '保存成功' });
        console.error(error);
      }
    );
  }

  public cancel(): void {
    //FIXME:如果存在编辑过的数据，提示是否保存
    window.history.back();
  }
}
