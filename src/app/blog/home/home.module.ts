import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./home.component";
import { OnlineContactComponent } from "./online-contact/online-contact.component";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        OnlineContactComponent
    ],
    providers: [],
})
export class HomeModule { }
