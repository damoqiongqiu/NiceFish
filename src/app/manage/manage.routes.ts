import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
import { UserProfileComponent } from '../blog/user/user-profile/user-profile.component';
import { SysParamComponent } from './sys-param/sys-param.component';
import { ChartComponent } from './chart/chart.component';
import { AuthGuard } from './auth-guard';

export const manageRoutes = [
	{
		path: '',
		component: ManageMainComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: '', redirectTo: 'chart', pathMatch: 'full' },
			{ path: 'chart', component: ChartComponent },
			{ path: 'posttable/page/:page', component: PostTableComponent },
			{ path: 'commenttable/page/:page', component: CommentTableComponent },
			{ path: 'usertable/page/:page', component: UserTableComponent },
			{ path: 'usertable/edituser/:userId', component: UserProfileComponent },
			{ path: 'roletable/page/:page', component: RoleTableComponent },
			{ path: 'permissiontable/page/:page', component: PermissionTableComponent },
			{ path: 'profile', component: UserProfileComponent },
			{ path: 'sysparam', component: SysParamComponent },
			{ path: '**', redirectTo: 'posttable/page/1' }
		]
	}
];