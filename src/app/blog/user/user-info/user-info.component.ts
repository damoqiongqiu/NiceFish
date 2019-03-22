import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  @Input()
  public panelTitle: string;

  @Input()
  public userId: string;

  @Output()
  public follow = new EventEmitter<string>();

  public currentUser: any;
  public userInfoURL = "user/getUserInfo";

  constructor(public httpClient: HttpClient) {
    // 构造组件的时候，@Input的属性还没有值
    console.log(this.panelTitle);
  }

  ngOnInit() {
    // 组件初始化完成之后，panelTitle才会有值
    console.log(this.panelTitle);
  }

  public loadUserInfo() {
    this.userInfoURL = this.userInfoURL + "/" + this.userId;
    return this.httpClient
      .get(this.userInfoURL)
      .subscribe(
        data => {
          console.log("用户信息>" + data);
        },
        error => {
          console.error(error);
        }
      );
  }

  public followBtnClick() {
    this.follow.emit("follow");
  }
}
