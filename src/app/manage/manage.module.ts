import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from '../shared/shared.module';
import { PostSharedModule } from '../shared/post.module';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';
import { SysParamComponent } from './sys-param/sys-param.component';
import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';

import { PostTableService } from './post-table/post-table.service';
import { AuthGuard } from '../shared/auth-guard';

import { manageRoutes } from './manage.routes';

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent,
    ChartComponent,
    EChartOptionDirective1,
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
    RouterModule.forChild(manageRoutes)
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