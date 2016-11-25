import { Component, OnInit} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-sys-param',
  templateUrl: './sys-param.component.html',
  styleUrls: ['./sys-param.component.scss'],
  animations: [
    flyIn
  ]
})
export class SysParamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
