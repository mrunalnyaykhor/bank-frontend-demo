import { Component, ɵExtraLocaleDataIndex } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { Transaction } from 'src/app/entity/transaction';
import { AccountService } from 'src/app/shared/account.service';
import { TransctionserviceService } from 'src/app/shared/transctionservice.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent {
  accounts: Account[];
  transactions: Transaction[];
  transactionForm: FormGroup;
  bankForm: any;
  accountNumber: number;
  days: number;



  constructor(private formbuilder: FormBuilder, private transactionservice: TransctionserviceService, private validdata: ValiddataService, private accountservice: AccountService, private router: Router) { }
  ngOnInit(): void {
    this.transactionForm = this.formbuilder.group({

      accountNumber: ['', [Validators.required, this.validdata.integerValidator()]],
      days: ['', [Validators.required, this.validdata.integerValidator()]],

    })
    this.accountservice.getAccountList().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
    })
  }

  // getTransactionStatementList() {
  //   return this.transactionservice.getTransactionStatementList(this.transactionForm.value).subscribe();

  // }
  onClickExit() {
    this.router.navigate(['home'])
  }
  getStatement() {

    this.transactionservice.getTransactionStatementList(this.transactionForm).subscribe(
      (transactionsData: Transaction[]) => {
        this.transactions = transactionsData;
        console.log('Users:', this.transactions);

        this.router.navigate(['transactionlist']);
      },
      (error) => {
        console.error('Error fetching transaction:', error);
        // Handle error scenario
      }
    );
  }
}

