import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent  {
  constructor(private formbuilder:FormBuilder,private validservice:ValiddataService ,private routeractivate: ActivatedRoute,private customerservice:CustomerService ,private router:Router){}
  customerForm:FormGroup;
  customerId:number;
  bankId:number;

  // ngOnInit(): void {
  //  this.routeractivate.params.subscribe(params => {
  //   this.customerId = params['id'];
  //   console.log("update page .........", this.customerId);

  //   this.customerservice.getCustomerById(this.customerId).subscribe((data) => {
  //     console.log("data....", data);
       
  //     if (data && ('bankId' in data)&& ('customerId' in data) && ('firstName' in data) && ('lastName' in data)
  //       && ('panCardNumber' in data) && ('address' in data) && ('aadhaarNumber' in data) && ('dateOfBirth' in data) && ('contactNumber' in data) && ('age' in data)&& ('email' in data)) {
  //         this.customerForm=this.formbuilder.group({
  //           bankId:[data.bankId,Validators.required],
  //           customerId:[data.customerId,Validators.required],
  //           firstName:[data.firstName,[Validators.required,this.validservice.stringOnlyValidator()]],
  //           lastName:[data.lastName,[Validators.required,this.validservice.stringOnlyValidator()]],
  //           aadhaarNumber:[data.aadhaarNumber,Validators.required],
  //           panCardNumber:[data.panCardNumber,Validators.required],
  //           contactNumber:[data.contactNumber,Validators.required],
  //           email:[data.email,Validators.required],
  //           address:[data.address,Validators.required],
  //           age:[data.age,Validators.required],
  //           dateOfBirth:[data.dateOfBirth,Validators.required],
           
  //          });
  //     } else {
  //       console.error('Invalid data format received');

  //     }
  //   });
  // });
  // }
  ngOnInit(): void {
    this.routeractivate.params.subscribe(params => {
      this.customerId = params['id'];
      console.log("update page .........", this.customerId);

      this.customerservice.getCustomerById(this.customerId).subscribe((data) => {
        console.log("data....", data);

        if (data && Object.keys(data).length > 0) {
          console.log("Keys in data object:", Object.keys(data));
          this.customerForm = this.formbuilder.group({

            bankId:[data.bankId,Validators.required],
            customerId:[this.customerId,Validators.required],
            firstName:[data.firstName,[Validators.required,this.validservice.stringOnlyValidator()]],
            lastName:[data.lastName,[Validators.required,this.validservice.stringOnlyValidator()]],
            aadhaarNumber:[data.aadhaarNumber,Validators.required],
            panCardNumber:[data.panCardNumber,Validators.required],
            contactNumber:[data.contactNumber,Validators.required],
            email:[data.email,Validators.required],
            address:[data.address,Validators.required],
            age:[data.age,Validators.required],
            dateOfBirth:[data.dateOfBirth,Validators.required],

          });
        } else {
          console.error('Invalid data format received or empty data object');
        }
      });
    });
  }
  fillForm(){
    this.customerForm.patchValue(
      {
        bankId:1,
        customerId:1,
        firstName:'Virat',
        lastName:'Kohli',
        aadhaarNumber:778789898888,
        panCardNumber:'RTMAB2320M' ,
        contactNumber:9878656767,
        email:'viratkohli@gmail.com',
        address:'Mumbai',
        age:38,
        dateOfBirth:'1890-08-03'
      }
    )

  }
  resetData(){
    this.customerForm.reset();
  }
 
  updateCustomer() {
    this.customerservice.updateCustomer(this.customerForm.value).subscribe(
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



