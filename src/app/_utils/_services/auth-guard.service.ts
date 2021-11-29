import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot } from '@angular/router';
import { Roles } from '../_constants/userType.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(Router) private router: Router
  ) { }


  public async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const allowedUserRoles = this.getRoutePermissions(route);
    return this.checkPermission(allowedUserRoles);
  }

  public async canActivateChild(route: ActivatedRouteSnapshot): Promise<boolean> {
    const allowedUserRoles = this.getRoutePermissions(route);
    return await this.checkPermission(allowedUserRoles);
  }


  public canLoad(): Promise<boolean> {
    return this.checkPermission(null);
  }


  private getRoutePermissions(route: ActivatedRouteSnapshot): Roles[] {
    if (route.data && route.data.userRoles) {
      return route.data.userRoles;
    }
    return null;
  }

  private checkPermission(allowedUserRoles: Roles[]): Promise<boolean> {
    console.log(allowedUserRoles);
    return this.authService.getUserInfoPromise().then((userInfo: any) => {
      console.log(userInfo);
      if (userInfo && userInfo.type) {
        if (allowedUserRoles.indexOf(userInfo.type.toUpperCase()) !== -1) {
          return true;
        }
        this.router.navigateByUrl('/nopermission');
        return false;
      }
      this.router.navigateByUrl('/login');
      return false;
    });
  }
}
