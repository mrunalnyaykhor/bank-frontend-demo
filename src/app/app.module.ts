import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entry/home/home.component';
import { LoginComponent } from './entry/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';
import { AddaccountComponent } from './account/addaccount/addaccount.component';
import { TransactionlistComponent } from './account/transactionlist/transactionlist.component';
import { TransactionComponent } from './account/transaction/transaction.component';
import { TransferMoneyComponent } from './entry/transfer-money/transfer-money.component';
import { WithdrawalmoneyComponent } from './entry/withdrawalmoney/withdrawalmoney.component';
// import {MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BankComponent,
    AddcustomerComponent,
    AddaccountComponent,
    TransactionlistComponent,
    TransactionComponent,
    TransferMoneyComponent,
    WithdrawalmoneyComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
