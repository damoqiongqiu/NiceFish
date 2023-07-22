import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { filter, map, catchError } from "rxjs/operators";
import { BlockService } from "./block-spinner/block-service.service";
import { MessageService } from "primeng/api";
import { environment } from "../../environments/environment";

/**
 * Http 请求拦截器，进行一些全局通用的处理。
 * @author 大漠穷秋
 */
@Injectable()
export class NiceFishHttpInterceptor implements HttpInterceptor {
    constructor(
        private blockService: BlockService,
        public messageService: MessageService,
    ) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.blockService.block();

        /**
         * 在前后端分离的开发模式下，开发状态一般使用 mock 数据。
         * 由于 dev server 只能接受 GET 型请求，所以根据 eviroment.isMock 判断是否使用 mock 数据，
         * 如果是，直接替换成 GET 型请求。
         */
        if (environment.isMock) {
            this.messageService.add({
                severity: "warn",
                summary: "Warn",
                detail: "注意：当前为 Mock 模式，不会与服务端交互，某些请求会报错。所有输入项都可以随意输入，符合校验规则即可。如果需要与服务端交互，请重新启动到 backend 模式 ng serve --configuration development-backend",
                sticky: false,
                life: 10000
            });

            if (httpRequest.method !== "GET") {
                httpRequest = httpRequest.clone({
                    method: "GET",
                    url: httpRequest.url,
                });
            }
        }

        return next.handle(httpRequest).pipe(
            filter(event => event instanceof HttpResponse),
            map((event: HttpResponse<any>) => {
                this.blockService.unblock();
                return event.clone();
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                }
                console.error(errorMsg);
                this.blockService.unblock();
                this.messageService.add({
                    severity: "error",
                    summary: "HTTP ERROR",
                    detail: errorMsg,
                    sticky: false,
                    life: 5000
                });
                return throwError(errorMsg);
            })
        );
    }
}