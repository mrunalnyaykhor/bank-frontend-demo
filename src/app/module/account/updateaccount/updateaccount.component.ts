import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/shared/account.service';
@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private accountservice:AccountService, private router: Router, private routeractivate: ActivatedRoute) {
    this.accountNumberControl.disable();
   }
  accountForm: FormGroup;
  accountId: number;
  accountNumberControl = new FormControl({value: '', disabled: false});

  ngOnInit(): void {
    this.routeractivate.params.subscribe(params => {
      this.accountId = params['id'];
      console.log("update page .........", this.accountId);
  
      this.accountservice.getAccountById(this.accountId).subscribe((data) => {
        console.log("data....", data);
  
        if (data && Object.keys(data).length > 0) {
          console.log("Keys in data object:", Object.keys(data));
          this.accountForm = this.formbuilder.group({
           accountId:[this.accountId,Validators.required],
            amount: [data.amount, Validators.required],
            accountType: [data.accountType, Validators.required],
            accountNumber: [data.accountNumber, Validators.required], // Corrected typo
            blocked:[data.blocked,Validators.required],
            customerId: [data.customerId, Validators.required],
            bankId: [data.bankId, Validators.required],
           
          });
        } else {
          console.error('Invalid data format received or empty data object');
        }
      });
    });
  }
  
  updateAccount() {
    this.accountservice.updateAccountData(this.accountForm.value).subscribe(
      (response: HttpResponse<any>)=>{
        const message = response.body ? response.body : 'unknown response';
        alert(message);
        this.router.navigate(['accountlist'])
      },
      (error :any)=>{
        console.error('error occured :',error);
        const errorMessage = error.error ? error.error:'Error occured. please try again';
        alert(errorMessage);
      }
     
      );
      
    
  }

  onClickExit() {
    this.router.navigate(['home'])
  }

}
