import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from '../transaction/transaction.routing.module';
import { TransactComponent } from './transact/transact.component';
import { TransactionDashboardComponent } from './dashboard/dashboard.component';
import { CreateTransactionModalFormComponent } from './create-transaction-modal-form/create-transaction-modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactComponent,
    TransactionDashboardComponent,
    CreateTransactionModalFormComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TransactionRoutingModule
  ]
})
export class TransactionsModule { }
