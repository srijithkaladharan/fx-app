import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementDashboardComponent } from './dashboard/manage-dashboard.component';
import { ManagementRoutingModule } from '../management/management.routing.module';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagementDashboardComponent, CommentsModalComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
