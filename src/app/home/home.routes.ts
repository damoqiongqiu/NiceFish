import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {PostDetailMainComponent} from "../common/post-detail-main/post-detail-main.component";

const homeRoutes= [
  	{
  		path: '', 
  		component: HomeComponent
  	},
	{ 
		path: 'postdetail/:postId', 
		component: PostDetailMainComponent 
	}
]
export default RouterModule.forChild(homeRoutes);