import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { TagTableComponent } from './tag-table/tag-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';

export const manageRoutes = [
  	{
		path:'',
		component:ManageMainComponent,
	    children: [
	    	{ path: '', component: PostTableComponent },
	    	{ path: 'posttable', component: PostTableComponent },
	    	{ path: 'commenttable', component: CommentTableComponent },
	    	{ path: 'tagtable', component: TagTableComponent },
	    	{ path: 'usertable', component: UserTableComponent },
	    	{ path: 'sysparam', component: SysParamComponent }
	    ]
	}
];
// export default RouterModule.forChild(manageRoutes);