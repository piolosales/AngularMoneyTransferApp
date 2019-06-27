import * as moment from 'moment';

export interface TransactionModel{
    amount:any
    categoryCode:string
    merchant: string
    merchantLogo: string
    transactionDate: any
    transactionType: string
}

export interface CashFLowModel{
    openModal: boolean
    transactionObject :transactionObject
}

export interface transactionObject{
    fromAccount:string
    toAccount:string
    amount:number
}

export class transformTransactionInstance{
    amount:number
    categoryCode:string
    merchant: string
    merchantLogo: string
    transactionDate: any
    transactionType: string
    constructor(data : transactionObject){
        data.amount ? this.amount = data.amount : null
        data.toAccount ? this.merchant = data.toAccount : null
        // data.fromAccount ? this.transactionType = data.fromAccount : null
        this.transactionType = 'Transaction'
        this.transactionDate = parseInt(moment().format('x')); 
        this.merchantLogo = './assets/image/backbase-fe-test.png'
        this.categoryCode = '#1180aa'
    }
}