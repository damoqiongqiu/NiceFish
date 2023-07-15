import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPermissionTableComponent } from './component-permission-table.component';

describe('ComponentPermissionTableComponent', () => {
  let component: ComponentPermissionTableComponent;
  let fixture: ComponentFixture<ComponentPermissionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentPermissionTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComponentPermissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
