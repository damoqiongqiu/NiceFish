import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { HomeComponent } from './home/home.component';
import { PostDetailMainComponent } from './post/post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const appRoutes=[
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'login',
		component:UserLoginComponent
	},
	{
		path:'forgetpwd',
		component:ForgetPwdComponent
	},
	{
		path:'register',
		component:UserRegisterComponent
	},
	{
		path:'user',
		loadChildren:'app/user/user.module'
	},
	{ 
		path: 'postdetail/:postId', 
		component: PostDetailMainComponent 
	},
	{ 
		path: 'manage', 
		loadChildren:'app/manage/manage.module'
	},
	{
		path:'**',//fallback router must in the last
		component:HomeComponent
	}
];
export default RouterModule.forRoot(appRoutes);