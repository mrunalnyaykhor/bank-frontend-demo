import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyaccountComponent } from './myaccount/myaccount.component';



@NgModule({
  declarations: [
    AccountlistComponent,
    UpdateaccountComponent,
    MyaccountComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
    
  ]
})
export class AccountModule { }
