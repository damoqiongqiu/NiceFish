import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "permission-edit",
  templateUrl: "./permission-edit.component.html",
  styleUrls: ["./permission-edit.component.scss"],
  animations: [flyIn, fadeIn]
})
export class PermissionEditComponent implements OnInit {
  public permission: any = {};
  public error: Error;

  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
    window.history.back();
  }
}
