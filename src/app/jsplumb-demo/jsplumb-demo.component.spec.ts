import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsplumbDemoComponent } from './jsplumb-demo.component';

describe('JsplumbDemoComponent', () => {
  let component: JsplumbDemoComponent;
  let fixture: ComponentFixture<JsplumbDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsplumbDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsplumbDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
