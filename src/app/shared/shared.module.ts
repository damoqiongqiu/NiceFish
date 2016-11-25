import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { UserInfoComponent } from '../user/user-info/user-info.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ UserInfoComponent ],
  exports:      [ CommonModule, FormsModule,UserInfoComponent ]
})

export class SharedModule {
  
}