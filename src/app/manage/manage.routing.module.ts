import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageMainComponent } from "./manage-main/manage-main.component";
import { PostTableComponent } from "./content-mng/post-table/post-table.component";
import { CommentTableComponent } from "./content-mng/comment-table/comment-table.component";
import { UserProfileComponent } from "../blog/user/user-profile/user-profile.component";
import { SysParamComponent } from "./sys-param/sys-param.component";
import { ChartComponent } from "./chart/chart.component";
import { UserTableComponent } from "./permission/user-table/user-table.component";
import { UserEditRoleComponent } from "./permission/user-edit-role/user-edit-role.component";
import { RoleTableComponent } from "./permission/role-table/role-table.component";
import { RoleEditComponent } from "./permission/role-edit/role-edit.component";
import { ApiPermissionTableComponent } from "./permission/api-permission-table/api-permission-table.component";
import { ApiPermissionEditComponent } from "./permission/api-permission-edit/api-permission-edit.component";
import { ComponentPermissionTableComponent } from './permission/component-permission-table/component-permission-table.component';
import { ComponentPermissionEditComponent } from './permission/component-permission-edit/component-permission-edit.component';
import { AuthGuard } from "../shared/auth-guard";

export const manageRoutes: Routes = [
	{
		path: "",
		component: ManageMainComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: "", redirectTo: "chart", pathMatch: "full" },
			{ path: "chart", component: ChartComponent },
			{ path: "post-table/page/:page", component: PostTableComponent },
			{ path: "comment-table/page/:page", component: CommentTableComponent },
			{ path: "user-table/page/:page", component: UserTableComponent },
			{ path: "user-table/user-edit-role/:userId/:page", component: UserEditRoleComponent },
			{ path: "profile/:userId", component: UserProfileComponent },
			{ path: "role-table/page/:page", component: RoleTableComponent },
			{ path: "role-table/edit-role/:roleId", component: RoleEditComponent },
			{ path: "api-permission-table/page/:page", component: ApiPermissionTableComponent },
			{ path: "api-permission-table/edit/:apiPermissionId", component: ApiPermissionEditComponent },
			{ path: "component-permission-table/page/:page", component: ComponentPermissionTableComponent },
			{ path: "component-permission-table/edit/:compPermId/:pId", component: ComponentPermissionEditComponent },
			{ path: "sysparam", component: SysParamComponent },
			{ path: "**", redirectTo: "posttable/page/1" }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(manageRoutes)],
	exports: [RouterModule]
})
export class ManageRoutingModule { }