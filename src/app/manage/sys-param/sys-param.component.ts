import { Component, OnInit } from "@angular/core";
import { SysParamService } from "./sys-param.service";
import { fadeIn } from "../../shared/animations/fade-in";

@Component({
  selector: "sys-param",
  templateUrl: "./sys-param.component.html",
  styleUrls: ["./sys-param.component.scss"],
  animations: [
    fadeIn
  ]
})
export class SysParamComponent implements OnInit {
  //TODO:把表单改成动态形式，这里非常适合使用动态表单
  public param:any={};

  constructor(private sysParamService:SysParamService) { }

  ngOnInit() {
    this.sysParamService.getAllParam().subscribe(
      data=> {
        this.param=data;
      },
      error=> {
        console.log("获取系统配置参数失败...");
      }
    );
  }

  public saveSysParams():void{
    
  }

  public cancel(): void {
    window.history.back();
  }
}
