import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPermissionEditComponent } from './component-permission-edit.component';

describe('ComponentPermissionEditComponent', () => {
  let component: ComponentPermissionEditComponent;
  let fixture: ComponentFixture<ComponentPermissionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPermissionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPermissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
