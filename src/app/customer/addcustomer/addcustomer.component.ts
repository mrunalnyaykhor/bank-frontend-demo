import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/shared/bankservice.service';
import { CustomerService } from 'src/app/shared/customer.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  constructor(private formbuilder:FormBuilder,private bankservice :BankserviceService,private customerservice:CustomerService ,private router:Router,private validdata:ValiddataService){}
  customerForm:FormGroup;
  ngOnInit(): void {
   this.customerForm=this.formbuilder.group({
  
    firstName:['',[Validators.required, this.validdata.stringOnlyValidator()]],
    lastName:['',[Validators.required, this.validdata.stringOnlyValidator()]],
    aadhaarNumber:['',[Validators.required, this.validdata.aadhaarNumberValidator()]],
    panCardNumber:['',[Validators.required,this.validdata.panCardValidator()]],
    contactNumber:['',[Validators.required, this.validdata.contactNumberValidator()]] ,
    email:['',[Validators.required,this.validdata.emailValidator()]],
    address:['',[Validators.required, this.validdata.stringOnlyValidator()]],
    age:['', [Validators.required, this.validdata.integerValidator()]] ,
    dateOfBirth:['',Validators.required],
    bankId: ['', [Validators.required, this.validdata.integerValidator()]] 
   })
  }
  fillForm(){
    this.customerForm.patchValue(
      {
       
        firstName:'Virat',
        lastName:'Kohli',
        aadhaarNumber:778789898888,
        panCardNumber:'RTMAB2320M' ,
        contactNumber:9878656767,
        email:'viratkohli@gmail.com',
        address:'Mumbai',
        age:38,
        dateOfBirth:'1890-08-03',
      bankId:1 }
    )

  }
  resetData(){
    this.customerForm.reset();
  }
  // createCustomer(){
  //   this.customerservice.saveCustomer(this.customerForm.value).subscribe();
  //   alert('customer create successfully');
  //   this.router.navigate(['customerlist'])
  // }

  createCustomer() {
    this.customerservice.saveCustomer(this.customerForm.value).subscribe(
      (response: HttpResponse<any>) => {
        const message = response.body ? response.body : 'Unknown response';
        alert(message);
        this.router.navigate(['customerlist']);
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

}

