import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from "./user-main/user-main.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { PostTableComponent } from "../../manage/content-mng/post-table/post-table.component";
import { CommentTableComponent } from "../../manage/content-mng/comment-table/comment-table.component";

export const userRoutes:Routes = [
	{
		path: "",
		component: UserMainComponent,
		children: [
			{ path: "", redirectTo: "posttable/page/1", pathMatch: "full" },
			{ path: "post-table/page/:page", component: PostTableComponent },
			{ path: "comment-table/page/:page", component: CommentTableComponent },
			{ path: "profile", component: UserProfileComponent },
			{ path: "**", redirectTo: "write" }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(userRoutes)],
	exports: [RouterModule]
})
export class UserRoutingModule { }