import { SignInComponent } from "./blog/user/sign-in/sign-in.component";
import { RetrievePwdComponent } from "./blog/user/retrieve-pwd/retrieve-pwd.component";
import { SignUpComponent } from "./blog/user/sign-up/sign-up.component";

export const appRoutes = [
	{
		path: "",
		redirectTo: "posts",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: "./blog/home/home.module#HomeModule"
	},
	{
		path: "posts",
		loadChildren: "./blog/home/home.module#HomeModule"
	},
	{
		path: "post",
		loadChildren: "./blog/post/post.module#PostModule"
	},
	{
		path: "login",
		component: SignInComponent
	},
	{
		path: "retrievepwd",
		component: RetrievePwdComponent
	},
	{
		path: "register",
		component: SignUpComponent
	},
	{
		path: "user",
		loadChildren: "./blog/user/user.module#UserModule"
	},
	{
		path: "manage",
		loadChildren: "./manage/manage.module#ManageModule"
	},
	{
		path: "**",
		loadChildren: "./blog/home/home.module#HomeModule"
	}
];
