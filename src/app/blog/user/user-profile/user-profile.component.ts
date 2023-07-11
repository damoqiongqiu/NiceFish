import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userMngService: UserMngService
  ) {}

  ngOnInit() {
    this.formGroup = this.buildFormGroup();

    this.activeRoute.params.subscribe((params) => {
      this.userId = params["userId"];
      if (this.userId !== "-1") {
        this.loadUserDetail();
      }
    });
  }
  
  buildFormGroup() {
    //FIXME:用户资料应该可以修改性别和状态字段。
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
      },
      {
        key: "password",
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      },
      {
        key: "confirmPassword",
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
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
        const pwd = fg.get("password");
        const pwd2 = fg.get("confirmPassword");
        const password = pwd.value;
        const confirmPassword = pwd2.value;

        pwd.setErrors(null);
        pwd2.setErrors(null);

        if (password === "" && confirmPassword === "") {
          return null;
        } else if (password !== confirmPassword) {
          pwd.setErrors({ passwordNotMatch: true });
          pwd2.setErrors({ passwordNotMatch: true });
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

    if (!this.formGroup.valid) return;
    let userInfo = this.formGroup.value;
    delete userInfo.confirmPassword;
    delete userInfo.currentAvatarURL;

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
    this.userMngService.getUserDetail(this.userId).subscribe((response) => {
      let userDetail = response.data;
      this.formGroup.patchValue({
        currentAvatarURL: userDetail.avatarURL,
        userName: userDetail.userName,
        nickName: userDetail.nickName,
        email: userDetail.email,
        cellphone: userDetail.cellphone,
        remark: userDetail.remark,
      });
    });
  }
}
