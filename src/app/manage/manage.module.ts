import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PostSharedModule } from '../shared/post.module';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';

import manageRoutes from './manage.routes';

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent
  ],
  imports: [
	  CommonModule,
    AccordionModule,
    PostSharedModule,
    manageRoutes
  ],
  exports:[
  	ManageMainComponent
  ],
  providers: []//providers registed here can be used in the whole application
})
export default class ManageModule { }