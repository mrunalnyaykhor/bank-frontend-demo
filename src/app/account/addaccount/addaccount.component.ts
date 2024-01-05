import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { AccountService } from 'src/app/shared/account.service';
import { BankserviceService } from 'src/app/shared/bankservice.service';
import { CustomerService } from 'src/app/shared/customer.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent {
  errorMessage: string;
  constructor(private formbuilder: FormBuilder, private accountservice: AccountService, private customerservice: CustomerService, private validdata: ValiddataService, private router: Router) { }
  accountForm: FormGroup;
  response: string;
  account: any[];
  error = null;

  ngOnInit(): void {
    this.accountForm = this.formbuilder.group({

      amount: ['', [Validators.required, this.validdata.integerValidator()]],
      accountType: ['', [Validators.required, this.validdata.stringOnlyValidator()]],
      customerId: ['', [Validators.required, this.validdata.integerValidator()]],
      blocked: ['', Validators.required],
      bankId: ['', [Validators.required, this.validdata.integerValidator()]]
    })
  }
  fillForm() {
    this.accountForm.patchValue(
      {
        amount: 50000,
        accountType: "CURRENT",
        blocked: false,
        customerId: 1,
        bankId: 1
      }
    )

  }
  resetData() {
    this.accountForm.reset();
  }
  createAccount() {
    this.accountservice.saveAccount(this.accountForm.value).subscribe(
      (response : HttpResponse<any>) => {
        const message = response.body ? response.body : 'Unknown response';
            alert(message);
        console.log('Account created:', response);
        this.router.navigate(['accountlist']); 
      },
      (error) => {
        console.error('Error creating account:', error);
        this.errorMessage = error.message;
        console.log(error.message);
        this.errorMessage = error;
        alert(this.errorMessage);
      }
    );
    // alert('create Account successfully');
    //this.router.navigate(['accountlist'])
  }

  // saveBank() {
  //   this.bankservice.saveBank(this.bankForm.value).subscribe(
  //     (response: HttpResponse<any>) => {
  //       const message = response.body ? response.body : 'Unknown response';
  //       alert(message);
  //       this.router.navigate(['banklist']);
  //     },
  //     (error:any) => {
  //       console.error('Error occurred:', error);
  //       const errorMessage = error.error ? error.error : 'Error occurred. Please try again.';
  //       alert(errorMessage);
        
  //     }
  //   );
  // }
  onClickExit() {
    this.router.navigate(['home']);
  }

 

}


