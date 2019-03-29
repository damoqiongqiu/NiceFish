import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { PostService } from "../post.service";
import { WritePostComponent } from "../write-post/write-post.component";

import { writePostRoutes } from "./write-post.routes";

@NgModule({
    imports: [
        SharedModule,
        CKEditorModule,
        RouterModule.forChild(writePostRoutes)
    ],
    declarations: [
        WritePostComponent
    ],
    providers: [
        PostService
    ]
})
export class WritePostModule { }
