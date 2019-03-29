import { Component, OnInit } from "@angular/core";
import { RetrievePwdService } from "./retrieve-pwd.service";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
	selector: "retrieve-pwd",
	templateUrl: "./retrieve-pwd.component.html",
	styleUrls: ["./retrieve-pwd.component.scss"],
	animations: [fadeIn]
})
export class RetrievePwdComponent implements OnInit {
	public user: any = {};
	public message: string;
	public messgeType: string;
	constructor(
		public retrievePwdService: RetrievePwdService
	) { }

	ngOnInit() {

	}

	public sendValidationEmail(): void {
		this.retrievePwdService.sendValidationEmail(this.user.email)
			.subscribe(
				data => {
					this.message = data.message;
					this.messgeType = "success";
				},
				error => {
					this.message = error.messge;
					this.messgeType = "danger";
				}
			);
	}

}
