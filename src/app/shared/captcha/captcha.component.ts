import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";
import * as _ from 'lodash';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent {
  public capchaURL = environment.dataURL.capchaURL;

  constructor() { }

  ngOnInit() {
    this.refreshCaptchaURL();
  }

  public refreshCaptchaURL(): string {
    this.capchaURL = `${this.capchaURL}&kill_cache=${new Date().getTime()}`;
    return this.capchaURL;
  }
}
