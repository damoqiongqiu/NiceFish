import { RouterModule } from '@angular/router';
import { UserLoginComponent} from './common/user-login/user-login.component';
import { UserRegisterComponent} from './common/user-register/user-register.component';

const appRoutes=[
	{
		path:'',
		loadChildren:'app/home/home.module'
	},
	{
		path:'home',
		loadChildren:'app/home/home.module'
	},
	{
		path:'login',
		component:UserLoginComponent
	},
	{
		path:'register',
		component:UserRegisterComponent
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'app/home/home.module'
	}
];
export default RouterModule.forRoot(appRoutes);