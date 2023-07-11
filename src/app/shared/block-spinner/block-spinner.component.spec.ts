import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSpinnerComponent } from './block-spinner.component';

describe('BlockSpinnerComponent', () => {
  let component: BlockSpinnerComponent;
  let fixture: ComponentFixture<BlockSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
