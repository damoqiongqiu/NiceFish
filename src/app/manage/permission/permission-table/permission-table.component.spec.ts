import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionTableComponent } from './permission-table.component';

describe('PermissionTableComponent', () => {
  let component: PermissionTableComponent;
  let fixture: ComponentFixture<PermissionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
