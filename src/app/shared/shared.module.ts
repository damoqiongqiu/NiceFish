import { NgModule ,ModuleWithProviders}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate';

import { UserInfoComponent } from '../user/user-info/user-info.component';

@NgModule({
  imports:      [ CommonModule ,TranslateModule],
  declarations: [ UserInfoComponent ],
  exports:      [ CommonModule, FormsModule,UserInfoComponent ,TranslateModule]
})

export class SharedModule {
    
}