import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_utils/_services/auth.service';
import { DataService } from 'src/app/_utils/_services/data.service';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: []
})
export class TransactComponent implements OnInit {

  rates = [];
  isError: boolean = false;
  displayForm: boolean = false;
  displayStyle: string = 'none';
  selectedRate: any;
  branchId: string;
  clients: any;
  isLoading: boolean = true;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.dataService.getRates().subscribe((response) => {
      this.rates = response.data;
      this.isLoading = false;
    }, (err) => {
      this.isError = true;
    });
  }

  openTransact(rate) {
    this.getDetails();
    this.dataService.showTransactionForm.next(true);
    this.selectedRate = rate;
  }

  getDetails() {
    this.branchId = this.authService.getUserInfo().branch;

    this.dataService.getActiveClientsForBranch(this.branchId).subscribe((response) => {
      this.clients = response.data;
    });
  }

}
