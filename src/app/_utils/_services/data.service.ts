import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = environment.apiUrl;
  env: string = environment.env;
  showTransactionForm = new Subject();
  showReasonForm = new Subject();
  reasonFormSubmitted = new Subject();

  constructor(
    private http: HttpClient,
  ) { }

  getUserDetails(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.env}/user?email=${email}`);
  }

  getBranchDetails(branchId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.env}/branch/${branchId}`);
  }

  getRates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.env}/rates`);
  }

  getActiveClientsForBranch(branchId): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.env}/client?branchId=${branchId}&status=active`);
  }

  getAllTransactions(status): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.env}/transactions/${status}`);
  }

  submitTransaction(data): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.env}/transaction`, data);
  }

  updateTransactionStatus(data, id) {
    return this.http.patch(`${this.apiUrl}/${this.env}/transaction/${id}/status`, data);
  }

  setBranchInfo(branchInfo) {
    localStorage.setItem('fx-branch', JSON.stringify(branchInfo));
  }

  getBranchInfo() {
    return JSON.parse(localStorage.getItem('fx-branch'));
  }
}
