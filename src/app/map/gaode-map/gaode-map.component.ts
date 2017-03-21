import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { AmapComponent } from './amap/amap.component';

@Component({
  selector: 'app-gaode-map',
  templateUrl: './gaode-map.component.html',
  styleUrls: ['./gaode-map.component.scss'],
  animations:[flyIn]
})
export class GaodeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
