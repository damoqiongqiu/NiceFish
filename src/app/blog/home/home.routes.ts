import { HomeComponent } from "./home.component";

export const homeRoutes = [
    {
        path: "",
        component: HomeComponent,
        children: [{
            path: "",
            loadChildren: "../post/post.module#PostModule"
        }]
    }
]
