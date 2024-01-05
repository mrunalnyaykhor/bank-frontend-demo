import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../entity/account';
import { Bank } from '../entity/bank';
import { Customer } from '../entity/customer';
import { Observable, catchError, } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 // private baseUrl ="http://localhost:8080/getAllAccount";
  private baseUrl ="http://localhost:8080";
  bankId: Bank;
  account:Account[];
  accountId:Account[];
  

  constructor(private httpClient : HttpClient) { }

   customer:Customer={
     customerId: 0,
     firstName: '',
     lastName: '',
     address: '',
     age: '',
     dateOfBirth: '',
     aadhaarNumber: 0,
     panCardNumber: '',
     bankId: 0
   }
   bank:Bank={
     bankId: 0,
     bankName: '',
     branchName: '',
     ifscCode: '',
     address: ''
   }
   accounts:Account={
     accountId: 0,
     amount: 0,
     isBlocked: false,
     accountNumber: 0,
     customerId: 0,
     bankId: 0,
     accountType: ''
   }
 

  getAccountList():Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseUrl}/getAllAccount`);
  }
  getAccountById(accountId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getAccountById/${accountId}`);
  }
 
  deletedata(accountId:number){
    return this.httpClient.delete("http://localhost:8080/deleteAccountIdById/"+accountId);
  }
  
  updateAccountData(acc:FormGroup)
  {
    return this.httpClient.put("http://localhost:8080/updateAccount",acc);
  }
 
  saveAccount(accountData:FormGroup){
    return this.httpClient.post("http://localhost:8080/saveAccount",accountData);

  }
  withdrawalAmount(accountData:FormGroup)
  {
    return this.httpClient.post("http://localhost:8080/withdrawalAmount/"+this.accountId,accountData);

  }
 // http://localhost:8080/myaccount/569831341787
  
 getMyAccount(accountNumber:number):Observable<Account[]>{
  return this.httpClient.get<Account[]>(`${this.baseUrl}/myaccount/${accountNumber}`);
}
  
}
