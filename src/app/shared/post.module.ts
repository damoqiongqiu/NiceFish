import { NgModule } from "@angular/core";
import {TableModule} from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { SharedModule } from "./shared.module";
import { CommentTableComponent } from "../manage/content-mng/comment-table/comment-table.component";
import { PostTableComponent } from "../manage/content-mng/post-table/post-table.component";

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    CalendarModule
  ],
  declarations: [
    CommentTableComponent,
    PostTableComponent
  ],
  exports: [
    CommentTableComponent,
    PostTableComponent
  ]
})

export class PostSharedModule {

}
