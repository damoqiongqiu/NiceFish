import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";

@Component({
  selector: "role-table",
  templateUrl: "./role-table.component.html",
  styleUrls: ["./role-table.component.scss"],
  animations: [
    flyIn
  ]
})
export class RoleTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
