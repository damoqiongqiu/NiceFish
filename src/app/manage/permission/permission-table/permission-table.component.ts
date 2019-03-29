import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";

@Component({
  selector: "permission-table",
  templateUrl: "./permission-table.component.html",
  styleUrls: ["./permission-table.component.scss"],
  animations: [
    flyIn
  ]
})
export class PermissionTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
