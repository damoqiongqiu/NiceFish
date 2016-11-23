import { RouterModule } from '@angular/router';
import { UserLoginComponent} from './common/user-login/user-login.component';
import { UserRegisterComponent} from './common/user-register/user-register.component';
import { UserProfileComponent} from './common/user-profile/user-profile.component';
import { UserMainComponent} from './common/user-main/user-main.component';

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
		path:'profile',
		component:UserRegisterComponent
	},
	{
		path:'usermain',
		component:UserMainComponent
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'app/home/home.module'
	}
];
export default RouterModule.forRoot(appRoutes);