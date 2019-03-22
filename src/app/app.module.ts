import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './blog/user/user-login/user-login.service';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { UserRegisterComponent } from './blog/user/user-register/user-register.component';
import { UserRegisterService } from './blog/user/user-register/user-register.service';
import { RetrievePwdService } from './blog/user/retrieve-pwd/retrieve-pwd.service';
import { EqualValidator } from './blog/user/user-register/directives/equal-validator.directive';
import { appRoutes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RetrievePwdComponent,
    UserRegisterComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'NiceFish' }),
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    ToastModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TranslateService,
    TranslateStore,
    UserLoginService,
    UserRegisterService,
    RetrievePwdService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
