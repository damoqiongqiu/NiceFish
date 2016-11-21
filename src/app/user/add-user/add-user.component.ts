import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListService } from '../service/user-list.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers:[UserListService]
})
export class AddUserComponent implements OnInit {
	  public userName:String;
	  public nickName:String;
	  public alerts:Array<Object> = [];

  	constructor(private router: Router,private route: ActivatedRoute,private userListService:UserListService) {

    }

  	ngOnInit() {
  	}

  	public submitForm(f){
  		if(f.form.valid){
  			console.log(f.form.value);
        let newUser=f.form.value;
        
        newUser.userId=this.userListService.getUserNumber()+1;
        this.userListService.addUser(newUser);

  			this.alerts.push({msg: 'Add User Success!', type: 'success', dismissOnTimeout:1000});
        let routerInstance=this.router;
        setTimeout(function(){
          routerInstance.navigateByUrl("/user");
        },1000);
      }else{
  			this.alerts.push({msg: 'Please check the input...', type: 'danger', dismissOnTimeout:1000});
  		}
  	}

  	public addUser(){

  	}
}