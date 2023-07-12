import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "../shared/shared.module";
import { PostSharedModule } from "../shared/post.module";
import {TableModule} from "primeng/table";

import { ManageMainComponent } from "./manage-main/manage-main.component";
import { UserTableComponent } from "./permission/user-table/user-table.component";
import { RoleTableComponent } from "./permission/role-table/role-table.component";
import { RoleEditComponent } from "./permission/role-edit/role-edit.component";
import { ApiPermissionTableComponent } from "./permission/api-permission-table/api-permission-table.component";
import { ApiPermissionEditComponent } from "./permission/api-permission-edit/api-permission-edit.component";
import { SysParamComponent } from "./sys-param/sys-param.component";
import { ChartComponent } from "./chart/chart.component";
import { NgxEchartsModule } from 'ngx-echarts';

import { PostTableService } from "./content-mng/post-table/post-table.service";
import { CommentTableService } from "./content-mng/comment-table/comment-table.service";
import { UserMngService } from "./permission/user-mng.service";
import { RoleMngService } from "./permission/role-mng.service";
import { ApiPermissionService } from "./permission/api-permission.service";
import { SysParamService } from "./sys-param/sys-param.service";
import { AuthGuard } from "../shared/auth-guard";

import { ManageRoutingModule } from "./manage.routing.module";

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent,
    ChartComponent,
    RoleTableComponent,
    ApiPermissionTableComponent,
    RoleEditComponent,
    ApiPermissionEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostSharedModule,
    PaginatorModule,
    TableModule,
    ManageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    ManageMainComponent
  ],
  providers: [
    PostTableService,
    CommentTableService,
    UserMngService,
    RoleMngService,
    ApiPermissionService,
    SysParamService,
    AuthGuard
  ]
})
export class ManageModule { }
