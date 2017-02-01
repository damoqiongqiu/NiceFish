import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { SysParamComponent } from './sys-param/sys-param.component';
import { AuthGuard } from './auth-guard';

export const manageRoutes = [
  	{
		path:'',
		component:ManageMainComponent,
		canActivate: [AuthGuard],
	    children: [
	    	{ path: '',redirectTo:'posttable/page/1',pathMatch:'full'},
	    	{ path: 'posttable/page/:page', component: PostTableComponent },
	    	{ path: 'commenttable/page/:page', component: CommentTableComponent },
	    	{ path: 'usertable/page/:page', component: UserTableComponent },
	    	{ path: 'usertable/edituser/:userId', component: UserProfileComponent },
	    	{ path: 'usertable/newuser', component: UserProfileComponent },
	    	{ path: 'sysparam', component: SysParamComponent },
	    	{ path: '**', redirectTo:'posttable/page/1' }
	    ]
	}
];