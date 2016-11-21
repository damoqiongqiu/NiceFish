import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserTypeComponent } from '../user/user-type/user-type.component';

import userRoutes from './user.routes.ts';

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    UserListComponent,
    UserTypeComponent
  ],
  imports: [
	  CommonModule,
    PaginationModule,
    AlertModule,
    AccordionModule,
    userRoutes
  ],
  exports:[
  	UserComponent
  ],
  providers: []//providers registed here can be used in the whole application
})
export default class UserModule { }