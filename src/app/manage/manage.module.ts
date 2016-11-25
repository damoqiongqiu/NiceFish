import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';

import manageRoutes from './manage.routes';

@NgModule({
  declarations: [
    ManageMainComponent,
    CommentTableComponent,
    PostTableComponent,
    UserTableComponent,
    SysParamComponent
  ],
  imports: [
	  CommonModule,
    PaginationModule,
    AlertModule,
    AccordionModule,
    manageRoutes
  ],
  exports:[
  	ManageMainComponent
  ],
  providers: []//providers registed here can be used in the whole application
})
export default class ManageModule { }