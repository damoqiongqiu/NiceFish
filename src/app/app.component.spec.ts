/* tslint:disable:no-unused-variable */
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignInService } from "./blog/user/sign-in/sign-in.service";
import { SignUpService } from "./blog/user/sign-up/sign-up.service";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { PaginatorModule } from "primeng/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

describe("App: Angular2BootstrapSass", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SharedModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ToastModule,
                PaginatorModule,
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [
                {
                    provide:SignInService,
                    useValue:{}
                },
                {
                    provide:SignUpService,
                    useValue:{}
                },
                {
                    provide:MessageService,
                    useValue:{}
                }
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
