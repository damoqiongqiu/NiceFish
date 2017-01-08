import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'posts',
		pathMatch:'full'
	},{
		path:'posts',
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'post',
		loadChildren:'./post/post.module#PostModule'
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
		loadChildren:'./user/user.module#UserModule'
	},
	{ 
		path: 'manage', 
		loadChildren:'./manage/manage.module#ManageModule'
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];
// export default RouterModule.forRoot(appRoutes);