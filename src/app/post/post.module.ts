import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/services/postlist.service';
import { PostDetailService } from './post-detail/services/post-detail.service';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { AddCommentComponent } from '../comment/add-comment/add-comment.component';

import postRoutes from './post.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginationModule,
        postRoutes
    ],
    exports: [],
    declarations: [
        PostlistComponent,
        PostDetailMainComponent,
        PostDetailComponent,
        AddCommentComponent
    ],
    providers: [
        PostlistService,
        PostDetailService
    ],
})
export default class PostModule { }
