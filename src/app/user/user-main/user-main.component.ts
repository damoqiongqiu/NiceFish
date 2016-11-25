import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
