import { NgModule ,ModuleWithProviders}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate';

import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';

@NgModule({
  imports:[ 
  	CommonModule,
  	TranslateModule
  ],
  declarations:[
  	UserInfoComponent,
  	UserProfileComponent
  ],
  exports:[
  	CommonModule,
  	FormsModule,
  	UserInfoComponent,
  	TranslateModule,
  	UserProfileComponent
  ]
})

export class SharedModule {
    
}