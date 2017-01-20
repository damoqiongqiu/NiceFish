import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { PaginationModule } from 'ng2-bootstrap';


import { SharedModule } from './shared.module';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

@NgModule({
  imports:[ 
  	CommonModule,
  	FormsModule,
	SharedModule,
  	PaginationModule.forRoot()
  ],
  declarations:[ 
  	CommentTableComponent, 
  	PostTableComponent
  ],
  exports:[ 
  	CommonModule,
  	FormsModule,
  	PaginationModule,
  	CommentTableComponent, 
  	PostTableComponent 
  ]
})

export class PostSharedModule {
  
}