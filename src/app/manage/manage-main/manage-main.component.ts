import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../shared/animations/fly-in";

@Component({
  selector: "manage-main",
  templateUrl: "./manage-main.component.html",
  styleUrls: ["./manage-main.component.scss"],
  animations: [
    flyIn
  ]
})
export class ManageMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
