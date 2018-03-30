import { Component, OnInit } from '@angular/core';
import { UserListService } from './service/userlist.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList:any[];

  constructor(
    public userListService:UserListService
  ) { }

  ngOnInit() {
    this.userListService.getUserList().subscribe((data)=>{
      console.log(data);
      this.userList=data.items;
    });
  }
}
