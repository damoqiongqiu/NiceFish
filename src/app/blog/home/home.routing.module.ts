import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";

export const homeRoutes:Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [{
            path: "",
            loadChildren: () => import("../post/post.module").then(m => m.PostModule)
        }]
    }
]

@NgModule({
	imports: [RouterModule.forChild(homeRoutes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
