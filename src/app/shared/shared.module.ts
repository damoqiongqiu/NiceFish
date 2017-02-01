import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';

@NgModule({
  imports:[ 
  	CommonModule,
    FormsModule,
  	TranslateModule
  ],
  declarations:[
    UserLoginComponent,
  	UserInfoComponent,
  	UserProfileComponent
  ],
  exports:[
  	CommonModule,
  	FormsModule,
    TranslateModule,
    UserLoginComponent,
  	UserInfoComponent,
  	UserProfileComponent
  ]
})

export class SharedModule {
    
}