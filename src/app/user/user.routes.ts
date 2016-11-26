import {RouterModule} from "@angular/router";
import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';

const userRoutes = [
  	{
		path:'',
		component:UserMainComponent,
	    children: [
	    	{ path: '', component: WritePostComponent },
	    	{ path: 'write', component: WritePostComponent },
	    	{ path: 'posttable', component: PostTableComponent },
	    	{ path: 'commenttable', component: CommentTableComponent },
	    	{ path: 'profile', component: UserProfileComponent }
	    ]
	}
];
export default RouterModule.forChild(userRoutes);