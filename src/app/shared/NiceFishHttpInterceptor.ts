import { Injectable } from "@angular/core";
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable,throwError } from "rxjs";
import { filter,map,catchError} from "rxjs/operators";
import { BlockService } from "./block-spinner/block-service.service";

/**
 * Http 请求拦截器，进行一些全局通用的处理。
 * @author 大漠穷秋
 */
@Injectable()
export class NiceFishHttpInterceptor implements HttpInterceptor {
    constructor(
        private blockService: BlockService,
    ){}

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.blockService.block();
        return next.handle(httpRequest).pipe(
            filter(event => event instanceof HttpResponse),
            map((event: HttpResponse<any>) => {
                this.blockService.unblock();
                return event.clone(); 
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                console.error('This is client side error');
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                }
                console.error(errorMsg);
                this.blockService.unblock();
                return throwError(errorMsg);
            })
        );
    }
}