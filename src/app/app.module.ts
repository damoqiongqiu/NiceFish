import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserRegisterService } from './user/user-register/user-register.service';
import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service';

import { EqualValidator } from './user/user-register/directives/equal-validator.directive';
import {appRoutes} from './app.routes';

import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ForgetPwdComponent,
    UserRegisterComponent,
    EqualValidator,
    EChartOptionDirective1,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserLoginService,
    UserRegisterService,
    ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
