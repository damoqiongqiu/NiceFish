import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaodeMapComponent } from './gaode-map.component';

describe('GaodeMapComponent', () => {
  let component: GaodeMapComponent;
  let fixture: ComponentFixture<GaodeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaodeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaodeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
