import { Component, OnInit } from '@angular/core';

import { ForgetPwdService } from './forget-pwd.service';
import { User } from '../model/user-model';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss']
})
export class ForgetPwdComponent implements OnInit {
	public user: User = new User();
	public message: string;
	public messgeType: string;
	constructor(
		public forgetPwdService: ForgetPwdService
	) { }

	ngOnInit() {

	}

	public sendValidationEmail():void{
		this.forgetPwdService.sendValidationEmail(this.user.email)
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
