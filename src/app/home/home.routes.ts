import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

const homeRoutes= [
  {path: '', component: HomeComponent}
];

export default RouterModule.forChild(homeRoutes);