import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../shared/bankservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValiddataService } from '../shared/validdata.service';
import { HttpResponse } from '@angular/common/http';
import { Bank } from '../entity/bank';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  constructor(private formbuilder:FormBuilder,private bankservice :BankserviceService ,private router:Router,private validservice:ValiddataService){}
  bankForm:FormGroup;
  ngOnInit(): void {
   this.bankForm=this.formbuilder.group({
    
    bankName: ['',[ Validators.required,this.validservice.stringOnlyValidator()]],
    branchName:['',[Validators.required,this.validservice.stringOnlyValidator()]],
    ifscCode: ['', [Validators.required, this.validservice.ifscCodeValidator]],
    address:['',[Validators.required,this.validservice.stringOnlyValidator()]]
   });
   this.fillForm();
  }
  fillForm(){
    this.bankForm.patchValue(
      {
        
        bankName:'SBI',
        branchName:'SBIMohadi',
        ifscCode:'MHSB0080669' ,
        address:'Mumbai',
       } )  }
  resetData(){
    this.bankForm.reset();
  }
   saveBank() {
    this.bankservice.saveBank(this.bankForm.value).subscribe(
      (response: HttpResponse<any>) => {
        const message = response.body ? response.body : 'Unknown response';
        alert(message);
        this.router.navigate(['banklist']);
      },
      (error:any) => {
        console.error('Error occurred:', error);
        const errorMessage = error.error ? error.error : 'Error occurred. Please try again.';
        alert(errorMessage);
        
      }
    );
  }
  onClickExit(){
    this.router.navigate(['home']);
  }
  onBankNameInput() {
    const bankNameControl = this.bankForm.get('bankName');
    if (bankNameControl.value && typeof bankNameControl.value === 'string') {
      bankNameControl.setValue(bankNameControl.value.toUpperCase(), { emitEvent: false });
    }
  }
  

}
