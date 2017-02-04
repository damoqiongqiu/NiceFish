import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PostSharedModule } from '../shared/post.module';

import { AlertModule, AccordionModule } from 'ng2-bootstrap';

import { WritePostComponent } from '../post/write-post/write-post.component';
import { UserMainComponent } from './user-main/user-main.component';

import { PostTableService } from '../manage/post-table/services/post-table.service';

import { userRoutes } from './user.routes';

@NgModule({
  declarations: [
    UserMainComponent,
    WritePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule,
    AccordionModule,
    SharedModule,
    PostSharedModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    UserMainComponent
  ],
  providers: [
    PostTableService
  ]
})
export class UserModule { }