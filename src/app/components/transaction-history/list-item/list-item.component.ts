import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TransactionModel } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit,AfterViewInit {
  @Input() item : TransactionModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

}
