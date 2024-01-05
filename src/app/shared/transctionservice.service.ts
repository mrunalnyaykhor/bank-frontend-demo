import { Injectable } from '@angular/core';
import { Bank } from '../entity/bank';
import { Account } from '../entity/account';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Transaction } from '../entity/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransctionserviceService {

  transaction: Transaction[];
  transactionId: Transaction;

  constructor(private httpClient: HttpClient) { }

  transactions: Transaction = {
    transactionId: 0,
    accountNumberFrom: 0,
    accountNumberTo: 0,
    amount: 0,
    description: '',
    ifscCode: '',
    name: '',
    transactionDate: ''
  }
  accountnumber: any;
  private url = "http://localhost:8080";
  transactionForm: Transaction[];


  getAllTransaction(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.url}/getAllTransaction`);
  }
  getTransactionStatementList(transaction1: FormGroup) {
    const accountNumber = transaction1.get('accountNumber')?.value;
    const days = transaction1.get('days')?.value;
    return this.httpClient.get<Object>(`http://localhost:8080/statement/${accountNumber}/${days}`);
  }

  transferMoney(transactionData:FormGroup){
    return this.httpClient.put('http://localhost:8080/transferMoney',transactionData);
  }
  Withdrawalmoney(transactionData:FormGroup){
    return this.httpClient.put('http://localhost:8080/withdrawalMoney',transactionData);
  }
}