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
import { CaptchaComponent } from "./captcha/captcha.component";

import { TrimStringPipe } from "./pipes/trim-string.pipe";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html-pipe";
import { RightPadStringPipe } from "./pipes/right-pad-string.pipe";
import { BooleanPipe } from "./pipes/boolean-pipe";

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
    BlockSpinnerComponent,
    CaptchaComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
    RightPadStringPipe,
    BooleanPipe,
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
    CaptchaComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
    RightPadStringPipe,
    BooleanPipe,
  ],
})
export class SharedModule { }
