import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { UserMngService } from "src/app/manage/permission/user-mng.service";

@Component({
  selector: "user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
/**
 * 用户个人信息页面。
 * 动态表单，详细 API 和说明参见：@see https://angular.io/guide/reactive-forms
 * @author 大漠穷秋
 */
export class UserProfileComponent implements OnInit {
  private userId: string = "-1";
  public formGroup: FormGroup;
  public genderList: any = [
    {label:'女',value:0},//value 必须是数值，与服务端的接口类型对应，否则无法选中。
    {label:'男',value:1},
    {label:'未知',value:2}
  ];

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userMngService: UserMngService,
    public messageService:MessageService,
  ) {}

  ngOnInit() {
    this.formGroup = this.buildFormGroup();

    this.activeRoute.params.subscribe((params) => {
      this.userId = params["userId"];
      this.loadUserDetail();
    });
  }

  buildFormGroup() {
    let fields:any[] = [
      {
        key: "currentAvatarURL", //必须要有 key 属性，否则取不到数据。
        src: "assets/imgs/angular2-small.png",
      },
      {
        key: "avatarURL",
      },
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
        validators:[Validators.pattern("^[0-9]*$")],
      },
      {
        key: "gender",
        value:2,
        validators:[],
      },
      {
        key: "password",
        validators: [],
      },
      {
        key: "confirmPassword",
        validators: [],
      },
      {
        key: "status",
        value:true,
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
      group[field.key] = new FormControl(field.value || "", {
        validators: Validators.compose(field.validators), //compose，组合验证器
      });
    });

    return new FormGroup(group, {
      //自己提供验证函数，验证两次密码是否一致
      validators: (fg: FormGroup) => {
        const password = fg.get("password");
        const confirmPassword = fg.get("confirmPassword");
        const minLength=8;
        const maxLength=32;
        
        if (password.value.length < minLength || password.value.length > maxLength) {
          password.setErrors({ minlength: true });
          return null;
        }
        if (confirmPassword.value.length < minLength || confirmPassword.value.length > maxLength) {
          confirmPassword.setErrors({ minlength: true });
          return null;
        }

        if (password.value !== confirmPassword.value) {
          password.setErrors({ passwordNotMatch: true });
          confirmPassword.setErrors({ passwordNotMatch: true });
        }else{
          password.setErrors(null);
          confirmPassword.setErrors(null);
        }
        return null;
      },
    });
  }

  //TODO:user.password用MD5加密后传输
  public save(): void {
    this.formGroup.updateValueAndValidity();
    console.log(this.formGroup.getRawValue());
    console.log(this.formGroup.value);

    if (!this.formGroup.valid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "表单验证失败，请检查输入项",
        sticky: false,
      });
      return;
    }

    let userInfo = this.formGroup.value;
    delete userInfo.confirmPassword;
    delete userInfo.currentAvatarURL;
    userInfo.status = userInfo.status ? 1 : 0;//数据库中status字段为int类型，0表示禁用，1表示启用。

    if (this.userId !== "-1") {
      userInfo.userId = this.userId;
      this.userMngService.updateUser(userInfo).subscribe(
        (response) => {
          console.log(response);
          if (response.success) {
            window.history.back();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.userMngService.newUser(userInfo).subscribe(
        (response) => {
          console.log(response);
          if (response.success) {
            window.history.back();
          }else{
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: response.msg, 
              sticky: true
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public cancel(): void {
    window.history.back();
  }

  public loadUserDetail() {
    //创建新用户
    if(this.userId=="-1"){
      this.formGroup.patchValue({
        currentAvatarURL: "",
        userName: "",
        nickName: "",
        email: "",
        cellphone: "",
        gender: 2,
        status: 1,
        remark: "",
      });
      return;
    }

    //编辑已经存在的用户
    this.userMngService.getUserDetail(this.userId).subscribe((response) => {
      let userDetail = response.data;
      this.formGroup.patchValue({
        currentAvatarURL: userDetail.avatarURL,
        userName: userDetail.userName,
        nickName: userDetail.nickName,
        email: userDetail.email,
        cellphone: userDetail.cellphone,
        gender: userDetail.gender,
        status: userDetail.status===1?true:false,
        remark: userDetail.remark,
      });
    });
  }
}
