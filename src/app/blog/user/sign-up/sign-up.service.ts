import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable()
export class SignUpService {
    public signUpURL = environment.dataURL.signUpURL;
    public testEmailURL = environment.dataURL.testEmailURL;
    
    public subject: Subject<any> = new Subject<any>();

    constructor(public httpClient: HttpClient) {
    }

    public get currentUser(): Observable<any> {
        return this.subject.asObservable();
    }

    public signup(user) {
        //TODO:user.password用MD5加密后传输
        return this.httpClient.post(
            this.signUpURL,
            {
                userName:user.email,
                nickName:user.nickName,
                password:user.password,
                email:user.email,
                captcha:user.captcha
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public testEmail(): Observable<any> {
        return this.httpClient.get(this.testEmailURL);
    }
}
