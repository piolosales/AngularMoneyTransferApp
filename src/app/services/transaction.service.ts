import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { transactionObject, CashFLowModel } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
    transactionSubject = new Subject()
    $transactionSubject = this.transactionSubject.asObservable()

    approveTransactionSubject = new Subject()
    $approveTransactionSubject = this.approveTransactionSubject.asObservable()
    sendMoneyAction(value : CashFLowModel){
        this.transactionSubject.next(value)
    }

    approveTransaction(value : transactionObject){
        this.approveTransactionSubject.next(value)
    }
}