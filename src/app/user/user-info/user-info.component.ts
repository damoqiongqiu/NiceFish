import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
	  @Input()
    public panelTitle:string;

    @Output()
    public follow = new EventEmitter<string>();

  	public currentUser: User;

  	constructor() { 
    	this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      //构造组件的时候，@Input的属性还没有值
      console.log(this.panelTitle);
    }

    ngOnInit() {
      //组件初始化完成之后，panelTitle才会有值
      console.log(this.panelTitle);
  	}

    public followBtnClick(){
        this.follow.emit("follow");
    }
}
