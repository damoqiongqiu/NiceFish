import { Component } from '@angular/core';
import { Panel } from "primeng/panel";
import { BlockService } from './block-service.service';

@Component({
  selector: 'block-spinner',
  templateUrl: './block-spinner.component.html',
  styleUrls: ['./block-spinner.component.scss']
})
export class BlockSpinnerComponent {
  public blockedPanel: boolean = false;
  public blockTarget:any=null;
  public blocked=false;

  constructor(
    private blockService : BlockService
  ){

  }

  ngOnInit(): void {
    this.blockService.currentBlockStatus.subscribe(
      data => {
        this.blocked=data.block;
      }
    );
  }
}
