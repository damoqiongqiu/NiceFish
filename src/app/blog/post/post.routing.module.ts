import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailMainComponent } from "./post-detail-main/post-detail-main.component";
import { PostListComponent } from "./post-list/post-list.component";
import { AuthGuard } from "../../shared/auth-guard";

export const postRoutes:Routes = [
	{
		path: "",
		redirectTo: "page/1",
		pathMatch: "full"
	},
	{
		path: "page/:page",
		component: PostListComponent
	},
	{
		path: "post-detail/:postId",
		component: PostDetailMainComponent
	},
	{
		path: "write",
		canActivate: [AuthGuard],
		loadChildren: () => import("./write-post/write-post.module").then(m => m.WritePostModule)
	},
];

@NgModule({
	imports: [RouterModule.forChild(postRoutes)],
	exports: [RouterModule]
})
export class PostRoutingModule { }