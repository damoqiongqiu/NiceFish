import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PickListModule } from "primeng/picklist";
import { BlockUIModule } from "primeng/blockui";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { PanelModule } from "primeng/panel";
import { TreeTableModule } from "primeng/treetable";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { SignInComponent } from "../blog/user/sign-in/sign-in.component";
import { UserInfoComponent } from "../blog/user/user-info/user-info.component";
import { UserProfileComponent } from "../blog/user/user-profile/user-profile.component";
import { BlockSpinnerComponent } from "./block-spinner/block-spinner.component";

import { TrimStringPipe } from "./pipes/trim-string.pipe";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html-pipe";
import { CaptchaService } from "./captcha.service";

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    ReactiveFormsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    PanelModule,
    TreeTableModule,
    ButtonModule,
    MultiSelectModule,
  ],
  declarations: [
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
    BlockSpinnerComponent,
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    SignInComponent,
    BlockUIModule,
    ProgressSpinnerModule,
    PanelModule,
    TreeTableModule,
    ButtonModule,
    MultiSelectModule,
    UserInfoComponent,
    UserProfileComponent,
    BlockSpinnerComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
  ],
  providers: [
    CaptchaService
  ],
})
export class SharedModule { }
