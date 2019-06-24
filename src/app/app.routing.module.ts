import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './blog/user/sign-in/sign-in.component';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';

const routes: Routes =[
	{
		path: "",
		redirectTo: "posts",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: () => import("./blog/home/home.module").then(m => m.HomeModule)
	},
	{
		path: "posts",
		loadChildren: () => import("./blog/home/home.module").then(m => m.HomeModule)
	},
	{
		path: "post",
		loadChildren: () => import("./blog/post/post.module").then(m => m.PostModule)
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
		loadChildren: () => import("./blog/user/user.module").then(m => m.UserModule)
	},
	{
		path: "manage",
		loadChildren: () => import("./manage/manage.module").then(m => m.ManageModule)
	},
	{
		path: "**",
		loadChildren: () => import("./blog/home/home.module").then(m => m.HomeModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
