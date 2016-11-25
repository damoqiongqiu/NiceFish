import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { WritePostComponent } from '../post/write-post/write-post.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import userRoutes from './user.routes';

@NgModule({
  declarations: [
    UserMainComponent,
    UserProfileComponent,
    WritePostComponent
  ],
  imports: [
	  CommonModule,
    PaginationModule,
    AlertModule,
    AccordionModule,
    SharedModule,
    userRoutes
  ],
  exports:[
  	UserMainComponent
  ],
  providers: []
})
export default class UserModule { }