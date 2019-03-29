import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "role-edit",
  templateUrl: "./role-edit.component.html",
  styleUrls: ["./role-edit.component.scss"],
  animations: [flyIn, fadeIn]
})
export class RoleEditComponent implements OnInit {
  public role: any = {};
  public error: Error;
  public srcList: any[] = [
    {
      permissionId: "1",
      permissionName: "发表文章"
    },
    {
      permissionId: "2",
      permissionName: "删除文章"
    },
    {
      permissionId: "4",
      permissionName: "创建用户"
    },
    {
      permissionId: "5",
      permissionName: "删除用户"
    }
  ];
  public selectedList: any[] = [
    {
      permissionId: "3",
      permissionName: "阅读文章"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
    window.history.back();
  }
}
