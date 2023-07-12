import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService, TranslateStore } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from "primeng/api";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { SignInService } from "./blog/user/sign-in/sign-in.service";
import { RetrievePwdComponent } from "./blog/user/retrieve-pwd/retrieve-pwd.component";
import { SignUpComponent } from "./blog/user/sign-up/sign-up.component";
import { SignUpService } from "./blog/user/sign-up/sign-up.service";
import { RetrievePwdService } from "./blog/user/retrieve-pwd/retrieve-pwd.service";
import { EqualValidator } from "./blog/user/sign-up/equal-validator.directive";
import { AppRoutingModule } from './app.routing.module';
import { ConfirmationService } from "primeng/api";
import { AuthGuard } from "./shared/auth-guard";
import { BlockService } from "./shared/block-spinner/block-service.service";
import { NiceFishHttpInterceptor } from "./shared/NiceFishHttpInterceptor";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RetrievePwdComponent,
    SignUpComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "NiceFish" }),
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
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
    ConfirmDialogModule,
  ],
  providers: [
    TranslateService,
    TranslateStore,
    SignInService,
    SignUpService,
    RetrievePwdService,
    MessageService,
    ConfirmationService,
    BlockService,
    { provide: HTTP_INTERCEPTORS, useClass: NiceFishHttpInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
