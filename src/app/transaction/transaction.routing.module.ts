import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactComponent } from './transact/transact.component';
import { AuthGuard } from '../_utils/_services/auth-guard.service';
import { TransactionDashboardComponent } from './dashboard/dashboard.component';
import { RoleGuard } from '../_utils/_services/role-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TransactComponent,
      },
      {
        path: 'dash',
        component: TransactionDashboardComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
