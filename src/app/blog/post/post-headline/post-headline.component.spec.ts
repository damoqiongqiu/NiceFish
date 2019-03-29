import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostHeadlineComponent } from "./post-headline.component";

describe("PostHeadlineComponent", () => {
  let component: PostHeadlineComponent;
  let fixture: ComponentFixture<PostHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
