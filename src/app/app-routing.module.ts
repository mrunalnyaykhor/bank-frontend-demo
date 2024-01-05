import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { LoginComponent } from './entry/login/login.component';
import { BanklistComponent } from './module/bank/banklist/banklist.component';
import { CustomerlistComponent } from './module/customer/customerlist/customerlist.component';
import { AccountlistComponent } from './module/account/accountlist/accountlist.component';
import { ViewbanklistComponent } from './module/bank/viewbanklist/viewbanklist.component';
import { BankComponent } from './bank/bank.component';
import { UpdatebankComponent } from './module/bank/updatebank/updatebank.component';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './module/customer/updatecustomer/updatecustomer.component';
import { AddaccountComponent } from './account/addaccount/addaccount.component';
import { UpdateaccountComponent } from './module/account/updateaccount/updateaccount.component';
import { TransactionlistComponent } from './account/transactionlist/transactionlist.component';
import { TransferMoneyComponent } from './entry/transfer-money/transfer-money.component';
import { MyaccountComponent } from './module/account/myaccount/myaccount.component';
import { WithdrawalmoneyComponent } from './entry/withdrawalmoney/withdrawalmoney.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {  path: 'banklist',component:BanklistComponent
 },
 {
  path: 'viewbanklist',component: ViewbanklistComponent,
},
{
  path: 'addbank',component: BankComponent,
},
{
  path: 'updatebank/:id',component: UpdatebankComponent,
},
 {
  path:'customerlist',component:CustomerlistComponent,
 
},
{
  path:'transactionlist',component:TransactionlistComponent,
 
},
{
  path:'transfermoney',component:TransferMoneyComponent,
 
},
{
  path:'withdrawal',component:WithdrawalmoneyComponent
 
},
{
  path: 'addaccount',component: AddaccountComponent,
},
{
  path:'updatecustomer/:id',component:UpdatecustomerComponent
},
{
  path:'addcustomer',component:AddcustomerComponent
},

{
  path:'accountlist',component:AccountlistComponent
},
{
  path:'updateaccount/:id',component:UpdateaccountComponent
},
{
path:'myaccount',component:MyaccountComponent
},
  {
    path: 'home',component: HomeComponent,
  },
    {
  path: 'home',component: HomeComponent,
  children: [
    {  path: 'banklist', loadChildren: () => import('./module/bank/bank.module')
    .then((m) => m.BankModule)
    },
    {  path: 'customerlist', loadChildren: () => import('./module/customer/customer.module')
    .then((m) => m.CustomerModule)
    },
    {  path: 'accountlist', loadChildren: () => import('./module/account/account.module')
    .then((m) => m.AccountModule)
    },
    {  path: 'transactionlist', loadChildren: () => import('./module/transaction/transaction.module')
    .then((m) => m.TransactionModule)
    },
   
  ]
  },
  {
    path:'**',redirectTo:'home',pathMatch:'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
