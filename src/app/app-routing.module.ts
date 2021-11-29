import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_components/layout/layout.component';
import { LoginComponent } from './_components/login/login.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { AuthGuard } from './_utils/_services/auth-guard.service';
import { Roles } from './_utils/_constants/userType.model';
import { NoPermissionComponent } from './_components/no-permission/no-permission.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'transact',
    component: LayoutComponent,
    loadChildren: () => import('./transaction/transaction.module').then(mod => mod.TransactionsModule),
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.CONSULTANT]
    }
  },
  {
    path: 'manage',
    component: LayoutComponent,
    loadChildren: () => import('./management/management.module').then(mod => mod.ManagementModule),
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.MANAGER]
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nopermission',
    component: NoPermissionComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
