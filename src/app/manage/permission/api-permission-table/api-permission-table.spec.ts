import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApiPermissionTableComponent } from "./api-permission-table.component";

describe("ApiPermissionTableComponent", () => {
  let component: ApiPermissionTableComponent;
  let fixture: ComponentFixture<ApiPermissionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPermissionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPermissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
