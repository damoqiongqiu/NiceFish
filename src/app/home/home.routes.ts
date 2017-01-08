import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes=[
	{
        path:'',
        component:HomeComponent,
        children:[{
            path:'',
            loadChildren:'app/post/post.module'
        }]
    }
];
export default RouterModule.forChild(homeRoutes);