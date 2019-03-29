import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { PickListModule } from "primeng/picklist";
import { SignInComponent } from "../blog/user/sign-in/sign-in.component";
import { UserInfoComponent } from "../blog/user/user-info/user-info.component";
import { UserProfileComponent } from "../blog/user/user-profile/user-profile.component";
import { FormControlComponent } from "../blog/user/user-profile/dynamic-form/form-control.component";
import { TrimStringPipe } from "./pipes/trim-string.pipe";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html-pipe";

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent,
    TrimStringPipe,
    SanitizeHtmlPipe
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    TrimStringPipe,
    SanitizeHtmlPipe
  ]
})

export class SharedModule {

}
