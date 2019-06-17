import { HomeComponent } from "./home.component";

export const homeRoutes = [
    {
        path: "",
        component: HomeComponent,
        children: [{
            path: "",
            loadChildren: () => import("../post/post.module").then(m => m.PostModule)
        }]
    }
]
