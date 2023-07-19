import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../shared/animations/fly-in";
import { UserMngService } from "../permission/user-mng.service";

@Component({
  selector: "manage-main",
  templateUrl: "./manage-main.component.html",
  styleUrls: ["./manage-main.component.scss"],
  animations: [
    flyIn
  ]
})
export class ManageMainComponent implements OnInit {
  //当前登录的用户
  public currentUser: any = {};
  public menuList: any[] = [];

  constructor(
    private userMngService: UserMngService,
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.getMenuByUser();
  }

  /**
   * 加载当前用户的菜单。
   * 管理后台右侧的一部分菜单是受权限保护的，这些菜单定义在数据库中，需要通过后台接口获取。
   */
  private getMenuByUser() {
    this.userMngService.getMenuByUser(this.currentUser.userId)
      .subscribe(
        response => {
          console.log(response);
          if (response.success && response.data) {
            this.menuList = response.data;
          }
        },
        error => console.error(error)
      );
  }
}
