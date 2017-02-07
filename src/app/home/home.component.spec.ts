import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent }   from './home.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from '../sitestat/sitestat.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SharedModule } from '../shared/shared.module';

import {homeRoutes} from './home.routes';

describe('Component: Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [         
        HomeComponent
        // ,
        // SocialChannelComponent,
        // SitestatComponent,
        // OnlineContactComponent 
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('true is true', () => {
    expect(true).toBe(false);
  });
});
