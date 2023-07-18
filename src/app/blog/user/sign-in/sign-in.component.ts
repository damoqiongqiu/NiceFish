import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { SignInService } from "./sign-in.service";
import { CaptchaService } from "src/app/shared/captcha.service";
import { environment } from "../../../../environments/environment";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  animations: [fadeIn]
})
export class SignInComponent implements OnInit {
  public isMock = environment.isMock;
  public error: Error;
  public signInInfo: any = {
    userName: "",
    password: "",
    captcha: "",
    rememberMe: true
  };

  constructor(
    public router: Router,
    public signInService: SignInService,
    public captchaService: CaptchaService
  ) { }

  ngOnInit() {
  }

  public doSignIn(): void {
    console.log(this.signInInfo);
    this.signInService.signIn(this.signInInfo);
  }

  public doSignOut(): void {
    if (!this.isMock) {
      this.signInService.signOut();
    }
    this.router.navigateByUrl("home");
  }

  public retrievePwd(): void {
    this.router.navigateByUrl("retrievepwd");
  }
}
