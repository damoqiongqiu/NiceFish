import { PostDetailMainComponent } from "./post-detail-main/post-detail-main.component";
import { PostListComponent } from "./post-list/post-list.component";

export const postRoutes = [
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
		path: "post-detail/:id",
		component: PostDetailMainComponent
	},
	{
		path: "write",
		loadChildren: "./write-post/write-post.module#WritePostModule"
	},
];
