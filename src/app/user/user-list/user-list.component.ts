import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService } from '../service/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit {
	public totalItems:number = 64;
	public currentPage:number = 4;
	 
	public maxSize:number = 5;
	public bigTotalItems:number = 175;
	public bigCurrentPage:number = 1;
	public users:any;

	public teamId: any;
  	private paramsSub: any;

	constructor(private activatedRoute: ActivatedRoute,private userListService: UserListService) {
		this.users=this.userListService.getUserList();
		//There are 5 Observable properties in ActivatedRoute.
		activatedRoute.url.subscribe(url=>{
			console.log("url",url);
		});
		activatedRoute.params.subscribe(params=>{
			console.log("params",params);
		});
		activatedRoute.data.subscribe(data=>{
			console.log("data",data);
		});
		activatedRoute.queryParams.subscribe(queryParams=>{
			console.log("queryParams",queryParams);
		});
		activatedRoute.fragment.subscribe(fragment=>{
			console.log("fragment",fragment);
		});
	}

	ngOnInit() {
  		this.paramsSub=this.activatedRoute.params.subscribe(this.refreshData);
  	}
  
	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}

	private refreshData(params){
		//TODO:There is a problem here,this.teamId can not bind to template,why?
		this.teamId = parseInt(params['id'], 10);
		console.log("Current team id is>"+this.teamId+",loading data...");
	}

	public setPage(pageNo:number):void {
		this.currentPage = pageNo;
	};
	 
	public pageChanged(event:any):void {
		console.log(event);
	};

	//Search user
	public searchUser(input){
	  console.log(input.value);
	}

    public resetSearch(input){
      input.value="";
    }

    public delUser(userId){
      console.log(userId);
      let resultIndex=-1;
      for(let i=0;i<this.users.length;i++){
        let user=this.users[i];
        if(user&&user.userId==userId){
          resultIndex=i;
          break;
        }
      }
      if(resultIndex!=-1){
        this.users.splice(resultIndex,1);
      }
    }

    public userDetail(userId){
      console.log(userId);
    }
}
