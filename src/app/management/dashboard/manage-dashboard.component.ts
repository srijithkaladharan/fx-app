import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_utils/_services/data.service';

@Component({
  selector: 'manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: []
})
export class ManagementDashboardComponent implements OnInit {

  transactions = [];
  setStatus: string;
  selectedTransactionId: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getTransactions();

    this.dataService.reasonFormSubmitted.subscribe(val => {
      if (val) {
        this.getTransactions();
      }
    });
  }

  getTransactions() {
    this.dataService.getAllTransactions('requested').subscribe((response) => {
      this.transactions = response.data;
      console.log(this.transactions);
    });
  }

  statusBtnClicked(status, transactionId) {
    this.setStatus = status;
    this.selectedTransactionId = transactionId;
    console.log("status btn clicked");
    this.dataService.showReasonForm.next(true);
  }

}
