import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/components/alert';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './common/user-login/user-login.component';
import { UserLoginService } from './common/user-login/user-login.service';
import { UserRegisterComponent} from './common/user-register/user-register.component';
import { UserProfileComponent} from './common/user-profile/user-profile.component';

import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AlertModule,
    appRoutes
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
