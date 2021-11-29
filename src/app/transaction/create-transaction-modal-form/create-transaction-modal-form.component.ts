import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/_utils/_services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_utils/_services/auth.service';

@Component({
  selector: 'create-transaction-modal-form',
  templateUrl: './create-transaction-modal-form.component.html',
  styleUrls: []
})
export class CreateTransactionModalFormComponent implements OnInit {

  @Input('rate') rate: any;
  @Input('branchId') branchId: string;
  @Input('clients') clients: Array<any>;
  displayStyle: string = 'none';
  transactionForm: FormGroup;
  userId: string;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataService.showTransactionForm.subscribe((val: boolean) => {
      this.displayStyle = val ? 'block' : 'none';
    });

    this.userId = this.authService.getUserInfo().id;

    this.transactionForm = this.fb.group({
      clientName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
  }


  discardForm(): void {
    this.displayStyle = 'none';
  }

  ngOnChanges() {
    console.log('rate', this.rate);
  }

  changeClient(event) {
    console.log(event);
  }

  submitTransaction(): void {
    const data = {
      clientName: this.transactionForm.value.clientName,
      position: this.transactionForm.value.position,
      quantity: this.transactionForm.value.quantity,
      currency: this.rate.currency,
      fxRateFromHq: this.rate.rateFromHq,
      spread: this.rate.spread,
      branchId: this.branchId,
      submittedBy: this.userId,
    };
    console.log(data);
    this.dataService.submitTransaction(data).subscribe((response) => {
      console.log(response.data);
      this.displayStyle = 'none';
    }, (err) => {
      console.log(err);
      this.displayStyle = 'none';
    });
  }

}
