import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { PaginatorModule } from 'primeng/paginator';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './post.service';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { CommentListComponent } from '../comment-list/comment-list.component';

import { CommentListService } from '../comment-list/comment-list.service';
import { BooleanPipe } from '../../shared/boolean-pipe';

import { postRoutes } from './post.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginatorModule,
        CKEditorModule,
        RouterModule.forChild(postRoutes)
    ],
    exports: [BooleanPipe],
    declarations: [
        PostlistComponent,
        PostDetailMainComponent,
        PostDetailComponent,
        CommentListComponent,
        BooleanPipe
    ],
    providers: [
        PostService,
        CommentListService
    ]
})
export class PostModule { }
