import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { PostSharedModule } from "../../shared/post.module";
import { UserMainComponent } from "./user-main/user-main.component";
import { PostTableService } from "../../manage/content-mng/post-table/post-table.service";

import { userRoutes } from "./user.routes";

@NgModule({
  declarations: [
    UserMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PostSharedModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    UserMainComponent
  ],
  providers: [
    PostTableService
  ]
})
export class UserModule { }
