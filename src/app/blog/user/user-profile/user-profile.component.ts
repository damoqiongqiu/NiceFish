import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { FieldBase, Textbox, TextArea, Image } from "./dynamic-form/form-field";
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
  public error: Error;
  public formGroup: FormGroup;
  //FIXME:用户资料应该可以修改性别和状态字段。
  @Input() fields: FieldBase<any>[] = [
    new Image({
      src: "assets/imgs/angular2-small.png",
      label: "当前头像:",
      placeholder: "当前头像",
      key: "currentAvatarURL", //必须要有 key 属性，否则取不到数据。
    }),
    new Textbox({
      label: "头像:",
      placeholder: "上传头像",
      type: "file",
      key: "avatarURL",
    }),
    new Textbox({
      label: "用户名:",
      placeholder: "用户名",
      required: true,
      key: "userName",
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32),
      ],
    }),
    new Textbox({
      label: "昵称:",
      placeholder: "昵称",
      key: "nickName",
      validators: [
        Validators.minLength(2),
        Validators.maxLength(32),
      ],
    }),
    new Textbox({
      label: "常用邮箱:",
      placeholder: "常用邮箱",
      required: true,
      key: "email",
      validators: [
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
      ],
    }),
    new Textbox({
      label: "手机号:",
      placeholder: "手机号",
      key: "cellphone",
    }),
    new Textbox({
      label: "密码:",
      type: "password",
      placeholder: "密码，至少8位，最多16位",
      required: true,
      key: "password",
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ],
    }),
    new Textbox({
      label: "重复密码:",
      type: "password",
      placeholder: "两次密码必须一致",
      required: true,
      key: "confirmPassword",
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ],
    }),
    new TextArea({
      label: "个人简介:",
      placeholder: "个人简介，最多140字，不能放链接。",
      rows: 5,
      key: "remark",
      validators: [
          Validators.maxLength(200),
      ],
    }),
  ];

  private userId:string="-1";

  constructor(
    public router: Router, 
    public activeRoute: ActivatedRoute,
    public userMngService: UserMngService
  ){

  }

  ngOnInit() {
    this.formGroup = this.buildFormGroup(this.fields);
    
    this.activeRoute.params.subscribe((params) => {
      this.userId=params["userId"];
      if (this.userId!=="-1") {
        this.loadUserDetail();
      }
    });
  }

  loadUserDetail(){
    this.userMngService.getUserDetail(this.userId).subscribe(response=>{
      let userDetail=response.data;
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

  /**
   * 利用 Angular 的 FormControl 和 FormGroup 来动态构建表单。
   * @param fields
   * @returns
   */
  buildFormGroup(fields: FieldBase<any>[]) {
    let group: any = {};
    fields.forEach((field) => {
      group[field.key] = new FormControl(field.value || "", {
        validators: Validators.compose(field.validators),//compose，组合验证器
      });
    });
    return new FormGroup(group,{
      //自己提供验证函数，验证两次密码是否一致
      validators: (fg: FormGroup)=>{
        const { value: password } = fg.get('password');
        const { value: confirmPassword } = fg.get('confirmPassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
      }
    });
  }

  //TODO:user.password用MD5加密后传输
  public save(): void {
    this.formGroup.updateValueAndValidity();
    console.log(this.formGroup.getRawValue());
    console.log(this.formGroup.value);

    if(!this.formGroup.valid) return;

    console.error(this.userId);
    let userInfo=this.formGroup.value;
    delete userInfo.confirmPassword;
    delete userInfo.currentAvatarURL;

    if(this.userId!=="-1"){
      userInfo.userId=this.userId;
      this.userMngService.updateUser(userInfo).subscribe(response=>{
        console.log(response);
        if(response.success){
          window.history.back();
        }
      },error=>{
        console.log(error);
      });
    }else{
      this.userMngService.newUser(userInfo).subscribe(response=>{
        console.log(response);
        if(response.success){
          window.history.back();
        }
      },error=>{
        console.log(error);
      });
    }
  }

  public cancel(): void {
    window.history.back();
  }
}
