import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { UserLoginComponent } from '../blog/user/user-login/user-login.component';
import { UserInfoComponent } from '../blog/user/user-info/user-info.component';
import { UserProfileComponent } from '../blog/user/user-profile/user-profile.component';
import { FormControlComponent } from '../blog/user/user-profile/dynamic-form/form-control.component';
import { TrimStringPipe } from './trim-string.pipe';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent,
    TrimStringPipe
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    TrimStringPipe
  ]
})

export class SharedModule {

}