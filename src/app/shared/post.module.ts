import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';


import { SharedModule } from './shared.module';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

@NgModule({
  imports:[ 
  	CommonModule,
  	FormsModule,
    SharedModule,
    ModalModule.forRoot(),
  	PaginationModule.forRoot()
  ],
  declarations:[ 
  	CommentTableComponent, 
  	PostTableComponent
  ],
  exports:[ 
  	CommonModule,
  	FormsModule,
    ModalModule,
  	PaginationModule,
  	CommentTableComponent, 
  	PostTableComponent 
  ]
})

export class PostSharedModule {
  
}