import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { UserListComponent } from './user-list.component';
import { UserListService } from './service/userlist.service';

import { userListRoutes } from './user-list.routes';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(userListRoutes)
  ],
  exports: [
    
  ],
  providers: [
    UserListService
  ]
})
export class UserListModule { }