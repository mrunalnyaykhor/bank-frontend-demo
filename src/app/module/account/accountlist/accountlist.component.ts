import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { AccountService } from 'src/app/shared/account.service';
import { BankserviceService } from 'src/app/shared/bankservice.service';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  accounts : Account[];
  constructor( private accountservice : AccountService,private router:Router){}
  ngOnInit(): void {
   
    this.accountservice.getAccountList().subscribe((accounts:Account[])=>{
      this.accounts=accounts;
    })
   
  
  }
  
 

  deleteAccount(event :any,accountId:number){
    if(confirm('are you sure to delete Account Id data ?')){
     event.target.innerText="Deleting...";
     this.accountservice.deletedata(accountId).subscribe((b:any)=>{
     this.router.navigate(['accountlist'])
      alert('delete account successfully');
      
     });
    }
  }
  updateAccount(accountId:Account){
    console.log("this is update function....",accountId)
    this.router.navigate(['/updateaccount', accountId]);
  }
  onClickExit(){
    this.router.navigate(['home'])
  }
}
