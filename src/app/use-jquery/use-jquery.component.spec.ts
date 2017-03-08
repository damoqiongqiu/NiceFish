import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseJqueryComponent } from './use-jquery.component';

describe('UseJqueryComponent', () => {
  let component: UseJqueryComponent;
  let fixture: ComponentFixture<UseJqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseJqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
