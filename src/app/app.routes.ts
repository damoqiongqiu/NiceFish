import { RouterModule } from '@angular/router';

const appRoutes=[
	{
		path:'',
		loadChildren:'app/home/home.module'
	},{
		path:'home',
		loadChildren:'app/home/home.module'
	},{
		path:'user',
		loadChildren:'app/user/user.module'
	},{
		path:'role',
		loadChildren:'app/role/role.module'
	},{
		path:'**',//fallback router must in the last
		loadChildren:'app/home/home.module'
	}
];
export default RouterModule.forRoot(appRoutes);