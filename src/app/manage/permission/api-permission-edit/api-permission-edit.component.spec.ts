import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiPermissionEditComponent } from "./api-permission-edit.component";
import { PaginatorModule } from "primeng/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";

describe("ApiPermissionEditComponent", () => {
  let component: ApiPermissionEditComponent;
  let fixture: ComponentFixture<ApiPermissionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        PaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [ ApiPermissionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPermissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
