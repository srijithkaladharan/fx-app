import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_utils/_services/auth-guard.service';
import { ManagementDashboardComponent } from './dashboard/manage-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ManagementDashboardComponent
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
