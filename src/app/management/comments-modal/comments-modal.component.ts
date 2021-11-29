import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_utils/_services/auth.service';
import { DataService } from 'src/app/_utils/_services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: []
})
export class CommentsModalComponent implements OnInit {

  @Input('status') status: string;
  @Input('transactionId') transactionId: string;
  displayStyle: string;
  userId: string;
  reasonForm: FormGroup;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataService.showReasonForm.subscribe(val => {
      this.displayStyle = val ? 'block' : 'none';
    });

    this.userId = this.authService.getUserInfo().id;

    this.reasonForm = this.fb.group({
      reason: ['', [Validators.required]]
    });
  }

  discardForm() {
    this.displayStyle = 'none';
  }

  updateStatus() {
    console.log(this.reasonForm.value.reason);
    const data = {
      empId: this.userId,
      reason: this.reasonForm.value.reason,
      status: this.status
    };
    this.dataService.updateTransactionStatus(data, this.transactionId).subscribe((response: any) => {
      console.log(response.data);
      this.dataService.reasonFormSubmitted.next(true);
      this.displayStyle = 'none';
    });
  }

}
