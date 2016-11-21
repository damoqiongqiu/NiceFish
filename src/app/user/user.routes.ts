import {RouterModule} from "@angular/router";
import {UserComponent} from "./user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AddUserComponent} from "./add-user/add-user.component";

const userRoutes = [
  	{
		path:'',
		component:UserComponent,
	    children: [
	    	{ path: '', component: UserListComponent },
	    	{ path: 'team/:id', component: UserListComponent }
	    ]
	},
	{
		path:'adduser',
		component:AddUserComponent
	}
];
export default RouterModule.forChild(userRoutes);