import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entity/customer';
import { BankserviceService } from 'src/app/shared/bankservice.service';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  
  customers : Customer[];
  constructor( private customerservice : CustomerService,private router:Router){}
  ngOnInit(): void {
   
    this.customerservice.getCustomerList().subscribe((customers:Customer[])=>{
      this.customers=customers;
      console.log("customerlist....",this.customers)
    })
    
  
  }
  
  deleteCustomer(event :any,customerId: number){
    if(confirm('are you sure to delete bank Id data ?')){
      event.target.innerText="Deleting...";
      this.customerservice.deletedata(customerId).subscribe((b:any)=>{
       alert('delete bank successfully');
       window.location.reload();
      });
     }
    }
 
  updateCustomer(customerId:number){
    console.log("this is update function....",customerId)
    this.router.navigate(['/updatecustomer',customerId]);
  }
  
 
}
