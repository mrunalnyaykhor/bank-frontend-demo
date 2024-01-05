import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from 'src/app/entity/bank';
import { BankserviceService } from 'src/app/shared/bankservice.service';
//TypeScript class @Component anoteted
@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit{
  banks :Bank[];
  constructor(private bankservice : BankserviceService,private router:Router){}
  ngOnInit(): void {
    this.bankservice.getBankList().subscribe((banks:Bank[])=>{
      this.banks=banks;
      console.log("banklist....",this.banks)
    })
  
  }
  
  deleteBank(event :any,bankId:number){
    if(confirm('are you sure to delete bank Id data ?')){
     event.target.innerText="Deleting...";
     this.bankservice.deletedata(bankId).subscribe((b:any)=>{
     // this.router.navigate(['banklist'])
      alert('delete bank successfully');
      window.location.reload();
     });
    }
    
   
  }
  updateBank(bankId:Bank){
    console.log("this is update function....",bankId)
    this.router.navigate(['/updatebank', bankId]);
  }
  onClickExit(){
    this.router.navigate(['home'])
  }
  }





