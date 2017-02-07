import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent }   from './home.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from '../sitestat/sitestat.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';

import {homeRoutes} from './home.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterTestingModule.withRoutes(homeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        SocialChannelComponent,
        SitestatComponent,
        OnlineContactComponent
    ],
    providers: [],
})
export class HomeModule { }
