import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../entity/bank';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService  {
  private baseUrl ="http://localhost:8080";
  bank: Bank;
  bankId?:number;
 
  getBankId(getBankId?:number){
    this.bankId=getBankId;
  }
  

  constructor(private httpClient : HttpClient) { }
  b:Bank={
    bankId:0,
    bankName:'',
    branchName:'',
    ifscCode:'',
    address:''
  };

  
  getBankById(bankId:number):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+`/getBankById/${bankId}`);
  }
 
  getBankList():Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.baseUrl}/getAllBank`);
  }
  deletedata(bankId:number){
    return this.httpClient.delete("http://localhost:8080/deleteBank/"+bankId);
  }
  updateBank(bankData:FormGroup)
  {
    return this.httpClient.put("http://localhost:8080/updateBank",bankData);
  }
  saveBank(bankdata:FormGroup){
    return this.httpClient.post("http://localhost:8080/saveBank",bankdata);

  }
  
 
  
}
