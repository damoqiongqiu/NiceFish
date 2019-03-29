import { Component, ElementRef, Renderer } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { SignInService } from "./blog/user/sign-in/sign-in.service";
import { SignUpService } from "./blog/user/sign-up/sign-up.service";
import { merge } from "rxjs"
import { MessageService } from "primeng/api";

@Component({
	selector: "root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	public showToggleMenu = false;
	public currentUser: any;
	private globalClickCallbackFn: Function;

	constructor(
		public elementRef: ElementRef,
		public renderer: Renderer,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		public signInService: SignInService,
		public signUpService: SignUpService,
		private messageService: MessageService
	) {

	}

	ngOnInit() {
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, "click", (event: any) => {
			console.log("全局监听点击事件>" + event);
		});

		this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

		merge(this.signInService.currentUser, this.signUpService.currentUser)
			.subscribe(
				data => {
					this.currentUser = data;
					let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
					let routerState: RouterState = this.router.routerState;
					let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

					console.log(activatedRouteSnapshot);
					console.log(routerState);
					console.log(routerStateSnapshot);

					// 如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
					if (routerStateSnapshot.url.indexOf("/login") != -1) {
						this.router.navigateByUrl("/home");
					}
				},
				error => console.error(error)
			);

		// ngx-translate国际化服务相关的配置
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang("zh");
		const browserLang = this.translate.getBrowserLang();
		console.log("获取到浏览器的语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : "zh");
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}

	onMenuToggle() {
		this.showToggleMenu = !this.showToggleMenu;
	}

	public doLogout(): void {
		this.showToggleMenu = false;
		this.signInService.logout();
		this.messageService.add({ severity: "success", summary: "Success Message", detail: "退出成功", life: 500 });
		this.router.navigateByUrl("");
	}
}
