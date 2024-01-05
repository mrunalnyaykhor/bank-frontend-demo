import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanklistComponent } from './banklist/banklist.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ViewbanklistComponent } from './viewbanklist/viewbanklist.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
// import{MatDialogeModule} from "@angular/material";



@NgModule({
  imports: [
    CommonModule, BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [
    BanklistComponent,
    ViewbanklistComponent,
    UpdatebankComponent
  ]

})
export class BankModule { }
