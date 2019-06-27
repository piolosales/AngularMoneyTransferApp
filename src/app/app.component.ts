import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { CashFLowModel, transactionObject } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'backbase-fe-test';
  openModal : boolean = false;
  transactionObject : transactionObject
  constructor(private transactionService :TransactionService){

  }
  ngOnInit(){
    this.transactionService.$transactionSubject.subscribe((data : CashFLowModel)=>{
      this.openModal = data.openModal;
      this.openModal ? this.transactionObject = data.transactionObject : null
      console.log(this.transactionObject)
    })

  }

  approveTransaction(){
    if(!this.validateTransactionObject()){
      return alert('Note: Transfer amount more than $500 is not allowed, please try again.')
    }
    this.transactionService.approveTransaction(this.transactionObject)
    this.closeModal()
  }

  validateTransactionObject() : boolean{
    if(this.transactionObject.amount <= 500){
      return true
    }
    return false
  }

  closeModal(){
    this.openModal = false;
    
  }
}
