import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
