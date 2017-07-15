import { NgModule } from '@angular/core';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { SharedModule } from './shared.module';

import { CommentTableComponent } from '../manage/comment-table/comment-table.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

@NgModule({
  imports:[ 
    SharedModule,
    DataTableModule,
    CalendarModule
  ],
  declarations:[ 
  	CommentTableComponent, 
  	PostTableComponent
  ],
  exports:[
  	CommentTableComponent, 
  	PostTableComponent
  ]
})

export class PostSharedModule {
  
}