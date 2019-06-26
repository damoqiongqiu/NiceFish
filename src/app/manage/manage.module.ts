import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "../shared/shared.module";
import { PostSharedModule } from "../shared/post.module";

import { ManageMainComponent } from "./manage-main/manage-main.component";
import { UserTableComponent } from "./permission/user-table/user-table.component";
import { RoleTableComponent } from "./permission/role-table/role-table.component";
import { RoleEditComponent } from "./permission/role-edit/role-edit.component";
import { PermissionTableComponent } from "./permission/permission-table/permission-table.component";
import { PermissionEditComponent } from "./permission/permission-edit/permission-edit.component";
import { SysParamComponent } from "./sys-param/sys-param.component";
import { ChartComponent } from "./chart/chart.component";
import { EChartOptionDirective } from "./chart/echart-option.directive";

import { PostTableService } from "./content-mng/post-table/post-table.service";
import { AuthGuard } from "../shared/auth-guard";

import { ManageRoutingModule } from "./manage.routing.module";

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent,
    ChartComponent,
    EChartOptionDirective,
    RoleTableComponent,
    PermissionTableComponent,
    RoleEditComponent,
    PermissionEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostSharedModule,
    PaginatorModule,
    ManageRoutingModule
  ],
  exports: [
    ManageMainComponent
  ],
  providers: [
    PostTableService,
    AuthGuard
  ]
})
export class ManageModule { }
