import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import {PaginatorModule} from 'primeng/components/paginator/paginator';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/services/postlist.service';
import { PostDetailService } from './post-detail/services/post-detail.service';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { AddCommentComponent } from '../comment/add-comment/add-comment.component';
import { CommentService } from '../comment/services/comment.service';
import { BooleanPipe } from '../utils/boolean-pipe';

import {postRoutes} from './post.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginatorModule,
        RouterModule.forChild(postRoutes)
    ],
    exports: [BooleanPipe],
    declarations: [
        PostlistComponent,
        PostDetailMainComponent,
        PostDetailComponent,
        AddCommentComponent,
        BooleanPipe
    ],
    providers: [
        PostlistService,
        PostDetailService,
        CommentService
    ]
})
export class PostModule { }
