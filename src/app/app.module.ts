import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService, TranslateStore } from '@ngx-translate/core';

import { GrowlModule } from 'primeng/components/growl/growl';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { RetrievePwdComponent } from './user/retrieve-pwd/retrieve-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserRegisterService } from './user/user-register/user-register.service';
import { RetrievePwdService } from './user/retrieve-pwd/retrieve-pwd.service';

import { EqualValidator } from './user/user-register/directives/equal-validator.directive';

import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';
import { appRoutes } from './app.routes';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RetrievePwdComponent,
    UserRegisterComponent,
    EqualValidator,
    EChartOptionDirective1,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    GrowlModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TranslateService,
    TranslateStore,
    UserLoginService,
    UserRegisterService,
    RetrievePwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
