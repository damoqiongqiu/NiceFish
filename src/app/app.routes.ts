import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const appRoutes=[
	{
		path:'',
		redirectTo:'posts',
		pathMatch:'full'
	},{
		path:'posts',
		loadChildren:'app/home/home.module'
	},
	{
		path:'post',
		loadChildren:'app/post/post.module'
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
		path: 'manage', 
		loadChildren:'app/manage/manage.module'
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'app/home/home.module'
	}
];
export default RouterModule.forRoot(appRoutes);