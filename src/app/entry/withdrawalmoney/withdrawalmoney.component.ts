import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { Transaction } from 'src/app/entity/transaction';
import { Withdrawal } from 'src/app/entity/withdrawal';
import { AccountService } from 'src/app/shared/account.service';
import { TransctionserviceService } from 'src/app/shared/transctionservice.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-withdrawalmoney',
  templateUrl: './withdrawalmoney.component.html',
  styleUrls: ['./withdrawalmoney.component.css']
})
export class WithdrawalmoneyComponent {

  accounts: Account[];
 
  withdrawals: Withdrawal[];
  withdrawalForm: FormGroup;

  // accountNumber: number;
  // days: number;



  constructor(private formbuilder: FormBuilder, private accountservice: AccountService, private transactionservice: TransctionserviceService, private validdata: ValiddataService, private router: Router) { }
  ngOnInit(): void {
    this.withdrawalForm = this.formbuilder.group({
    
      accountNumber: ['', [Validators.required ,this.validdata.integerValidator()]],
     
      amount: ['', [Validators.required, this.validdata.integerValidator()]],
     
    })

    this.accountservice.getAccountList().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
   })

  }
 
  withdrawal() {
    this.transactionservice.Withdrawalmoney(this.withdrawalForm.value).subscribe(
      (response: HttpResponse<any>) => {
        const message = response.body ? response.body : 'Unknown response';
        alert(message);
        this.router.navigate(['accountlist']);
      },
      (error:any) => {
        console.error('Error occurred:', error);
        const errorMessage = error.error ? error.error : 'Error occurred. Please try again.';
        alert(errorMessage);
        
      }
    );
  }
 

  onClickExit() {
    this.router.navigate(['home'])
  }
  resetData() {
    this.withdrawalForm.reset;
  }

  fillForm() {
    this.withdrawalForm.patchValue(
      {
        
        accountNumber: 569831341787,
        amount: 4000,
       

      })
  }
}



