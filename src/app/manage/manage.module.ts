import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AccordionModule } from 'ng2-bootstrap';

import { SharedModule} from '../shared/shared.module';
import { PostSharedModule } from '../shared/post.module';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';

import { PostTableService } from './post-table/services/post-table.service';
import { AuthGuard } from './auth-guard';

import { manageRoutes } from './manage.routes';

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent
  ],
  imports: [
	  CommonModule,
    AccordionModule,
    SharedModule,
    PostSharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports:[
  	ManageMainComponent
  ],
  providers: [
    PostTableService,
    AuthGuard
  ]
})
export class ManageModule { }