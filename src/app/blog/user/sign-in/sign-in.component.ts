import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { SignInService } from "./sign-in.service";
import { fadeIn } from "../../../shared/animations/fade-in";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  animations: [fadeIn]
})
export class SignInComponent implements OnInit {
  public isMock=environment.isMock;
  public capchaURL = environment.dataURL.capchaURL;//FIXME:验证码相关的代码需要整合到一个公共服务中去，避免相似的代码散落在各处。
  
  public captcha: any = "";
  public error: Error;
  public user: any = {
    userName:"",
    password:"",
    captcha:"",
    rememberMe:true
  };

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public signInService: SignInService
  ) {}

  ngOnInit() {
    console.log("--- sign-in-component ---");
    console.log(this.router);
    console.log(this.activatedRoute);

    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doSignIn(): void {
    console.log(this.user);
    this.signInService.signIn(this.user);
  }

  public doSignOut(): void {
    if(!this.isMock){
      this.signInService.signOut();
    }
    this.router.navigateByUrl("home");
  }

  public retrievePwd(): void {
    this.router.navigateByUrl("retrievepwd");
  }

  public refreshCaptcha(): void {
    this.capchaURL = `${this.capchaURL}&kill_cache=${new Date().getTime()}`;
  }
}
