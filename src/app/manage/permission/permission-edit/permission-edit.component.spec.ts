import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PermissionEditComponent } from "./permission-edit.component";
import { PaginatorModule } from "primeng/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";

describe("PermissionEditComponent", () => {
  let component: PermissionEditComponent;
  let fixture: ComponentFixture<PermissionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        PaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [ PermissionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
