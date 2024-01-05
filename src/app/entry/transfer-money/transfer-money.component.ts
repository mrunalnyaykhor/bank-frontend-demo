import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { Transaction } from 'src/app/entity/transaction';
import { AccountService } from 'src/app/shared/account.service';
import { TransctionserviceService } from 'src/app/shared/transctionservice.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {

  accounts: Account[];
  transactions: Transaction[];
  transactionForm: FormGroup;

  // accountNumber: number;
  // days: number;



  constructor(private formbuilder: FormBuilder, private accountservice: AccountService, private transactionservice: TransctionserviceService, private validdata: ValiddataService, private router: Router) { }
  ngOnInit(): void {
    this.transactionForm = this.formbuilder.group({
    
      accountNumberTo: ['', [Validators.required]],
      accountNumberFrom: ['', [Validators.required]],
      ifscCode: ['', [Validators.required, this.validdata.ifscCodeValidator]],
      amount: ['', [Validators.required, this.validdata.integerValidator()]],
      name: ['', [Validators.required, this.validdata.stringOnlyValidator()]],
      description: ['', [Validators.required, this.validdata.stringOnlyValidator()]],

    })

    this.accountservice.getAccountList().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
   })

  }
  transferMoneys() {
    return this.transactionservice.transferMoney(this.transactionForm.value).subscribe

  }
  // transferMoney() {
  //   this.transactionservice.transferMoney(this.transactionForm.value).subscribe(
  //     (data: Transaction[]) => {
  //       console.log('data', data); 
  //       this.transactions = data;
  //     }
  //   );
  //   alert('transfer money successfully');

  // }
  transferMoney() {
    this.transactionservice.transferMoney(this.transactionForm.value).subscribe(
      (response: HttpResponse<any>) => {
        const message = response.body ? response.body : 'Unknown response';
        alert(message);
        // this.router.navigate(['accountlist']);
      },
      (error:any) => {
        console.error('Error occurred:', error);
        const errorMessage = error.error ? error.error : 'Error occurred. Please try again.';
        alert(errorMessage);
        
      }
    );
  }
 
  getTransactionStatementList() {
    return this.transactionservice.getTransactionStatementList(this.transactionForm.value).subscribe();

  }

  onClickExit() {
    this.router.navigate(['home'])
  }
  resetData() {
    this.transactionForm.reset;
  }

  fillForm() {
    this.transactionForm.patchValue(
      {
        transactionId: 3,
        accountNumberTo: 8777904847,
        accountNumberFrom: 759335461591,
        name: 'gondia',
        amount: 4000,
        ifscCode: 'MHSB0080669',
        description: 'rubber',

      })
  }
}


