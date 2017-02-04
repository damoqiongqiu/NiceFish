import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { FormControlComponent } from '../user/user-profile/dynamic-form/form-control.component';

@NgModule({
  imports:[ 
  	CommonModule,
    FormsModule,
    ReactiveFormsModule,
  	TranslateModule
  ],
  declarations:[
    UserLoginComponent,
  	UserInfoComponent,
  	UserProfileComponent,
    FormControlComponent
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