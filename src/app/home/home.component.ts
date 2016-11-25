import { Component, OnInit} from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    flyIn
  ]
})
export class HomeComponent implements OnInit {
  	constructor() { 
    }
  	ngOnInit() {
  	}
}
