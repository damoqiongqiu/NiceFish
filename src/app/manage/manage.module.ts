import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PostSharedModule } from '../shared/post.module';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { TagTableComponent } from './tag-table/tag-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';
import { PostTableService } from './post-table/services/post-table.service';

import {manageRoutes} from './manage.routes';

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    TagTableComponent,
    SysParamComponent
  ],
  imports: [
	  CommonModule,
    AccordionModule,
    PostSharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports:[
  	ManageMainComponent
  ],
  providers: [
    PostTableService
  ]
})
export class ManageModule { }