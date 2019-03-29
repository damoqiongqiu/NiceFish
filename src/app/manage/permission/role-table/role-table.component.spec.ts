import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoleTableComponent } from "./role-table.component";

describe("RoleTableComponent", () => {
  let component: RoleTableComponent;
  let fixture: ComponentFixture<RoleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
