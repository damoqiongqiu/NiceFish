import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PickListModule } from "primeng/picklist";
import { BlockUIModule } from "primeng/blockui";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from "primeng/panel";

import { SignInComponent } from "../blog/user/sign-in/sign-in.component";
import { UserInfoComponent } from "../blog/user/user-info/user-info.component";
import { UserProfileComponent } from "../blog/user/user-profile/user-profile.component";
import { BlockSpinnerComponent } from "./block-spinner/block-spinner.component";

import { TrimStringPipe } from "./pipes/trim-string.pipe";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html-pipe";

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
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    SignInComponent,
    BlockUIModule,
    ProgressSpinnerModule,
    PanelModule,
    UserInfoComponent,
    UserProfileComponent,
    BlockSpinnerComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
  ]
})

export class SharedModule {

}
