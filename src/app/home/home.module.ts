import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeComponent } from './home.component';
import { PostlistComponent } from '../common/postlist/postlist.component';
import { PostDetailMainComponent } from '../common/post-detail-main/post-detail-main.component';
import { PostDetailComponent } from '../common/post-detail/post-detail.component';
import { AddCommentComponent } from '../common/add-comment/add-comment.component';
import { UserInfoComponent } from '../common/user-info/user-info.component';
import { SitestatComponent } from '../sitestat/sitestat.component';
import homeRoutes from './home.routes';

@NgModule({
	declarations: [
		HomeComponent,
		PostlistComponent,
		PostDetailMainComponent,
		PostDetailComponent,
		AddCommentComponent,
		UserInfoComponent,
		SitestatComponent
  	],
  	imports: [
	  	CommonModule,
	  	PaginationModule,
  		homeRoutes
  	],
  	providers: []
})
export default class HomeModule { }