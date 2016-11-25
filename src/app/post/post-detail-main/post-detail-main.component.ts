import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { UserInfoComponent } from '../../user/user-info/user-info.component';

@Component({
  selector: 'app-post-detail-main',
  templateUrl: './post-detail-main.component.html',
  styleUrls: ['./post-detail-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostDetailMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}