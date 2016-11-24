import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterComponent} from './user/user-register/user-register.component';
import { UserProfileComponent} from './user/user-profile/user-profile.component';
import { UserMainComponent} from './user/user-main/user-main.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { HomeComponent } from './home/home.component';
import { PostDetailMainComponent } from './post/post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { WritePostComponent } from './post/write-post/write-post.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { ManageMainComponent } from './manage/manage-main/manage-main.component';
import { UserTableComponent } from './manage/user-table/user-table.component';
import { PostTableComponent } from './manage/post-table/post-table.component';
import { CommentTableComponent } from './manage/comment-table/comment-table.component';
import { SysParamComponent } from './manage/sys-param/sys-param.component';

import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent,
    UserMainComponent,
    UserInfoComponent,
    PostlistComponent,
    HomeComponent,
    PostDetailMainComponent,
    PostDetailComponent,
    WritePostComponent,
    AddCommentComponent,
    SitestatComponent,
    ManageMainComponent,
    UserTableComponent,
    PostTableComponent,
    CommentTableComponent,
    SysParamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AlertModule,
    PaginationModule,
    appRoutes
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
