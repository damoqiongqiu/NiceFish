import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoleEditComponent } from "./role-edit.component";

describe("RoleEditComponent", () => {
  let component: RoleEditComponent;
  let fixture: ComponentFixture<RoleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
