import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PermissionTableComponent } from "./permission-table.component";
import { PaginatorModule } from "primeng/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

describe("PermissionTableComponent", () => {
  let component: PermissionTableComponent;
  let fixture: ComponentFixture<PermissionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        PaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [ PermissionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
