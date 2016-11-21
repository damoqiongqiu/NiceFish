import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HomeComponent } from './home.component';
import { PostlistComponent } from '../common/postlist/postlist.component';
import { PostdetailComponent } from '../common/postdetail/postdetail.component';
import { SitestatComponent } from '../sitestat/sitestat.component';
import homeRoutes from './home.routes';

@NgModule({
	declarations: [
		HomeComponent,
		PostlistComponent,
		PostdetailComponent,
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