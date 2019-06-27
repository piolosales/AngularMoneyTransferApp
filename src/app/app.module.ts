import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { ListItemComponent } from './components/transaction-history/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DateTransform } from './pipe/date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransactionHistoryComponent,
    ListItemComponent,
    DateTransform
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
