import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageMainComponent } from "./manage-main/manage-main.component";
import { PostTableComponent } from "./content-mng/post-table/post-table.component";
import { CommentTableComponent } from "./content-mng/comment-table/comment-table.component";
import { UserProfileComponent } from "../blog/user/user-profile/user-profile.component";
import { SysParamComponent } from "./sys-param/sys-param.component";
import { ChartComponent } from "./chart/chart.component";
import { UserTableComponent } from "./permission/user-table/user-table.component";
import { RoleTableComponent } from "./permission/role-table/role-table.component";
import { RoleEditComponent } from "./permission/role-edit/role-edit.component";
import { PermissionTableComponent } from "./permission/permission-table/permission-table.component";
import { PermissionEditComponent } from "./permission/permission-edit/permission-edit.component";
import { AuthGuard } from "../shared/auth-guard";

export const manageRoutes:Routes = [
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
			{ path: "user-table/edituser/:userId", component: UserProfileComponent },
			{ path: "role-table/page/:page", component: RoleTableComponent },
			{ path: "role-edit/:roleId", component: RoleEditComponent },
			{ path: "permission-table/page/:page", component: PermissionTableComponent },
			{ path: "permission-edit/:permissionId", component: PermissionEditComponent },
			{ path: "profile", component: UserProfileComponent },
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