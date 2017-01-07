import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent }   from './home.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from '../sitestat/sitestat.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';

import homeRoutes from './home.routes';

@NgModule({
    imports: [
        SharedModule,
        homeRoutes
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
export default class HomeModule { }
