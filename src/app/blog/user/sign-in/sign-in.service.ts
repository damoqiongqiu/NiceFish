import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { MessageService } from "primeng/api";
import { environment } from "../../../../environments/environment";

@Injectable()
export class SignInService {
  public isMock=environment.isMock;
  public signInURL = environment.dataURL.signInURL;
  public signOutURL=environment.dataURL.signOutURL;
  public getSessionUserURL=environment.dataURL.getSessionUserURL;
  public subject: Subject<any> = new Subject<any>();

  constructor(public httpClient: HttpClient,
    private messageService: MessageService) {
  }

  public get currentUser(): Observable<any> {
    return this.subject.asObservable();
  }

  public signIn(user:any) {
    if(this.isMock){
        return this.httpClient
        .get(this.signInURL)
        .subscribe(
          data => {
            console.log("login success>" + data);
            let user = data;
            console.log("user object>" + user);
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.subject.next(Object.assign({}, user));
          },
          error => {
            console.error(error);
          }
        );
    }

    //TODO:passowrd用MD5加密之后传输，服务端需要做一些对应的处理
    return this.httpClient
      .post(
        this.signInURL,
        //FIXME:fix this ugly code
        `userName=${user.userName}&password=${user.password}&validateCode=${user.captcha}&rememberMe=${user.rememberMe}`,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
          })
        }
      )
      .subscribe(
        (res:any)=> {
          console.log(res);
          if(res&&res.success) {
            let userEntity=res.data;
            console.log("signIn success>");
            console.log("user object>" + userEntity);
            this.messageService.add({ 
              severity: "success", 
              summary: "Success", 
              detail:"登录成功", 
              life: 3000 
            });
            this.subject.next(userEntity);
            window.localStorage.setItem("currentUser", JSON.stringify(userEntity));
          } else {
            this.subject.next(Object.assign({}));
            window.localStorage.removeItem("currentUser");
            this.messageService.add({ 
              severity: "error", 
              summary: "Fail Message", 
              detail:res.msg||"登录失败", 
              life: 3000 
            });
          }
        },
        error => {
          console.error(error);
          this.subject.next(Object.assign({}));
          this.messageService.add({ 
            severity: "error", 
            summary: "Fail Message", 
            detail:error||"登录失败", 
            life: 3000 
          });
          window.localStorage.removeItem("currentUser");
        }
      );
  }

  public signOut(): void {
    if(this.isMock){
      localStorage.removeItem("currentUser");
      this.messageService.add({ 
        severity: "success", 
        summary: "Success Message", 
        detail:"退出成功", 
        life: 3000
      });
      this.subject.next(Object.assign({}));
      return;
    }

    this.httpClient
    .get(this.signOutURL)
    .subscribe(
      (data:any) => {
        this.subject.next(Object.assign({}));
        window.localStorage.removeItem("currentUser");
        this.messageService.add({ 
          severity: "success", 
          summary: "Success Message", 
          detail:"退出成功", 
          life: 3000
        });
      },
      error => {
        console.error(error);
        this.messageService.add({ 
          severity: "error", 
          summary: "Error Message", 
          detail:"退出失败", 
          life: 3000
        });
      }
    );
  }

  public getSessionUser():void {
    this.httpClient
    .get(this.getSessionUserURL)
    .subscribe(
      (userEntity:any)=> {
        console.log(userEntity);
        if(userEntity&&userEntity.userId) {
          this.subject.next(userEntity);
          window.localStorage.setItem("currentUser", JSON.stringify(userEntity));
        } else {
          this.subject.next(Object.assign({}));
          window.localStorage.removeItem("currentUser");
        }
      },
      error=> {
        console.error(error);
      }
    );
  }
}
