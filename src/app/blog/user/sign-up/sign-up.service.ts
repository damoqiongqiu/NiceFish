import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class SignUpService {
    public signUpURL = "mock-data/user-register-mock.json";
    public testEmailURL = "";
    public subject: Subject<any> = new Subject<any>();

    constructor(public httpClient: HttpClient) {
    }

    public get currentUser(): Observable<any> {
        return this.subject.asObservable();
    }

    public register() {
        return this.httpClient
            .get(this.signUpURL)
            .subscribe(
                data => {
                    console.log("用户信息>" + data);
                    let user = data;
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    this.subject.next(user);
                },
                error => {
                    console.error(error);
                }
            );
    }

    public testEmail(): Observable<any> {
        return this.httpClient.get(this.testEmailURL);
    }
}
