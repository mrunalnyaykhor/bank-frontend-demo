import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankserviceService } from 'src/app/shared/bankservice.service';
import { ValiddataService } from 'src/app/shared/validdata.service';

@Component({
  selector: 'app-updatebank',
  templateUrl: './updatebank.component.html',
  styleUrls: ['./updatebank.component.css']
})
export class UpdatebankComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private validservice: ValiddataService, private bankservice: BankserviceService, private router: Router, private routeractivate: ActivatedRoute) { }
  bankForm: FormGroup;
  bankId: number;


  ngOnInit(): void {
    this.routeractivate.params.subscribe(params => {
      this.bankId = params['id'];
      console.log("update page .........", this.bankId);

      this.bankservice.getBankById(this.bankId).subscribe((data) => {
        console.log("data....", data);

        if (data && Object.keys(data).length > 0) {
          console.log("Keys in data object:", Object.keys(data));
          this.bankForm = this.formbuilder.group({

            bankId:[this.bankId,Validators.required],
            bankName: [data.bankName, Validators.required,],
            branchName: [data.branchName, [Validators.required, this.validservice.stringOnlyValidator()]],
            ifscCode: [data.ifscCode, [Validators.required, this.validservice.ifscCodeValidator]],
            address: [data.address, Validators.required]

          });
        } else {
          console.error('Invalid data format received or empty data object');
        }
      });
    });
  }

  updateBank() {
    this.bankservice.updateBank(this.bankForm.value).subscribe(
      (response: HttpResponse<any>) => {

        const message = response.body ? response.body : 'Unknown response';

        alert(message);
        this.router.navigate(['banklist']);
      },
      (error) => {
        
        console.error('Error occurred:', error);
        alert(error);
      }
    );
  }
  onClickExit() {
    this.router.navigate(['home'])
  }

}


