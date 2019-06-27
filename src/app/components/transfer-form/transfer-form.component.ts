import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { transactionObject } from 'src/app/models/transaction.model';
import { in$,$ } from 'moneysafe';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  transferForm : FormGroup
  balance : number = 5824.76
  constructor(
      private fb : FormBuilder,
      private transactionService : TransactionService) { }

  ngOnInit() {
    this.transferForm = this.fb.group({
      fromAccount:['Free Checking(4692)'], //form this value with {{account name}} - {{balance}}
      toAccount:[,[Validators.required]],
      // amount:[,[Validators.required,Validators.pattern("^[0-9]*$")]],
      amount:[,[Validators.required,Validators.pattern("[0-9]*\.?[0-9]*")]]
    })

    this.transactionService.$approveTransactionSubject.subscribe((data : transactionObject)=>{
      this.transferForm.patchValue({
        toAccount:'',
        amount:''
      })
      this.balance = in$($(this.balance) - $(data.amount))
    })
    this.transferForm.valueChanges.subscribe(data=>{
      console.log(data)
      if(isNaN(data.amount))
        {
          alert("The amount field is invalid, please enter numbers only.")
        }
    })
    
  }

  submit(){
    console.log("submitted:", )
    if(!this.transferForm.valid){
      return alert('Please fill up all fields properly')
    }
    this.transactionService.sendMoneyAction({openModal:true,transactionObject:this.transferForm.value,})
  }

}
