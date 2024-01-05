import { Injectable } from '@angular/core';
import { Bank } from '../entity/bank';
import { Customer } from '../entity/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {

  private baseUrl ="http://localhost:8080";

  customer:Customer;
  customerId?:number;
  getCustomerId(getCustomerId?:number){
    this.customerId=getCustomerId;
  }
  constructor(private httpClient : HttpClient) { }

   cust:Customer={
     customerId: 0,
     firstName: '',
     lastName: '',
     address: '',
     age: '',
     dateOfBirth: '',
     aadhaarNumber: 0,
     panCardNumber: '',
     bankId: 0
   }
  ngOnInit(): void {
    
  }
  

  getCustomerList():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/getAllCustomer`);
  }
  deletedata(customerId:number){
    return this.httpClient.delete("http://localhost:8080/deleteCustomerById/"+customerId);
  }
 
  updateCustomer(customer:FormGroup)
  {
    return this.httpClient.put("http://localhost:8080/updateCustomer",customer);
  }
 
  saveCustomer(customerData:FormGroup){
    return this.httpClient.post("http://localhost:8080/saveCustomer",customerData);

  }
  getCustomerById(customerId:number):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+`/getCustomerById/${customerId}`);
  }
  
 
  
}
