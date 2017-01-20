import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';

export const manageRoutes = [
  	{
		path:'',
		component:ManageMainComponent,
	    children: [
	    	{ path: '',redirectTo:'posttable/page/1',pathMatch:'full'},
	    	{ path: 'posttable/page/:page', component: PostTableComponent },
	    	{ path: 'commenttable/page/:page', component: CommentTableComponent },
	    	{ path: 'usertable/page/:page', component: UserTableComponent },
	    	{ path: 'sysparam', component: SysParamComponent },
	    	{ path:'**', redirectTo:'posttable/page/1' }
	    ]
	}
];