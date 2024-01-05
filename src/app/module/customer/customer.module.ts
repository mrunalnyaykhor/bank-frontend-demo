import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'updatecustomer',component:UpdatecustomerComponent
  }
]
@NgModule({
  declarations: [
    CustomerlistComponent,
    UpdatecustomerComponent
  ],
  imports: [
    CommonModule, BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ]
})
export class CustomerModule { }
