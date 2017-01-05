import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { UserInfo } from '../model/user-info-model';
import { UserRegisterService } from './user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  private userForm: FormGroup;
  private userInfo: UserInfo = new UserInfo();

  private formErrors = {
    'username': '',
    'email': '',
    'password':'',
    'confirmPassword':'',
  };
  validationMessages = {
    'username': {
      'required':'用户名必须输入。',
      'minlength':'用户名至少4位。'
    },
    'email': {
      'required':'邮箱必须输入。',
      'pattern':'请输入正确的邮箱地址。'
    },
    'password':{
      'required':'密码必须输入。',
      'minlength':'密码至少要8位。'
    },
    'confirmPassword':{
      'required':'重复密码必须输入。',
      'minlength':'密码至少要8位。',
      'validateEqual':"两次输入的密码不一致。"
    },
  };

  constructor(private fb: FormBuilder,private userRegisterService: UserRegisterService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm():void{
    this.userForm = this.fb.group({
      "username":[
        this.userInfo.username,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      "email":[
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password":[
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "confirmPassword":[
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); 
  }

  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      debugger;
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.userInfo = this.userForm.value;
    this.userRegisterService.register(this.userInfo);
    console.log(this.userInfo);
  }
}
