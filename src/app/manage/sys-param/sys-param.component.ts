import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../shared/animations/fly-in";

@Component({
  selector: "sys-param",
  templateUrl: "./sys-param.component.html",
  styleUrls: ["./sys-param.component.scss"],
  animations: [
    flyIn
  ]
})
export class SysParamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
    window.history.back();
  }
}
