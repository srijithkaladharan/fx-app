import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
// import { USER_TYPES } from '../_constants/userType.model';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  canActivate() {
    // let userInfo = this.authService.getUserInfo();
    // if (!userInfo) {
    //   this.router.navigate(['/login', { queryParams: { redirectUrl: this.route.url } }])
    // }

    // if (this.router.routerState.snapshot.url.includes('transact')) {
    //   if (userInfo.type === USER_TYPES['CONSULTANT']) {
    //     return true;
    //   } else {
    //     this.router.navigateByUrl('/manage');
    //   }
    // }

    // if (this.router.routerState.snapshot.url.includes('manage')) {
    //   if (userInfo.type === USER_TYPES['MANGER']) {
    //     return true;
    //   }
    //   else {
    //     this.router.navigateByUrl('/transact');
    //   }
    // }
    return true;
  }
}