import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-manage-main',
  templateUrl: './manage-main.component.html',
  styleUrls: ['./manage-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class ManageMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
