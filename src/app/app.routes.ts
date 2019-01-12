import { UserLoginComponent } from './blog/user/user-login/user-login.component';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { UserRegisterComponent } from './blog/user/user-register/user-register.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'posts',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './blog/home/home.module#HomeModule'
	},
	{
		path: 'posts',
		loadChildren: './blog/home/home.module#HomeModule'
	},
	{
		path: 'post',
		loadChildren: './blog/post/post.module#PostModule'
	},
	{
		path: 'login',
		component: UserLoginComponent
	},
	{
		path: 'retrievepwd',
		component: RetrievePwdComponent
	},
	{
		path: 'register',
		component: UserRegisterComponent
	},
	{
		path: 'user',
		loadChildren: './blog/user/user.module#UserModule'
	},
	{
		path: 'manage',
		loadChildren: './manage/manage.module#ManageModule'
	},
	{
		path: '**',//fallback router must in the last
		loadChildren: './blog/home/home.module#HomeModule'
	}
];
